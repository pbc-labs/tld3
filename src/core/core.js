/*
tld3.js 1.0.0
http://tld3js.org
(c) 2015 Preethi Kasireddy, Banun Atina Idris and Colin Seale
tld3 may be freely distributed under the MIT license.
*/

// This is required for d3 to load.

/* global d3 */


// Import all necessary submodules into the core module

// This defines our main library object.
/*
@private
*/

import charts from '../subModules/charts';
import utils from '../utils/utils';
import internal from '../internalCharts/internal';

const lib = {
  internal,

  version: '1.0.0',

  // Returns the appropriate chart instance that matches the
  /*
  @function make
  @description Returns the appropriate chart instance that matches the
  chart type passed in
  @param {String} chartType Type of chart to create
  @returns {Object} this (the chart instance)
  */

  make(chartType) {
    return new charts[chartType]();
  },

  // Fetches data from the url passed in
  /*
  @function upload
  @description Fetches data from the url passed in
  @param {String} dataLocation Url of the file where data is located
  @returns {Object} A Promise
  */

  upload(dataUrl) {
    return utils.getData(dataUrl);
  },

  // Fetches data from the Firebase url passed in
  /*
  @function uploadFirebase
  @description Fetches data from the Firebase url passed in
  @param {String} url Url of the Firebase database where data is stored
  @returns {Object} this (the chart instance)
  */

  uploadFirebase(url) {
    return utils.getFirebaseData(url);
  },
};

module.exports = lib;
