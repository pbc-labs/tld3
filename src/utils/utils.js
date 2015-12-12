/* global d3 */

/**
@private
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

  /**
  @private
  @function Checks the data type for a given input
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
        return 'location';
      }
    } else if (Array.isArray(rawData)) {
      return 'array';
    } else if (rawData instanceof Object) {
      return 'object';
    }
  },

  /**
  @private
  @function Gets all a file
  @param {Object, String} rawData
    @description The raw data from user
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

  /**
  @private
  @function Checks the scale of column and returns if it ordinal
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
  @function Checks the scale of column and returns if it linear
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
  @function Gets all the column names for the data set
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
  @function Gets the first possible ordinal column
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
  @function Gets the first possible linear column
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
