/*
This is required for d3 to load.
*/
/* global d3 */

/*
Holds various utility functions used throughout the library,
particularly for creating, building and modifying chart elements.
*/

const utils = {

  isAcceptableFileExtension(extension) {
    const okayExtensions = {
      'json': true,
      'tsv': true,
      'csv': true,
    };
    return extension in okayExtensions;
  },

  /*
  @private
  @function getDataType
  @description Checks the data type for a given input
  @param {Object/String} rawData The raw data from user
  @returns {String} The type of data that was entered
  */

  getDataType(rawData) {
    if (rawData.constructor === String) {
      try {
        JSON.parse(rawData);
        return 'json';
      } catch (e) {
        return 'location';
      }
    } else if (Array.isArray(rawData)) {
      return 'array';
    } else if (rawData instanceof Object) {
      return 'object';
    }
  },

  /*
  @private
  @function getData
  @description Gets all a file
  @param {Object/String} rawData The raw data from user
  @returns {Promise} A promise resolved when the data is available
  */

  getData(rawData) {
    const dataType = utils.getDataType(rawData);
    if (dataType === 'location') {
      const splitData = rawData.split('.');
      const fileExtension = rawData.split('.')[splitData.length - 1];
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
    } else {
      // throw new Error('Can only load files http://www.ourDocs.com/loadData')
    }
  },

  /*
  @private
  @function isOridinal
  @description Checks the scale of column and returns if it ordinal
  @param {Object} data The graph data object
  @param {Object} columnName The column from the data
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

  /*
  @private
  @function Checks the scale of column and returns if it linear
  @param {Object} data The graph data object
  @param {Object} columnName The column from the data
  @returns {Boolean} If the column scale is Linear
  */

  isLinear(data, columnName) {
    if (!utils.isOrdinal(data, columnName) && !utils.isTime(data, columnName)) {
      return true;
    }
    return false;
  },

  /*
  @private
  @function isTime
  @description Checks the scale of column and returns if it linear
  @param {Object} data The graph data object
  @param {Object} columnName The column from the data
  @returns {Boolean} If the column scale is Linear
  */

  isTime(data, columnName) {
    if (utils.isAcceptableTimeFormat(data[0][columnName])) {
      return true;
    }
    return false;
  },

  /*
  @private
  @function isAcceptableTimeFormat
  @description Returns true a given timeStamp can be writen in a time format
  @param {String} timeStamp A UTC time or string
  @returns {Boolean} If the timeStamp is a valid time
  */

  isAcceptableTimeFormat(timeStamp, context) {
    const _timeStamp = String(timeStamp);
    if (context && context.timeFormat) {
      const parser = d3.time.format(context.timeFormat).parse;
      return parser(_timeStamp) === null;
    } else if (_timeStamp.split(' ').length > 1 || _timeStamp.split('/').length > 1 || _timeStamp.split('-').length > 1) {
      return new Date(_timeStamp).toString() !== 'Invalid Date';
    }
    return false;
  },

  /*
  @private
  @function getColumnNames
  @description Gets all the column names for the data set
  @param {Object} data The graph data object
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

  /*
  @private
  @function getFirstOrdinalColumn
  @description Gets the first possible ordinal column
  @param {Object} data The graph data object
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

  /*
  @private
  @function getFirstLinearColumn
  @description Gets the first possible linear column
  @param {Object} data The graph data object
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

  /*
  @private
  @function getFirstTimeColumn
  @description Gets the first possible time scale column
  @param {Object} data The graph data object
  @returns {String} The first column that can be linear
  */

  getFirstTimeColumn(data) {
    const columnNames = utils.getColumnNames(data);
    for (let i = 0; i < columnNames.length; i++) {
      if (utils.isTime(data, columnNames[i])) {
        return columnNames[i];
      }
    }
    return null;
  },

  /*
  @private
  @function Parses time data
  @param {Object} data
    @description The graph data object
  @param {String} column
    @description The current column that needs to be parsed
  @param (String) format
    @description Specifies a posiible time format
  @returns {String} Time parsed data
  */

  parseTimeData(data, column, format) {
    if (format) {
      const parser = d3.time.format(format).parse;
      data.forEach(item => {
        item[column] = parser(item[column]);
      });
    } else {
      data.forEach(item => {
        item[column] = new Date(item[column]);
      });
    }
    return data;
  },

  /*
  @private
  @function Parses strings to numbers
  @param {Object} data
    @description The graph data object
  @param {String} column
  @returns {String} Column parsed as number
  */

  parseNumberData(data, column) {
    data.forEach(item => {
      item[column] = Number(item[column]);
    });
    return data;
  },

};

export default utils;
