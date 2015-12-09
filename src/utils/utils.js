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
  @param {Object} element
    @description The main SVG chart element
  @param {Number} width
    @description Width of SVG chart element
  @param {Number} width
    @description Width of SVG chart element
  @returns {Object} The decorated main SVG chart element
  */

  createSVGElement(element, width, height, margin) {
    const svgElement = element
                     .append('svg')
                     .attr('width', width + margin.left + margin.right)
                     .attr('height', height + margin.top + margin.bottom)
                     .append('g')
                     .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    return svgElement;
  },

  /**
  @private
  @description Used for setting the default margins for all charts
  @returns {Object} Constructor Class for Margins
  */

  setDefaultMargins() {
    return new Internal.config.Margins({ top: 30, right: 30, bottom: 30, left: 50 });
  },

  /**
  @private
  @description  Used for setting the default height for all charts to 600px
  @returns {Object} Constructor Class for Height
  */

  setDefaultWidth() {
    return new Internal.config.Width(600);
  },

  /**
  @private
  @description  Used for setting default width for all charts to 300px
  @returns {Object} Constructor Class for Width
  */

  setDefaultHeight() {
    return new Internal.config.Height(300);
  },

  setOridinalScale(length) {
    const scale = d3.scale.ordinal() // Add check to figure out scale
                    .rangeRoundBands([0, length], 0.1);
    return scale;
  },

  setLinearScale(length) {
    const scale = d3.scale.linear()
                    .range([length, 0]);
    return scale;
  },

  mapDataDomainToString(scale, data) {
    scale.domain(data.map(d => { return d.letter; }));
  },

  mapDataDomainToNumber(scale, data) {
    scale.domain([0, d3.max(data, d => { return d.frequency; })]);
  },

  setAxisOrientation(orientation) {
    return new Internal.config.AxisOrientation(orientation);
  },

  createAxis(orientation, scale) {
    const axis = d3.svg.axis()
                 .scale(scale)
                 .orient(orientation);
    return axis;
  },

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
          throw new Error('Replace with error Class');
        }
      }
    } else if (rawData instanceof Array) {
      return 'array';
    } else if (rawData instanceof Object) {
      return 'object';
    }
  },

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

  isOrdinal(data, columnName) {
    if (Number(data[columnName])) {
      return false;
    }
    return true;
  },

  isLinear(data, columnName) {
    if (!utils.isOrdinal(data, columnName) && !utils.isTime(data, columnName)) {
      return true;
    }
    return false;
  },

  isTime() {
    // TODO
    return false;
  },

  getColumnNames(data) {
    const dataType = utils.getDataType(data);
    if (dataType === 'object') {
      return Object.keys(data);
    } else if (dataType === 'array') {
      return Object.keys(data[0]);
    }
  },

  getFirstOrdinalCol(data) {
    const columnNames = getColumnNames(data);
    for (var i = 0; i < columnNames.length; i++) {
      if (isOrdinal(data, columnNames[i])) {
        return columnNames[i];
      }
    }
    return null;
  },

  getFirstLinearCol(data) {
    const columnNames = getColumnNames(data);
    for (var i = 0; i < columnNames.length; i++) {
      if (isLinear(data, columnNames[i])) {
        return columnNames[i];
      }
    }
    return null;
  },

};

export default utils;
