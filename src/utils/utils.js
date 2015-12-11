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
