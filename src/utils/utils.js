/* global d3 */
import Internal from '../subModules/internal';
/**
@private
Holds various utility functions used throughout the library,
particularly for creating, building and modifying chart elements.
*/

const utils = {

  /**
  @private
  @function Used for setting an oridinal scale on chart
  @param {Number} length
    @description Width or Height property of chart
  @returns {Object} d3 ordinal scale set to length param
  */

  setOridinalScale(length) {
    const scale = d3.scale.ordinal() // Add check to figure out scale
                    .rangeRoundBands([0, length], 0.1);
    return scale;
  },

  /**
  @private
  @function Used for setting a linear scale on chart
  @param {Number} length
    @description Width or Height property of chart
  @returns {Object} d3 linear scale set to length param
  */

  setLinearScale(length) {
    const scale = d3.scale.linear()
                    .range([length, 0]);
    return scale;
  },

  /**
  @private
  @function Sets the input domain of the ordinal scale to the specified array of discrete values. The first element in values will be mapped to the first element in the output range, the second domain value to the second range value, and so on
  @param {Object} scale
    @description y-scale or x-scale of the chart
  @param {Array} data
    @description chart data values for the column we are working with
  @param {Object} input
    @description column name for the current data value
  */

  mapDataDomainToString(scale, data, input) {
    scale.domain(data.map(d => { return d[input]; }));
  },

  /**
  @private
  @function Sets the input domain of the linear scale to the specified array of data values. The first element in values will be mapped to the first element in the output range, the second domain value to the second range value, and so on
  @param {Object} scale
    @description y-scale or x-scale of the chart
  @param {Array} data
    @description chart data values for the column we are working with
  @param {Object} input
    @description column name for the current data value
  */

  mapDataDomainToNumber(scale, data, input) {
    scale.domain([0, d3.max(data, d => { return d[input]; })]);
  },

  /**
  @private
  @function Sets Axis label on chart
  @param {String} label
    @description The string value of the axis label to be set
  @returns {Object} Constructor Class for Height
  */

  setAxisLabel(label) {
    return new Internal.config.AxisLabel(label);
  },

  /**
  @private
  @function Updates the font size on chart
  @param {Object} element
    @description Main chart element
  @param {Number} fontSize
    @description Chart's new font size
  */

  updateFontSize(element, fontSize) {
    element.select('svg')
           .style('font-size', fontSize);
  },

  /**
  @private
  @function Updates the font style on chart
  @param {Object} element
    @description Main chart element
  @param {Number} fontStyle
    @description Chart's new font style
  */

  updateFontStyle(element, fontStyle) {
    element.select('svg')
           .attr('font-family', fontStyle);
  },

  /**
  @private
  @function Sets style properties for chart axis
  @param {Object} svg
    @description SCG element of chart
  @param {String} part
    @description The part of the axis we are generating
  @param {String} fill
    @description Fill color of axis
  @param {String} stroke
    @description Stroke style of axis
  @returns {String} shapeRerendering
    @description TODO
  */

  setAxisStyle(svg, part, fill, stroke, shapeRerendering) {
    svg.selectAll('.axis').selectAll(part)
       .style({
         fill: fill,
         stroke: stroke,
         'shape-rendering': shapeRerendering,
       });
  },

  isAcceptableFileExtension(extension) {
    const okayExtensions = {
      'json': true,
      'tsv': true,
      'csv': true,
    };
    return extension in okayExtensions;
  },

  /**
  @private
  @param {Object, String} rawData
    @description The raw data from user
  @returns {String} The type of data that was entered
  */

  getDataType(rawData) {
    if (rawData.constructor === String) {
      try {
        JSON.parse(rawData);
        return 'json';
      } catch (e) {
        const temp = rawData.split('.');
        if (temp.length === 2) {
          return 'location';
        } else if (temp.length > 2 || temp.length < 2) {
          throw new Error('Wrong input type!!');
        }
      }
    } else if (rawData instanceof Array) {
      return 'array';
    } else if (rawData instanceof Object) {
      return 'object';
    }
  },

  /**
  @private
  @param {Object, String} rawData
    @description The raw data from user
  @returns {Promise} A promise with that gets resolved when the data is available
  */

  getData(rawData) {
    const dataType = utils.getDataType(rawData);
    if (dataType === 'location') {
      const fileExtension = rawData.split('.')[1];
      if (utils.isAcceptableFileExtension(fileExtension)) {
        return new Promise((resolve, reject) => {
          d3[fileExtension](rawData, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
        });
      }
    } else if (dataType === 'json') {
      return new Promise(resolve => {
        resolve(JSON.parse(rawData));
      });
    } else if (dataType === 'object') {
      return new Promise(resolve => {
        resolve(rawData);
      });
    } else if (dataType === 'array') {
      return new Promise(resolve => {
        resolve(rawData);
      });
    }
  },

  /**
  @private
  @param {Object} data
    @description The graph data object
  @param {Object} columnName
    @description The column from the data
  @returns {Boolean} If the column scale is Ordinal
  */

  isOrdinal(data, columnName) {
    const dataType = utils.getDataType(data);
    if (dataType === 'array') {
      if (Number(data[0][columnName])) {
        return false;
      }
    } else if (dataType === 'object') {
      if (Number(data[columnName])) {
        return false;
      }
    }
    return true;
  },

  /**
  @private
  @param {Object} data
    @description The graph data object
  @param {Object} columnName
    @description The column from the data
  @returns {Boolean} If the column scale is Linear
  */

  isLinear(data, columnName) {
    if (!utils.isOrdinal(data, columnName)) {
      return true;
    }
    return false;
  },

  /**
  @private
  @param {Object} data
    @description The graph data object
  @returns {Boolean} If the column scale is Linear
  */

  getColumnNames(data) {
    const dataType = utils.getDataType(data);
    if (dataType === 'object') {
      return Object.keys(data);
    } else if (dataType === 'array') {
      return Object.keys(data[0]);
    }
  },

  /**
  @private
  @param {Object} data
    @description The graph data object
  @returns {String} The first column that can be oridinal
  */

  getFirstOrdinalColumn(data) {
    const columnNames = utils.getColumnNames(data);
    for (let i = 0; i < columnNames.length; i++) {
      if (utils.isOrdinal(data, columnNames[i])) {
        return columnNames[i];
      }
    }
    return null;
  },

  /**
  @private
  @param {Object} data
    @description The graph data object
  @returns {String} The first column that can be linear
  */

  getFirstLinearColumn(data) {
    const columnNames = utils.getColumnNames(data);
    for (let i = 0; i < columnNames.length; i++) {
      if (utils.isLinear(data, columnNames[i])) {
        return columnNames[i];
      }
    }
    return null;
  },

};

export default utils;
