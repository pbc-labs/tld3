(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("tld3", [], factory);
	else if(typeof exports === 'object')
		exports["tld3"] = factory();
	else
		root["tld3"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _charts = __webpack_require__(1);
	
	var _charts2 = _interopRequireDefault(_charts);
	
	var _utils = __webpack_require__(5);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _internal = __webpack_require__(4);
	
	var _internal2 = _interopRequireDefault(_internal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var lib = {
	  internal: _internal2.default,
	
	  version: '1.0.0',
	
	  // Returns the appropriate chart instance that matches the
	  /*
	  @function make
	  @description Returns the appropriate chart instance that matches the
	  chart type passed in
	  @param {String} chartType Type of chart to create
	  @returns {Object} this (the chart instance)
	  */
	
	  make: function make(chartType) {
	    return new _charts2.default[chartType]();
	  },
	
	  // Fetches data from the url passed in
	  /*
	  @function upload
	  @description Fetches data from the url passed in
	  @param {String} dataLocation Url of the file where data is located
	  @returns {Object} A Promise
	  */
	
	  upload: function upload(dataUrl) {
	    return _utils2.default.getData(dataUrl);
	  },
	
	  // Fetches data from the Firebase url passed in
	  /*
	  @function uploadFirebase
	  @description Fetches data from the Firebase url passed in
	  @param {String} url Url of the Firebase database where data is stored
	  @returns {Object} this (the chart instance)
	  */
	
	  uploadFirebase: function uploadFirebase(url) {
	    return _utils2.default.getFirebaseData(url);
	  }
	}; /*
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
	
	module.exports = lib;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BarChart = __webpack_require__(2);
	
	var _LineChart = __webpack_require__(10);
	
	var _DonutChart = __webpack_require__(12);
	
	var _ScatterChart = __webpack_require__(14);
	
	var _WaffleChart = __webpack_require__(16);
	
	var _BarChartLeft = __webpack_require__(18);
	
	var _AreaChart = __webpack_require__(20);
	
	// This holds all our chart types within main library.
	// A subclass exists for each chart type.
	/*
	@private
	*/
	
	var charts = {
	  BarChart: _BarChart.BarChart,
	  LineChart: _LineChart.LineChart,
	  DonutChart: _DonutChart.DonutChart,
	  ScatterChart: _ScatterChart.ScatterChart,
	  WaffleChart: _WaffleChart.WaffleChart,
	  BarChartLeft: _BarChartLeft.BarChartLeft,
	  AreaChart: _AreaChart.AreaChart
	};
	
	exports.default = charts;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BarChart = undefined;
	
	var _ChartMain2 = __webpack_require__(3);
	
	var _internal = __webpack_require__(4);
	
	var _internal2 = _interopRequireDefault(_internal);
	
	var _internalBar = __webpack_require__(9);
	
	var _internalBar2 = _interopRequireDefault(_internalBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Constructor subclass for Bar Chart.
	
	var BarChart = exports.BarChart = (function (_ChartMain) {
	  _inherits(BarChart, _ChartMain);
	
	  function BarChart() {
	    _classCallCheck(this, BarChart);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BarChart).call(this));
	  }
	
	  // Builds up the bar chart
	  /*
	  @private
	  @function build
	  @description Builds up the bar chart
	  @returns {Object} this (chart instance)
	  */
	
	  _createClass(BarChart, [{
	    key: 'build',
	    value: function build() {
	      // Calls each of the methods on Internal object necessary to
	      // build up all the components of the chart. Internal holds all
	      // the methods that do d3 manipulation to create and update
	      // various parts of the chart
	
	      _internal2.default.selectElement(this);
	      _internal2.default.getParentDimensions(this);
	      _internal2.default.getChartDimensions(this);
	      _internal2.default.setXscale(this, 'ordinal', 'string');
	      _internal2.default.setYscale(this, 'linear', 'number');
	      _internal2.default.createSVGElement(this);
	      _internal2.default.createToolTip(this);
	      _internal2.default.createxAxis(this);
	      _internal2.default.buildXAxis(this);
	      _internal2.default.createyAxis(this);
	      _internal2.default.buildYAxis(this);
	      _internal2.default.setAxisStyle(this, 'path', 'none', '#000', 'crispEdges');
	      _internal2.default.setAxisStyle(this, 'line', 'none', '#000', 'crispEdges');
	      _internalBar2.default.buildChartComponents(this);
	      _internalBar2.default.styleChart(this);
	
	      return this;
	    }
	
	    // Calls InternalBar to update the bar on chart
	    // Used when a property changes that requires a re-render.
	    /*
	    @private
	    @function updateChartComponents
	    @description Calls InternalBar to update the bar on chart
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateChartComponents',
	    value: function updateChartComponents() {
	      // Calls method on InternalBar to recreate all the
	      // chart components. Used to reflect any changes made to
	      // property values (e.g. font-size, axis-label, etc.)
	      _internalBar2.default.updateChartComponents(this);
	
	      return this;
	    }
	
	    // Updates the chart's height on the element itself
	    // Used when the height changes that requires a re-render.
	    /*
	    @private
	    @function updateHeight
	    @description Updates the chart's height on the element itself
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateHeight',
	    value: function updateHeight() {
	      // Internal holds all the methods that do d3 manipulation
	      // to create and update various parts of the chart
	
	      _internal2.default.updateSVGElement(this);
	      _internal2.default.setYscale(this, 'linear', 'number');
	      _internal2.default.updateYAxisScale(this);
	      _internal2.default.updateYAxis(this);
	      _internal2.default.updateXAxisPosition(this);
	
	      return this;
	    }
	
	    // Updates the chart's margin on the element itself
	    // Used when the margins change that requires a re-render.
	    /*
	    @private
	    @function updateMargins
	    @description Updates the chart's margin on the element itself
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateMargins',
	    value: function updateMargins() {
	      // Calls updateHeight and updateWidth on this instance
	      // to reflect the new margins.
	
	      this.updateHeight();
	      this.updateWidth();
	
	      return this;
	    }
	
	    // Updates the chart's width on the element itself
	    // Used when the width changes that requires a re-render.
	    /*
	    @private
	    @function updateWidth
	    @description Updates the chart's width on the element itself
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateWidth',
	    value: function updateWidth() {
	      // Internal holds all the methods that do d3 manipulation
	      // to create and update various parts of the chart
	
	      _internal2.default.updateSVGElement(this);
	      _internal2.default.setXscale(this, 'ordinal', 'string');
	      _internal2.default.updateXAxisScale(this);
	      _internal2.default.updateXAxis(this);
	
	      return this;
	    }
	
	    // Calls InternalBar to update color of bar chart after initial
	    // Used when the color property changes that requires a re-render.
	    /*
	    @private
	    @function updateColors
	    @description Calls InternalBar to update color of bar chart after initial render
	    @param {Array} colors Array of colors to update the chart to
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateColors',
	    value: function updateColors() {
	      // InternalBar has the below method that does the d3 manipulation
	
	      _internalBar2.default.updateColors(this);
	      return this;
	    }
	
	    // Calls Internal to update x-axis label
	    // Used when the x-axis label changes that requires a re-render.
	    /*
	    @private
	    @function updatexAxisLabel
	    @description Calls Internal to update x-axis label
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updatexAxisLabel',
	    value: function updatexAxisLabel() {
	      // Internal has the below method does the d3 manipulation
	
	      _internal2.default.updateXAxis(this);
	
	      return this;
	    }
	
	    // Calls Internal to update y-axis label
	    // Used when the y-axis label changes that requires a re-render.
	    /*
	    @private
	    @function updatexAxisLabel
	    @description Calls Internal to update y-axis label
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateyAxisLabel',
	    value: function updateyAxisLabel() {
	      // Internal has the below method that does the d3 manipulation
	      _internal2.default.updateYAxis(this);
	
	      return this;
	    }
	  }]);
	
	  return BarChart;
	})(_ChartMain2.ChartMain);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })(); /*  global d3  */
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ChartMain = undefined;
	
	var _internal = __webpack_require__(4);
	
	var _internal2 = _interopRequireDefault(_internal);
	
	var _firebase = __webpack_require__(7);
	
	var _firebase2 = _interopRequireDefault(_firebase);
	
	var _errors = __webpack_require__(6);
	
	var _errors2 = _interopRequireDefault(_errors);
	
	var _themes = __webpack_require__(8);
	
	var _themes2 = _interopRequireDefault(_themes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// Defines the main Chart class that servers as the super class for all
	// chart types. The ChartMain class defines the default inherited
	// property values, setters and getters, and the user-facing API.
	
	var ChartMain = exports.ChartMain = (function () {
	  // Sets the default inherited property values for all charts
	
	  function ChartMain(width, height, margins, colors, title, fontSize, fontStyle, xAxisLabel, yAxisLabel, xAxisOrientation, yAxisOrientation) {
	    _classCallCheck(this, ChartMain);
	
	    this._colors = colors || ['#E71D36', '#26408B', '#FF9F1C', '#767B91', '#0FA3B1'];
	    this._title = title || 'Default title';
	    this._fontSize = fontSize || 14;
	    this._fontStyle = fontStyle || 'Arial';
	    this._xAxisLabel = xAxisLabel || 'x Axis Label';
	    this._yAxisLabel = yAxisLabel || 'y Axis Label';
	    this._xAxisOrientation = xAxisOrientation || 'bottom';
	    this._yAxisOrientation = yAxisOrientation || 'left';
	    this._dateFormat = null;
	    this._chartWidth = null;
	    this._chartHeight = null;
	    this._margins = margins || { top: null, right: null, bottom: null, left: null };
	  }
	
	  // All of the below setters and getters are used for the chart
	  // properties instantiated in the constructor function above.
	
	  _createClass(ChartMain, [{
	    key: 'changeMargins',
	
	    // Updates the margins on the chart
	    /*
	    @function changeMargins
	    @description Updates the margins on the chart
	    @param {Object} options New margin values formatted as such: { top: 30, right: 30, bottom: 30, left: 50 }
	    @returns {Object} this (the chart instance)
	    */
	
	    value: function changeMargins(options) {
	      // Check for valid input
	      if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object' || Array.isArray(options)) {
	        throw new _errors2.default.MarginsFormatError();
	      }
	      // Use setter to update margins property
	      this.setMargins = options;
	      // Call the updateMargins method that exists on the subclass
	      this.updateMargins();
	      // Call the updateChartComponents method on the subclass
	      // to recreate the chart components so the changes are visible
	      this.updateChartComponents();
	      return this;
	    }
	
	    // Updates the width of the chart
	    /*
	    @function changeWidth
	    @description Updates the width of the chart
	    @param {Number} width New width in px
	    @returns {Object} this (the chart instance)
	    */
	
	  }, {
	    key: 'changeWidth',
	    value: function changeWidth(width) {
	      // Check for valid input
	      if (typeof width !== 'number') {
	        throw new _errors2.default.WidthError();
	      }
	      // Use setter to update width property
	      this.setChartWidth = width;
	      // Call the updateWidth method that exists on the subclass
	      this.updateWidth();
	      // Call the updateChartComponents method on the subclass
	      // to recreate the chart components so the changes are visible
	      this.updateChartComponents();
	      return this;
	    }
	
	    // Updates the height of the chart
	    /*
	    @function changeHeight
	    @description Updates the height of the chart
	    @param {Number} height New height in px
	    @returns {Object} this (the chart instance)
	    */
	
	  }, {
	    key: 'changeHeight',
	    value: function changeHeight(height) {
	      // Check for valid input
	      if (typeof height !== 'number') {
	        throw new _errors2.default.HeightError();
	      }
	      // Use setter to update height property
	      this.setChartHeight = height;
	      // Call the updateHeight method that exists on the subclass
	      this.updateHeight();
	      // Call the updateChartComponents method on the subclass
	      // to recreate the chart components so the changes are visible
	      this.updateChartComponents();
	
	      return this;
	    }
	
	    // Updates the title of the chart
	    /*
	    @function changeTitle
	    @description Updates the title of the chart
	    @param {String} title New chart title
	    @returns {Object} this (the chart instance)
	    */
	
	  }, {
	    key: 'changeTitle',
	    value: function changeTitle(title) {
	      // Check for valid input
	      if (typeof title !== 'string' && typeof title !== 'number') {
	        throw new _errors2.default.TitleError();
	      }
	      // Use setter to update title property
	      this.setTitle = title;
	      // Call the updateTitle method on Internal config object
	      // which handles the d3 manipulation
	      _internal2.default.updateTitle(this);
	
	      return this;
	    }
	
	    // Updates the font size on the chart
	    /*
	    @function changeFontSize
	    @description Updates the font size on the chart
	    @param {Number} size New font size
	    @returns {Object} this (the chart instance)
	    */
	
	  }, {
	    key: 'changeFontSize',
	    value: function changeFontSize(size) {
	      // Check for valid input
	      if (typeof size !== 'number') {
	        throw new _errors2.default.FontSizeError();
	      }
	      // Use setter to update size property
	      this.setFontSize = size;
	      // Call the updateFontSize method on Internal config object
	      // which handles the d3 manipulation
	      _internal2.default.updateFontSize(this);
	
	      return this;
	    }
	
	    // Updates the font style on the chart
	    /*
	    @function changeFontStyle
	    @description Updates the font style on the chart
	    @param {String} font New font style
	    @returns {Object} this (the chart instance)
	    */
	
	  }, {
	    key: 'changeFontStyle',
	    value: function changeFontStyle(font) {
	      // Check for valid input
	      if (typeof font !== 'string') {
	        throw new _errors2.default.FontStyleError();
	      }
	      // Use setter to update font style property
	      this.setFontStyle = font;
	      // Call the updateFontStyle method on Internal config object
	      // which handles the d3 manipulation
	      _internal2.default.updateFontStyle(this);
	
	      return this;
	    }
	
	    // Updates the x-axis label on the chart
	    /*
	    @function changexAxisLabel
	    @description Updates the x-axis label on the chart
	    @param {String} label New x-axis label
	    @returns {Object} this (the chart instance)
	    */
	
	  }, {
	    key: 'changexAxisLabel',
	    value: function changexAxisLabel(label) {
	      // Use setter to update x-axis-label property
	      this.setxAxisLabel = label;
	      // Call the updatexAxisLabel method on the subclass instance.
	      // The update functionality varies for each chart type,
	      // hence why we call the method on the instance
	      this.updatexAxisLabel();
	
	      return this;
	    }
	
	    // Updates the y-axis label on the chart.
	    /**
	    @function changeyAxisLabel
	    @description Updates the y-axis label on the chart.
	    @param {String} label New y-axis label
	    @returns {Object} this (the chart instance)
	    */
	
	  }, {
	    key: 'changeyAxisLabel',
	    value: function changeyAxisLabel(label) {
	      // Use setter to update y-axis-label property
	      this.setyAxisLabel = label;
	      // Call the updateyAxisLAbel method on the subclass instance.
	      // The update functionality varies for each chart type,
	      // hence why we call the method on the instance
	      this.updateyAxisLabel();
	
	      return this;
	    }
	
	    // Updates the colors on the chart.
	    /*
	    @function changeColors
	    @description Updates the colors on the chart.
	    @param {Array} colors New chart colors. Can be RGB, HEX or string
	    color name
	    @returns {Object} this (the chart instance)
	    */
	
	  }, {
	    key: 'changeColors',
	    value: function changeColors(colors) {
	      // Check for valid input
	      if (!Array.isArray(colors)) {
	        throw new _errors2.default.ColorError();
	      }
	      // Use setter to update colors property
	      this.setColors = colors;
	      // Call the updateColors method on the subclass instance.
	      // The update functionality varies for each chart type,
	      // hence why we call the method on the instance
	      this.updateColors(this);
	
	      return this;
	    }
	
	    // Sets the div element in which the d3 chart will created.
	    /*
	    @function in
	    @description Sets the div element in which the d3 chart will created.
	    @param {String} classOrid Class or Id of the div element where d3 chart
	    will be created
	    @returns {Object} this (the chart instance)
	    */
	
	  }, {
	    key: 'in',
	    value: function _in(classOrid) {
	      // Check to make sure data has already been set
	      if (!this.data) {
	        throw new _errors2.default.InBeforeUsingError();
	      }
	      // Set the location of the d3 chart element to the DOM
	      // element with the class or id passed in
	      this.location = classOrid;
	      // Builds up the d3 chart. The functionality for building the
	      // chart varies by Chart type, hence why it lives on the
	      // subclass instance
	      this.build();
	
	      return this;
	    }
	
	    // Sets the data for the chart.
	    /*
	    @function using
	    @description Sets the data for the chart.
	    @param {Object/JSON/URL} dataInput Data for D3 chart
	    @returns {Object} this (the chart instance)
	    */
	
	  }, {
	    key: 'using',
	    value: function using(dataInput) {
	      // Check for valid input
	      if (!dataInput) {
	        throw new _errors2.default.NoDataError();
	      }
	      // Set the data for the d3 chart using the data passed in
	      this.data = dataInput;
	
	      return this;
	    }
	
	    // If using Firebase database as data source, chaining this method
	    // will capture updates to data in real-time. And chart will update
	    // without refresh
	
	    /*
	    @function refreshFirebaseData
	    @description If using Firebase database as data source, chaining this method will capture updates to data in real-time. And chart will update without refresh
	    @param {String} url Firebase database url
	    @returns {Object} this (the chart instance)
	    */
	
	  }, {
	    key: 'liveUpdateFirebaseData',
	    value: function liveUpdateFirebaseData(url) {
	      var _this = this;
	
	      var ref = new _firebase2.default(url);
	
	      ref.on('value', function (snapshot) {
	        _this.data = snapshot.val();
	        _this.updateHeight();
	        _this.updateWidth();
	        _this.updateChartComponents();
	      }, this);
	
	      return this;
	    }
	
	    // Allows for customization of chart configuration before rendering.
	    /*
	    @function with
	    @description Allows for customization of chart configuration before rendering.
	    @param {Object} configuration object
	    @returns {Object} this (ChartMain class)
	    */
	
	  }, {
	    key: 'with',
	    value: function _with(config) {
	      var _this2 = this;
	
	      Object.keys(config).forEach(function (key) {
	        // If the key is theme, we set the colors to the theme's color
	        // (stored in themes config object)
	        if (key === 'theme') {
	          _this2._colors = _themes2.default[config[key]];
	        }
	
	        _this2['_' + key] = config[key];
	      });
	
	      return this;
	    }
	  }, {
	    key: 'setParentHeight',
	    set: function set(newHeight) {
	      this._parentHeight = newHeight;
	    }
	  }, {
	    key: 'getParentHeight',
	    get: function get() {
	      return this._parentHeight;
	    }
	  }, {
	    key: 'setParentWidth',
	    set: function set(newWidth) {
	      this._parentWidth = newWidth;
	    }
	  }, {
	    key: 'getParentWidth',
	    get: function get() {
	      return this._parentWidth;
	    }
	  }, {
	    key: 'setChartHeight',
	    set: function set(newHeight) {
	      this._chartHeight = newHeight;
	    }
	  }, {
	    key: 'getChartHeight',
	    get: function get() {
	      return this._chartHeight;
	    }
	  }, {
	    key: 'setChartWidth',
	    set: function set(newWidth) {
	      this._chartWidth = newWidth;
	    }
	  }, {
	    key: 'getChartWidth',
	    get: function get() {
	      return this._chartWidth;
	    }
	  }, {
	    key: 'setMargins',
	    set: function set(newMargins) {
	      this._margins = newMargins;
	    }
	  }, {
	    key: 'getMargins',
	    get: function get() {
	      return this._margins;
	    }
	  }, {
	    key: 'setColors',
	    set: function set(newColors) {
	      this._colors = newColors;
	    }
	  }, {
	    key: 'getColors',
	    get: function get() {
	      return this._colors;
	    }
	  }, {
	    key: 'getColorScale',
	    get: function get() {
	      return this._colorScale;
	    }
	  }, {
	    key: 'setTitle',
	    set: function set(newTitle) {
	      this._title = newTitle;
	    }
	  }, {
	    key: 'getTitle',
	    get: function get() {
	      return this._title;
	    }
	  }, {
	    key: 'setFontSize',
	    set: function set(newFontSize) {
	      this._fontSize = newFontSize;
	    }
	  }, {
	    key: 'getFontSize',
	    get: function get() {
	      return this._fontSize;
	    }
	  }, {
	    key: 'setFontStyle',
	    set: function set(newFontStyle) {
	      this._fontStyle = newFontStyle;
	    }
	  }, {
	    key: 'getFontStyle',
	    get: function get() {
	      return this._fontStyle;
	    }
	  }, {
	    key: 'setxAxisLabel',
	    set: function set(newLabel) {
	      this._xAxisLabel = newLabel;
	    }
	  }, {
	    key: 'getxAxisLabel',
	    get: function get() {
	      return this._xAxisLabel;
	    }
	  }, {
	    key: 'setyAxisLabel',
	    set: function set(newLabel) {
	      this._yAxisLabel = newLabel;
	    }
	  }, {
	    key: 'getyAxisLabel',
	    get: function get() {
	      return this._yAxisLabel;
	    }
	  }, {
	    key: 'setxAxisOrientation',
	    set: function set(newOrientation) {
	      this._xAxisOrientation = newOrientation;
	    }
	  }, {
	    key: 'getxAxisOrientation',
	    get: function get() {
	      return this._xAxisOrientation;
	    }
	  }, {
	    key: 'setyAxisOrientation',
	    set: function set(newOrientation) {
	      this._yAxisOrientation = newOrientation;
	    }
	  }, {
	    key: 'getyAxisOrientation',
	    get: function get() {
	      return this._yAxisOrientation;
	    }
	  }]);
	
	  return ChartMain;
	})();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(5);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Internal = {
	  // Creates a d3 element and assigns it to our internal 'element' property
	  /*
	  @private
	  @function selectElement
	  @description Creates a d3 element and assigns it to our internal 'element' property
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  selectElement: function selectElement(context) {
	    // Use d3 to select the DOM element where the chart
	    // will be drawn. Set the element to our chart's 'element' property
	    context.element = d3.select(context.location);
	
	    return context;
	  },
	
	  // Obtains the height and width of the containing element.
	  // If the width is 0, the width of the window is used.
	  /*
	  @private
	  @function getParentDimensions
	  @description Obtains the height and width of the containing element. If the width is 0, the width of the window is used.
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  getParentDimensions: function getParentDimensions(context) {
	    context.setParentHeight = parseInt(d3.select(context.location).style('height'), 10) || window.innerHeight;
	    context.setParentWidth = parseInt(d3.select(context.location).style('width'), 10) || window.innerWidth;
	
	    context.element.style('height', context._parentHeight + 'px');
	
	    return context;
	  },
	
	  // Calculates the height and width of the chart according
	  // to the size of the containing element
	  /*
	  @private
	  @function getChartDimensions
	  @description Calculates the height and width of the chart according to the size of the containing element
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	  getChartDimensions: function getChartDimensions(context) {
	    context.setChartWidth = 0.9 * context.getParentWidth;
	    context.setChartHeight = 0.8 * context.getParentHeight;
	
	    context.setMargins = {
	      top: 0.1 * context.getParentHeight,
	      right: 0.05 * context.getParentWidth,
	      bottom: 0.1 * context.getParentHeight,
	      left: 0.05 * context.getParentWidth
	    };
	
	    return context;
	  },
	
	  // Creates the main SVG element
	  /*
	  @private
	  @function createSVGElement
	  @description Creates the main SVG element
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  createSVGElement: function createSVGElement(context) {
	    // Appends the SVG to our chart element.
	    // Sets the width and height of the SVG.
	    context.translateX = context.getParentWidth / 2 - context.getChartWidth / 2;
	
	    context.translateY = context.getParentHeight / 2 - context.getChartHeight / 2;
	    context.container = context.element.append('div').style({
	      'display': 'inline-block',
	      'position': 'relative',
	      'width': '100%',
	      'vertical-align': 'middle',
	      'overflow': 'hidden'
	    });
	    context.svg = context.container.append('svg').attr('width', '100%').attr('height', '100%').attr('viewBox', function () {
	      return '0 0 ' + context.getParentWidth + ' ' + context.getParentHeight;
	    }).attr('preserveAspectRatio', 'xMinYMin meet').append('g').attr('transform', 'translate(' + context.translateX + ', ' + context.translateY + ')');
	
	    return context;
	  },
	
	  // Updates the main SVG element
	  /*
	  @private
	  @function updateSVGElement
	  @description Updates the main SVG element
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateSVGElement: function updateSVGElement(context) {
	    // Select current SVG element and tpdates the width and height of the SVG.
	    context.element.select('svg').attr('width', context.getChartWidth + context.getMargins.left + context.getMargins.right).attr('height', context.getChartHeight + context.getMargins.top + context.getMargins.bottom).append('g').attr('transform', 'translate(' + context.getMargins.left + ',' + context.getMargins.top + ')');
	
	    return context;
	  },
	
	  // Creates a d3 x-axis using the appropriate scale and orientation
	  // for this chart instance
	  /*
	  @private
	  @function createxAxis
	  @description Creates d3 x-axis
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  createxAxis: function createxAxis(context) {
	    context.xAxis = d3.svg.axis().scale(context.xScale).orient(context.getxAxisOrientation).ticks(6);
	    return context;
	  },
	
	  // Creates a d3 y-axis using the appropriate scale and orientation
	  // for this chart instance
	
	  /*
	  @private
	  @function createyAxis
	  @description Creates d3 y-axis
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  createyAxis: function createyAxis(context) {
	    /*
	    Builds y-axis using the appropriate scale and orientation.
	    */
	    context.yAxis = d3.svg.axis().scale(context.yScale).orient(context.getyAxisOrientation);
	
	    return context;
	  },
	
	  // Updates y-axis using the new scale. Used when user
	  // updates some chart property that requires recreation
	  // of axis.
	  /*
	  @private
	  @function updateYAxisScale
	  @description Updates the up the y-axis scale
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateYAxisScale: function updateYAxisScale(context) {
	    context.yAxis = d3.svg.axis().scale(context.yScale).orient(context.getyAxisOrientation);
	
	    return context;
	  },
	
	  // Updates x-axis using the new scale. Used when user
	  // updates some chart property that requires recreation
	  // of axis.
	  /*
	  @private
	  @function updateXAxisScale
	  @description Updates the up the x-axis scale
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateXAxisScale: function updateXAxisScale(context) {
	    context.xAxis = d3.svg.axis().scale(context.xScale).orient(context.getxAxisOrientation);
	
	    return context;
	  },
	
	  // Builds up the x-axis. Sets the class property, transforms
	  // the height to the bottom of graph, and appends an axis label.
	  /*
	  @private
	  @function buildXAxis
	  @description Builds up the x-axis
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  buildXAxis: function buildXAxis(context) {
	    context.svg.append('g').attr('class', 'x axis').attr('transform', 'translate(0, ' + context.getChartHeight + ')').call(context.xAxis).append('text').attr('class', 'x-axis-label').attr('x', context.getChartWidth * 0.5).attr('y', 35).style('text-anchor', 'middle').text(context.getxAxisLabel);
	
	    return context;
	  },
	
	  // Translates the x-axis to the right location
	  /*
	  @private
	  @function updateXAxisPosition
	  @description Translates the x-axis
	  @param {Object} context (chart instance)
	  @returns {Object} contextsetXscale (chart instance)
	  */
	
	  updateXAxisPosition: function updateXAxisPosition(context) {
	    context.element.select('svg').select('g .x.axis').attr('transform', 'translate(0, ' + context.getChartHeight + ')');
	
	    return context;
	  },
	
	  // Builds up the y-axis. Sets the class property, rotates
	  // the position to be to left of graph, and appends an axis label
	  /*
	  @private
	  @function buildYAxis
	  @description Builds up the y-axis and adds the label
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	  buildYAxis: function buildYAxis(context) {
	    context.svg.append('g').attr('class', 'y axis').call(context.yAxis).append('text').attr('class', 'y-axis-label').attr('transform', 'rotate(-90)').attr('y', -45).attr('x', -context.getChartHeight * 0.5 + context.getMargins.top).style('text-anchor', 'end').text(context.getyAxisLabel);
	    return context;
	  },
	
	  // Updates the y-axis on chart by rebuilding it. Used when
	  // properties on a chart are changed that requires axis rebuild.
	  /*
	  @private
	  @function Updates the up the y-axis
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateYAxis: function updateYAxis(context) {
	    context.element.select('svg').selectAll('g .y.axis').call(context.yAxis);
	
	    context.element.select('.y-axis-label').attr('class', 'y-axis-label').attr('transform', 'rotate(-90)').attr('y', -45).attr('x', -context.getChartHeight * 0.5 + context.getMargins.top).style('text-anchor', 'end').text(context.getyAxisLabel);
	
	    return context;
	  },
	
	  // Updated the x-axis on chart by rebuilding it. Used when
	  // properties on a chart are changed that requires axis rebuild.
	  /*
	  @private
	  @function updateXAxis
	  @description Updates the up the x-axis scale
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateXAxis: function updateXAxis(context) {
	    context.element.select('svg').selectAll('g .x.axis').call(context.xAxis);
	    context.element.select('.x-axis-label').attr('x', context.getChartWidth * 0.5).attr('y', 35).style('text-anchor', 'middle').text(context.getxAxisLabel);
	
	    return context;
	  },
	
	  // Updates the chart's font size on the svg
	  // Used when the font size changes that requires a re-render
	  /*
	  @private
	  @function updateFontSize
	  @description Updates the chart's font size on the svg
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateFontSize: function updateFontSize(context) {
	    context.element.select('svg').attr('font-size', context.getFontSize);
	
	    return context;
	  },
	
	  // Updates the chart's font style on the svg
	  // Used when the font style changes that requires a re-render
	  /*
	  @private
	  @function updateFontStyle
	  @description Updates the chart's font style on the svg
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateFontStyle: function updateFontStyle(context) {
	    context.element.select('svg').style('font-family', context.getFontStyle);
	
	    return context;
	  },
	
	  // Updates the chart's title on the svg
	  // Used when the title changes that requires a re-render
	  /*
	  @private
	  @function updateTitle
	  @description Updates the chart's title on the svg
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateTitle: function updateTitle(context) {
	    context.element.select('.title').text(context.getTitle);
	
	    return context;
	  },
	
	  // Sets the xScale for chart.
	  /*
	  @private
	  @function setXscale
	  @description Sets the xScale for chart. Checks for the type of scale passed in, and builds the scale accordingly. Then depending on whether we are using the ordinal scale or linear scale, we map the data to the scale accordingly.
	  @param {Object} context (chart instance)
	  @param {String} type Type of scale (ordinal vs. linear)
	  @param {String} dataDomain Type of data to map the scale to (String vs. Number)
	  @returns {Object} context (chart instance)
	  */
	
	  setXscale: function setXscale(context, type, dataDomain) {
	    // If check for the type of axis and build accordingly.
	    // In addition, we use helper functions to get the column name
	    // and set it to be the axis label.
	
	    if (type === 'ordinal') {
	      context.xColumnName = _utils2.default.getFirstOrdinalColumn(context.data);
	      context.setxAxisLabel = context.xColumnName;
	      context.xScale = d3.scale.ordinal().rangeRoundBands([0, context.getChartWidth], 0.1);
	    } else if (type === 'linear') {
	      context.xColumnName = _utils2.default.getFirstLinearColumn(context.data);
	      context.setxAxisLabel = context.xColumnName;
	      context.xScale = d3.scale.linear().range([context.getChartWidth, 0]);
	    }
	
	    // We map the x-axis scale domain to the data. How the mapping
	    // is done various depending on whether we have string (ordinal)
	    // values or Number (linear) values
	
	    if (dataDomain === 'string') {
	      context.xScale.domain(context.data.map(function (d) {
	        return d[context.xColumnName];
	      }));
	    } else if (dataDomain === 'number') {
	      context.xScale.domain([0, d3.max(context.data, function (d) {
	        return d[context.xColumnName];
	      })]);
	    }
	
	    return context;
	  },
	
	  // Sets the yScale for chart.
	  /*
	  @private
	  @function setYscale
	  @description Sets the yScale for chart. Checks for the type of scale passed in, and builds the scale accordingly. Then depending on whether we are using the ordinal scale or linear scale, we map the data to the scale accordingly.
	  @param {Object} context (chart instance)
	  @param {String} type Type of scale (ordinal vs. linear)
	  @param {String} dataDomain Type of data to map the scale to (String vs. Number)
	  @returns {Object} this (chart instance)
	  */
	
	  setYscale: function setYscale(context, type, dataDomain) {
	    // If check for the type of axis and build accordingly.
	    // In addition, we use helper functions to get the column name
	    // and set it to be the axis label.
	
	    if (type === 'ordinal') {
	      context.yColumnName = _utils2.default.getFirstOrdinalColumn(context.data);
	      context.setyAxisLabel = context.yColumnName;
	      context.yScale = d3.scale.linear().range([context.getChartHeight, 0]);
	    } else if (type === 'linear') {
	      context.yColumnName = _utils2.default.getFirstLinearColumn(context.data);
	      context.setyAxisLabel = context.yColumnName;
	      context.yScale = d3.scale.linear().range([context.getChartHeight, 0]);
	    }
	
	    // We map the y-axis scale domain to the data. How the mapping
	    // is done various depending on whether we have string (ordinal)
	    // values or Number (linear) values
	    if (dataDomain === 'string') {
	      context.yScale.domain(context.data.map(function (d) {
	        return d[context.yColumnName];
	      }));
	    } else if (dataDomain === 'number') {
	      context.yScale.domain([0, d3.max(context.data, function (d) {
	        return d[context.yColumnName];
	      })]);
	    }
	
	    return context;
	  },
	
	  // Sets style properties for chart axis
	  /*
	  @private
	  @function
	  @description Sets style properties for chart axis
	  @param {Object} context (chart instance)
	  @param {String} part The part of the axis we are generating
	  @param {String} fill Fill color of axis
	  @param {String} stroke Stroke style of axis
	  @param {String} shapeRerendering Style property to make the axis line thinner
	  @returns {Object} this (chart instance)
	  */
	
	  setAxisStyle: function setAxisStyle(context, part, fill, stroke, shapeRerendering) {
	    context.svg.selectAll('.axis').selectAll(part).style({
	      fill: fill,
	      stroke: stroke,
	      'shape-rendering': shapeRerendering
	    });
	
	    return context;
	  },
	
	  // Creates an ordinal color scale according to categories passed in
	  /*
	  @private
	  @function convertColorsToScale
	  @description Creates an ordinal color scale according to categories passed in
	  @param {Object} context (chart instance)
	  @param {Array} categories (Data to be mapped to by scale)
	  @returns {Object} this (chart instance)
	  */
	  convertColorsToScale: function convertColorsToScale(context, categories) {
	    context._colorScale = d3.scale.ordinal().domain(categories).range(context.getColors);
	    return context;
	  },
	
	  // Creates tooltips on chart
	  /*
	  @private
	  @function createToolTip
	  @description Creates tooltips on chart
	  @param {Object} context (chart instance)
	  @returns {Object} this (chart instance)
	  */
	
	  createToolTip: function createToolTip(context) {
	    context.tooltip = d3.select('body').append('div').attr('class', 'tooltip').style({
	      'position': 'absolute',
	      'color': 'black',
	      'text-align': 'center',
	      'width': '120px',
	      'padding': '5px',
	      'font': '12px Arial',
	      'background': '#f2f2f2',
	      'border': '1px',
	      'opacity': '0',
	      'border-color': '#606060',
	      'border-style': 'solid',
	      'border-radius': '1px',
	      'cursor': 'pointer'
	    });
	    // Turns on visibility of tooltip
	    function show() {
	      var time = arguments.length <= 0 || arguments[0] === undefined ? 200 : arguments[0];
	
	      this.transition().duration(time).style('opacity', 1);
	    }
	
	    // Turns off visibility of tooltip
	    function hide() {
	      var time = arguments.length <= 0 || arguments[0] === undefined ? 200 : arguments[0];
	
	      this.transition().duration(time).style('opacity', 0);
	    }
	
	    // Determines the location the tooltip should render
	    // Sets the content of the tooltip
	    function setContent() {
	      var content = arguments.length <= 0 || arguments[0] === undefined ? 'Tooltip' : arguments[0];
	
	      this.html(function () {
	        return content;
	      }).style('left', d3.event.pageX + 'px').style('top', d3.event.pageY + 'px');
	    }
	
	    context.tooltip.show = show;
	    context.tooltip.hide = hide;
	    context.tooltip.setContent = setContent;
	    return context;
	  },
	
	  // Creates legend on chart
	  /*
	  @private
	  @function createLegend
	  @description Creates legend on chart
	  @param {Object} context (chart instance)
	  @returns {Object} this (chart instance)
	  */
	
	  createLegend: function createLegend(context) {
	    context.legend = context.svg.append('g').attr('class', 'legend').selectAll('.legend-data').data(context.getColorScale.domain()).enter().append('g').attr('class', 'legend-data').attr('transform', function (d, i) {
	      return 'translate(0,' + i * 20 + ')';
	    });
	
	    context.legend.append('rect').attr('x', context.getChartWidth - 18).attr('width', 18).attr('height', 18)
	    // Setting colors
	    .style('fill', context.getColorScale);
	    // append the name of ordinal data
	    context.legend.append('text').attr('x', context.getChartWidth - 24).attr('y', 12).style('text-anchor', 'end').text(function (d) {
	      return d;
	    });
	
	    return context;
	  }
	}; // This is required for d3 to load.
	/* global d3 */
	
	exports.default = Internal;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _errors = __webpack_require__(6);
	
	var _errors2 = _interopRequireDefault(_errors);
	
	var _firebase = __webpack_require__(7);
	
	var _firebase2 = _interopRequireDefault(_firebase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; } /*
	                                                                                                                             This is required for d3 to load.
	                                                                                                                             */
	/* global d3 */
	
	// Holds various utility functions used throughout the library, particularly for creating, building and modifying chart elements.
	
	var utils = {
	  isAcceptableFileExtension: function isAcceptableFileExtension(extension) {
	    var okayExtensions = {
	      'json': true,
	      'tsv': true,
	      'csv': true
	    };
	    return extension in okayExtensions;
	  },
	
	  // Checks the data type for a given input
	  /*
	  @private
	  @function getDataType
	  @description Checks the data type for a given input
	  @param {Object/String} rawData The raw data from user
	  @returns {String} The type of data that was entered
	  */
	
	  getDataType: function getDataType(rawData) {
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
	
	  // Gets data from file
	  /*
	  @private
	  @function getData
	  @description Gets data from file
	  @param {Object/String} rawData The raw data from user
	  @returns {Promise} A promise resolved when the data is available
	  */
	
	  getData: function getData(rawData) {
	    var dataType = utils.getDataType(rawData);
	    if (dataType === 'location') {
	      var _ret = (function () {
	        var splitData = rawData.split('.');
	        var fileExtension = rawData.split('.')[splitData.length - 1];
	        if (utils.isAcceptableFileExtension(fileExtension)) {
	          return {
	            v: new Promise(function (resolve, reject) {
	              d3[fileExtension](rawData, function (error, result) {
	                if (error) {
	                  reject(error);
	                } else {
	                  resolve(result);
	                }
	              });
	            })
	          };
	        }
	      })();
	
	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    } else {
	      throw new _errors2.default.UnacceptableFileExtensionError();
	    }
	  },
	
	  // Gets Firebase data from Firebase url passed in
	  /*
	  @private
	  @function getFirebaseData
	  @description Gets Firebase data from Firebase url passed in
	  @param {String} url Firebase database url
	  @returns {Promise} A promise resolved when the data is available
	  */
	
	  getFirebaseData: function getFirebaseData(url) {
	    // assuming they have firebase source included in html file
	    var ref = new _firebase2.default(url);
	
	    return new Promise(function (resolve, reject) {
	      ref.on('value', function (snapshot) {
	        var data = snapshot.val();
	        if (!data) {
	          reject('Firebase data failed to load :(');
	        } else {
	          resolve(data);
	        }
	      });
	    });
	  },
	
	  // Checks the scale of column and returns if it ordinal
	  /*
	  @private
	  @function isOridinal
	  @description Checks the scale of column and returns if it ordinal
	  @param {Object} data The graph data object
	  @param {Object} columnName The column from the data
	  @returns {Boolean} If the column scale is Ordinal
	  */
	
	  isOrdinal: function isOrdinal(data, columnName) {
	    var dataType = utils.getDataType(data);
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
	
	  // Checks the scale of column and returns if it linear
	  /*
	  @private
	  @function isLinear
	  @description Checks the scale of column and returns if it linear
	  @param {Object} data The graph data object
	  @param {Object} columnName The column from the data
	  @returns {Boolean} If the column scale is Linear
	  */
	
	  isLinear: function isLinear(data, columnName) {
	    if (!utils.isOrdinal(data, columnName) && !utils.isTime(data, columnName)) {
	      return true;
	    }
	    return false;
	  },
	
	  // Checks the scale of column and returns if it linear
	  /*
	  @private
	  @function isTime
	  @description Checks the scale of column and returns if it linear
	  @param {Object} data The graph data object
	  @param {Object} columnName The column from the data
	  @returns {Boolean} If the column scale is Linear
	  */
	
	  isTime: function isTime(data, columnName, format) {
	    if (utils.isAcceptableTimeFormat(data[0][columnName], format)) {
	      return true;
	    }
	    return false;
	  },
	
	  // Returns true a given timeStamp can be writen in a time format
	  /*
	  @private
	  @function isAcceptableTimeFormat
	  @description Returns true a given timeStamp can be writen in a time format
	  @param {String} timeStamp A UTC time or string
	  @returns {Boolean} If the timeStamp is a valid time
	  */
	
	  isAcceptableTimeFormat: function isAcceptableTimeFormat(timeStamp, format) {
	    var _timeStamp = String(timeStamp);
	    if (format) {
	      var parser = d3.time.format(format).parse;
	      return parser(_timeStamp) !== null;
	    } else if (_timeStamp.split(' ').length > 1 || _timeStamp.split('/').length > 1 || _timeStamp.split('-').length > 1) {
	      return new Date(_timeStamp).toString() !== 'Invalid Date';
	    }
	    return false;
	  },
	
	  // Gets all the column names for the data set
	  /*
	  @private
	  @function getColumnNames
	  @description Gets all the column names for the data set
	  @param {Object} data The graph data object
	  @returns {Boolean} If the column scale is Linear
	  */
	
	  getColumnNames: function getColumnNames(data) {
	    var dataType = utils.getDataType(data);
	    if (dataType === 'object') {
	      return Object.keys(data);
	    } else if (dataType === 'array') {
	      return Object.keys(data[0]);
	    }
	  },
	
	  // Gets the first possible ordinal column
	  /*
	  @private
	  @function getFirstOrdinalColumn
	  @description Gets the first possible ordinal column
	  @param {Object} data The graph data object
	  @returns {String} The first column that can be oridinal
	  */
	
	  getFirstOrdinalColumn: function getFirstOrdinalColumn(data) {
	    var columnNames = utils.getColumnNames(data);
	    for (var i = 0; i < columnNames.length; i++) {
	      if (utils.isOrdinal(data, columnNames[i])) {
	        return columnNames[i];
	      }
	    }
	    return null;
	  },
	
	  // Gets the first possible linear column
	  /*
	  @private
	  @function getFirstLinearColumn
	  @description Gets the first possible linear column
	  @param {Object} data The graph data object
	  @returns {String} The first column that can be linear
	  */
	
	  getFirstLinearColumn: function getFirstLinearColumn(data) {
	    var columnNames = utils.getColumnNames(data);
	    for (var i = 0; i < columnNames.length; i++) {
	      if (utils.isLinear(data, columnNames[i])) {
	        return columnNames[i];
	      }
	    }
	    return null;
	  },
	
	  // Gets the first possible time scale column
	  /*
	  @private
	  @function getFirstTimeColumn
	  @description Gets the first possible time scale column
	  @param {Object} data The graph data object
	  @returns {String} The first column that can be linear
	  */
	
	  getFirstTimeColumn: function getFirstTimeColumn(data, format) {
	    var columnNames = utils.getColumnNames(data);
	    for (var i = 0; i < columnNames.length; i++) {
	      if (utils.isTime(data, columnNames[i], format)) {
	        return columnNames[i];
	      }
	    }
	    return null;
	  },
	
	  // Parses time data
	  /*
	  @private
	  @function parseTimeData
	  @description Parses time data
	  @param {Object} data
	    @description The graph data object
	  @param {String} column
	    @description The current column that needs to be parsed
	  @param (String) format
	    @description Specifies a posiible time format
	  @returns {String} Time parsed data
	  */
	
	  parseTimeData: function parseTimeData(data, column, format) {
	    if (format) {
	      (function () {
	        var parser = d3.time.format(format).parse;
	        data.forEach(function (item) {
	          item[column] = parser(item[column]);
	
	          if (!(item[column] instanceof Date)) {
	            throw new _errors2.default.DateError();
	          }
	        });
	      })();
	    } else {
	      data.forEach(function (item) {
	        item[column] = new Date(item[column]);
	        if (item[column].toString() === 'Invalid Date') {
	          throw new _errors2.default.DateError();
	        }
	      });
	    }
	    return data;
	  },
	
	  // Parses strings to numbers
	  /*
	  @private
	  @function parseNumberData
	  @description Parses strings to numbers
	  @param {Object} data
	    @description The graph data object
	  @param {String} column
	  @returns {String} Column parsed as number
	  */
	
	  parseNumberData: function parseNumberData(data, column) {
	    data.forEach(function (item) {
	      item[column] = Number(item[column]);
	    });
	    return data;
	  }
	};
	
	exports.default = utils;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Holds various error classes used throughout the library
	
	var errors = {
	
	  UnacceptableFileExtensionError: (function (_Error) {
	    _inherits(UnacceptableFileExtensionError, _Error);
	
	    function UnacceptableFileExtensionError() {
	      _classCallCheck(this, UnacceptableFileExtensionError);
	
	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UnacceptableFileExtensionError).call(this));
	
	      _this.name = 'UnacceptableFileExtensionError';
	      _this.message = 'Only .csv, .tsv, and .json are acceptable file extensions';
	      return _this;
	    }
	
	    return UnacceptableFileExtensionError;
	  })(Error),
	
	  MarginsFormatError: (function (_Error2) {
	    _inherits(MarginsFormatError, _Error2);
	
	    function MarginsFormatError() {
	      _classCallCheck(this, MarginsFormatError);
	
	      var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(MarginsFormatError).call(this));
	
	      _this2.name = 'MarginsFormatError';
	      _this2.message = 'New margins must be an object with top, right, bottom and left defined';
	      return _this2;
	    }
	
	    return MarginsFormatError;
	  })(Error),
	
	  WidthError: (function (_Error3) {
	    _inherits(WidthError, _Error3);
	
	    function WidthError() {
	      _classCallCheck(this, WidthError);
	
	      var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(WidthError).call(this));
	
	      _this3.name = 'WidthError';
	      _this3.message = 'Width must be a Number';
	      return _this3;
	    }
	
	    return WidthError;
	  })(Error),
	
	  HeightError: (function (_Error4) {
	    _inherits(HeightError, _Error4);
	
	    function HeightError() {
	      _classCallCheck(this, HeightError);
	
	      var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(HeightError).call(this));
	
	      _this4.name = 'HeightError';
	      _this4.message = 'Height must be a Number';
	      return _this4;
	    }
	
	    return HeightError;
	  })(Error),
	
	  TitleError: (function (_Error5) {
	    _inherits(TitleError, _Error5);
	
	    function TitleError() {
	      _classCallCheck(this, TitleError);
	
	      var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(TitleError).call(this));
	
	      _this5.name = 'TitleError';
	      _this5.message = 'Title must be a Number or String';
	      return _this5;
	    }
	
	    return TitleError;
	  })(Error),
	
	  FontSizeError: (function (_Error6) {
	    _inherits(FontSizeError, _Error6);
	
	    function FontSizeError() {
	      _classCallCheck(this, FontSizeError);
	
	      var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(FontSizeError).call(this));
	
	      _this6.name = 'FontSizeError';
	      _this6.message = 'Font size must be a Number';
	      return _this6;
	    }
	
	    return FontSizeError;
	  })(Error),
	
	  FontStyleError: (function (_Error7) {
	    _inherits(FontStyleError, _Error7);
	
	    function FontStyleError() {
	      _classCallCheck(this, FontStyleError);
	
	      var _this7 = _possibleConstructorReturn(this, Object.getPrototypeOf(FontStyleError).call(this));
	
	      _this7.name = 'FontStyleError';
	      _this7.message = 'Font style must be a string';
	      return _this7;
	    }
	
	    return FontStyleError;
	  })(Error),
	
	  ColorError: (function (_Error8) {
	    _inherits(ColorError, _Error8);
	
	    function ColorError() {
	      _classCallCheck(this, ColorError);
	
	      var _this8 = _possibleConstructorReturn(this, Object.getPrototypeOf(ColorError).call(this));
	
	      _this8.name = 'ColorError';
	      _this8.message = 'Colors must be an array of colors';
	      return _this8;
	    }
	
	    return ColorError;
	  })(Error),
	
	  InBeforeUsingError: (function (_Error9) {
	    _inherits(InBeforeUsingError, _Error9);
	
	    function InBeforeUsingError() {
	      _classCallCheck(this, InBeforeUsingError);
	
	      var _this9 = _possibleConstructorReturn(this, Object.getPrototypeOf(InBeforeUsingError).call(this));
	
	      _this9.name = 'InBeforeUsingError';
	      _this9.message = 'The "in" function can only be used after the "using" function has been used';
	      return _this9;
	    }
	
	    return InBeforeUsingError;
	  })(Error),
	
	  NoDataError: (function (_Error10) {
	    _inherits(NoDataError, _Error10);
	
	    function NoDataError() {
	      _classCallCheck(this, NoDataError);
	
	      var _this10 = _possibleConstructorReturn(this, Object.getPrototypeOf(NoDataError).call(this));
	
	      _this10.name = 'NoDataError';
	      _this10.message = 'Must pass in data, data cannot be undefined';
	      return _this10;
	    }
	
	    return NoDataError;
	  })(Error),
	
	  DateError: (function (_Error11) {
	    _inherits(DateError, _Error11);
	
	    function DateError() {
	      _classCallCheck(this, DateError);
	
	      var _this11 = _possibleConstructorReturn(this, Object.getPrototypeOf(DateError).call(this));
	
	      _this11.name = 'DateError';
	      _this11.message = 'Error formatting date, use updateTimeFormat function set custom formatting';
	      _this11.constructor = _this11;
	      Error.captureStackTrace(_this11, _this11.constructor.name);
	      return _this11;
	    }
	
	    return DateError;
	  })(Error)
	
	};
	
	exports.default = errors;

/***/ },
/* 7 */
/***/ function(module, exports) {

	/*! @license Firebase v2.3.2
	    License: https://www.firebase.com/terms/terms-of-service.html */
	(function() {var g,aa=this;function n(a){return void 0!==a}function ba(){}function ca(a){a.ub=function(){return a.uf?a.uf:a.uf=new a}}
	function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
	else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a,b,c){return a.call.apply(a.bind,arguments)}
	function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return q.apply(null,arguments)}var la=Date.now||function(){return+new Date};
	function ma(a,b){function c(){}c.prototype=b.prototype;a.bh=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Yg=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};function r(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function na(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function oa(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function pa(a){var b=0,c;for(c in a)b++;return b}function qa(a){for(var b in a)return b}function ra(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function sa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function ta(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
	function ua(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function va(a,b){var c=ua(a,b,void 0);return c&&a[c]}function wa(a){for(var b in a)return!1;return!0}function xa(a){var b={},c;for(c in a)b[c]=a[c];return b}var ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
	function za(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ya.length;f++)c=ya[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Aa(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function Ba(){this.Sd=void 0}
	function Ca(a,b,c){switch(typeof b){case "string":Da(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(ea(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],Ca(a,a.Sd?a.Sd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Da(f,c),
	c.push(":"),Ca(a,a.Sd?a.Sd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var Ea={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Fa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
	function Da(a,b){b.push('"',a.replace(Fa,function(a){if(a in Ea)return Ea[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Ea[a]=e+b.toString(16)}),'"')};function Ga(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^la()).toString(36)};var Ha;a:{var Ia=aa.navigator;if(Ia){var Ja=Ia.userAgent;if(Ja){Ha=Ja;break a}}Ha=""};function Ka(){this.Va=-1};function La(){this.Va=-1;this.Va=64;this.N=[];this.me=[];this.Wf=[];this.Ld=[];this.Ld[0]=128;for(var a=1;a<this.Va;++a)this.Ld[a]=0;this.de=this.ac=0;this.reset()}ma(La,Ka);La.prototype.reset=function(){this.N[0]=1732584193;this.N[1]=4023233417;this.N[2]=2562383102;this.N[3]=271733878;this.N[4]=3285377520;this.de=this.ac=0};
	function Ma(a,b,c){c||(c=0);var d=a.Wf;if(p(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.N[0];c=a.N[1];for(var h=a.N[2],k=a.N[3],l=a.N[4],m,e=0;80>e;e++)40>e?20>e?(f=k^c&(h^k),m=1518500249):(f=c^h^k,m=1859775393):60>e?(f=c&h|k&(c|h),m=2400959708):(f=c^h^k,m=3395469782),f=(b<<
	5|b>>>27)+f+l+m+d[e]&4294967295,l=k,k=h,h=(c<<30|c>>>2)&4294967295,c=b,b=f;a.N[0]=a.N[0]+b&4294967295;a.N[1]=a.N[1]+c&4294967295;a.N[2]=a.N[2]+h&4294967295;a.N[3]=a.N[3]+k&4294967295;a.N[4]=a.N[4]+l&4294967295}
	La.prototype.update=function(a,b){if(null!=a){n(b)||(b=a.length);for(var c=b-this.Va,d=0,e=this.me,f=this.ac;d<b;){if(0==f)for(;d<=c;)Ma(this,a,d),d+=this.Va;if(p(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Va){Ma(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Va){Ma(this,e);f=0;break}}this.ac=f;this.de+=b}};var u=Array.prototype,Na=u.indexOf?function(a,b,c){return u.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Oa=u.forEach?function(a,b,c){u.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Pa=u.filter?function(a,b,c){return u.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=p(a)?
	a.split(""):a,k=0;k<d;k++)if(k in h){var l=h[k];b.call(c,l,k,a)&&(e[f++]=l)}return e},Qa=u.map?function(a,b,c){return u.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));return e},Ra=u.reduce?function(a,b,c,d){for(var e=[],f=1,h=arguments.length;f<h;f++)e.push(arguments[f]);d&&(e[0]=q(b,d));return u.reduce.apply(a,e)}:function(a,b,c,d){var e=c;Oa(a,function(c,h){e=b.call(d,e,c,h,a)});return e},Sa=u.every?function(a,b,
	c){return u.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Ta(a,b){var c=Ua(a,b,void 0);return 0>c?null:p(a)?a.charAt(c):a[c]}function Ua(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Va(a,b){var c=Na(a,b);0<=c&&u.splice.call(a,c,1)}function Wa(a,b,c){return 2>=arguments.length?u.slice.call(a,b):u.slice.call(a,b,c)}
	function Xa(a,b){a.sort(b||Ya)}function Ya(a,b){return a>b?1:a<b?-1:0};var Za=-1!=Ha.indexOf("Opera")||-1!=Ha.indexOf("OPR"),$a=-1!=Ha.indexOf("Trident")||-1!=Ha.indexOf("MSIE"),ab=-1!=Ha.indexOf("Gecko")&&-1==Ha.toLowerCase().indexOf("webkit")&&!(-1!=Ha.indexOf("Trident")||-1!=Ha.indexOf("MSIE")),bb=-1!=Ha.toLowerCase().indexOf("webkit");
	(function(){var a="",b;if(Za&&aa.opera)return a=aa.opera.version,ha(a)?a():a;ab?b=/rv\:([^\);]+)(\)|;)/:$a?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:bb&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(Ha))?a[1]:"");return $a&&(b=(b=aa.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var cb=null,db=null,eb=null;function fb(a,b){if(!fa(a))throw Error("encodeByteArray takes an array as a parameter");gb();for(var c=b?db:cb,d=[],e=0;e<a.length;e+=3){var f=a[e],h=e+1<a.length,k=h?a[e+1]:0,l=e+2<a.length,m=l?a[e+2]:0,t=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|m>>6,m=m&63;l||(m=64,h||(k=64));d.push(c[t],c[f],c[k],c[m])}return d.join("")}
	function gb(){if(!cb){cb={};db={};eb={};for(var a=0;65>a;a++)cb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),db[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),eb[db[a]]=a,62<=a&&(eb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};var hb=hb||"2.3.2";function v(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function w(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function ib(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function jb(a){var b={};ib(a,function(a,d){b[a]=d});return b};function kb(a){var b=[];ib(a,function(a,d){ea(d)?Oa(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""}function lb(a){var b={};a=a.replace(/^\?/,"").split("&");Oa(a,function(a){a&&(a=a.split("="),b[a[0]]=a[1])});return b};function x(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function y(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
	function A(a,b,c,d){if((!d||n(c))&&!ha(c))throw Error(y(a,b,d)+"must be a valid function.");}function mb(a,b,c){if(n(c)&&(!ia(c)||null===c))throw Error(y(a,b,!0)+"must be a valid context object.");};function nb(a){return"undefined"!==typeof JSON&&n(JSON.parse)?JSON.parse(a):Aa(a)}function B(a){if("undefined"!==typeof JSON&&n(JSON.stringify))a=JSON.stringify(a);else{var b=[];Ca(new Ba,a,b);a=b.join("")}return a};function ob(){this.Wd=C}ob.prototype.j=function(a){return this.Wd.Q(a)};ob.prototype.toString=function(){return this.Wd.toString()};function pb(){}pb.prototype.qf=function(){return null};pb.prototype.ye=function(){return null};var qb=new pb;function rb(a,b,c){this.Tf=a;this.Ka=b;this.Kd=c}rb.prototype.qf=function(a){var b=this.Ka.O;if(sb(b,a))return b.j().R(a);b=null!=this.Kd?new tb(this.Kd,!0,!1):this.Ka.w();return this.Tf.xc(a,b)};rb.prototype.ye=function(a,b,c){var d=null!=this.Kd?this.Kd:ub(this.Ka);a=this.Tf.ne(d,b,1,c,a);return 0===a.length?null:a[0]};function vb(){this.tb=[]}function wb(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Zb();null===c||f.ca(c.Zb())||(a.tb.push(c),c=null);null===c&&(c=new xb(f));c.add(e)}c&&a.tb.push(c)}function yb(a,b,c){wb(a,c);zb(a,function(a){return a.ca(b)})}function Ab(a,b,c){wb(a,c);zb(a,function(a){return a.contains(b)||b.contains(a)})}
	function zb(a,b){for(var c=!0,d=0;d<a.tb.length;d++){var e=a.tb[d];if(e)if(e=e.Zb(),b(e)){for(var e=a.tb[d],f=0;f<e.vd.length;f++){var h=e.vd[f];if(null!==h){e.vd[f]=null;var k=h.Vb();Bb&&Cb("event: "+h.toString());Db(k)}}a.tb[d]=null}else c=!1}c&&(a.tb=[])}function xb(a){this.ra=a;this.vd=[]}xb.prototype.add=function(a){this.vd.push(a)};xb.prototype.Zb=function(){return this.ra};function D(a,b,c,d){this.type=a;this.Ja=b;this.Wa=c;this.Ke=d;this.Qd=void 0}function Eb(a){return new D(Fb,a)}var Fb="value";function Gb(a,b,c,d){this.ue=b;this.Zd=c;this.Qd=d;this.ud=a}Gb.prototype.Zb=function(){var a=this.Zd.Ib();return"value"===this.ud?a.path:a.parent().path};Gb.prototype.ze=function(){return this.ud};Gb.prototype.Vb=function(){return this.ue.Vb(this)};Gb.prototype.toString=function(){return this.Zb().toString()+":"+this.ud+":"+B(this.Zd.mf())};function Hb(a,b,c){this.ue=a;this.error=b;this.path=c}Hb.prototype.Zb=function(){return this.path};Hb.prototype.ze=function(){return"cancel"};
	Hb.prototype.Vb=function(){return this.ue.Vb(this)};Hb.prototype.toString=function(){return this.path.toString()+":cancel"};function tb(a,b,c){this.A=a;this.ea=b;this.Ub=c}function Ib(a){return a.ea}function Jb(a){return a.Ub}function Kb(a,b){return b.e()?a.ea&&!a.Ub:sb(a,E(b))}function sb(a,b){return a.ea&&!a.Ub||a.A.Da(b)}tb.prototype.j=function(){return this.A};function Lb(a){this.gg=a;this.Dd=null}Lb.prototype.get=function(){var a=this.gg.get(),b=xa(a);if(this.Dd)for(var c in this.Dd)b[c]-=this.Dd[c];this.Dd=a;return b};function Mb(a,b){this.Of={};this.fd=new Lb(a);this.ba=b;var c=1E4+2E4*Math.random();setTimeout(q(this.If,this),Math.floor(c))}Mb.prototype.If=function(){var a=this.fd.get(),b={},c=!1,d;for(d in a)0<a[d]&&v(this.Of,d)&&(b[d]=a[d],c=!0);c&&this.ba.Ue(b);setTimeout(q(this.If,this),Math.floor(6E5*Math.random()))};function Nb(){this.Ec={}}function Ob(a,b,c){n(c)||(c=1);v(a.Ec,b)||(a.Ec[b]=0);a.Ec[b]+=c}Nb.prototype.get=function(){return xa(this.Ec)};var Pb={},Qb={};function Rb(a){a=a.toString();Pb[a]||(Pb[a]=new Nb);return Pb[a]}function Sb(a,b){var c=a.toString();Qb[c]||(Qb[c]=b());return Qb[c]};function F(a,b){this.name=a;this.S=b}function Tb(a,b){return new F(a,b)};function Ub(a,b){return Vb(a.name,b.name)}function Wb(a,b){return Vb(a,b)};function Xb(a,b,c){this.type=Yb;this.source=a;this.path=b;this.Ga=c}Xb.prototype.Xc=function(a){return this.path.e()?new Xb(this.source,G,this.Ga.R(a)):new Xb(this.source,H(this.path),this.Ga)};Xb.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ga.toString()+")"};function Zb(a,b){this.type=$b;this.source=a;this.path=b}Zb.prototype.Xc=function(){return this.path.e()?new Zb(this.source,G):new Zb(this.source,H(this.path))};Zb.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function ac(a,b){this.La=a;this.wa=b?b:bc}g=ac.prototype;g.Oa=function(a,b){return new ac(this.La,this.wa.Oa(a,b,this.La).Y(null,null,!1,null,null))};g.remove=function(a){return new ac(this.La,this.wa.remove(a,this.La).Y(null,null,!1,null,null))};g.get=function(a){for(var b,c=this.wa;!c.e();){b=this.La(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
	function cc(a,b){for(var c,d=a.wa,e=null;!d.e();){c=a.La(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}g.e=function(){return this.wa.e()};g.count=function(){return this.wa.count()};g.Sc=function(){return this.wa.Sc()};g.fc=function(){return this.wa.fc()};g.ia=function(a){return this.wa.ia(a)};
	g.Xb=function(a){return new dc(this.wa,null,this.La,!1,a)};g.Yb=function(a,b){return new dc(this.wa,a,this.La,!1,b)};g.$b=function(a,b){return new dc(this.wa,a,this.La,!0,b)};g.sf=function(a){return new dc(this.wa,null,this.La,!0,a)};function dc(a,b,c,d,e){this.Ud=e||null;this.Fe=d;this.Pa=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.Fe?a.left:a.right;else if(0===e){this.Pa.push(a);break}else this.Pa.push(a),a=this.Fe?a.right:a.left}
	function J(a){if(0===a.Pa.length)return null;var b=a.Pa.pop(),c;c=a.Ud?a.Ud(b.key,b.value):{key:b.key,value:b.value};if(a.Fe)for(b=b.left;!b.e();)a.Pa.push(b),b=b.right;else for(b=b.right;!b.e();)a.Pa.push(b),b=b.left;return c}function ec(a){if(0===a.Pa.length)return null;var b;b=a.Pa;b=b[b.length-1];return a.Ud?a.Ud(b.key,b.value):{key:b.key,value:b.value}}function fc(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:bc;this.right=null!=e?e:bc}g=fc.prototype;
	g.Y=function(a,b,c,d,e){return new fc(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};g.count=function(){return this.left.count()+1+this.right.count()};g.e=function(){return!1};g.ia=function(a){return this.left.ia(a)||a(this.key,this.value)||this.right.ia(a)};function gc(a){return a.left.e()?a:gc(a.left)}g.Sc=function(){return gc(this).key};g.fc=function(){return this.right.e()?this.key:this.right.fc()};
	g.Oa=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.Y(null,null,null,e.left.Oa(a,b,c),null):0===d?e.Y(null,b,null,null,null):e.Y(null,null,null,null,e.right.Oa(a,b,c));return hc(e)};function ic(a){if(a.left.e())return bc;a.left.fa()||a.left.left.fa()||(a=jc(a));a=a.Y(null,null,null,ic(a.left),null);return hc(a)}
	g.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.fa()||c.left.left.fa()||(c=jc(c)),c=c.Y(null,null,null,c.left.remove(a,b),null);else{c.left.fa()&&(c=kc(c));c.right.e()||c.right.fa()||c.right.left.fa()||(c=lc(c),c.left.left.fa()&&(c=kc(c),c=lc(c)));if(0===b(a,c.key)){if(c.right.e())return bc;d=gc(c.right);c=c.Y(d.key,d.value,null,null,ic(c.right))}c=c.Y(null,null,null,null,c.right.remove(a,b))}return hc(c)};g.fa=function(){return this.color};
	function hc(a){a.right.fa()&&!a.left.fa()&&(a=mc(a));a.left.fa()&&a.left.left.fa()&&(a=kc(a));a.left.fa()&&a.right.fa()&&(a=lc(a));return a}function jc(a){a=lc(a);a.right.left.fa()&&(a=a.Y(null,null,null,null,kc(a.right)),a=mc(a),a=lc(a));return a}function mc(a){return a.right.Y(null,null,a.color,a.Y(null,null,!0,null,a.right.left),null)}function kc(a){return a.left.Y(null,null,a.color,null,a.Y(null,null,!0,a.left.right,null))}
	function lc(a){return a.Y(null,null,!a.color,a.left.Y(null,null,!a.left.color,null,null),a.right.Y(null,null,!a.right.color,null,null))}function nc(){}g=nc.prototype;g.Y=function(){return this};g.Oa=function(a,b){return new fc(a,b,null)};g.remove=function(){return this};g.count=function(){return 0};g.e=function(){return!0};g.ia=function(){return!1};g.Sc=function(){return null};g.fc=function(){return null};g.fa=function(){return!1};var bc=new nc;function oc(a,b){return a&&"object"===typeof a?(K(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function pc(a,b){var c=new qc;rc(a,new L(""),function(a,e){c.nc(a,sc(e,b))});return c}function sc(a,b){var c=a.C().I(),c=oc(c,b),d;if(a.K()){var e=oc(a.Ca(),b);return e!==a.Ca()||c!==a.C().I()?new tc(e,M(c)):a}d=a;c!==a.C().I()&&(d=d.ga(new tc(c)));a.P(N,function(a,c){var e=sc(c,b);e!==c&&(d=d.U(a,e))});return d};function uc(){this.wc={}}uc.prototype.set=function(a,b){null==b?delete this.wc[a]:this.wc[a]=b};uc.prototype.get=function(a){return v(this.wc,a)?this.wc[a]:null};uc.prototype.remove=function(a){delete this.wc[a]};uc.prototype.wf=!0;function vc(a){this.Fc=a;this.Pd="firebase:"}g=vc.prototype;g.set=function(a,b){null==b?this.Fc.removeItem(this.Pd+a):this.Fc.setItem(this.Pd+a,B(b))};g.get=function(a){a=this.Fc.getItem(this.Pd+a);return null==a?null:nb(a)};g.remove=function(a){this.Fc.removeItem(this.Pd+a)};g.wf=!1;g.toString=function(){return this.Fc.toString()};function wc(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new vc(b)}}catch(c){}return new uc}var xc=wc("localStorage"),yc=wc("sessionStorage");function zc(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.kb=b;this.hc=c;this.Wg=d;this.Od=e||"";this.Ya=xc.get("host:"+a)||this.host}function Ac(a,b){b!==a.Ya&&(a.Ya=b,"s-"===a.Ya.substr(0,2)&&xc.set("host:"+a.host,a.Ya))}
	function Bc(a,b,c){K("string"===typeof b,"typeof type must == string");K("object"===typeof c,"typeof params must == object");if(b===Cc)b=(a.kb?"wss://":"ws://")+a.Ya+"/.ws?";else if(b===Dc)b=(a.kb?"https://":"http://")+a.Ya+"/.lp?";else throw Error("Unknown connection type: "+b);a.host!==a.Ya&&(c.ns=a.hc);var d=[];r(c,function(a,b){d.push(b+"="+a)});return b+d.join("&")}zc.prototype.toString=function(){var a=(this.kb?"https://":"http://")+this.host;this.Od&&(a+="<"+this.Od+">");return a};var Ec=function(){var a=1;return function(){return a++}}();function K(a,b){if(!a)throw Fc(b);}function Fc(a){return Error("Firebase ("+hb+") INTERNAL ASSERT FAILED: "+a)}
	function Gc(a){try{var b;if("undefined"!==typeof atob)b=atob(a);else{gb();for(var c=eb,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],h=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var l=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==h||null==k||null==l)throw Error();d.push(f<<2|h>>4);64!=k&&(d.push(h<<4&240|k>>2),64!=l&&d.push(k<<6&192|l))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Wa(d,c,
	c+8192));b=a}}return b}catch(m){Cb("base64Decode failed: ",m)}return null}function Hc(a){var b=Ic(a);a=new La;a.update(b);var b=[],c=8*a.de;56>a.ac?a.update(a.Ld,56-a.ac):a.update(a.Ld,a.Va-(a.ac-56));for(var d=a.Va-1;56<=d;d--)a.me[d]=c&255,c/=256;Ma(a,a.me);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.N[d]>>e&255,++c;return fb(b)}
	function Jc(a){for(var b="",c=0;c<arguments.length;c++)b=fa(arguments[c])?b+Jc.apply(null,arguments[c]):"object"===typeof arguments[c]?b+B(arguments[c]):b+arguments[c],b+=" ";return b}var Bb=null,Kc=!0;function Cb(a){!0===Kc&&(Kc=!1,null===Bb&&!0===yc.get("logging_enabled")&&Lc(!0));if(Bb){var b=Jc.apply(null,arguments);Bb(b)}}function Mc(a){return function(){Cb(a,arguments)}}
	function Nc(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+Jc.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function Oc(a){var b=Jc.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function O(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+Jc.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
	function Pc(a){var b="",c="",d="",e="",f=!0,h="https",k=443;if(p(a)){var l=a.indexOf("//");0<=l&&(h=a.substring(0,l-1),a=a.substring(l+2));l=a.indexOf("/");-1===l&&(l=a.length);b=a.substring(0,l);e="";a=a.substring(l).split("/");for(l=0;l<a.length;l++)if(0<a[l].length){var m=a[l];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(t){}e+="/"+m}a=b.split(".");3===a.length?(c=a[1],d=a[0].toLowerCase()):2===a.length&&(c=a[0]);l=b.indexOf(":");0<=l&&(f="https"===h||"wss"===h,k=b.substring(l+1),isFinite(k)&&
	(k=String(k)),k=p(k)?/^\s*-?0x/i.test(k)?parseInt(k,16):parseInt(k,10):NaN)}return{host:b,port:k,domain:c,Tg:d,kb:f,scheme:h,$c:e}}function Qc(a){return ga(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
	function Rc(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
	function Vb(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=Sc(a),d=Sc(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function Tc(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+B(b));}
	function Uc(a){if("object"!==typeof a||null===a)return B(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=B(b[d]),c+=":",c+=Uc(a[b[d]]);return c+"}"}function Vc(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function Wc(a,b){if(ea(a))for(var c=0;c<a.length;++c)b(c,a[c]);else r(a,b)}
	function Xc(a){K(!Qc(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
	(d="0"+d),c+=d;return c.toLowerCase()}var Yc=/^-?\d{1,10}$/;function Sc(a){return Yc.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function Db(a){try{a()}catch(b){setTimeout(function(){O("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function P(a,b){if(ha(a)){var c=Array.prototype.slice.call(arguments,1).slice();Db(function(){a.apply(null,c)})}};function Ic(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,K(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function Zc(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function $c(a){var b={},c={},d={},e="";try{var f=a.split("."),b=nb(Gc(f[0])||""),c=nb(Gc(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(h){}return{Zg:b,Bc:c,data:d,Qg:e}}function ad(a){a=$c(a).Bc;return"object"===typeof a&&a.hasOwnProperty("iat")?w(a,"iat"):null}function bd(a){a=$c(a);var b=a.Bc;return!!a.Qg&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")};function cd(a){this.W=a;this.g=a.n.g}function dd(a,b,c,d){var e=[],f=[];Oa(b,function(b){"child_changed"===b.type&&a.g.Ad(b.Ke,b.Ja)&&f.push(new D("child_moved",b.Ja,b.Wa))});ed(a,e,"child_removed",b,d,c);ed(a,e,"child_added",b,d,c);ed(a,e,"child_moved",f,d,c);ed(a,e,"child_changed",b,d,c);ed(a,e,Fb,b,d,c);return e}function ed(a,b,c,d,e,f){d=Pa(d,function(a){return a.type===c});Xa(d,q(a.hg,a));Oa(d,function(c){var d=fd(a,c,f);Oa(e,function(e){e.Kf(c.type)&&b.push(e.createEvent(d,a.W))})})}
	function fd(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Qd=c.rf(b.Wa,b.Ja,a.g));return b}cd.prototype.hg=function(a,b){if(null==a.Wa||null==b.Wa)throw Fc("Should only compare child_ events.");return this.g.compare(new F(a.Wa,a.Ja),new F(b.Wa,b.Ja))};function gd(){this.bb={}}
	function hd(a,b){var c=b.type,d=b.Wa;K("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");K(".priority"!==d,"Only non-priority child changes can be tracked.");var e=w(a.bb,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.bb[d]=new D("child_changed",b.Ja,d,e.Ja);else if("child_removed"==c&&"child_added"==f)delete a.bb[d];else if("child_removed"==c&&"child_changed"==f)a.bb[d]=new D("child_removed",e.Ke,d);else if("child_changed"==c&&
	"child_added"==f)a.bb[d]=new D("child_added",b.Ja,d);else if("child_changed"==c&&"child_changed"==f)a.bb[d]=new D("child_changed",b.Ja,d,e.Ke);else throw Fc("Illegal combination of changes: "+b+" occurred after "+e);}else a.bb[d]=b};function id(a,b,c){this.Rb=a;this.pb=b;this.rb=c||null}g=id.prototype;g.Kf=function(a){return"value"===a};g.createEvent=function(a,b){var c=b.n.g;return new Gb("value",this,new Q(a.Ja,b.Ib(),c))};g.Vb=function(a){var b=this.rb;if("cancel"===a.ze()){K(this.pb,"Raising a cancel event on a listener with no cancel callback");var c=this.pb;return function(){c.call(b,a.error)}}var d=this.Rb;return function(){d.call(b,a.Zd)}};g.gf=function(a,b){return this.pb?new Hb(this,a,b):null};
	g.matches=function(a){return a instanceof id?a.Rb&&this.Rb?a.Rb===this.Rb&&a.rb===this.rb:!0:!1};g.tf=function(){return null!==this.Rb};function jd(a,b,c){this.ha=a;this.pb=b;this.rb=c}g=jd.prototype;g.Kf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ha};g.gf=function(a,b){return this.pb?new Hb(this,a,b):null};
	g.createEvent=function(a,b){K(null!=a.Wa,"Child events should have a childName.");var c=b.Ib().u(a.Wa);return new Gb(a.type,this,new Q(a.Ja,c,b.n.g),a.Qd)};g.Vb=function(a){var b=this.rb;if("cancel"===a.ze()){K(this.pb,"Raising a cancel event on a listener with no cancel callback");var c=this.pb;return function(){c.call(b,a.error)}}var d=this.ha[a.ud];return function(){d.call(b,a.Zd,a.Qd)}};
	g.matches=function(a){if(a instanceof jd){if(!this.ha||!a.ha)return!0;if(this.rb===a.rb){var b=pa(a.ha);if(b===pa(this.ha)){if(1===b){var b=qa(a.ha),c=qa(this.ha);return c===b&&(!a.ha[b]||!this.ha[c]||a.ha[b]===this.ha[c])}return oa(this.ha,function(b,c){return a.ha[c]===b})}}}return!1};g.tf=function(){return null!==this.ha};function kd(a){this.g=a}g=kd.prototype;g.G=function(a,b,c,d,e,f){K(a.Jc(this.g),"A node must be indexed if only a child is updated");e=a.R(b);if(e.Q(d).ca(c.Q(d))&&e.e()==c.e())return a;null!=f&&(c.e()?a.Da(b)?hd(f,new D("child_removed",e,b)):K(a.K(),"A child remove without an old child only makes sense on a leaf node"):e.e()?hd(f,new D("child_added",c,b)):hd(f,new D("child_changed",c,b,e)));return a.K()&&c.e()?a:a.U(b,c).lb(this.g)};
	g.xa=function(a,b,c){null!=c&&(a.K()||a.P(N,function(a,e){b.Da(a)||hd(c,new D("child_removed",e,a))}),b.K()||b.P(N,function(b,e){if(a.Da(b)){var f=a.R(b);f.ca(e)||hd(c,new D("child_changed",e,b,f))}else hd(c,new D("child_added",e,b))}));return b.lb(this.g)};g.ga=function(a,b){return a.e()?C:a.ga(b)};g.Na=function(){return!1};g.Wb=function(){return this};function ld(a){this.Be=new kd(a.g);this.g=a.g;var b;a.ma?(b=md(a),b=a.g.Pc(nd(a),b)):b=a.g.Tc();this.ed=b;a.pa?(b=od(a),a=a.g.Pc(pd(a),b)):a=a.g.Qc();this.Gc=a}g=ld.prototype;g.matches=function(a){return 0>=this.g.compare(this.ed,a)&&0>=this.g.compare(a,this.Gc)};g.G=function(a,b,c,d,e,f){this.matches(new F(b,c))||(c=C);return this.Be.G(a,b,c,d,e,f)};
	g.xa=function(a,b,c){b.K()&&(b=C);var d=b.lb(this.g),d=d.ga(C),e=this;b.P(N,function(a,b){e.matches(new F(a,b))||(d=d.U(a,C))});return this.Be.xa(a,d,c)};g.ga=function(a){return a};g.Na=function(){return!0};g.Wb=function(){return this.Be};function qd(a){this.sa=new ld(a);this.g=a.g;K(a.ja,"Only valid if limit has been set");this.ka=a.ka;this.Jb=!rd(a)}g=qd.prototype;g.G=function(a,b,c,d,e,f){this.sa.matches(new F(b,c))||(c=C);return a.R(b).ca(c)?a:a.Db()<this.ka?this.sa.Wb().G(a,b,c,d,e,f):sd(this,a,b,c,e,f)};
	g.xa=function(a,b,c){var d;if(b.K()||b.e())d=C.lb(this.g);else if(2*this.ka<b.Db()&&b.Jc(this.g)){d=C.lb(this.g);b=this.Jb?b.$b(this.sa.Gc,this.g):b.Yb(this.sa.ed,this.g);for(var e=0;0<b.Pa.length&&e<this.ka;){var f=J(b),h;if(h=this.Jb?0>=this.g.compare(this.sa.ed,f):0>=this.g.compare(f,this.sa.Gc))d=d.U(f.name,f.S),e++;else break}}else{d=b.lb(this.g);d=d.ga(C);var k,l,m;if(this.Jb){b=d.sf(this.g);k=this.sa.Gc;l=this.sa.ed;var t=td(this.g);m=function(a,b){return t(b,a)}}else b=d.Xb(this.g),k=this.sa.ed,
	l=this.sa.Gc,m=td(this.g);for(var e=0,z=!1;0<b.Pa.length;)f=J(b),!z&&0>=m(k,f)&&(z=!0),(h=z&&e<this.ka&&0>=m(f,l))?e++:d=d.U(f.name,C)}return this.sa.Wb().xa(a,d,c)};g.ga=function(a){return a};g.Na=function(){return!0};g.Wb=function(){return this.sa.Wb()};
	function sd(a,b,c,d,e,f){var h;if(a.Jb){var k=td(a.g);h=function(a,b){return k(b,a)}}else h=td(a.g);K(b.Db()==a.ka,"");var l=new F(c,d),m=a.Jb?ud(b,a.g):vd(b,a.g),t=a.sa.matches(l);if(b.Da(c)){for(var z=b.R(c),m=e.ye(a.g,m,a.Jb);null!=m&&(m.name==c||b.Da(m.name));)m=e.ye(a.g,m,a.Jb);e=null==m?1:h(m,l);if(t&&!d.e()&&0<=e)return null!=f&&hd(f,new D("child_changed",d,c,z)),b.U(c,d);null!=f&&hd(f,new D("child_removed",z,c));b=b.U(c,C);return null!=m&&a.sa.matches(m)?(null!=f&&hd(f,new D("child_added",
	m.S,m.name)),b.U(m.name,m.S)):b}return d.e()?b:t&&0<=h(m,l)?(null!=f&&(hd(f,new D("child_removed",m.S,m.name)),hd(f,new D("child_added",d,c))),b.U(c,d).U(m.name,C)):b};function wd(a,b){this.je=a;this.fg=b}function xd(a){this.V=a}
	xd.prototype.ab=function(a,b,c,d){var e=new gd,f;if(b.type===Yb)b.source.we?c=yd(this,a,b.path,b.Ga,c,d,e):(K(b.source.pf,"Unknown source."),f=b.source.af||Jb(a.w())&&!b.path.e(),c=Ad(this,a,b.path,b.Ga,c,d,f,e));else if(b.type===Bd)b.source.we?c=Cd(this,a,b.path,b.children,c,d,e):(K(b.source.pf,"Unknown source."),f=b.source.af||Jb(a.w()),c=Dd(this,a,b.path,b.children,c,d,f,e));else if(b.type===Ed)if(b.Vd)if(b=b.path,null!=c.tc(b))c=a;else{f=new rb(c,a,d);d=a.O.j();if(b.e()||".priority"===E(b))Ib(a.w())?
	b=c.za(ub(a)):(b=a.w().j(),K(b instanceof R,"serverChildren would be complete if leaf node"),b=c.yc(b)),b=this.V.xa(d,b,e);else{var h=E(b),k=c.xc(h,a.w());null==k&&sb(a.w(),h)&&(k=d.R(h));b=null!=k?this.V.G(d,h,k,H(b),f,e):a.O.j().Da(h)?this.V.G(d,h,C,H(b),f,e):d;b.e()&&Ib(a.w())&&(d=c.za(ub(a)),d.K()&&(b=this.V.xa(b,d,e)))}d=Ib(a.w())||null!=c.tc(G);c=Fd(a,b,d,this.V.Na())}else c=Gd(this,a,b.path,b.Qb,c,d,e);else if(b.type===$b)d=b.path,b=a.w(),f=b.j(),h=b.ea||d.e(),c=Hd(this,new Id(a.O,new tb(f,
	h,b.Ub)),d,c,qb,e);else throw Fc("Unknown operation type: "+b.type);e=ra(e.bb);d=c;b=d.O;b.ea&&(f=b.j().K()||b.j().e(),h=Jd(a),(0<e.length||!a.O.ea||f&&!b.j().ca(h)||!b.j().C().ca(h.C()))&&e.push(Eb(Jd(d))));return new wd(c,e)};
	function Hd(a,b,c,d,e,f){var h=b.O;if(null!=d.tc(c))return b;var k;if(c.e())K(Ib(b.w()),"If change path is empty, we must have complete server data"),Jb(b.w())?(e=ub(b),d=d.yc(e instanceof R?e:C)):d=d.za(ub(b)),f=a.V.xa(b.O.j(),d,f);else{var l=E(c);if(".priority"==l)K(1==Kd(c),"Can't have a priority with additional path components"),f=h.j(),k=b.w().j(),d=d.ld(c,f,k),f=null!=d?a.V.ga(f,d):h.j();else{var m=H(c);sb(h,l)?(k=b.w().j(),d=d.ld(c,h.j(),k),d=null!=d?h.j().R(l).G(m,d):h.j().R(l)):d=d.xc(l,
	b.w());f=null!=d?a.V.G(h.j(),l,d,m,e,f):h.j()}}return Fd(b,f,h.ea||c.e(),a.V.Na())}function Ad(a,b,c,d,e,f,h,k){var l=b.w();h=h?a.V:a.V.Wb();if(c.e())d=h.xa(l.j(),d,null);else if(h.Na()&&!l.Ub)d=l.j().G(c,d),d=h.xa(l.j(),d,null);else{var m=E(c);if(!Kb(l,c)&&1<Kd(c))return b;var t=H(c);d=l.j().R(m).G(t,d);d=".priority"==m?h.ga(l.j(),d):h.G(l.j(),m,d,t,qb,null)}l=l.ea||c.e();b=new Id(b.O,new tb(d,l,h.Na()));return Hd(a,b,c,e,new rb(e,b,f),k)}
	function yd(a,b,c,d,e,f,h){var k=b.O;e=new rb(e,b,f);if(c.e())h=a.V.xa(b.O.j(),d,h),a=Fd(b,h,!0,a.V.Na());else if(f=E(c),".priority"===f)h=a.V.ga(b.O.j(),d),a=Fd(b,h,k.ea,k.Ub);else{c=H(c);var l=k.j().R(f);if(!c.e()){var m=e.qf(f);d=null!=m?".priority"===Ld(c)&&m.Q(c.parent()).e()?m:m.G(c,d):C}l.ca(d)?a=b:(h=a.V.G(k.j(),f,d,c,e,h),a=Fd(b,h,k.ea,a.V.Na()))}return a}
	function Cd(a,b,c,d,e,f,h){var k=b;Md(d,function(d,m){var t=c.u(d);sb(b.O,E(t))&&(k=yd(a,k,t,m,e,f,h))});Md(d,function(d,m){var t=c.u(d);sb(b.O,E(t))||(k=yd(a,k,t,m,e,f,h))});return k}function Nd(a,b){Md(b,function(b,d){a=a.G(b,d)});return a}
	function Dd(a,b,c,d,e,f,h,k){if(b.w().j().e()&&!Ib(b.w()))return b;var l=b;c=c.e()?d:Od(Pd,c,d);var m=b.w().j();c.children.ia(function(c,d){if(m.Da(c)){var I=b.w().j().R(c),I=Nd(I,d);l=Ad(a,l,new L(c),I,e,f,h,k)}});c.children.ia(function(c,d){var I=!sb(b.w(),c)&&null==d.value;m.Da(c)||I||(I=b.w().j().R(c),I=Nd(I,d),l=Ad(a,l,new L(c),I,e,f,h,k))});return l}
	function Gd(a,b,c,d,e,f,h){if(null!=e.tc(c))return b;var k=Jb(b.w()),l=b.w();if(null!=d.value){if(c.e()&&l.ea||Kb(l,c))return Ad(a,b,c,l.j().Q(c),e,f,k,h);if(c.e()){var m=Pd;l.j().P(Qd,function(a,b){m=m.set(new L(a),b)});return Dd(a,b,c,m,e,f,k,h)}return b}m=Pd;Md(d,function(a){var b=c.u(a);Kb(l,b)&&(m=m.set(a,l.j().Q(b)))});return Dd(a,b,c,m,e,f,k,h)};function Rd(){}var Sd={};function td(a){return q(a.compare,a)}Rd.prototype.Ad=function(a,b){return 0!==this.compare(new F("[MIN_NAME]",a),new F("[MIN_NAME]",b))};Rd.prototype.Tc=function(){return Td};function Ud(a){K(!a.e()&&".priority"!==E(a),"Can't create PathIndex with empty path or .priority key");this.cc=a}ma(Ud,Rd);g=Ud.prototype;g.Ic=function(a){return!a.Q(this.cc).e()};g.compare=function(a,b){var c=a.S.Q(this.cc),d=b.S.Q(this.cc),c=c.Dc(d);return 0===c?Vb(a.name,b.name):c};
	g.Pc=function(a,b){var c=M(a),c=C.G(this.cc,c);return new F(b,c)};g.Qc=function(){var a=C.G(this.cc,Vd);return new F("[MAX_NAME]",a)};g.toString=function(){return this.cc.slice().join("/")};function Wd(){}ma(Wd,Rd);g=Wd.prototype;g.compare=function(a,b){var c=a.S.C(),d=b.S.C(),c=c.Dc(d);return 0===c?Vb(a.name,b.name):c};g.Ic=function(a){return!a.C().e()};g.Ad=function(a,b){return!a.C().ca(b.C())};g.Tc=function(){return Td};g.Qc=function(){return new F("[MAX_NAME]",new tc("[PRIORITY-POST]",Vd))};
	g.Pc=function(a,b){var c=M(a);return new F(b,new tc("[PRIORITY-POST]",c))};g.toString=function(){return".priority"};var N=new Wd;function Xd(){}ma(Xd,Rd);g=Xd.prototype;g.compare=function(a,b){return Vb(a.name,b.name)};g.Ic=function(){throw Fc("KeyIndex.isDefinedOn not expected to be called.");};g.Ad=function(){return!1};g.Tc=function(){return Td};g.Qc=function(){return new F("[MAX_NAME]",C)};g.Pc=function(a){K(p(a),"KeyIndex indexValue must always be a string.");return new F(a,C)};g.toString=function(){return".key"};
	var Qd=new Xd;function Yd(){}ma(Yd,Rd);g=Yd.prototype;g.compare=function(a,b){var c=a.S.Dc(b.S);return 0===c?Vb(a.name,b.name):c};g.Ic=function(){return!0};g.Ad=function(a,b){return!a.ca(b)};g.Tc=function(){return Td};g.Qc=function(){return Zd};g.Pc=function(a,b){var c=M(a);return new F(b,c)};g.toString=function(){return".value"};var $d=new Yd;function ae(){this.Tb=this.pa=this.Lb=this.ma=this.ja=!1;this.ka=0;this.Nb="";this.ec=null;this.xb="";this.bc=null;this.vb="";this.g=N}var be=new ae;function rd(a){return""===a.Nb?a.ma:"l"===a.Nb}function nd(a){K(a.ma,"Only valid if start has been set");return a.ec}function md(a){K(a.ma,"Only valid if start has been set");return a.Lb?a.xb:"[MIN_NAME]"}function pd(a){K(a.pa,"Only valid if end has been set");return a.bc}
	function od(a){K(a.pa,"Only valid if end has been set");return a.Tb?a.vb:"[MAX_NAME]"}function ce(a){var b=new ae;b.ja=a.ja;b.ka=a.ka;b.ma=a.ma;b.ec=a.ec;b.Lb=a.Lb;b.xb=a.xb;b.pa=a.pa;b.bc=a.bc;b.Tb=a.Tb;b.vb=a.vb;b.g=a.g;return b}g=ae.prototype;g.He=function(a){var b=ce(this);b.ja=!0;b.ka=a;b.Nb="";return b};g.Ie=function(a){var b=ce(this);b.ja=!0;b.ka=a;b.Nb="l";return b};g.Je=function(a){var b=ce(this);b.ja=!0;b.ka=a;b.Nb="r";return b};
	g.$d=function(a,b){var c=ce(this);c.ma=!0;n(a)||(a=null);c.ec=a;null!=b?(c.Lb=!0,c.xb=b):(c.Lb=!1,c.xb="");return c};g.td=function(a,b){var c=ce(this);c.pa=!0;n(a)||(a=null);c.bc=a;n(b)?(c.Tb=!0,c.vb=b):(c.ah=!1,c.vb="");return c};function de(a,b){var c=ce(a);c.g=b;return c}function ee(a){var b={};a.ma&&(b.sp=a.ec,a.Lb&&(b.sn=a.xb));a.pa&&(b.ep=a.bc,a.Tb&&(b.en=a.vb));if(a.ja){b.l=a.ka;var c=a.Nb;""===c&&(c=rd(a)?"l":"r");b.vf=c}a.g!==N&&(b.i=a.g.toString());return b}
	function S(a){return!(a.ma||a.pa||a.ja)}function fe(a){return S(a)&&a.g==N}function ge(a){var b={};if(fe(a))return b;var c;a.g===N?c="$priority":a.g===$d?c="$value":a.g===Qd?c="$key":(K(a.g instanceof Ud,"Unrecognized index type!"),c=a.g.toString());b.orderBy=B(c);a.ma&&(b.startAt=B(a.ec),a.Lb&&(b.startAt+=","+B(a.xb)));a.pa&&(b.endAt=B(a.bc),a.Tb&&(b.endAt+=","+B(a.vb)));a.ja&&(rd(a)?b.limitToFirst=a.ka:b.limitToLast=a.ka);return b}g.toString=function(){return B(ee(this))};function he(a,b){this.Bd=a;this.dc=b}he.prototype.get=function(a){var b=w(this.Bd,a);if(!b)throw Error("No index defined for "+a);return b===Sd?null:b};function ie(a,b,c){var d=na(a.Bd,function(d,f){var h=w(a.dc,f);K(h,"Missing index implementation for "+f);if(d===Sd){if(h.Ic(b.S)){for(var k=[],l=c.Xb(Tb),m=J(l);m;)m.name!=b.name&&k.push(m),m=J(l);k.push(b);return je(k,td(h))}return Sd}h=c.get(b.name);k=d;h&&(k=k.remove(new F(b.name,h)));return k.Oa(b,b.S)});return new he(d,a.dc)}
	function ke(a,b,c){var d=na(a.Bd,function(a){if(a===Sd)return a;var d=c.get(b.name);return d?a.remove(new F(b.name,d)):a});return new he(d,a.dc)}var le=new he({".priority":Sd},{".priority":N});function tc(a,b){this.B=a;K(n(this.B)&&null!==this.B,"LeafNode shouldn't be created with null/undefined value.");this.aa=b||C;me(this.aa);this.Cb=null}var ne=["object","boolean","number","string"];g=tc.prototype;g.K=function(){return!0};g.C=function(){return this.aa};g.ga=function(a){return new tc(this.B,a)};g.R=function(a){return".priority"===a?this.aa:C};g.Q=function(a){return a.e()?this:".priority"===E(a)?this.aa:C};g.Da=function(){return!1};g.rf=function(){return null};
	g.U=function(a,b){return".priority"===a?this.ga(b):b.e()&&".priority"!==a?this:C.U(a,b).ga(this.aa)};g.G=function(a,b){var c=E(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;K(".priority"!==c||1===Kd(a),".priority must be the last token in a path");return this.U(c,C.G(H(a),b))};g.e=function(){return!1};g.Db=function(){return 0};g.P=function(){return!1};g.I=function(a){return a&&!this.C().e()?{".value":this.Ca(),".priority":this.C().I()}:this.Ca()};
	g.hash=function(){if(null===this.Cb){var a="";this.aa.e()||(a+="priority:"+oe(this.aa.I())+":");var b=typeof this.B,a=a+(b+":"),a="number"===b?a+Xc(this.B):a+this.B;this.Cb=Hc(a)}return this.Cb};g.Ca=function(){return this.B};g.Dc=function(a){if(a===C)return 1;if(a instanceof R)return-1;K(a.K(),"Unknown node type");var b=typeof a.B,c=typeof this.B,d=Na(ne,b),e=Na(ne,c);K(0<=d,"Unknown leaf type: "+b);K(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.B<a.B?-1:this.B===a.B?0:1:e-d};
	g.lb=function(){return this};g.Jc=function(){return!0};g.ca=function(a){return a===this?!0:a.K()?this.B===a.B&&this.aa.ca(a.aa):!1};g.toString=function(){return B(this.I(!0))};function R(a,b,c){this.m=a;(this.aa=b)&&me(this.aa);a.e()&&K(!this.aa||this.aa.e(),"An empty node cannot have a priority");this.wb=c;this.Cb=null}g=R.prototype;g.K=function(){return!1};g.C=function(){return this.aa||C};g.ga=function(a){return this.m.e()?this:new R(this.m,a,this.wb)};g.R=function(a){if(".priority"===a)return this.C();a=this.m.get(a);return null===a?C:a};g.Q=function(a){var b=E(a);return null===b?this:this.R(b).Q(H(a))};g.Da=function(a){return null!==this.m.get(a)};
	g.U=function(a,b){K(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.ga(b);var c=new F(a,b),d,e;b.e()?(d=this.m.remove(a),c=ke(this.wb,c,this.m)):(d=this.m.Oa(a,b),c=ie(this.wb,c,this.m));e=d.e()?C:this.aa;return new R(d,e,c)};g.G=function(a,b){var c=E(a);if(null===c)return b;K(".priority"!==E(a)||1===Kd(a),".priority must be the last token in a path");var d=this.R(c).G(H(a),b);return this.U(c,d)};g.e=function(){return this.m.e()};g.Db=function(){return this.m.count()};
	var pe=/^(0|[1-9]\d*)$/;g=R.prototype;g.I=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.P(N,function(f,h){b[f]=h.I(a);c++;e&&pe.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],h;for(h in b)f[h]=b[h];return f}a&&!this.C().e()&&(b[".priority"]=this.C().I());return b};g.hash=function(){if(null===this.Cb){var a="";this.C().e()||(a+="priority:"+oe(this.C().I())+":");this.P(N,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Cb=""===a?"":Hc(a)}return this.Cb};
	g.rf=function(a,b,c){return(c=qe(this,c))?(a=cc(c,new F(a,b)))?a.name:null:cc(this.m,a)};function ud(a,b){var c;c=(c=qe(a,b))?(c=c.Sc())&&c.name:a.m.Sc();return c?new F(c,a.m.get(c)):null}function vd(a,b){var c;c=(c=qe(a,b))?(c=c.fc())&&c.name:a.m.fc();return c?new F(c,a.m.get(c)):null}g.P=function(a,b){var c=qe(this,a);return c?c.ia(function(a){return b(a.name,a.S)}):this.m.ia(b)};g.Xb=function(a){return this.Yb(a.Tc(),a)};
	g.Yb=function(a,b){var c=qe(this,b);if(c)return c.Yb(a,function(a){return a});for(var c=this.m.Yb(a.name,Tb),d=ec(c);null!=d&&0>b.compare(d,a);)J(c),d=ec(c);return c};g.sf=function(a){return this.$b(a.Qc(),a)};g.$b=function(a,b){var c=qe(this,b);if(c)return c.$b(a,function(a){return a});for(var c=this.m.$b(a.name,Tb),d=ec(c);null!=d&&0<b.compare(d,a);)J(c),d=ec(c);return c};g.Dc=function(a){return this.e()?a.e()?0:-1:a.K()||a.e()?1:a===Vd?-1:0};
	g.lb=function(a){if(a===Qd||ta(this.wb.dc,a.toString()))return this;var b=this.wb,c=this.m;K(a!==Qd,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Xb(Tb),f=J(c);f;)e=e||a.Ic(f.S),d.push(f),f=J(c);d=e?je(d,td(a)):Sd;e=a.toString();c=xa(b.dc);c[e]=a;a=xa(b.Bd);a[e]=d;return new R(this.m,this.aa,new he(a,c))};g.Jc=function(a){return a===Qd||ta(this.wb.dc,a.toString())};
	g.ca=function(a){if(a===this)return!0;if(a.K())return!1;if(this.C().ca(a.C())&&this.m.count()===a.m.count()){var b=this.Xb(N);a=a.Xb(N);for(var c=J(b),d=J(a);c&&d;){if(c.name!==d.name||!c.S.ca(d.S))return!1;c=J(b);d=J(a)}return null===c&&null===d}return!1};function qe(a,b){return b===Qd?null:a.wb.get(b.toString())}g.toString=function(){return B(this.I(!0))};function M(a,b){if(null===a)return C;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);K(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new tc(a,M(c));if(a instanceof Array){var d=C,e=a;r(e,function(a,b){if(v(e,b)&&"."!==b.substring(0,1)){var c=M(a);if(c.K()||!c.e())d=
	d.U(b,c)}});return d.ga(M(c))}var f=[],h=!1,k=a;ib(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=M(k[a]);b.e()||(h=h||!b.C().e(),f.push(new F(a,b)))}});if(0==f.length)return C;var l=je(f,Ub,function(a){return a.name},Wb);if(h){var m=je(f,td(N));return new R(l,M(c),new he({".priority":m},{".priority":N}))}return new R(l,M(c),le)}var re=Math.log(2);
	function se(a){this.count=parseInt(Math.log(a+1)/re,10);this.jf=this.count-1;this.eg=a+1&parseInt(Array(this.count+1).join("1"),2)}function te(a){var b=!(a.eg&1<<a.jf);a.jf--;return b}
	function je(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var m=a[b],t=c?c(m):m;return new fc(t,m.S,!1,null,null)}var m=parseInt(f/2,10)+b,f=e(b,m),z=e(m+1,d),m=a[m],t=c?c(m):m;return new fc(t,m.S,!1,f,z)}a.sort(b);var f=function(b){function d(b,h){var k=t-b,z=t;t-=b;var z=e(k+1,z),k=a[k],I=c?c(k):k,z=new fc(I,k.S,h,null,z);f?f.left=z:m=z;f=z}for(var f=null,m=null,t=a.length,z=0;z<b.count;++z){var I=te(b),zd=Math.pow(2,b.count-(z+1));I?d(zd,!1):(d(zd,!1),d(zd,!0))}return m}(new se(a.length));
	return null!==f?new ac(d||b,f):new ac(d||b)}function oe(a){return"number"===typeof a?"number:"+Xc(a):"string:"+a}function me(a){if(a.K()){var b=a.I();K("string"===typeof b||"number"===typeof b||"object"===typeof b&&v(b,".sv"),"Priority must be a string or number.")}else K(a===Vd||a.e(),"priority of unexpected type.");K(a===Vd||a.C().e(),"Priority nodes can't have a priority of their own.")}var C=new R(new ac(Wb),null,le);function ue(){R.call(this,new ac(Wb),C,le)}ma(ue,R);g=ue.prototype;
	g.Dc=function(a){return a===this?0:1};g.ca=function(a){return a===this};g.C=function(){return this};g.R=function(){return C};g.e=function(){return!1};var Vd=new ue,Td=new F("[MIN_NAME]",C),Zd=new F("[MAX_NAME]",Vd);function Id(a,b){this.O=a;this.Yd=b}function Fd(a,b,c,d){return new Id(new tb(b,c,d),a.Yd)}function Jd(a){return a.O.ea?a.O.j():null}Id.prototype.w=function(){return this.Yd};function ub(a){return a.Yd.ea?a.Yd.j():null};function ve(a,b){this.W=a;var c=a.n,d=new kd(c.g),c=S(c)?new kd(c.g):c.ja?new qd(c):new ld(c);this.Hf=new xd(c);var e=b.w(),f=b.O,h=d.xa(C,e.j(),null),k=c.xa(C,f.j(),null);this.Ka=new Id(new tb(k,f.ea,c.Na()),new tb(h,e.ea,d.Na()));this.Xa=[];this.lg=new cd(a)}function we(a){return a.W}g=ve.prototype;g.w=function(){return this.Ka.w().j()};g.fb=function(a){var b=ub(this.Ka);return b&&(S(this.W.n)||!a.e()&&!b.R(E(a)).e())?b.Q(a):null};g.e=function(){return 0===this.Xa.length};g.Pb=function(a){this.Xa.push(a)};
	g.jb=function(a,b){var c=[];if(b){K(null==a,"A cancel should cancel all event registrations.");var d=this.W.path;Oa(this.Xa,function(a){(a=a.gf(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.Xa.length;++f){var h=this.Xa[f];if(!h.matches(a))e.push(h);else if(a.tf()){e=e.concat(this.Xa.slice(f+1));break}}this.Xa=e}else this.Xa=[];return c};
	g.ab=function(a,b,c){a.type===Bd&&null!==a.source.Hb&&(K(ub(this.Ka),"We should always have a full cache before handling merges"),K(Jd(this.Ka),"Missing event cache, even though we have a server cache"));var d=this.Ka;a=this.Hf.ab(d,a,b,c);b=this.Hf;c=a.je;K(c.O.j().Jc(b.V.g),"Event snap not indexed");K(c.w().j().Jc(b.V.g),"Server snap not indexed");K(Ib(a.je.w())||!Ib(d.w()),"Once a server snap is complete, it should never go back");this.Ka=a.je;return xe(this,a.fg,a.je.O.j(),null)};
	function ye(a,b){var c=a.Ka.O,d=[];c.j().K()||c.j().P(N,function(a,b){d.push(new D("child_added",b,a))});c.ea&&d.push(Eb(c.j()));return xe(a,d,c.j(),b)}function xe(a,b,c,d){return dd(a.lg,b,c,d?[d]:a.Xa)};function ze(a,b,c){this.type=Bd;this.source=a;this.path=b;this.children=c}ze.prototype.Xc=function(a){if(this.path.e())return a=this.children.subtree(new L(a)),a.e()?null:a.value?new Xb(this.source,G,a.value):new ze(this.source,G,a);K(E(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new ze(this.source,H(this.path),this.children)};ze.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};function Ae(a,b){this.f=Mc("p:rest:");this.F=a;this.Gb=b;this.Aa=null;this.$={}}function Be(a,b){if(n(b))return"tag$"+b;K(fe(a.n),"should have a tag if it's not a default query.");return a.path.toString()}g=Ae.prototype;
	g.yf=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.va());var f=Be(a,c),h={};this.$[f]=h;a=ge(a.n);var k=this;Ce(this,e+".json",a,function(a,b){var t=b;404===a&&(a=t=null);null===a&&k.Gb(e,t,!1,c);w(k.$,f)===h&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};g.Rf=function(a,b){var c=Be(a,b);delete this.$[c]};g.M=function(a,b){this.Aa=a;var c=$c(a),d=c.data,c=c.Bc&&c.Bc.exp;b&&b("ok",{auth:d,expires:c})};g.ge=function(a){this.Aa=null;a("ok",null)};g.Me=function(){};
	g.Cf=function(){};g.Jd=function(){};g.put=function(){};g.zf=function(){};g.Ue=function(){};
	function Ce(a,b,c,d){c=c||{};c.format="export";a.Aa&&(c.auth=a.Aa);var e=(a.F.kb?"https://":"http://")+a.F.host+b+"?"+kb(c);a.f("Sending REST request for "+e);var f=new XMLHttpRequest;f.onreadystatechange=function(){if(d&&4===f.readyState){a.f("REST Response for "+e+" received. status:",f.status,"response:",f.responseText);var b=null;if(200<=f.status&&300>f.status){try{b=nb(f.responseText)}catch(c){O("Failed to parse JSON response for "+e+": "+f.responseText)}d(null,b)}else 401!==f.status&&404!==
	f.status&&O("Got unsuccessful REST response for "+e+" Status: "+f.status),d(f.status);d=null}};f.open("GET",e,!0);f.send()};function De(a){K(ea(a)&&0<a.length,"Requires a non-empty array");this.Xf=a;this.Oc={}}De.prototype.fe=function(a,b){var c;c=this.Oc[a]||[];var d=c.length;if(0<d){for(var e=Array(d),f=0;f<d;f++)e[f]=c[f];c=e}else c=[];for(d=0;d<c.length;d++)c[d].zc.apply(c[d].Ma,Array.prototype.slice.call(arguments,1))};De.prototype.Eb=function(a,b,c){Ee(this,a);this.Oc[a]=this.Oc[a]||[];this.Oc[a].push({zc:b,Ma:c});(a=this.Ae(a))&&b.apply(c,a)};
	De.prototype.ic=function(a,b,c){Ee(this,a);a=this.Oc[a]||[];for(var d=0;d<a.length;d++)if(a[d].zc===b&&(!c||c===a[d].Ma)){a.splice(d,1);break}};function Ee(a,b){K(Ta(a.Xf,function(a){return a===b}),"Unknown event: "+b)};var Fe=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);K(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);K(20===c.length,"nextPushId: Length should be 20.");
	return c}}();function Ge(){De.call(this,["online"]);this.kc=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener){var a=this;window.addEventListener("online",function(){a.kc||(a.kc=!0,a.fe("online",!0))},!1);window.addEventListener("offline",function(){a.kc&&(a.kc=!1,a.fe("online",!1))},!1)}}ma(Ge,De);Ge.prototype.Ae=function(a){K("online"===a,"Unknown event type: "+a);return[this.kc]};ca(Ge);function He(){De.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.Ob=!0;if(b){var c=this;document.addEventListener(b,
	function(){var b=!document[a];b!==c.Ob&&(c.Ob=b,c.fe("visible",b))},!1)}}ma(He,De);He.prototype.Ae=function(a){K("visible"===a,"Unknown event type: "+a);return[this.Ob]};ca(He);function L(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Z=0}else this.o=a,this.Z=b}function T(a,b){var c=E(a);if(null===c)return b;if(c===E(b))return T(H(a),H(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
	function Ie(a,b){for(var c=a.slice(),d=b.slice(),e=0;e<c.length&&e<d.length;e++){var f=Vb(c[e],d[e]);if(0!==f)return f}return c.length===d.length?0:c.length<d.length?-1:1}function E(a){return a.Z>=a.o.length?null:a.o[a.Z]}function Kd(a){return a.o.length-a.Z}function H(a){var b=a.Z;b<a.o.length&&b++;return new L(a.o,b)}function Ld(a){return a.Z<a.o.length?a.o[a.o.length-1]:null}g=L.prototype;
	g.toString=function(){for(var a="",b=this.Z;b<this.o.length;b++)""!==this.o[b]&&(a+="/"+this.o[b]);return a||"/"};g.slice=function(a){return this.o.slice(this.Z+(a||0))};g.parent=function(){if(this.Z>=this.o.length)return null;for(var a=[],b=this.Z;b<this.o.length-1;b++)a.push(this.o[b]);return new L(a,0)};
	g.u=function(a){for(var b=[],c=this.Z;c<this.o.length;c++)b.push(this.o[c]);if(a instanceof L)for(c=a.Z;c<a.o.length;c++)b.push(a.o[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new L(b,0)};g.e=function(){return this.Z>=this.o.length};g.ca=function(a){if(Kd(this)!==Kd(a))return!1;for(var b=this.Z,c=a.Z;b<=this.o.length;b++,c++)if(this.o[b]!==a.o[c])return!1;return!0};
	g.contains=function(a){var b=this.Z,c=a.Z;if(Kd(this)>Kd(a))return!1;for(;b<this.o.length;){if(this.o[b]!==a.o[c])return!1;++b;++c}return!0};var G=new L("");function Je(a,b){this.Qa=a.slice();this.Ha=Math.max(1,this.Qa.length);this.lf=b;for(var c=0;c<this.Qa.length;c++)this.Ha+=Zc(this.Qa[c]);Ke(this)}Je.prototype.push=function(a){0<this.Qa.length&&(this.Ha+=1);this.Qa.push(a);this.Ha+=Zc(a);Ke(this)};Je.prototype.pop=function(){var a=this.Qa.pop();this.Ha-=Zc(a);0<this.Qa.length&&--this.Ha};
	function Ke(a){if(768<a.Ha)throw Error(a.lf+"has a key path longer than 768 bytes ("+a.Ha+").");if(32<a.Qa.length)throw Error(a.lf+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Le(a));}function Le(a){return 0==a.Qa.length?"":"in property '"+a.Qa.join(".")+"'"};function Me(a,b){this.value=a;this.children=b||Ne}var Ne=new ac(function(a,b){return a===b?0:a<b?-1:1});function Oe(a){var b=Pd;r(a,function(a,d){b=b.set(new L(d),a)});return b}g=Me.prototype;g.e=function(){return null===this.value&&this.children.e()};function Pe(a,b,c){if(null!=a.value&&c(a.value))return{path:G,value:a.value};if(b.e())return null;var d=E(b);a=a.children.get(d);return null!==a?(b=Pe(a,H(b),c),null!=b?{path:(new L(d)).u(b.path),value:b.value}:null):null}
	function Qe(a,b){return Pe(a,b,function(){return!0})}g.subtree=function(a){if(a.e())return this;var b=this.children.get(E(a));return null!==b?b.subtree(H(a)):Pd};g.set=function(a,b){if(a.e())return new Me(b,this.children);var c=E(a),d=(this.children.get(c)||Pd).set(H(a),b),c=this.children.Oa(c,d);return new Me(this.value,c)};
	g.remove=function(a){if(a.e())return this.children.e()?Pd:new Me(null,this.children);var b=E(a),c=this.children.get(b);return c?(a=c.remove(H(a)),b=a.e()?this.children.remove(b):this.children.Oa(b,a),null===this.value&&b.e()?Pd:new Me(this.value,b)):this};g.get=function(a){if(a.e())return this.value;var b=this.children.get(E(a));return b?b.get(H(a)):null};
	function Od(a,b,c){if(b.e())return c;var d=E(b);b=Od(a.children.get(d)||Pd,H(b),c);d=b.e()?a.children.remove(d):a.children.Oa(d,b);return new Me(a.value,d)}function Re(a,b){return Se(a,G,b)}function Se(a,b,c){var d={};a.children.ia(function(a,f){d[a]=Se(f,b.u(a),c)});return c(b,a.value,d)}function Te(a,b,c){return Ue(a,b,G,c)}function Ue(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=E(b);return(a=a.children.get(e))?Ue(a,H(b),c.u(e),d):null}
	function Ve(a,b,c){We(a,b,G,c)}function We(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=E(b);return(a=a.children.get(e))?We(a,H(b),c.u(e),d):Pd}function Md(a,b){Xe(a,G,b)}function Xe(a,b,c){a.children.ia(function(a,e){Xe(e,b.u(a),c)});a.value&&c(b,a.value)}function Ye(a,b){a.children.ia(function(a,d){d.value&&b(a,d.value)})}var Pd=new Me(null);Me.prototype.toString=function(){var a={};Md(this,function(b,c){a[b.toString()]=c.toString()});return B(a)};function Ze(a,b,c){this.type=Ed;this.source=$e;this.path=a;this.Qb=b;this.Vd=c}Ze.prototype.Xc=function(a){if(this.path.e()){if(null!=this.Qb.value)return K(this.Qb.children.e(),"affectedTree should not have overlapping affected paths."),this;a=this.Qb.subtree(new L(a));return new Ze(G,a,this.Vd)}K(E(this.path)===a,"operationForChild called for unrelated child.");return new Ze(H(this.path),this.Qb,this.Vd)};
	Ze.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Vd+" affectedTree="+this.Qb+")"};var Yb=0,Bd=1,Ed=2,$b=3;function af(a,b,c,d){this.we=a;this.pf=b;this.Hb=c;this.af=d;K(!d||b,"Tagged queries must be from server.")}var $e=new af(!0,!1,null,!1),bf=new af(!1,!0,null,!1);af.prototype.toString=function(){return this.we?"user":this.af?"server(queryID="+this.Hb+")":"server"};function cf(a){this.X=a}var df=new cf(new Me(null));function ef(a,b,c){if(b.e())return new cf(new Me(c));var d=Qe(a.X,b);if(null!=d){var e=d.path,d=d.value;b=T(e,b);d=d.G(b,c);return new cf(a.X.set(e,d))}a=Od(a.X,b,new Me(c));return new cf(a)}function ff(a,b,c){var d=a;ib(c,function(a,c){d=ef(d,b.u(a),c)});return d}cf.prototype.Rd=function(a){if(a.e())return df;a=Od(this.X,a,Pd);return new cf(a)};function gf(a,b){var c=Qe(a.X,b);return null!=c?a.X.get(c.path).Q(T(c.path,b)):null}
	function hf(a){var b=[],c=a.X.value;null!=c?c.K()||c.P(N,function(a,c){b.push(new F(a,c))}):a.X.children.ia(function(a,c){null!=c.value&&b.push(new F(a,c.value))});return b}function jf(a,b){if(b.e())return a;var c=gf(a,b);return null!=c?new cf(new Me(c)):new cf(a.X.subtree(b))}cf.prototype.e=function(){return this.X.e()};cf.prototype.apply=function(a){return kf(G,this.X,a)};
	function kf(a,b,c){if(null!=b.value)return c.G(a,b.value);var d=null;b.children.ia(function(b,f){".priority"===b?(K(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=kf(a.u(b),f,c)});c.Q(a).e()||null===d||(c=c.G(a.u(".priority"),d));return c};function lf(){this.T=df;this.na=[];this.Mc=-1}function mf(a,b){for(var c=0;c<a.na.length;c++){var d=a.na[c];if(d.kd===b)return d}return null}g=lf.prototype;
	g.Rd=function(a){var b=Ua(this.na,function(b){return b.kd===a});K(0<=b,"removeWrite called with nonexistent writeId.");var c=this.na[b];this.na.splice(b,1);for(var d=c.visible,e=!1,f=this.na.length-1;d&&0<=f;){var h=this.na[f];h.visible&&(f>=b&&nf(h,c.path)?d=!1:c.path.contains(h.path)&&(e=!0));f--}if(d){if(e)this.T=of(this.na,pf,G),this.Mc=0<this.na.length?this.na[this.na.length-1].kd:-1;else if(c.Ga)this.T=this.T.Rd(c.path);else{var k=this;r(c.children,function(a,b){k.T=k.T.Rd(c.path.u(b))})}return!0}return!1};
	g.za=function(a,b,c,d){if(c||d){var e=jf(this.T,a);return!d&&e.e()?b:d||null!=b||null!=gf(e,G)?(e=of(this.na,function(b){return(b.visible||d)&&(!c||!(0<=Na(c,b.kd)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||C,e.apply(b)):null}e=gf(this.T,a);if(null!=e)return e;e=jf(this.T,a);return e.e()?b:null!=b||null!=gf(e,G)?(b=b||C,e.apply(b)):null};
	g.yc=function(a,b){var c=C,d=gf(this.T,a);if(d)d.K()||d.P(N,function(a,b){c=c.U(a,b)});else if(b){var e=jf(this.T,a);b.P(N,function(a,b){var d=jf(e,new L(a)).apply(b);c=c.U(a,d)});Oa(hf(e),function(a){c=c.U(a.name,a.S)})}else e=jf(this.T,a),Oa(hf(e),function(a){c=c.U(a.name,a.S)});return c};g.ld=function(a,b,c,d){K(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.u(b);if(null!=gf(this.T,a))return null;a=jf(this.T,a);return a.e()?d.Q(b):a.apply(d.Q(b))};
	g.xc=function(a,b,c){a=a.u(b);var d=gf(this.T,a);return null!=d?d:sb(c,b)?jf(this.T,a).apply(c.j().R(b)):null};g.tc=function(a){return gf(this.T,a)};g.ne=function(a,b,c,d,e,f){var h;a=jf(this.T,a);h=gf(a,G);if(null==h)if(null!=b)h=a.apply(b);else return[];h=h.lb(f);if(h.e()||h.K())return[];b=[];a=td(f);e=e?h.$b(c,f):h.Yb(c,f);for(f=J(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=J(e);return b};
	function nf(a,b){return a.Ga?a.path.contains(b):!!ua(a.children,function(c,d){return a.path.u(d).contains(b)})}function pf(a){return a.visible}
	function of(a,b,c){for(var d=df,e=0;e<a.length;++e){var f=a[e];if(b(f)){var h=f.path;if(f.Ga)c.contains(h)?(h=T(c,h),d=ef(d,h,f.Ga)):h.contains(c)&&(h=T(h,c),d=ef(d,G,f.Ga.Q(h)));else if(f.children)if(c.contains(h))h=T(c,h),d=ff(d,h,f.children);else{if(h.contains(c))if(h=T(h,c),h.e())d=ff(d,G,f.children);else if(f=w(f.children,E(h)))f=f.Q(H(h)),d=ef(d,G,f)}else throw Fc("WriteRecord should have .snap or .children");}}return d}function qf(a,b){this.Mb=a;this.X=b}g=qf.prototype;
	g.za=function(a,b,c){return this.X.za(this.Mb,a,b,c)};g.yc=function(a){return this.X.yc(this.Mb,a)};g.ld=function(a,b,c){return this.X.ld(this.Mb,a,b,c)};g.tc=function(a){return this.X.tc(this.Mb.u(a))};g.ne=function(a,b,c,d,e){return this.X.ne(this.Mb,a,b,c,d,e)};g.xc=function(a,b){return this.X.xc(this.Mb,a,b)};g.u=function(a){return new qf(this.Mb.u(a),this.X)};function rf(){this.ya={}}g=rf.prototype;g.e=function(){return wa(this.ya)};g.ab=function(a,b,c){var d=a.source.Hb;if(null!==d)return d=w(this.ya,d),K(null!=d,"SyncTree gave us an op for an invalid query."),d.ab(a,b,c);var e=[];r(this.ya,function(d){e=e.concat(d.ab(a,b,c))});return e};g.Pb=function(a,b,c,d,e){var f=a.va(),h=w(this.ya,f);if(!h){var h=c.za(e?d:null),k=!1;h?k=!0:(h=d instanceof R?c.yc(d):C,k=!1);h=new ve(a,new Id(new tb(h,k,!1),new tb(d,e,!1)));this.ya[f]=h}h.Pb(b);return ye(h,b)};
	g.jb=function(a,b,c){var d=a.va(),e=[],f=[],h=null!=sf(this);if("default"===d){var k=this;r(this.ya,function(a,d){f=f.concat(a.jb(b,c));a.e()&&(delete k.ya[d],S(a.W.n)||e.push(a.W))})}else{var l=w(this.ya,d);l&&(f=f.concat(l.jb(b,c)),l.e()&&(delete this.ya[d],S(l.W.n)||e.push(l.W)))}h&&null==sf(this)&&e.push(new U(a.k,a.path));return{Kg:e,mg:f}};function tf(a){return Pa(ra(a.ya),function(a){return!S(a.W.n)})}g.fb=function(a){var b=null;r(this.ya,function(c){b=b||c.fb(a)});return b};
	function uf(a,b){if(S(b.n))return sf(a);var c=b.va();return w(a.ya,c)}function sf(a){return va(a.ya,function(a){return S(a.W.n)})||null};function vf(a){this.ta=Pd;this.ib=new lf;this.$e={};this.mc={};this.Nc=a}function wf(a,b,c,d,e){var f=a.ib,h=e;K(d>f.Mc,"Stacking an older write on top of newer ones");n(h)||(h=!0);f.na.push({path:b,Ga:c,kd:d,visible:h});h&&(f.T=ef(f.T,b,c));f.Mc=d;return e?xf(a,new Xb($e,b,c)):[]}function yf(a,b,c,d){var e=a.ib;K(d>e.Mc,"Stacking an older merge on top of newer ones");e.na.push({path:b,children:c,kd:d,visible:!0});e.T=ff(e.T,b,c);e.Mc=d;c=Oe(c);return xf(a,new ze($e,b,c))}
	function zf(a,b,c){c=c||!1;var d=mf(a.ib,b);if(a.ib.Rd(b)){var e=Pd;null!=d.Ga?e=e.set(G,!0):ib(d.children,function(a,b){e=e.set(new L(a),b)});return xf(a,new Ze(d.path,e,c))}return[]}function Af(a,b,c){c=Oe(c);return xf(a,new ze(bf,b,c))}function Bf(a,b,c,d){d=Cf(a,d);if(null!=d){var e=Df(d);d=e.path;e=e.Hb;b=T(d,b);c=new Xb(new af(!1,!0,e,!0),b,c);return Ef(a,d,c)}return[]}
	function Ff(a,b,c,d){if(d=Cf(a,d)){var e=Df(d);d=e.path;e=e.Hb;b=T(d,b);c=Oe(c);c=new ze(new af(!1,!0,e,!0),b,c);return Ef(a,d,c)}return[]}
	vf.prototype.Pb=function(a,b){var c=a.path,d=null,e=!1;Ve(this.ta,c,function(a,b){var f=T(a,c);d=d||b.fb(f);e=e||null!=sf(b)});var f=this.ta.get(c);f?(e=e||null!=sf(f),d=d||f.fb(G)):(f=new rf,this.ta=this.ta.set(c,f));var h;null!=d?h=!0:(h=!1,d=C,Ye(this.ta.subtree(c),function(a,b){var c=b.fb(G);c&&(d=d.U(a,c))}));var k=null!=uf(f,a);if(!k&&!S(a.n)){var l=Gf(a);K(!(l in this.mc),"View does not exist, but we have a tag");var m=Hf++;this.mc[l]=m;this.$e["_"+m]=l}h=f.Pb(a,b,new qf(c,this.ib),d,h);k||
	e||(f=uf(f,a),h=h.concat(If(this,a,f)));return h};
	vf.prototype.jb=function(a,b,c){var d=a.path,e=this.ta.get(d),f=[];if(e&&("default"===a.va()||null!=uf(e,a))){f=e.jb(a,b,c);e.e()&&(this.ta=this.ta.remove(d));e=f.Kg;f=f.mg;b=-1!==Ua(e,function(a){return S(a.n)});var h=Te(this.ta,d,function(a,b){return null!=sf(b)});if(b&&!h&&(d=this.ta.subtree(d),!d.e()))for(var d=Jf(d),k=0;k<d.length;++k){var l=d[k],m=l.W,l=Kf(this,l);this.Nc.Xe(Lf(m),Mf(this,m),l.xd,l.H)}if(!h&&0<e.length&&!c)if(b)this.Nc.ae(Lf(a),null);else{var t=this;Oa(e,function(a){a.va();
	var b=t.mc[Gf(a)];t.Nc.ae(Lf(a),b)})}Nf(this,e)}return f};vf.prototype.za=function(a,b){var c=this.ib,d=Te(this.ta,a,function(b,c){var d=T(b,a);if(d=c.fb(d))return d});return c.za(a,d,b,!0)};function Jf(a){return Re(a,function(a,c,d){if(c&&null!=sf(c))return[sf(c)];var e=[];c&&(e=tf(c));r(d,function(a){e=e.concat(a)});return e})}function Nf(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!S(d.n)){var d=Gf(d),e=a.mc[d];delete a.mc[d];delete a.$e["_"+e]}}}
	function Lf(a){return S(a.n)&&!fe(a.n)?a.Ib():a}function If(a,b,c){var d=b.path,e=Mf(a,b);c=Kf(a,c);b=a.Nc.Xe(Lf(b),e,c.xd,c.H);d=a.ta.subtree(d);if(e)K(null==sf(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=Re(d,function(a,b,c){if(!a.e()&&b&&null!=sf(b))return[we(sf(b))];var d=[];b&&(d=d.concat(Qa(tf(b),function(a){return a.W})));r(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Nc.ae(Lf(c),Mf(a,c));return b}
	function Kf(a,b){var c=b.W,d=Mf(a,c);return{xd:function(){return(b.w()||C).hash()},H:function(b){if("ok"===b){if(d){var f=c.path;if(b=Cf(a,d)){var h=Df(b);b=h.path;h=h.Hb;f=T(b,f);f=new Zb(new af(!1,!0,h,!0),f);b=Ef(a,b,f)}else b=[]}else b=xf(a,new Zb(bf,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
	(f="The service is unavailable");f=Error(b+": "+f);f.code=b.toUpperCase();return a.jb(c,null,f)}}}function Gf(a){return a.path.toString()+"$"+a.va()}function Df(a){var b=a.indexOf("$");K(-1!==b&&b<a.length-1,"Bad queryKey.");return{Hb:a.substr(b+1),path:new L(a.substr(0,b))}}function Cf(a,b){var c=a.$e,d="_"+b;return d in c?c[d]:void 0}function Mf(a,b){var c=Gf(b);return w(a.mc,c)}var Hf=1;
	function Ef(a,b,c){var d=a.ta.get(b);K(d,"Missing sync point for query tag that we're tracking");return d.ab(c,new qf(b,a.ib),null)}function xf(a,b){return Of(a,b,a.ta,null,new qf(G,a.ib))}function Of(a,b,c,d,e){if(b.path.e())return Pf(a,b,c,d,e);var f=c.get(G);null==d&&null!=f&&(d=f.fb(G));var h=[],k=E(b.path),l=b.Xc(k);if((c=c.children.get(k))&&l)var m=d?d.R(k):null,k=e.u(k),h=h.concat(Of(a,l,c,m,k));f&&(h=h.concat(f.ab(b,e,d)));return h}
	function Pf(a,b,c,d,e){var f=c.get(G);null==d&&null!=f&&(d=f.fb(G));var h=[];c.children.ia(function(c,f){var m=d?d.R(c):null,t=e.u(c),z=b.Xc(c);z&&(h=h.concat(Pf(a,z,f,m,t)))});f&&(h=h.concat(f.ab(b,e,d)));return h};function Qf(){this.children={};this.nd=0;this.value=null}function Rf(a,b,c){this.Gd=a?a:"";this.Zc=b?b:null;this.A=c?c:new Qf}function Sf(a,b){for(var c=b instanceof L?b:new L(b),d=a,e;null!==(e=E(c));)d=new Rf(e,d,w(d.A.children,e)||new Qf),c=H(c);return d}g=Rf.prototype;g.Ca=function(){return this.A.value};function Tf(a,b){K("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;Uf(a)}g.clear=function(){this.A.value=null;this.A.children={};this.A.nd=0;Uf(this)};
	g.wd=function(){return 0<this.A.nd};g.e=function(){return null===this.Ca()&&!this.wd()};g.P=function(a){var b=this;r(this.A.children,function(c,d){a(new Rf(d,b,c))})};function Vf(a,b,c,d){c&&!d&&b(a);a.P(function(a){Vf(a,b,!0,d)});c&&d&&b(a)}function Wf(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}g.path=function(){return new L(null===this.Zc?this.Gd:this.Zc.path()+"/"+this.Gd)};g.name=function(){return this.Gd};g.parent=function(){return this.Zc};
	function Uf(a){if(null!==a.Zc){var b=a.Zc,c=a.Gd,d=a.e(),e=v(b.A.children,c);d&&e?(delete b.A.children[c],b.A.nd--,Uf(b)):d||e||(b.A.children[c]=a.A,b.A.nd++,Uf(b))}};var Xf=/[\[\].#$\/\u0000-\u001F\u007F]/,Yf=/[\[\].#$\u0000-\u001F\u007F]/,Zf=/^[a-zA-Z][a-zA-Z._\-+]+$/;function $f(a){return p(a)&&0!==a.length&&!Xf.test(a)}function ag(a){return null===a||p(a)||ga(a)&&!Qc(a)||ia(a)&&v(a,".sv")}function bg(a,b,c,d){d&&!n(b)||cg(y(a,1,d),b,c)}
	function cg(a,b,c){c instanceof L&&(c=new Je(c,a));if(!n(b))throw Error(a+"contains undefined "+Le(c));if(ha(b))throw Error(a+"contains a function "+Le(c)+" with contents: "+b.toString());if(Qc(b))throw Error(a+"contains "+b.toString()+" "+Le(c));if(p(b)&&b.length>10485760/3&&10485760<Zc(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+Le(c)+" ('"+b.substring(0,50)+"...')");if(ia(b)){var d=!1,e=!1;ib(b,function(b,h){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
	!0,!$f(b)))throw Error(a+" contains an invalid key ("+b+") "+Le(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);cg(a,h,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+Le(c)+" in addition to actual children.");}}
	function dg(a,b){var c,d;for(c=0;c<b.length;c++){d=b[c];for(var e=d.slice(),f=0;f<e.length;f++)if((".priority"!==e[f]||f!==e.length-1)&&!$f(e[f]))throw Error(a+"contains an invalid key ("+e[f]+") in path "+d.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');}b.sort(Ie);e=null;for(c=0;c<b.length;c++){d=b[c];if(null!==e&&e.contains(d))throw Error(a+"contains a path "+e.toString()+" that is ancestor of another path "+d.toString());e=d}}
	function eg(a,b,c){var d=y(a,1,!1);if(!ia(b)||ea(b))throw Error(d+" must be an object containing the children to replace.");var e=[];ib(b,function(a,b){var k=new L(a);cg(d,b,c.u(k));if(".priority"===Ld(k)&&!ag(b))throw Error(d+"contains an invalid value for '"+k.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");e.push(k)});dg(d,e)}
	function fg(a,b,c){if(Qc(c))throw Error(y(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!ag(c))throw Error(y(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
	function gg(a,b,c){if(!c||n(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(y(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function hg(a,b){if(n(b)&&!$f(b))throw Error(y(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
	function ig(a,b){if(!p(b)||0===b.length||Yf.test(b))throw Error(y(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function jg(a,b){if(".info"===E(b))throw Error(a+" failed: Can't modify data under /.info/");}function kg(a,b){if(!p(b))throw Error(y(a,1,!1)+"must be a valid credential (a string).");}function lg(a,b,c){if(!p(c))throw Error(y(a,b,!1)+"must be a valid string.");}
	function mg(a,b){lg(a,1,b);if(!Zf.test(b))throw Error(y(a,1,!1)+"'"+b+"' is not a valid authentication provider.");}function ng(a,b,c,d){if(!d||n(c))if(!ia(c)||null===c)throw Error(y(a,b,d)+"must be a valid object.");}function og(a,b,c){if(!ia(b)||!v(b,c))throw Error(y(a,1,!1)+'must contain the key "'+c+'"');if(!p(w(b,c)))throw Error(y(a,1,!1)+'must contain the key "'+c+'" with type "string"');};function pg(){this.set={}}g=pg.prototype;g.add=function(a,b){this.set[a]=null!==b?b:!0};g.contains=function(a){return v(this.set,a)};g.get=function(a){return this.contains(a)?this.set[a]:void 0};g.remove=function(a){delete this.set[a]};g.clear=function(){this.set={}};g.e=function(){return wa(this.set)};g.count=function(){return pa(this.set)};function qg(a,b){r(a.set,function(a,d){b(d,a)})}g.keys=function(){var a=[];r(this.set,function(b,c){a.push(c)});return a};function qc(){this.m=this.B=null}qc.prototype.find=function(a){if(null!=this.B)return this.B.Q(a);if(a.e()||null==this.m)return null;var b=E(a);a=H(a);return this.m.contains(b)?this.m.get(b).find(a):null};qc.prototype.nc=function(a,b){if(a.e())this.B=b,this.m=null;else if(null!==this.B)this.B=this.B.G(a,b);else{null==this.m&&(this.m=new pg);var c=E(a);this.m.contains(c)||this.m.add(c,new qc);c=this.m.get(c);a=H(a);c.nc(a,b)}};
	function rg(a,b){if(b.e())return a.B=null,a.m=null,!0;if(null!==a.B){if(a.B.K())return!1;var c=a.B;a.B=null;c.P(N,function(b,c){a.nc(new L(b),c)});return rg(a,b)}return null!==a.m?(c=E(b),b=H(b),a.m.contains(c)&&rg(a.m.get(c),b)&&a.m.remove(c),a.m.e()?(a.m=null,!0):!1):!0}function rc(a,b,c){null!==a.B?c(b,a.B):a.P(function(a,e){var f=new L(b.toString()+"/"+a);rc(e,f,c)})}qc.prototype.P=function(a){null!==this.m&&qg(this.m,function(b,c){a(b,c)})};var sg="auth.firebase.com";function tg(a,b,c){this.od=a||{};this.ee=b||{};this.$a=c||{};this.od.remember||(this.od.remember="default")}var ug=["remember","redirectTo"];function vg(a){var b={},c={};ib(a||{},function(a,e){0<=Na(ug,a)?b[a]=e:c[a]=e});return new tg(b,{},c)};function wg(a,b){this.Qe=["session",a.Od,a.hc].join(":");this.be=b}wg.prototype.set=function(a,b){if(!b)if(this.be.length)b=this.be[0];else throw Error("fb.login.SessionManager : No storage options available!");b.set(this.Qe,a)};wg.prototype.get=function(){var a=Qa(this.be,q(this.qg,this)),a=Pa(a,function(a){return null!==a});Xa(a,function(a,c){return ad(c.token)-ad(a.token)});return 0<a.length?a.shift():null};wg.prototype.qg=function(a){try{var b=a.get(this.Qe);if(b&&b.token)return b}catch(c){}return null};
	wg.prototype.clear=function(){var a=this;Oa(this.be,function(b){b.remove(a.Qe)})};function xg(){return"undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:""}function yg(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xg())}function zg(){return"undefined"!==typeof location&&/^file:\//.test(location.href)}
	function Ag(a){var b=xg();if(""===b)return!1;if("Microsoft Internet Explorer"===navigator.appName){if((b=b.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/))&&1<b.length)return parseFloat(b[1])>=a}else if(-1<b.indexOf("Trident")&&(b=b.match(/rv:([0-9]{2,2}[\.0-9]{0,})/))&&1<b.length)return parseFloat(b[1])>=a;return!1};function Bg(){var a=window.opener.frames,b;for(b=a.length-1;0<=b;b--)try{if(a[b].location.protocol===window.location.protocol&&a[b].location.host===window.location.host&&"__winchan_relay_frame"===a[b].name)return a[b]}catch(c){}return null}function Cg(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)}function Dg(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener&&a.removeEventListener(b,c,!1)}
	function Eg(a){/^https?:\/\//.test(a)||(a=window.location.href);var b=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);return b?b[1]:a}function Fg(a){var b="";try{a=a.replace("#","");var c=lb(a);c&&v(c,"__firebase_request_key")&&(b=w(c,"__firebase_request_key"))}catch(d){}return b}function Gg(){var a=Pc(sg);return a.scheme+"://"+a.host+"/v2"}function Hg(a){return Gg()+"/"+a+"/auth/channel"};function Ig(a){var b=this;this.Ac=a;this.ce="*";Ag(8)?this.Rc=this.zd=Bg():(this.Rc=window.opener,this.zd=window);if(!b.Rc)throw"Unable to find relay frame";Cg(this.zd,"message",q(this.jc,this));Cg(this.zd,"message",q(this.Bf,this));try{Jg(this,{a:"ready"})}catch(c){Cg(this.Rc,"load",function(){Jg(b,{a:"ready"})})}Cg(window,"unload",q(this.Bg,this))}function Jg(a,b){b=B(b);Ag(8)?a.Rc.doPost(b,a.ce):a.Rc.postMessage(b,a.ce)}
	Ig.prototype.jc=function(a){var b=this,c;try{c=nb(a.data)}catch(d){}c&&"request"===c.a&&(Dg(window,"message",this.jc),this.ce=a.origin,this.Ac&&setTimeout(function(){b.Ac(b.ce,c.d,function(a,c){b.dg=!c;b.Ac=void 0;Jg(b,{a:"response",d:a,forceKeepWindowOpen:c})})},0))};Ig.prototype.Bg=function(){try{Dg(this.zd,"message",this.Bf)}catch(a){}this.Ac&&(Jg(this,{a:"error",d:"unknown closed window"}),this.Ac=void 0);try{window.close()}catch(b){}};Ig.prototype.Bf=function(a){if(this.dg&&"die"===a.data)try{window.close()}catch(b){}};function Kg(a){this.pc=Ga()+Ga()+Ga();this.Ef=a}Kg.prototype.open=function(a,b){yc.set("redirect_request_id",this.pc);yc.set("redirect_request_id",this.pc);b.requestId=this.pc;b.redirectTo=b.redirectTo||window.location.href;a+=(/\?/.test(a)?"":"?")+kb(b);window.location=a};Kg.isAvailable=function(){return!zg()&&!yg()};Kg.prototype.Cc=function(){return"redirect"};var Lg={NETWORK_ERROR:"Unable to contact the Firebase server.",SERVER_ERROR:"An unknown server error occurred.",TRANSPORT_UNAVAILABLE:"There are no login transports available for the requested method.",REQUEST_INTERRUPTED:"The browser redirected the page before the login request could complete.",USER_CANCELLED:"The user cancelled authentication."};function Mg(a){var b=Error(w(Lg,a),a);b.code=a;return b};function Ng(a){var b;(b=!a.window_features)||(b=xg(),b=-1!==b.indexOf("Fennec/")||-1!==b.indexOf("Firefox/")&&-1!==b.indexOf("Android"));b&&(a.window_features=void 0);a.window_name||(a.window_name="_blank");this.options=a}
	Ng.prototype.open=function(a,b,c){function d(a){h&&(document.body.removeChild(h),h=void 0);t&&(t=clearInterval(t));Dg(window,"message",e);Dg(window,"unload",d);if(m&&!a)try{m.close()}catch(b){k.postMessage("die",l)}m=k=void 0}function e(a){if(a.origin===l)try{var b=nb(a.data);"ready"===b.a?k.postMessage(z,l):"error"===b.a?(d(!1),c&&(c(b.d),c=null)):"response"===b.a&&(d(b.forceKeepWindowOpen),c&&(c(null,b.d),c=null))}catch(e){}}var f=Ag(8),h,k;if(!this.options.relay_url)return c(Error("invalid arguments: origin of url and relay_url must match"));
	var l=Eg(a);if(l!==Eg(this.options.relay_url))c&&setTimeout(function(){c(Error("invalid arguments: origin of url and relay_url must match"))},0);else{f&&(h=document.createElement("iframe"),h.setAttribute("src",this.options.relay_url),h.style.display="none",h.setAttribute("name","__winchan_relay_frame"),document.body.appendChild(h),k=h.contentWindow);a+=(/\?/.test(a)?"":"?")+kb(b);var m=window.open(a,this.options.window_name,this.options.window_features);k||(k=m);var t=setInterval(function(){m&&m.closed&&
	(d(!1),c&&(c(Mg("USER_CANCELLED")),c=null))},500),z=B({a:"request",d:b});Cg(window,"unload",d);Cg(window,"message",e)}};
	Ng.isAvailable=function(){var a;if(a="postMessage"in window&&!zg())(a=yg()||"undefined"!==typeof navigator&&(!!xg().match(/Windows Phone/)||!!window.Windows&&/^ms-appx:/.test(location.href)))||(a=xg(),a="undefined"!==typeof navigator&&"undefined"!==typeof window&&!!(a.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i)||a.match(/CriOS/)||a.match(/Twitter for iPhone/)||a.match(/FBAN\/FBIOS/)||window.navigator.standalone)),a=!a;return a&&!xg().match(/PhantomJS/)};Ng.prototype.Cc=function(){return"popup"};function Og(a){a.method||(a.method="GET");a.headers||(a.headers={});a.headers.content_type||(a.headers.content_type="application/json");a.headers.content_type=a.headers.content_type.toLowerCase();this.options=a}
	Og.prototype.open=function(a,b,c){function d(){c&&(c(Mg("REQUEST_INTERRUPTED")),c=null)}var e=new XMLHttpRequest,f=this.options.method.toUpperCase(),h;Cg(window,"beforeunload",d);e.onreadystatechange=function(){if(c&&4===e.readyState){var a;if(200<=e.status&&300>e.status){try{a=nb(e.responseText)}catch(b){}c(null,a)}else 500<=e.status&&600>e.status?c(Mg("SERVER_ERROR")):c(Mg("NETWORK_ERROR"));c=null;Dg(window,"beforeunload",d)}};if("GET"===f)a+=(/\?/.test(a)?"":"?")+kb(b),h=null;else{var k=this.options.headers.content_type;
	"application/json"===k&&(h=B(b));"application/x-www-form-urlencoded"===k&&(h=kb(b))}e.open(f,a,!0);a={"X-Requested-With":"XMLHttpRequest",Accept:"application/json;text/plain"};za(a,this.options.headers);for(var l in a)e.setRequestHeader(l,a[l]);e.send(h)};Og.isAvailable=function(){var a;if(a=!!window.XMLHttpRequest)a=xg(),a=!(a.match(/MSIE/)||a.match(/Trident/))||Ag(10);return a};Og.prototype.Cc=function(){return"json"};function Pg(a){this.pc=Ga()+Ga()+Ga();this.Ef=a}
	Pg.prototype.open=function(a,b,c){function d(){c&&(c(Mg("USER_CANCELLED")),c=null)}var e=this,f=Pc(sg),h;b.requestId=this.pc;b.redirectTo=f.scheme+"://"+f.host+"/blank/page.html";a+=/\?/.test(a)?"":"?";a+=kb(b);(h=window.open(a,"_blank","location=no"))&&ha(h.addEventListener)?(h.addEventListener("loadstart",function(a){var b;if(b=a&&a.url)a:{try{var m=document.createElement("a");m.href=a.url;b=m.host===f.host&&"/blank/page.html"===m.pathname;break a}catch(t){}b=!1}b&&(a=Fg(a.url),h.removeEventListener("exit",
	d),h.close(),a=new tg(null,null,{requestId:e.pc,requestKey:a}),e.Ef.requestWithCredential("/auth/session",a,c),c=null)}),h.addEventListener("exit",d)):c(Mg("TRANSPORT_UNAVAILABLE"))};Pg.isAvailable=function(){return yg()};Pg.prototype.Cc=function(){return"redirect"};function Qg(a){a.callback_parameter||(a.callback_parameter="callback");this.options=a;window.__firebase_auth_jsonp=window.__firebase_auth_jsonp||{}}
	Qg.prototype.open=function(a,b,c){function d(){c&&(c(Mg("REQUEST_INTERRUPTED")),c=null)}function e(){setTimeout(function(){window.__firebase_auth_jsonp[f]=void 0;wa(window.__firebase_auth_jsonp)&&(window.__firebase_auth_jsonp=void 0);try{var a=document.getElementById(f);a&&a.parentNode.removeChild(a)}catch(b){}},1);Dg(window,"beforeunload",d)}var f="fn"+(new Date).getTime()+Math.floor(99999*Math.random());b[this.options.callback_parameter]="__firebase_auth_jsonp."+f;a+=(/\?/.test(a)?"":"?")+kb(b);
	Cg(window,"beforeunload",d);window.__firebase_auth_jsonp[f]=function(a){c&&(c(null,a),c=null);e()};Rg(f,a,c)};
	function Rg(a,b,c){setTimeout(function(){try{var d=document.createElement("script");d.type="text/javascript";d.id=a;d.async=!0;d.src=b;d.onerror=function(){var b=document.getElementById(a);null!==b&&b.parentNode.removeChild(b);c&&c(Mg("NETWORK_ERROR"))};var e=document.getElementsByTagName("head");(e&&0!=e.length?e[0]:document.documentElement).appendChild(d)}catch(f){c&&c(Mg("NETWORK_ERROR"))}},0)}Qg.isAvailable=function(){return"undefined"!==typeof document&&null!=document.createElement};
	Qg.prototype.Cc=function(){return"json"};function Sg(a,b,c,d){De.call(this,["auth_status"]);this.F=a;this.df=b;this.Vg=c;this.Le=d;this.sc=new wg(a,[xc,yc]);this.mb=null;this.Se=!1;Tg(this)}ma(Sg,De);g=Sg.prototype;g.xe=function(){return this.mb||null};function Tg(a){yc.get("redirect_request_id")&&Ug(a);var b=a.sc.get();b&&b.token?(Vg(a,b),a.df(b.token,function(c,d){Wg(a,c,d,!1,b.token,b)},function(b,d){Xg(a,"resumeSession()",b,d)})):Vg(a,null)}
	function Yg(a,b,c,d,e,f){"firebaseio-demo.com"===a.F.domain&&O("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com.");a.df(b,function(f,k){Wg(a,f,k,!0,b,c,d||{},e)},function(b,c){Xg(a,"auth()",b,c,f)})}function Zg(a,b){a.sc.clear();Vg(a,null);a.Vg(function(a,d){if("ok"===a)P(b,null);else{var e=(a||"error").toUpperCase(),f=e;d&&(f+=": "+d);f=Error(f);f.code=e;P(b,f)}})}
	function Wg(a,b,c,d,e,f,h,k){"ok"===b?(d&&(b=c.auth,f.auth=b,f.expires=c.expires,f.token=bd(e)?e:"",c=null,b&&v(b,"uid")?c=w(b,"uid"):v(f,"uid")&&(c=w(f,"uid")),f.uid=c,c="custom",b&&v(b,"provider")?c=w(b,"provider"):v(f,"provider")&&(c=w(f,"provider")),f.provider=c,a.sc.clear(),bd(e)&&(h=h||{},c=xc,"sessionOnly"===h.remember&&(c=yc),"none"!==h.remember&&a.sc.set(f,c)),Vg(a,f)),P(k,null,f)):(a.sc.clear(),Vg(a,null),f=a=(b||"error").toUpperCase(),c&&(f+=": "+c),f=Error(f),f.code=a,P(k,f))}
	function Xg(a,b,c,d,e){O(b+" was canceled: "+d);a.sc.clear();Vg(a,null);a=Error(d);a.code=c.toUpperCase();P(e,a)}function $g(a,b,c,d,e){ah(a);c=new tg(d||{},{},c||{});bh(a,[Og,Qg],"/auth/"+b,c,e)}
	function ch(a,b,c,d){ah(a);var e=[Ng,Pg];c=vg(c);"anonymous"===b||"password"===b?setTimeout(function(){P(d,Mg("TRANSPORT_UNAVAILABLE"))},0):(c.ee.window_features="menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top="+("object"===typeof screen?.5*(screen.height-625):0)+",left="+("object"===typeof screen?.5*(screen.width-625):0),c.ee.relay_url=Hg(a.F.hc),c.ee.requestWithCredential=q(a.qc,a),bh(a,e,"/auth/"+b,c,d))}
	function Ug(a){var b=yc.get("redirect_request_id");if(b){var c=yc.get("redirect_client_options");yc.remove("redirect_request_id");yc.remove("redirect_client_options");var d=[Og,Qg],b={requestId:b,requestKey:Fg(document.location.hash)},c=new tg(c,{},b);a.Se=!0;try{document.location.hash=document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/,"")}catch(e){}bh(a,d,"/auth/session",c,function(){this.Se=!1}.bind(a))}}
	g.se=function(a,b){ah(this);var c=vg(a);c.$a._method="POST";this.qc("/users",c,function(a,c){a?P(b,a):P(b,a,c)})};g.Te=function(a,b){var c=this;ah(this);var d="/users/"+encodeURIComponent(a.email),e=vg(a);e.$a._method="DELETE";this.qc(d,e,function(a,d){!a&&d&&d.uid&&c.mb&&c.mb.uid&&c.mb.uid===d.uid&&Zg(c);P(b,a)})};g.pe=function(a,b){ah(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=vg(a);d.$a._method="PUT";d.$a.password=a.newPassword;this.qc(c,d,function(a){P(b,a)})};
	g.oe=function(a,b){ah(this);var c="/users/"+encodeURIComponent(a.oldEmail)+"/email",d=vg(a);d.$a._method="PUT";d.$a.email=a.newEmail;d.$a.password=a.password;this.qc(c,d,function(a){P(b,a)})};g.Ve=function(a,b){ah(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=vg(a);d.$a._method="POST";this.qc(c,d,function(a){P(b,a)})};g.qc=function(a,b,c){dh(this,[Og,Qg],a,b,c)};
	function bh(a,b,c,d,e){dh(a,b,c,d,function(b,c){!b&&c&&c.token&&c.uid?Yg(a,c.token,c,d.od,function(a,b){a?P(e,a):P(e,null,b)}):P(e,b||Mg("UNKNOWN_ERROR"))})}
	function dh(a,b,c,d,e){b=Pa(b,function(a){return"function"===typeof a.isAvailable&&a.isAvailable()});0===b.length?setTimeout(function(){P(e,Mg("TRANSPORT_UNAVAILABLE"))},0):(b=new (b.shift())(d.ee),d=jb(d.$a),d.v="js-"+hb,d.transport=b.Cc(),d.suppress_status_codes=!0,a=Gg()+"/"+a.F.hc+c,b.open(a,d,function(a,b){if(a)P(e,a);else if(b&&b.error){var c=Error(b.error.message);c.code=b.error.code;c.details=b.error.details;P(e,c)}else P(e,null,b)}))}
	function Vg(a,b){var c=null!==a.mb||null!==b;a.mb=b;c&&a.fe("auth_status",b);a.Le(null!==b)}g.Ae=function(a){K("auth_status"===a,'initial event must be of type "auth_status"');return this.Se?null:[this.mb]};function ah(a){var b=a.F;if("firebaseio.com"!==b.domain&&"firebaseio-demo.com"!==b.domain&&"auth.firebase.com"===sg)throw Error("This custom Firebase server ('"+a.F.domain+"') does not support delegated login.");};var Cc="websocket",Dc="long_polling";function eh(a){this.jc=a;this.Nd=[];this.Sb=0;this.qe=-1;this.Fb=null}function fh(a,b,c){a.qe=b;a.Fb=c;a.qe<a.Sb&&(a.Fb(),a.Fb=null)}function gh(a,b,c){for(a.Nd[b]=c;a.Nd[a.Sb];){var d=a.Nd[a.Sb];delete a.Nd[a.Sb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;Db(function(){f.jc(d[e])})}if(a.Sb===a.qe){a.Fb&&(clearTimeout(a.Fb),a.Fb(),a.Fb=null);break}a.Sb++}};function hh(a,b,c,d){this.re=a;this.f=Mc(a);this.nb=this.ob=0;this.Ua=Rb(b);this.Qf=c;this.Hc=!1;this.Bb=d;this.jd=function(a){return Bc(b,Dc,a)}}var ih,jh;
	hh.prototype.open=function(a,b){this.hf=0;this.la=b;this.Af=new eh(a);this.zb=!1;var c=this;this.qb=setTimeout(function(){c.f("Timed out trying to connect.");c.gb();c.qb=null},Math.floor(3E4));Rc(function(){if(!c.zb){c.Sa=new kh(function(a,b,d,k,l){lh(c,arguments);if(c.Sa)if(c.qb&&(clearTimeout(c.qb),c.qb=null),c.Hc=!0,"start"==a)c.id=b,c.Gf=d;else if("close"===a)b?(c.Sa.Xd=!1,fh(c.Af,b,function(){c.gb()})):c.gb();else throw Error("Unrecognized command received: "+a);},function(a,b){lh(c,arguments);
	gh(c.Af,a,b)},function(){c.gb()},c.jd);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Sa.he&&(a.cb=c.Sa.he);a.v="5";c.Qf&&(a.s=c.Qf);c.Bb&&(a.ls=c.Bb);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.jd(a);c.f("Connecting via long-poll to "+a);mh(c.Sa,a,function(){})}})};
	hh.prototype.start=function(){var a=this.Sa,b=this.Gf;a.ug=this.id;a.vg=b;for(a.le=!0;nh(a););a=this.id;b=this.Gf;this.gc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.gc.src=this.jd(c);this.gc.style.display="none";document.body.appendChild(this.gc)};
	hh.isAvailable=function(){return ih||!jh&&"undefined"!==typeof document&&null!=document.createElement&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.Xg)&&!0};g=hh.prototype;g.Ed=function(){};g.dd=function(){this.zb=!0;this.Sa&&(this.Sa.close(),this.Sa=null);this.gc&&(document.body.removeChild(this.gc),this.gc=null);this.qb&&(clearTimeout(this.qb),this.qb=null)};
	g.gb=function(){this.zb||(this.f("Longpoll is closing itself"),this.dd(),this.la&&(this.la(this.Hc),this.la=null))};g.close=function(){this.zb||(this.f("Longpoll is being closed."),this.dd())};g.send=function(a){a=B(a);this.ob+=a.length;Ob(this.Ua,"bytes_sent",a.length);a=Ic(a);a=fb(a,!0);a=Vc(a,1840);for(var b=0;b<a.length;b++){var c=this.Sa;c.ad.push({Mg:this.hf,Ug:a.length,kf:a[b]});c.le&&nh(c);this.hf++}};function lh(a,b){var c=B(b).length;a.nb+=c;Ob(a.Ua,"bytes_received",c)}
	function kh(a,b,c,d){this.jd=d;this.hb=c;this.Pe=new pg;this.ad=[];this.te=Math.floor(1E8*Math.random());this.Xd=!0;this.he=Ec();window["pLPCommand"+this.he]=a;window["pRTLPCB"+this.he]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||Cb("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
	a.contentDocument?a.eb=a.contentDocument:a.contentWindow?a.eb=a.contentWindow.document:a.document&&(a.eb=a.document);this.Ea=a;a="";this.Ea.src&&"javascript:"===this.Ea.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ea.eb.open(),this.Ea.eb.write(a),this.Ea.eb.close()}catch(f){Cb("frame writing exception"),f.stack&&Cb(f.stack),Cb(f)}}
	kh.prototype.close=function(){this.le=!1;if(this.Ea){this.Ea.eb.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ea&&(document.body.removeChild(a.Ea),a.Ea=null)},Math.floor(0))}var b=this.hb;b&&(this.hb=null,b())};
	function nh(a){if(a.le&&a.Xd&&a.Pe.count()<(0<a.ad.length?2:1)){a.te++;var b={};b.id=a.ug;b.pw=a.vg;b.ser=a.te;for(var b=a.jd(b),c="",d=0;0<a.ad.length;)if(1870>=a.ad[0].kf.length+30+c.length){var e=a.ad.shift(),c=c+"&seg"+d+"="+e.Mg+"&ts"+d+"="+e.Ug+"&d"+d+"="+e.kf;d++}else break;oh(a,b+c,a.te);return!0}return!1}function oh(a,b,c){function d(){a.Pe.remove(c);nh(a)}a.Pe.add(c,1);var e=setTimeout(d,Math.floor(25E3));mh(a,b,function(){clearTimeout(e);d()})}
	function mh(a,b,c){setTimeout(function(){try{if(a.Xd){var d=a.Ea.eb.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){Cb("Long-poll script failed to load: "+b);a.Xd=!1;a.close()};a.Ea.eb.body.appendChild(d)}}catch(e){}},Math.floor(1))};var ph=null;"undefined"!==typeof MozWebSocket?ph=MozWebSocket:"undefined"!==typeof WebSocket&&(ph=WebSocket);function qh(a,b,c,d){this.re=a;this.f=Mc(this.re);this.frames=this.Kc=null;this.nb=this.ob=this.bf=0;this.Ua=Rb(b);a={v:"5"};"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");c&&(a.s=c);d&&(a.ls=d);this.ef=Bc(b,Cc,a)}var rh;
	qh.prototype.open=function(a,b){this.hb=b;this.zg=a;this.f("Websocket connecting to "+this.ef);this.Hc=!1;xc.set("previous_websocket_failure",!0);try{this.ua=new ph(this.ef)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.gb();return}var e=this;this.ua.onopen=function(){e.f("Websocket connected.");e.Hc=!0};this.ua.onclose=function(){e.f("Websocket connection was disconnected.");e.ua=null;e.gb()};this.ua.onmessage=function(a){if(null!==e.ua)if(a=a.data,e.nb+=
	a.length,Ob(e.Ua,"bytes_received",a.length),sh(e),null!==e.frames)th(e,a);else{a:{K(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.bf=b;e.frames=[];a=null;break a}}e.bf=1;e.frames=[]}null!==a&&th(e,a)}};this.ua.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.gb()}};qh.prototype.start=function(){};
	qh.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==ph&&!rh};qh.responsesRequiredToBeHealthy=2;qh.healthyTimeout=3E4;g=qh.prototype;g.Ed=function(){xc.remove("previous_websocket_failure")};function th(a,b){a.frames.push(b);if(a.frames.length==a.bf){var c=a.frames.join("");a.frames=null;c=nb(c);a.zg(c)}}
	g.send=function(a){sh(this);a=B(a);this.ob+=a.length;Ob(this.Ua,"bytes_sent",a.length);a=Vc(a,16384);1<a.length&&this.ua.send(String(a.length));for(var b=0;b<a.length;b++)this.ua.send(a[b])};g.dd=function(){this.zb=!0;this.Kc&&(clearInterval(this.Kc),this.Kc=null);this.ua&&(this.ua.close(),this.ua=null)};g.gb=function(){this.zb||(this.f("WebSocket is closing itself"),this.dd(),this.hb&&(this.hb(this.Hc),this.hb=null))};g.close=function(){this.zb||(this.f("WebSocket is being closed"),this.dd())};
	function sh(a){clearInterval(a.Kc);a.Kc=setInterval(function(){a.ua&&a.ua.send("0");sh(a)},Math.floor(45E3))};function uh(a){vh(this,a)}var wh=[hh,qh];function vh(a,b){var c=qh&&qh.isAvailable(),d=c&&!(xc.wf||!0===xc.get("previous_websocket_failure"));b.Wg&&(c||O("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.gd=[qh];else{var e=a.gd=[];Wc(wh,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function xh(a){if(0<a.gd.length)return a.gd[0];throw Error("No transports available");};function yh(a,b,c,d,e,f,h){this.id=a;this.f=Mc("c:"+this.id+":");this.jc=c;this.Wc=d;this.la=e;this.Ne=f;this.F=b;this.Md=[];this.ff=0;this.Pf=new uh(b);this.Ta=0;this.Bb=h;this.f("Connection created");zh(this)}
	function zh(a){var b=xh(a.Pf);a.J=new b("c:"+a.id+":"+a.ff++,a.F,void 0,a.Bb);a.Re=b.responsesRequiredToBeHealthy||0;var c=Ah(a,a.J),d=Bh(a,a.J);a.hd=a.J;a.cd=a.J;a.D=null;a.Ab=!1;setTimeout(function(){a.J&&a.J.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.yd=setTimeout(function(){a.yd=null;a.Ab||(a.J&&102400<a.J.nb?(a.f("Connection exceeded healthy timeout but has received "+a.J.nb+" bytes.  Marking connection healthy."),a.Ab=!0,a.J.Ed()):a.J&&10240<a.J.ob?a.f("Connection exceeded healthy timeout but has sent "+
	a.J.ob+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function Bh(a,b){return function(c){b===a.J?(a.J=null,c||0!==a.Ta?1===a.Ta&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.F.Ya.substr(0,2)&&(xc.remove("host:"+a.F.host),a.F.Ya=a.F.host)),a.close()):b===a.D?(a.f("Secondary connection lost."),c=a.D,a.D=null,a.hd!==c&&a.cd!==c||a.close()):a.f("closing an old connection")}}
	function Ah(a,b){return function(c){if(2!=a.Ta)if(b===a.cd){var d=Tc("t",c);c=Tc("d",c);if("c"==d){if(d=Tc("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.Nf=c.s;Ac(a.F,f);0==a.Ta&&(a.J.start(),Ch(a,a.J,d),"5"!==e&&O("Protocol version mismatch detected"),c=a.Pf,(c=1<c.gd.length?c.gd[1]:null)&&Dh(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.cd=a.D;for(c=0;c<a.Md.length;++c)a.Id(a.Md[c]);a.Md=[];Eh(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
	a.Ne&&(a.Ne(c),a.Ne=null),a.la=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),Ac(a.F,c),1===a.Ta?a.close():(Fh(a),zh(a))):"e"===d?Nc("Server Error: "+c):"o"===d?(a.f("got pong on primary."),Gh(a),Hh(a)):Nc("Unknown control packet command: "+d)}else"d"==d&&a.Id(c)}else if(b===a.D)if(d=Tc("t",c),c=Tc("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?Ih(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.D.close(),a.hd!==a.D&&a.cd!==a.D||a.close()):"o"===c&&(a.f("got pong on secondary."),
	a.Mf--,Ih(a)));else if("d"==d)a.Md.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}yh.prototype.Fa=function(a){Jh(this,{t:"d",d:a})};function Eh(a){a.hd===a.D&&a.cd===a.D&&(a.f("cleaning up and promoting a connection: "+a.D.re),a.J=a.D,a.D=null)}
	function Ih(a){0>=a.Mf?(a.f("Secondary connection is healthy."),a.Ab=!0,a.D.Ed(),a.D.start(),a.f("sending client ack on secondary"),a.D.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.J.send({t:"c",d:{t:"n",d:{}}}),a.hd=a.D,Eh(a)):(a.f("sending ping on secondary."),a.D.send({t:"c",d:{t:"p",d:{}}}))}yh.prototype.Id=function(a){Gh(this);this.jc(a)};function Gh(a){a.Ab||(a.Re--,0>=a.Re&&(a.f("Primary connection is healthy."),a.Ab=!0,a.J.Ed()))}
	function Dh(a,b){a.D=new b("c:"+a.id+":"+a.ff++,a.F,a.Nf);a.Mf=b.responsesRequiredToBeHealthy||0;a.D.open(Ah(a,a.D),Bh(a,a.D));setTimeout(function(){a.D&&(a.f("Timed out trying to upgrade."),a.D.close())},Math.floor(6E4))}function Ch(a,b,c){a.f("Realtime connection established.");a.J=b;a.Ta=1;a.Wc&&(a.Wc(c,a.Nf),a.Wc=null);0===a.Re?(a.f("Primary connection is healthy."),a.Ab=!0):setTimeout(function(){Hh(a)},Math.floor(5E3))}
	function Hh(a){a.Ab||1!==a.Ta||(a.f("sending ping on primary."),Jh(a,{t:"c",d:{t:"p",d:{}}}))}function Jh(a,b){if(1!==a.Ta)throw"Connection is not connected";a.hd.send(b)}yh.prototype.close=function(){2!==this.Ta&&(this.f("Closing realtime connection."),this.Ta=2,Fh(this),this.la&&(this.la(),this.la=null))};function Fh(a){a.f("Shutting down all connections");a.J&&(a.J.close(),a.J=null);a.D&&(a.D.close(),a.D=null);a.yd&&(clearTimeout(a.yd),a.yd=null)};function Kh(a,b,c,d){this.id=Lh++;this.f=Mc("p:"+this.id+":");this.xf=this.Ee=!1;this.$={};this.qa=[];this.Yc=0;this.Vc=[];this.oa=!1;this.Za=1E3;this.Fd=3E5;this.Gb=b;this.Uc=c;this.Oe=d;this.F=a;this.sb=this.Aa=this.Ia=this.Bb=this.We=null;this.Ob=!1;this.Td={};this.Lg=0;this.nf=!0;this.Lc=this.Ge=null;Mh(this,0);He.ub().Eb("visible",this.Cg,this);-1===a.host.indexOf("fblocal")&&Ge.ub().Eb("online",this.Ag,this)}var Lh=0,Nh=0;g=Kh.prototype;
	g.Fa=function(a,b,c){var d=++this.Lg;a={r:d,a:a,b:b};this.f(B(a));K(this.oa,"sendRequest call when we're not connected not allowed.");this.Ia.Fa(a);c&&(this.Td[d]=c)};g.yf=function(a,b,c,d){var e=a.va(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.$[f]=this.$[f]||{};K(fe(a.n)||!S(a.n),"listen() called for non-default but complete query");K(!this.$[f][e],"listen() called twice for same path/queryId.");a={H:d,xd:b,Ig:a,tag:c};this.$[f][e]=a;this.oa&&Oh(this,a)};
	function Oh(a,b){var c=b.Ig,d=c.path.toString(),e=c.va();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=ee(c.n),f.t=b.tag);f.h=b.xd();a.Fa("q",f,function(f){var k=f.d,l=f.s;if(k&&"object"===typeof k&&v(k,"w")){var m=w(k,"w");ea(m)&&0<=Na(m,"no_index")&&O("Using an unspecified index. Consider adding "+('".indexOn": "'+c.n.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.$[d]&&a.$[d][e])===b&&(a.f("listen response",f),"ok"!==l&&Ph(a,d,e),b.H&&b.H(l,
	k))})}g.M=function(a,b,c){this.Aa={ig:a,of:!1,zc:b,md:c};this.f("Authenticating using credential: "+a);Qh(this);(b=40==a.length)||(a=$c(a).Bc,b="object"===typeof a&&!0===w(a,"admin"));b&&(this.f("Admin auth credential detected.  Reducing max reconnect time."),this.Fd=3E4)};g.ge=function(a){delete this.Aa;this.oa&&this.Fa("unauth",{},function(b){a(b.s,b.d)})};
	function Qh(a){var b=a.Aa;a.oa&&b&&a.Fa("auth",{cred:b.ig},function(c){var d=c.s;c=c.d||"error";"ok"!==d&&a.Aa===b&&delete a.Aa;b.of?"ok"!==d&&b.md&&b.md(d,c):(b.of=!0,b.zc&&b.zc(d,c))})}g.Rf=function(a,b){var c=a.path.toString(),d=a.va();this.f("Unlisten called for "+c+" "+d);K(fe(a.n)||!S(a.n),"unlisten() called for non-default but complete query");if(Ph(this,c,d)&&this.oa){var e=ee(a.n);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.Fa("n",c)}};
	g.Me=function(a,b,c){this.oa?Rh(this,"o",a,b,c):this.Vc.push({$c:a,action:"o",data:b,H:c})};g.Cf=function(a,b,c){this.oa?Rh(this,"om",a,b,c):this.Vc.push({$c:a,action:"om",data:b,H:c})};g.Jd=function(a,b){this.oa?Rh(this,"oc",a,null,b):this.Vc.push({$c:a,action:"oc",data:null,H:b})};function Rh(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.Fa(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}g.put=function(a,b,c,d){Sh(this,"p",a,b,c,d)};
	g.zf=function(a,b,c,d){Sh(this,"m",a,b,c,d)};function Sh(a,b,c,d,e,f){d={p:c,d:d};n(f)&&(d.h=f);a.qa.push({action:b,Jf:d,H:e});a.Yc++;b=a.qa.length-1;a.oa?Th(a,b):a.f("Buffering put: "+c)}function Th(a,b){var c=a.qa[b].action,d=a.qa[b].Jf,e=a.qa[b].H;a.qa[b].Jg=a.oa;a.Fa(c,d,function(d){a.f(c+" response",d);delete a.qa[b];a.Yc--;0===a.Yc&&(a.qa=[]);e&&e(d.s,d.d)})}
	g.Ue=function(a){this.oa&&(a={c:a},this.f("reportStats",a),this.Fa("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d)}))};
	g.Id=function(a){if("r"in a){this.f("from server: "+B(a));var b=a.r,c=this.Td[b];c&&(delete this.Td[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,c=a.b,this.f("handleServerMessage",b,c),"d"===b?this.Gb(c.p,c.d,!1,c.t):"m"===b?this.Gb(c.p,c.d,!0,c.t):"c"===b?Uh(this,c.p,c.q):"ac"===b?(a=c.s,b=c.d,c=this.Aa,delete this.Aa,c&&c.md&&c.md(a,b)):"sd"===b?this.We?this.We(c):"msg"in c&&"undefined"!==typeof console&&console.log("FIREBASE: "+c.msg.replace("\n",
	"\nFIREBASE: ")):Nc("Unrecognized action received from server: "+B(b)+"\nAre you using the latest client?"))}};g.Wc=function(a,b){this.f("connection ready");this.oa=!0;this.Lc=(new Date).getTime();this.Oe({serverTimeOffset:a-(new Date).getTime()});this.Bb=b;if(this.nf){var c={};c["sdk.js."+hb.replace(/\./g,"-")]=1;yg()&&(c["framework.cordova"]=1);this.Ue(c)}Vh(this);this.nf=!1;this.Uc(!0)};
	function Mh(a,b){K(!a.Ia,"Scheduling a connect when we're already connected/ing?");a.sb&&clearTimeout(a.sb);a.sb=setTimeout(function(){a.sb=null;Wh(a)},Math.floor(b))}g.Cg=function(a){a&&!this.Ob&&this.Za===this.Fd&&(this.f("Window became visible.  Reducing delay."),this.Za=1E3,this.Ia||Mh(this,0));this.Ob=a};g.Ag=function(a){a?(this.f("Browser went online."),this.Za=1E3,this.Ia||Mh(this,0)):(this.f("Browser went offline.  Killing connection."),this.Ia&&this.Ia.close())};
	g.Df=function(){this.f("data client disconnected");this.oa=!1;this.Ia=null;for(var a=0;a<this.qa.length;a++){var b=this.qa[a];b&&"h"in b.Jf&&b.Jg&&(b.H&&b.H("disconnect"),delete this.qa[a],this.Yc--)}0===this.Yc&&(this.qa=[]);this.Td={};Xh(this)&&(this.Ob?this.Lc&&(3E4<(new Date).getTime()-this.Lc&&(this.Za=1E3),this.Lc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Za=this.Fd,this.Ge=(new Date).getTime()),a=Math.max(0,this.Za-((new Date).getTime()-this.Ge)),a*=Math.random(),this.f("Trying to reconnect in "+
	a+"ms"),Mh(this,a),this.Za=Math.min(this.Fd,1.3*this.Za));this.Uc(!1)};function Wh(a){if(Xh(a)){a.f("Making a connection attempt");a.Ge=(new Date).getTime();a.Lc=null;var b=q(a.Id,a),c=q(a.Wc,a),d=q(a.Df,a),e=a.id+":"+Nh++;a.Ia=new yh(e,a.F,b,c,d,function(b){O(b+" ("+a.F.toString()+")");a.xf=!0},a.Bb)}}g.yb=function(){this.Ee=!0;this.Ia?this.Ia.close():(this.sb&&(clearTimeout(this.sb),this.sb=null),this.oa&&this.Df())};g.rc=function(){this.Ee=!1;this.Za=1E3;this.Ia||Mh(this,0)};
	function Uh(a,b,c){c=c?Qa(c,function(a){return Uc(a)}).join("$"):"default";(a=Ph(a,b,c))&&a.H&&a.H("permission_denied")}function Ph(a,b,c){b=(new L(b)).toString();var d;n(a.$[b])?(d=a.$[b][c],delete a.$[b][c],0===pa(a.$[b])&&delete a.$[b]):d=void 0;return d}function Vh(a){Qh(a);r(a.$,function(b){r(b,function(b){Oh(a,b)})});for(var b=0;b<a.qa.length;b++)a.qa[b]&&Th(a,b);for(;a.Vc.length;)b=a.Vc.shift(),Rh(a,b.action,b.$c,b.data,b.H)}function Xh(a){var b;b=Ge.ub().kc;return!a.xf&&!a.Ee&&b};var V={og:function(){ih=rh=!0}};V.forceLongPolling=V.og;V.pg=function(){jh=!0};V.forceWebSockets=V.pg;V.Pg=function(a,b){a.k.Ra.We=b};V.setSecurityDebugCallback=V.Pg;V.Ye=function(a,b){a.k.Ye(b)};V.stats=V.Ye;V.Ze=function(a,b){a.k.Ze(b)};V.statsIncrementCounter=V.Ze;V.sd=function(a){return a.k.sd};V.dataUpdateCount=V.sd;V.sg=function(a,b){a.k.De=b};V.interceptServerData=V.sg;V.yg=function(a){new Ig(a)};V.onPopupOpen=V.yg;V.Ng=function(a){sg=a};V.setAuthenticationServer=V.Ng;function Q(a,b,c){this.A=a;this.W=b;this.g=c}Q.prototype.I=function(){x("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.I()};Q.prototype.val=Q.prototype.I;Q.prototype.mf=function(){x("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.I(!0)};Q.prototype.exportVal=Q.prototype.mf;Q.prototype.ng=function(){x("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.A.e()};Q.prototype.exists=Q.prototype.ng;
	Q.prototype.u=function(a){x("Firebase.DataSnapshot.child",0,1,arguments.length);ga(a)&&(a=String(a));ig("Firebase.DataSnapshot.child",a);var b=new L(a),c=this.W.u(b);return new Q(this.A.Q(b),c,N)};Q.prototype.child=Q.prototype.u;Q.prototype.Da=function(a){x("Firebase.DataSnapshot.hasChild",1,1,arguments.length);ig("Firebase.DataSnapshot.hasChild",a);var b=new L(a);return!this.A.Q(b).e()};Q.prototype.hasChild=Q.prototype.Da;
	Q.prototype.C=function(){x("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.C().I()};Q.prototype.getPriority=Q.prototype.C;Q.prototype.forEach=function(a){x("Firebase.DataSnapshot.forEach",1,1,arguments.length);A("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.K())return!1;var b=this;return!!this.A.P(this.g,function(c,d){return a(new Q(d,b.W.u(c),N))})};Q.prototype.forEach=Q.prototype.forEach;
	Q.prototype.wd=function(){x("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.K()?!1:!this.A.e()};Q.prototype.hasChildren=Q.prototype.wd;Q.prototype.name=function(){O("Firebase.DataSnapshot.name() being deprecated. Please use Firebase.DataSnapshot.key() instead.");x("Firebase.DataSnapshot.name",0,0,arguments.length);return this.key()};Q.prototype.name=Q.prototype.name;Q.prototype.key=function(){x("Firebase.DataSnapshot.key",0,0,arguments.length);return this.W.key()};
	Q.prototype.key=Q.prototype.key;Q.prototype.Db=function(){x("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.Db()};Q.prototype.numChildren=Q.prototype.Db;Q.prototype.Ib=function(){x("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.W};Q.prototype.ref=Q.prototype.Ib;function Yh(a,b){this.F=a;this.Ua=Rb(a);this.fd=null;this.da=new vb;this.Hd=1;this.Ra=null;b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)?(this.ba=new Ae(this.F,q(this.Gb,this)),setTimeout(q(this.Uc,this,!0),0)):this.ba=this.Ra=new Kh(this.F,q(this.Gb,this),q(this.Uc,this),q(this.Oe,this));this.Sg=Sb(a,q(function(){return new Mb(this.Ua,this.ba)},this));this.uc=new Rf;
	this.Ce=new ob;var c=this;this.Cd=new vf({Xe:function(a,b,f,h){b=[];f=c.Ce.j(a.path);f.e()||(b=xf(c.Cd,new Xb(bf,a.path,f)),setTimeout(function(){h("ok")},0));return b},ae:ba});Zh(this,"connected",!1);this.la=new qc;this.M=new Sg(a,q(this.ba.M,this.ba),q(this.ba.ge,this.ba),q(this.Le,this));this.sd=0;this.De=null;this.L=new vf({Xe:function(a,b,f,h){c.ba.yf(a,f,b,function(b,e){var f=h(b,e);Ab(c.da,a.path,f)});return[]},ae:function(a,b){c.ba.Rf(a,b)}})}g=Yh.prototype;
	g.toString=function(){return(this.F.kb?"https://":"http://")+this.F.host};g.name=function(){return this.F.hc};function $h(a){a=a.Ce.j(new L(".info/serverTimeOffset")).I()||0;return(new Date).getTime()+a}function ai(a){a=a={timestamp:$h(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
	g.Gb=function(a,b,c,d){this.sd++;var e=new L(a);b=this.De?this.De(a,b):b;a=[];d?c?(b=na(b,function(a){return M(a)}),a=Ff(this.L,e,b,d)):(b=M(b),a=Bf(this.L,e,b,d)):c?(d=na(b,function(a){return M(a)}),a=Af(this.L,e,d)):(d=M(b),a=xf(this.L,new Xb(bf,e,d)));d=e;0<a.length&&(d=bi(this,e));Ab(this.da,d,a)};g.Uc=function(a){Zh(this,"connected",a);!1===a&&ci(this)};g.Oe=function(a){var b=this;Wc(a,function(a,d){Zh(b,d,a)})};g.Le=function(a){Zh(this,"authenticated",a)};
	function Zh(a,b,c){b=new L("/.info/"+b);c=M(c);var d=a.Ce;d.Wd=d.Wd.G(b,c);c=xf(a.Cd,new Xb(bf,b,c));Ab(a.da,b,c)}g.Kb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,$g:c});var e=ai(this);b=M(b,c);var e=sc(b,e),f=this.Hd++,e=wf(this.L,a,e,f,!0);wb(this.da,e);var h=this;this.ba.put(a.toString(),b.I(!0),function(b,c){var e="ok"===b;e||O("set at "+a+" failed: "+b);e=zf(h.L,f,!e);Ab(h.da,a,e);di(d,b,c)});e=ei(this,a);bi(this,e);Ab(this.da,e,[])};
	g.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=ai(this),f={};r(b,function(a,b){d=!1;var c=M(a);f[b]=sc(c,e)});if(d)Cb("update() called with empty data.  Don't do anything."),di(c,"ok");else{var h=this.Hd++,k=yf(this.L,a,f,h);wb(this.da,k);var l=this;this.ba.zf(a.toString(),b,function(b,d){var e="ok"===b;e||O("update at "+a+" failed: "+b);var e=zf(l.L,h,!e),f=a;0<e.length&&(f=bi(l,a));Ab(l.da,f,e);di(c,b,d)});b=ei(this,a);bi(this,b);Ab(this.da,a,[])}};
	function ci(a){a.f("onDisconnectEvents");var b=ai(a),c=[];rc(pc(a.la,b),G,function(b,e){c=c.concat(xf(a.L,new Xb(bf,b,e)));var f=ei(a,b);bi(a,f)});a.la=new qc;Ab(a.da,G,c)}g.Jd=function(a,b){var c=this;this.ba.Jd(a.toString(),function(d,e){"ok"===d&&rg(c.la,a);di(b,d,e)})};function fi(a,b,c,d){var e=M(c);a.ba.Me(b.toString(),e.I(!0),function(c,h){"ok"===c&&a.la.nc(b,e);di(d,c,h)})}function gi(a,b,c,d,e){var f=M(c,d);a.ba.Me(b.toString(),f.I(!0),function(c,d){"ok"===c&&a.la.nc(b,f);di(e,c,d)})}
	function hi(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(Cb("onDisconnect().update() called with empty data.  Don't do anything."),di(d,"ok")):a.ba.Cf(b.toString(),c,function(e,f){if("ok"===e)for(var l in c){var m=M(c[l]);a.la.nc(b.u(l),m)}di(d,e,f)})}function ii(a,b,c){c=".info"===E(b.path)?a.Cd.Pb(b,c):a.L.Pb(b,c);yb(a.da,b.path,c)}g.yb=function(){this.Ra&&this.Ra.yb()};g.rc=function(){this.Ra&&this.Ra.rc()};
	g.Ye=function(a){if("undefined"!==typeof console){a?(this.fd||(this.fd=new Lb(this.Ua)),a=this.fd.get()):a=this.Ua.get();var b=Ra(sa(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};g.Ze=function(a){Ob(this.Ua,a);this.Sg.Of[a]=!0};g.f=function(a){var b="";this.Ra&&(b=this.Ra.id+":");Cb(b,arguments)};
	function di(a,b,c){a&&Db(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function ji(a,b,c,d,e){function f(){}a.f("transaction on "+b);var h=new U(a,b);h.Eb("value",f);c={path:b,update:c,H:d,status:null,Ff:Ec(),cf:e,Lf:0,ie:function(){h.ic("value",f)},ke:null,Ba:null,pd:null,qd:null,rd:null};d=a.L.za(b,void 0)||C;c.pd=d;d=c.update(d.I());if(n(d)){cg("transaction failed: Data returned ",d,c.path);c.status=1;e=Sf(a.uc,b);var k=e.Ca()||[];k.push(c);Tf(e,k);"object"===typeof d&&null!==d&&v(d,".priority")?(k=w(d,".priority"),K(ag(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
	k=(a.L.za(b)||C).C().I();e=ai(a);d=M(d,k);e=sc(d,e);c.qd=d;c.rd=e;c.Ba=a.Hd++;c=wf(a.L,b,e,c.Ba,c.cf);Ab(a.da,b,c);ki(a)}else c.ie(),c.qd=null,c.rd=null,c.H&&(a=new Q(c.pd,new U(a,c.path),N),c.H(null,!1,a))}function ki(a,b){var c=b||a.uc;b||li(a,c);if(null!==c.Ca()){var d=mi(a,c);K(0<d.length,"Sending zero length transaction queue");Sa(d,function(a){return 1===a.status})&&ni(a,c.path(),d)}else c.wd()&&c.P(function(b){ki(a,b)})}
	function ni(a,b,c){for(var d=Qa(c,function(a){return a.Ba}),e=a.L.za(b,d)||C,d=e,e=e.hash(),f=0;f<c.length;f++){var h=c[f];K(1===h.status,"tryToSendTransactionQueue_: items in queue should all be run.");h.status=2;h.Lf++;var k=T(b,h.path),d=d.G(k,h.qd)}d=d.I(!0);a.ba.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(zf(a.L,c[f].Ba));if(c[f].H){var h=c[f].rd,k=new U(a,c[f].path);d.push(q(c[f].H,
	null,null,!0,new Q(h,k,N)))}c[f].ie()}li(a,Sf(a.uc,b));ki(a);Ab(a.da,b,e);for(f=0;f<d.length;f++)Db(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(O("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].ke=d;bi(a,b)}},e)}function bi(a,b){var c=oi(a,b),d=c.path(),c=mi(a,c);pi(a,c,d);return d}
	function pi(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Qa(b,function(a){return a.Ba}),h=0;h<b.length;h++){var k=b[h],l=T(c,k.path),m=!1,t;K(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)m=!0,t=k.ke,e=e.concat(zf(a.L,k.Ba,!0));else if(1===k.status)if(25<=k.Lf)m=!0,t="maxretry",e=e.concat(zf(a.L,k.Ba,!0));else{var z=a.L.za(k.path,f)||C;k.pd=z;var I=b[h].update(z.I());n(I)?(cg("transaction failed: Data returned ",I,k.path),l=M(I),"object"===typeof I&&null!=
	I&&v(I,".priority")||(l=l.ga(z.C())),z=k.Ba,I=ai(a),I=sc(l,I),k.qd=l,k.rd=I,k.Ba=a.Hd++,Va(f,z),e=e.concat(wf(a.L,k.path,I,k.Ba,k.cf)),e=e.concat(zf(a.L,z,!0))):(m=!0,t="nodata",e=e.concat(zf(a.L,k.Ba,!0)))}Ab(a.da,c,e);e=[];m&&(b[h].status=3,setTimeout(b[h].ie,Math.floor(0)),b[h].H&&("nodata"===t?(k=new U(a,b[h].path),d.push(q(b[h].H,null,null,!1,new Q(b[h].pd,k,N)))):d.push(q(b[h].H,null,Error(t),!1,null))))}li(a,a.uc);for(h=0;h<d.length;h++)Db(d[h]);ki(a)}}
	function oi(a,b){for(var c,d=a.uc;null!==(c=E(b))&&null===d.Ca();)d=Sf(d,c),b=H(b);return d}function mi(a,b){var c=[];qi(a,b,c);c.sort(function(a,b){return a.Ff-b.Ff});return c}function qi(a,b,c){var d=b.Ca();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.P(function(b){qi(a,b,c)})}function li(a,b){var c=b.Ca();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Tf(b,0<c.length?c:null)}b.P(function(b){li(a,b)})}
	function ei(a,b){var c=oi(a,b).path(),d=Sf(a.uc,b);Wf(d,function(b){ri(a,b)});ri(a,d);Vf(d,function(b){ri(a,b)});return c}
	function ri(a,b){var c=b.Ca();if(null!==c){for(var d=[],e=[],f=-1,h=0;h<c.length;h++)4!==c[h].status&&(2===c[h].status?(K(f===h-1,"All SENT items should be at beginning of queue."),f=h,c[h].status=4,c[h].ke="set"):(K(1===c[h].status,"Unexpected transaction status in abort"),c[h].ie(),e=e.concat(zf(a.L,c[h].Ba,!0)),c[h].H&&d.push(q(c[h].H,null,Error("set"),!1,null))));-1===f?Tf(b,null):c.length=f+1;Ab(a.da,b.path(),e);for(h=0;h<d.length;h++)Db(d[h])}};function W(){this.oc={};this.Sf=!1}W.prototype.yb=function(){for(var a in this.oc)this.oc[a].yb()};W.prototype.rc=function(){for(var a in this.oc)this.oc[a].rc()};W.prototype.ve=function(){this.Sf=!0};ca(W);W.prototype.interrupt=W.prototype.yb;W.prototype.resume=W.prototype.rc;function X(a,b){this.bd=a;this.ra=b}X.prototype.cancel=function(a){x("Firebase.onDisconnect().cancel",0,1,arguments.length);A("Firebase.onDisconnect().cancel",1,a,!0);this.bd.Jd(this.ra,a||null)};X.prototype.cancel=X.prototype.cancel;X.prototype.remove=function(a){x("Firebase.onDisconnect().remove",0,1,arguments.length);jg("Firebase.onDisconnect().remove",this.ra);A("Firebase.onDisconnect().remove",1,a,!0);fi(this.bd,this.ra,null,a)};X.prototype.remove=X.prototype.remove;
	X.prototype.set=function(a,b){x("Firebase.onDisconnect().set",1,2,arguments.length);jg("Firebase.onDisconnect().set",this.ra);bg("Firebase.onDisconnect().set",a,this.ra,!1);A("Firebase.onDisconnect().set",2,b,!0);fi(this.bd,this.ra,a,b)};X.prototype.set=X.prototype.set;
	X.prototype.Kb=function(a,b,c){x("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);jg("Firebase.onDisconnect().setWithPriority",this.ra);bg("Firebase.onDisconnect().setWithPriority",a,this.ra,!1);fg("Firebase.onDisconnect().setWithPriority",2,b);A("Firebase.onDisconnect().setWithPriority",3,c,!0);gi(this.bd,this.ra,a,b,c)};X.prototype.setWithPriority=X.prototype.Kb;
	X.prototype.update=function(a,b){x("Firebase.onDisconnect().update",1,2,arguments.length);jg("Firebase.onDisconnect().update",this.ra);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;O("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}eg("Firebase.onDisconnect().update",a,this.ra);A("Firebase.onDisconnect().update",2,b,!0);
	hi(this.bd,this.ra,a,b)};X.prototype.update=X.prototype.update;function Y(a,b,c,d){this.k=a;this.path=b;this.n=c;this.lc=d}
	function si(a){var b=null,c=null;a.ma&&(b=nd(a));a.pa&&(c=pd(a));if(a.g===Qd){if(a.ma){if("[MIN_NAME]"!=md(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.pa){if("[MAX_NAME]"!=od(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
	typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===N){if(null!=b&&!ag(b)||null!=c&&!ag(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(K(a.g instanceof Ud||a.g===$d,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
	}function ti(a){if(a.ma&&a.pa&&a.ja&&(!a.ja||""===a.Nb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function ui(a,b){if(!0===a.lc)throw Error(b+": You can't combine multiple orderBy calls.");}g=Y.prototype;g.Ib=function(){x("Query.ref",0,0,arguments.length);return new U(this.k,this.path)};
	g.Eb=function(a,b,c,d){x("Query.on",2,4,arguments.length);gg("Query.on",a,!1);A("Query.on",2,b,!1);var e=vi("Query.on",c,d);if("value"===a)ii(this.k,this,new id(b,e.cancel||null,e.Ma||null));else{var f={};f[a]=b;ii(this.k,this,new jd(f,e.cancel,e.Ma))}return b};
	g.ic=function(a,b,c){x("Query.off",0,3,arguments.length);gg("Query.off",a,!0);A("Query.off",2,b,!0);mb("Query.off",3,c);var d=null,e=null;"value"===a?d=new id(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new jd(e,null,c||null));e=this.k;d=".info"===E(this.path)?e.Cd.jb(this,d):e.L.jb(this,d);yb(e.da,this.path,d)};
	g.Dg=function(a,b){function c(h){f&&(f=!1,e.ic(a,c),b.call(d.Ma,h))}x("Query.once",2,4,arguments.length);gg("Query.once",a,!1);A("Query.once",2,b,!1);var d=vi("Query.once",arguments[2],arguments[3]),e=this,f=!0;this.Eb(a,c,function(b){e.ic(a,c);d.cancel&&d.cancel.call(d.Ma,b)})};
	g.He=function(a){O("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead.");x("Query.limit",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limit: First argument must be a positive integer.");if(this.n.ja)throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");var b=this.n.He(a);ti(b);return new Y(this.k,this.path,b,this.lc)};
	g.Ie=function(a){x("Query.limitToFirst",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.n.ja)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Y(this.k,this.path,this.n.Ie(a),this.lc)};
	g.Je=function(a){x("Query.limitToLast",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.n.ja)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Y(this.k,this.path,this.n.Je(a),this.lc)};
	g.Eg=function(a){x("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');ig("Query.orderByChild",a);ui(this,"Query.orderByChild");var b=new L(a);if(b.e())throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
	b=new Ud(b);b=de(this.n,b);si(b);return new Y(this.k,this.path,b,!0)};g.Fg=function(){x("Query.orderByKey",0,0,arguments.length);ui(this,"Query.orderByKey");var a=de(this.n,Qd);si(a);return new Y(this.k,this.path,a,!0)};g.Gg=function(){x("Query.orderByPriority",0,0,arguments.length);ui(this,"Query.orderByPriority");var a=de(this.n,N);si(a);return new Y(this.k,this.path,a,!0)};
	g.Hg=function(){x("Query.orderByValue",0,0,arguments.length);ui(this,"Query.orderByValue");var a=de(this.n,$d);si(a);return new Y(this.k,this.path,a,!0)};g.$d=function(a,b){x("Query.startAt",0,2,arguments.length);bg("Query.startAt",a,this.path,!0);hg("Query.startAt",b);var c=this.n.$d(a,b);ti(c);si(c);if(this.n.ma)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");n(a)||(b=a=null);return new Y(this.k,this.path,c,this.lc)};
	g.td=function(a,b){x("Query.endAt",0,2,arguments.length);bg("Query.endAt",a,this.path,!0);hg("Query.endAt",b);var c=this.n.td(a,b);ti(c);si(c);if(this.n.pa)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new Y(this.k,this.path,c,this.lc)};
	g.kg=function(a,b){x("Query.equalTo",1,2,arguments.length);bg("Query.equalTo",a,this.path,!1);hg("Query.equalTo",b);if(this.n.ma)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.n.pa)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.$d(a,b).td(a,b)};
	g.toString=function(){x("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.Z;c<a.o.length;c++)""!==a.o[c]&&(b+="/"+encodeURIComponent(String(a.o[c])));return this.k.toString()+(b||"/")};g.va=function(){var a=Uc(ee(this.n));return"{}"===a?"default":a};
	function vi(a,b,c){var d={cancel:null,Ma:null};if(b&&c)d.cancel=b,A(a,3,d.cancel,!0),d.Ma=c,mb(a,4,d.Ma);else if(b)if("object"===typeof b&&null!==b)d.Ma=b;else if("function"===typeof b)d.cancel=b;else throw Error(y(a,3,!0)+" must either be a cancel callback or a context object.");return d}Y.prototype.ref=Y.prototype.Ib;Y.prototype.on=Y.prototype.Eb;Y.prototype.off=Y.prototype.ic;Y.prototype.once=Y.prototype.Dg;Y.prototype.limit=Y.prototype.He;Y.prototype.limitToFirst=Y.prototype.Ie;
	Y.prototype.limitToLast=Y.prototype.Je;Y.prototype.orderByChild=Y.prototype.Eg;Y.prototype.orderByKey=Y.prototype.Fg;Y.prototype.orderByPriority=Y.prototype.Gg;Y.prototype.orderByValue=Y.prototype.Hg;Y.prototype.startAt=Y.prototype.$d;Y.prototype.endAt=Y.prototype.td;Y.prototype.equalTo=Y.prototype.kg;Y.prototype.toString=Y.prototype.toString;var Z={};Z.vc=Kh;Z.DataConnection=Z.vc;Kh.prototype.Rg=function(a,b){this.Fa("q",{p:a},b)};Z.vc.prototype.simpleListen=Z.vc.prototype.Rg;Kh.prototype.jg=function(a,b){this.Fa("echo",{d:a},b)};Z.vc.prototype.echo=Z.vc.prototype.jg;Kh.prototype.interrupt=Kh.prototype.yb;Z.Vf=yh;Z.RealTimeConnection=Z.Vf;yh.prototype.sendRequest=yh.prototype.Fa;yh.prototype.close=yh.prototype.close;
	Z.rg=function(a){var b=Kh.prototype.put;Kh.prototype.put=function(c,d,e,f){n(f)&&(f=a());b.call(this,c,d,e,f)};return function(){Kh.prototype.put=b}};Z.hijackHash=Z.rg;Z.Uf=zc;Z.ConnectionTarget=Z.Uf;Z.va=function(a){return a.va()};Z.queryIdentifier=Z.va;Z.tg=function(a){return a.k.Ra.$};Z.listens=Z.tg;Z.ve=function(a){a.ve()};Z.forceRestClient=Z.ve;function U(a,b){var c,d,e;if(a instanceof Yh)c=a,d=b;else{x("new Firebase",1,2,arguments.length);d=Pc(arguments[0]);c=d.Tg;"firebase"===d.domain&&Oc(d.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");c&&"undefined"!=c||Oc("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d.kb||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&O("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
	c=new zc(d.host,d.kb,c,"ws"===d.scheme||"wss"===d.scheme);d=new L(d.$c);e=d.toString();var f;!(f=!p(c.host)||0===c.host.length||!$f(c.hc))&&(f=0!==e.length)&&(e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),f=!(p(e)&&0!==e.length&&!Yf.test(e)));if(f)throw Error(y("new Firebase",1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');if(b)if(b instanceof W)e=b;else if(p(b))e=W.ub(),c.Od=b;else throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
	else e=W.ub();f=c.toString();var h=w(e.oc,f);h||(h=new Yh(c,e.Sf),e.oc[f]=h);c=h}Y.call(this,c,d,be,!1)}ma(U,Y);var wi=U,xi=["Firebase"],yi=aa;xi[0]in yi||!yi.execScript||yi.execScript("var "+xi[0]);for(var zi;xi.length&&(zi=xi.shift());)!xi.length&&n(wi)?yi[zi]=wi:yi=yi[zi]?yi[zi]:yi[zi]={};U.goOffline=function(){x("Firebase.goOffline",0,0,arguments.length);W.ub().yb()};U.goOnline=function(){x("Firebase.goOnline",0,0,arguments.length);W.ub().rc()};
	function Lc(a,b){K(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?Bb=q(console.log,console):"object"===typeof console.log&&(Bb=function(a){console.log(a)})),b&&yc.set("logging_enabled",!0)):a?Bb=a:(Bb=null,yc.remove("logging_enabled"))}U.enableLogging=Lc;U.ServerValue={TIMESTAMP:{".sv":"timestamp"}};U.SDK_VERSION=hb;U.INTERNAL=V;U.Context=W;U.TEST_ACCESS=Z;
	U.prototype.name=function(){O("Firebase.name() being deprecated. Please use Firebase.key() instead.");x("Firebase.name",0,0,arguments.length);return this.key()};U.prototype.name=U.prototype.name;U.prototype.key=function(){x("Firebase.key",0,0,arguments.length);return this.path.e()?null:Ld(this.path)};U.prototype.key=U.prototype.key;
	U.prototype.u=function(a){x("Firebase.child",1,1,arguments.length);if(ga(a))a=String(a);else if(!(a instanceof L))if(null===E(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));ig("Firebase.child",b)}else ig("Firebase.child",a);return new U(this.k,this.path.u(a))};U.prototype.child=U.prototype.u;U.prototype.parent=function(){x("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new U(this.k,a)};U.prototype.parent=U.prototype.parent;
	U.prototype.root=function(){x("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.parent();)a=a.parent();return a};U.prototype.root=U.prototype.root;U.prototype.set=function(a,b){x("Firebase.set",1,2,arguments.length);jg("Firebase.set",this.path);bg("Firebase.set",a,this.path,!1);A("Firebase.set",2,b,!0);this.k.Kb(this.path,a,null,b||null)};U.prototype.set=U.prototype.set;
	U.prototype.update=function(a,b){x("Firebase.update",1,2,arguments.length);jg("Firebase.update",this.path);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;O("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}eg("Firebase.update",a,this.path);A("Firebase.update",2,b,!0);this.k.update(this.path,a,b||null)};U.prototype.update=U.prototype.update;
	U.prototype.Kb=function(a,b,c){x("Firebase.setWithPriority",2,3,arguments.length);jg("Firebase.setWithPriority",this.path);bg("Firebase.setWithPriority",a,this.path,!1);fg("Firebase.setWithPriority",2,b);A("Firebase.setWithPriority",3,c,!0);if(".length"===this.key()||".keys"===this.key())throw"Firebase.setWithPriority failed: "+this.key()+" is a read-only object.";this.k.Kb(this.path,a,b,c||null)};U.prototype.setWithPriority=U.prototype.Kb;
	U.prototype.remove=function(a){x("Firebase.remove",0,1,arguments.length);jg("Firebase.remove",this.path);A("Firebase.remove",1,a,!0);this.set(null,a)};U.prototype.remove=U.prototype.remove;
	U.prototype.transaction=function(a,b,c){x("Firebase.transaction",1,3,arguments.length);jg("Firebase.transaction",this.path);A("Firebase.transaction",1,a,!1);A("Firebase.transaction",2,b,!0);if(n(c)&&"boolean"!=typeof c)throw Error(y("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.key()||".keys"===this.key())throw"Firebase.transaction failed: "+this.key()+" is a read-only object.";"undefined"===typeof c&&(c=!0);ji(this.k,this.path,a,b||null,c)};U.prototype.transaction=U.prototype.transaction;
	U.prototype.Og=function(a,b){x("Firebase.setPriority",1,2,arguments.length);jg("Firebase.setPriority",this.path);fg("Firebase.setPriority",1,a);A("Firebase.setPriority",2,b,!0);this.k.Kb(this.path.u(".priority"),a,null,b)};U.prototype.setPriority=U.prototype.Og;
	U.prototype.push=function(a,b){x("Firebase.push",0,2,arguments.length);jg("Firebase.push",this.path);bg("Firebase.push",a,this.path,!0);A("Firebase.push",2,b,!0);var c=$h(this.k),c=Fe(c),c=this.u(c);"undefined"!==typeof a&&null!==a&&c.set(a,b);return c};U.prototype.push=U.prototype.push;U.prototype.hb=function(){jg("Firebase.onDisconnect",this.path);return new X(this.k,this.path)};U.prototype.onDisconnect=U.prototype.hb;
	U.prototype.M=function(a,b,c){O("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead.");x("Firebase.auth",1,3,arguments.length);kg("Firebase.auth",a);A("Firebase.auth",2,b,!0);A("Firebase.auth",3,b,!0);Yg(this.k.M,a,{},{remember:"none"},b,c)};U.prototype.auth=U.prototype.M;U.prototype.ge=function(a){x("Firebase.unauth",0,1,arguments.length);A("Firebase.unauth",1,a,!0);Zg(this.k.M,a)};U.prototype.unauth=U.prototype.ge;
	U.prototype.xe=function(){x("Firebase.getAuth",0,0,arguments.length);return this.k.M.xe()};U.prototype.getAuth=U.prototype.xe;U.prototype.xg=function(a,b){x("Firebase.onAuth",1,2,arguments.length);A("Firebase.onAuth",1,a,!1);mb("Firebase.onAuth",2,b);this.k.M.Eb("auth_status",a,b)};U.prototype.onAuth=U.prototype.xg;U.prototype.wg=function(a,b){x("Firebase.offAuth",1,2,arguments.length);A("Firebase.offAuth",1,a,!1);mb("Firebase.offAuth",2,b);this.k.M.ic("auth_status",a,b)};U.prototype.offAuth=U.prototype.wg;
	U.prototype.Zf=function(a,b,c){x("Firebase.authWithCustomToken",2,3,arguments.length);kg("Firebase.authWithCustomToken",a);A("Firebase.authWithCustomToken",2,b,!1);ng("Firebase.authWithCustomToken",3,c,!0);Yg(this.k.M,a,{},c||{},b)};U.prototype.authWithCustomToken=U.prototype.Zf;U.prototype.$f=function(a,b,c){x("Firebase.authWithOAuthPopup",2,3,arguments.length);mg("Firebase.authWithOAuthPopup",a);A("Firebase.authWithOAuthPopup",2,b,!1);ng("Firebase.authWithOAuthPopup",3,c,!0);ch(this.k.M,a,c,b)};
	U.prototype.authWithOAuthPopup=U.prototype.$f;U.prototype.ag=function(a,b,c){x("Firebase.authWithOAuthRedirect",2,3,arguments.length);mg("Firebase.authWithOAuthRedirect",a);A("Firebase.authWithOAuthRedirect",2,b,!1);ng("Firebase.authWithOAuthRedirect",3,c,!0);var d=this.k.M;ah(d);var e=[Kg],f=vg(c);"anonymous"===a||"firebase"===a?P(b,Mg("TRANSPORT_UNAVAILABLE")):(yc.set("redirect_client_options",f.od),bh(d,e,"/auth/"+a,f,b))};U.prototype.authWithOAuthRedirect=U.prototype.ag;
	U.prototype.bg=function(a,b,c,d){x("Firebase.authWithOAuthToken",3,4,arguments.length);mg("Firebase.authWithOAuthToken",a);A("Firebase.authWithOAuthToken",3,c,!1);ng("Firebase.authWithOAuthToken",4,d,!0);p(b)?(lg("Firebase.authWithOAuthToken",2,b),$g(this.k.M,a+"/token",{access_token:b},d,c)):(ng("Firebase.authWithOAuthToken",2,b,!1),$g(this.k.M,a+"/token",b,d,c))};U.prototype.authWithOAuthToken=U.prototype.bg;
	U.prototype.Yf=function(a,b){x("Firebase.authAnonymously",1,2,arguments.length);A("Firebase.authAnonymously",1,a,!1);ng("Firebase.authAnonymously",2,b,!0);$g(this.k.M,"anonymous",{},b,a)};U.prototype.authAnonymously=U.prototype.Yf;
	U.prototype.cg=function(a,b,c){x("Firebase.authWithPassword",2,3,arguments.length);ng("Firebase.authWithPassword",1,a,!1);og("Firebase.authWithPassword",a,"email");og("Firebase.authWithPassword",a,"password");A("Firebase.authWithPassword",2,b,!1);ng("Firebase.authWithPassword",3,c,!0);$g(this.k.M,"password",a,c,b)};U.prototype.authWithPassword=U.prototype.cg;
	U.prototype.se=function(a,b){x("Firebase.createUser",2,2,arguments.length);ng("Firebase.createUser",1,a,!1);og("Firebase.createUser",a,"email");og("Firebase.createUser",a,"password");A("Firebase.createUser",2,b,!1);this.k.M.se(a,b)};U.prototype.createUser=U.prototype.se;U.prototype.Te=function(a,b){x("Firebase.removeUser",2,2,arguments.length);ng("Firebase.removeUser",1,a,!1);og("Firebase.removeUser",a,"email");og("Firebase.removeUser",a,"password");A("Firebase.removeUser",2,b,!1);this.k.M.Te(a,b)};
	U.prototype.removeUser=U.prototype.Te;U.prototype.pe=function(a,b){x("Firebase.changePassword",2,2,arguments.length);ng("Firebase.changePassword",1,a,!1);og("Firebase.changePassword",a,"email");og("Firebase.changePassword",a,"oldPassword");og("Firebase.changePassword",a,"newPassword");A("Firebase.changePassword",2,b,!1);this.k.M.pe(a,b)};U.prototype.changePassword=U.prototype.pe;
	U.prototype.oe=function(a,b){x("Firebase.changeEmail",2,2,arguments.length);ng("Firebase.changeEmail",1,a,!1);og("Firebase.changeEmail",a,"oldEmail");og("Firebase.changeEmail",a,"newEmail");og("Firebase.changeEmail",a,"password");A("Firebase.changeEmail",2,b,!1);this.k.M.oe(a,b)};U.prototype.changeEmail=U.prototype.oe;
	U.prototype.Ve=function(a,b){x("Firebase.resetPassword",2,2,arguments.length);ng("Firebase.resetPassword",1,a,!1);og("Firebase.resetPassword",a,"email");A("Firebase.resetPassword",2,b,!1);this.k.M.Ve(a,b)};U.prototype.resetPassword=U.prototype.Ve;})();
	
	module.exports = Firebase;


/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	// Holds colors themes that are exposed to the user
	
	var themes = {
	  bubbly: ['#E71D36', '#26408B', '#FF9F1C', '#767B91', '#0FA3B1'],
	  friendly: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494'],
	  legendary: ['#5BC0EB', '#FDE74C', '#9BC53D', '#E55934', '#FA7921'],
	  fun: ['#2274A5', '#F4530E', '#FFBF00', '#E83F6F', '#32936F'],
	  water: ['#1C2541', '#3A506B', '#5BC0BE', '#0B132B', '#6FFFE9']
	};
	
	exports.default = themes;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// This is required for d3 to load.
	/* global d3 */
	
	var InternalBar = {
	  // Builds the actual chart components with data, including the tooltips
	  /*
	  @private
	  @function buildChartComponents
	  @description Builds the actual chart components with data, including the tooltips
	  @returns {Object} context (chart instance)
	   */
	
	  buildChartComponents: function buildChartComponents(context) {
	    // Uses d3 to build the chart components for bar chart
	    // using the chart data. Sets event listeners mouseover
	    // and mouseout to hide/show tooltips. Uses transition
	    // to transition the bars into view.
	
	    var tooltip = context.tooltip;
	
	    context.svg.selectAll('.bar').data(context.data).enter().append('rect').attr('class', 'bar').on('mouseover', function (d) {
	      // Set up tooltips
	      tooltip.show();
	      tooltip.setContent('<strong>' + context.yColumnName + ':</strong> ' + d[context.yColumnName] + '</br>\n             <strong>' + context.xColumnName + ':</strong> ' + d[context.xColumnName]);
	
	      d3.select(d3.event.target).style('fill', context.getColors[1]);
	    }).on('mouseout', function () {
	      tooltip.hide();
	      d3.select(d3.event.target).style('fill', context.getColors[0]);
	    }).attr('x', function (d) {
	      return context.xScale(d[context.getxAxisLabel]);
	    }) // start position before transition
	    .attr('y', context.getChartHeight).attr('width', context.xScale.rangeBand()).attr('height', 0).style('fill', context.getColors[0]).transition() // transiiton to ending position of rects
	    .duration(300).delay(function (d, i) {
	      return i * 50;
	    }).attr('y', function (d) {
	      return context.yScale(d[context.getyAxisLabel]);
	    }).attr('height', function (d) {
	      return context.getChartHeight - context.yScale(d[context.getyAxisLabel]);
	    });
	
	    return context;
	  },
	
	  // Updates and recreates the bars on chart
	  /*
	  @private
	  @function updateChartComponents
	  @description Updates and recreates the bars on chart
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateChartComponents: function updateChartComponents(context) {
	    context.svg.selectAll('.bar').data(context.data).transition().attr('class', 'bar').attr('x', function (d) {
	      return context.xScale(d[context.getxAxisLabel]);
	    }).attr('width', context.xScale.rangeBand()).attr('y', function (d) {
	      return context.yScale(d[context.getyAxisLabel]);
	    }).attr('height', function (d) {
	      return context.getChartHeight - context.yScale(d[context.getyAxisLabel]);
	    }).style('fill', context.getColors[0]);
	
	    return context;
	  },
	
	  // Updates the chart's style on the element
	  /*
	  @private
	  @function styleChart
	  @description Updates the chart's style on the element
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  styleChart: function styleChart(context) {
	    // Styles the chart's font-size, font-style, and title
	    context.element.select('svg').style('font-family', context.getFontStyle).attr('font-size', context.getFontSize).append('text').attr('class', 'title').attr('x', context.getChartWidth * 0.5).attr('y', 20).text(context.getTitle);
	
	    return context;
	  },
	
	  // Updates color of bar chart after initial render
	  /*
	  @private
	  @function updateColors
	  @description Updates color of bar chart after initial render
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateColors: function updateColors(context) {
	    context.element.select('svg').selectAll('rect').remove();
	
	    this.buildChartComponents(context);
	
	    return context;
	  }
	};
	
	exports.default = InternalBar;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LineChart = undefined;
	
	var _ChartMain2 = __webpack_require__(3);
	
	var _internal = __webpack_require__(4);
	
	var _internal2 = _interopRequireDefault(_internal);
	
	var _internalLine = __webpack_require__(11);
	
	var _internalLine2 = _interopRequireDefault(_internalLine);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Constructor subclass for Line Chart.
	
	var LineChart = exports.LineChart = (function (_ChartMain) {
	  _inherits(LineChart, _ChartMain);
	
	  function LineChart() {
	    _classCallCheck(this, LineChart);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LineChart).call(this));
	
	    _this._dateFormat = '';
	    return _this;
	  }
	
	  // Builds up the components of the line chart
	  /*
	  @private
	  @function build
	  @description Builds up the bar chart
	  @returns {Object} this (chart instance)
	  */
	
	  _createClass(LineChart, [{
	    key: 'build',
	    value: function build() {
	      // Calls each of the methods on Internal and InternalLine
	      // object necessary to build up all the components of the
	      // chart. Internal and InternalLine hold all the methods
	      // that do d3 manipulation to create and update various
	      // parts of the chart
	
	      _internal2.default.selectElement(this);
	      _internal2.default.getParentDimensions(this);
	      _internal2.default.getChartDimensions(this);
	      _internalLine2.default.setColumnNames(this);
	      _internalLine2.default.convertData(this);
	      _internal2.default.convertColorsToScale(this, this.data.map(function (category) {
	        return category.name;
	      }));
	      _internalLine2.default.setXScale(this);
	      _internalLine2.default.setYScale(this);
	      _internal2.default.createSVGElement(this);
	      _internal2.default.createxAxis(this);
	      _internal2.default.buildXAxis(this);
	      _internal2.default.createyAxis(this);
	      _internalLine2.default.buildYAxis(this);
	      _internalLine2.default.buildLine(this);
	      _internal2.default.setAxisStyle(this, 'path', 'none', '#000', 'crispEdges');
	      _internal2.default.setAxisStyle(this, 'line', 'none', '#000', 'crispEdges');
	      _internal2.default.createToolTip(this);
	      _internalLine2.default.buildChartComponents(this);
	      _internalLine2.default.styleChart(this);
	      _internalLine2.default.updateColors(this);
	      _internal2.default.createLegend(this);
	      return this;
	    }
	
	    // Calls InternalLine to update the line on chart
	    // Used when a property changes that requires a re-render.
	    /*
	    @private
	    @function updateChartComponents
	    @description Calls InternalLine to update the line on chart
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateChartComponents',
	    value: function updateChartComponents() {
	      // Calls method on InternalLine to recreate all the
	      // chart components. Used to reflect any changes made
	      // to property values (e.g. font-size, axis-label, etc.)
	      _internalLine2.default.updateChartComponents(this);
	
	      return this;
	    }
	
	    // Updates the chart's height on the element itself
	    // Used when the height changes that requires a re-render.
	    /*
	    @private
	    @function updateHeight
	    @description Updates the chart's height on the element itself
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateHeight',
	    value: function updateHeight() {
	      // Calls each of the methods on Internal and InternalLine
	      // object necessary to update the height of the chart.
	      // Internal and Internal Line hold all the methods that do
	      // d3 manipulation to create and update various chart elements
	      _internal2.default.updateSVGElement(this);
	      _internal2.default.setYscale(this, 'linear', 'number');
	      _internal2.default.updateYAxisScale(this);
	      _internal2.default.updateYAxis(this);
	      _internal2.default.updateXAxisPosition(this);
	      _internalLine2.default.buildLine(this);
	
	      return this;
	    }
	
	    // Updates the chart's margin on the element itself
	    // Used when the margins change that requires a re-render.
	    /*
	    @private
	    @function updateMargins
	    @description Updates the chart's margin on the element itself
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateMargins',
	    value: function updateMargins() {
	      // Calls updateHeight and updateWidth on this instance
	      // to reflect the new margins.
	      this.updateHeight();
	      this.updateWidth();
	
	      return this;
	    }
	
	    // Updates the chart's width on the element itself
	    // Used when the width changes that requires a re-render.
	    /*
	    @private
	    @function updateWidth
	    @description Updates the chart's width on the element itself
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateWidth',
	    value: function updateWidth() {
	      // Calls each of the methods on Internal and InternalLine
	      // object necessary to update the width of the chart.
	      // Internal and InternalLine hold all the methods that do
	      // d3 manipulation to create and update various chart elements
	
	      _internal2.default.updateSVGElement(this);
	      _internalLine2.default.setXScale(this);
	      _internal2.default.updateXAxisScale(this);
	      _internal2.default.updateXAxis(this);
	      _internalLine2.default.buildLine(this);
	
	      return this;
	    }
	
	    // Calls InternalLine to update color of line chart after
	    // initial render. InternalLine does the d3 manipulation
	    /*
	    @private
	    @function updateColors
	    @description Calls InternalLine to update color of line chart after initial render
	    @param {Array} colors Array of colors to update the chart to
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateColors',
	    value: function updateColors() {
	      _internalLine2.default.updateColors(this);
	
	      return this;
	    }
	
	    // Calls Internal to update x-axis label
	    // Used when the x-axis label changes that requires a re-render.
	    /*
	    @private
	    @function updatexAxisLabel
	    @description Calls Internal to update x-axis label
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updatexAxisLabel',
	    value: function updatexAxisLabel() {
	      _internal2.default.updateXAxis(this);
	
	      return this;
	    }
	
	    // Calls InternalLine to update y-axis label
	    // Used when the y-axis label changes that requires a re-render.
	    /*
	    @private
	    @function updatexAxisLabel
	    @description Calls InternalLine to update y-axis label
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateyAxisLabel',
	    value: function updateyAxisLabel() {
	      _internalLine2.default.updateYAxis(this);
	
	      return this;
	    }
	
	    // Updates the time format and calls chart update functions
	    // Used when the time format changes that requires a re-render.
	    /*
	    @private
	    @function updateDateFormat
	    @description Updates the time format and calls chart update functions
	    @param {String} newDateFormat A new time format specifier
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateTimeFormat',
	    value: function updateTimeFormat(dateFormat) {
	      this._dateFormat = dateFormat;
	      return this;
	    }
	
	    // Updates the formatting for the chart ticks
	    // Used when tick formatting changes that requires a re-render.
	    /*
	    @private
	    @function updateTickFormat
	    @description Updates the formatting for the chart ticks
	    @param {String} tickFormat A new time format specifier for ticks
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateTickFormat',
	    value: function updateTickFormat(tickFormat) {
	      _internalLine2.default.setTickFormat(this, tickFormat);
	      _internal2.default.updateXAxis(this);
	      return this;
	    }
	
	    // Updates the number of ticks.
	    // Used when tick count changes that requires a re-render.
	    /*
	    @private
	    @function updateTickCount
	    @description Updates the number of ticks
	    @param {String} tickCount The number of ticks wanted
	    @param {String} countBy What interval ticks should count e.g. by month, year, minute
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateTickCount',
	    value: function updateTickCount(tickCount, countBy) {
	      _internalLine2.default.setTickCount(this, tickCount, countBy);
	      _internal2.default.updateXAxis(this);
	      return this;
	    }
	
	    // Overrides the default ChartMain setColors setter.
	    // Maps to an ordinal scale
	    /*
	    @private
	    @function setColors
	    @description Overrides the default ChartMain setColors setter - maps to an ordinal scale
	    @param {Array} colors Array of colors to update the chart to
	    */
	
	  }, {
	    key: 'setColors',
	    set: function set(newColors) {
	      this._colors = newColors;
	      _internal2.default.convertColorsToScale(this, this.data.map(function (category) {
	        return category.name;
	      }));
	      return this;
	    }
	  }]);
	
	  return LineChart;
	})(_ChartMain2.ChartMain);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(5);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /*
	                                                                                                                                                                                                                  This is required for d3 to load.
	                                                                                                                                                                                                                  */
	/*  global d3  */
	
	var InternalLine = {
	  // Updates the chart's style on the element
	  /*
	  @private
	  @function styleChart
	  @description Updates the chart's style on the element
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  styleChart: function styleChart(context) {
	    context.element.select('svg').style('font-family', context.getFontStyle).attr('font-size', context.getFontSize).append('text').attr('class', 'title').attr('x', context.getChartWidth * 0.5).attr('y', 20).text(context.getTitle);
	
	    return context;
	  },
	
	  // Builds up the line
	  /*
	  @private
	  @function buildLine
	  @description Builds up the line
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  buildLine: function buildLine(context) {
	    // Build the d3 line using by mapping the x and y values to the data
	    context.line = d3.svg.line().x(function (d) {
	      return context.xScale(d.x);
	    }).y(function (d) {
	      return context.yScale(d.y);
	    });
	
	    return context;
	  },
	
	  // Builds up the y-axis
	  /*
	  @private
	  @function buildYAxis
	  @description Builds up the y-axis
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  buildYAxis: function buildYAxis(context) {
	    context.svg.append('g').attr('class', 'y axis').call(context.yAxis).append('text').attr('transform', 'rotate(-90)').attr('y', -45).attr('x', -context.getMargins.bottom * 2).attr('dy', '.4em').style('text-anchor', 'end').text(context.getyAxisLabel);
	
	    return context;
	  },
	
	  // Updates and rebuilds the y-axis
	  /*
	  @private
	  @function updateYAxis
	  @description Updates and rebuilds the y-axis
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateYAxis: function updateYAxis(context) {
	    // Updated the y-axis on chart by rebuilding it. Used when properties on a chart are changed and require a rebuild.
	    context.element.select('svg').selectAll('g .y.axis').call(context.yAxis);
	
	    context.element.select('.y-axis-label').attr('class', 'y-axis-label').attr('transform', 'rotate(-90)').attr('y', -45).attr('x', -context.getMargins.bottom * 2).attr('dy', '.4em').style('text-anchor', 'end').text(context.getyAxisLabel);
	
	    return context;
	  },
	
	  // Sets the x-scale according to the data
	  /*
	  @private
	  @function setXScale
	  @description Sets the x-scale according to the data
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	  setXScale: function setXScale(context) {
	    context.setxAxisLabel = context.xColumnName;
	    context.xScale = d3.time.scale().range([0, context.getChartWidth]);
	    context.xScale.domain([d3.min(context.data, function (d) {
	      return d3.min(d.values, function (v) {
	        return v[context.xColumnName];
	      });
	    }), d3.max(context.data, function (d) {
	      return d3.max(d.values, function (v) {
	        return v[context.xColumnName];
	      });
	    })]);
	
	    return context;
	  },
	
	  // Sets the y-scale according to the data
	  /*
	  @private
	  @function setYScale
	  @description Sets the y-scale according to the data
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	  setYScale: function setYScale(context) {
	    context.setyAxisLabel = 'Default Label';
	    context.yScale = d3.scale.linear().range([context.getChartHeight, 0]);
	
	    context.yScale.domain([d3.min(context.data, function (d) {
	      return d3.min(d.values, function (v) {
	        return v[d.name];
	      });
	    }), d3.max(context.data, function (d) {
	      return d3.max(d.values, function (v) {
	        return v[d.name];
	      });
	    })]);
	
	    return context;
	  },
	
	  // Builds the actual chart components with data
	  /*
	  @private
	  @function buildChartComponents
	  @description Builds the actual chart components with data
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	   */
	
	  buildChartComponents: function buildChartComponents(context) {
	    var groups = context.svg.selectAll('.line').data(context.data).enter().append('g');
	
	    var lines = groups.append('path').attr('class', 'line');
	
	    var k = context.data[0].values.length;
	    var length = k;
	    d3.timer(function () {
	      if (k > 0) {
	        k -= 7;
	        lines.attr('d', function (d) {
	          return context.line(d.values.map(function (v) {
	            return { x: v[context.xColumnName], y: v[d.name] };
	          }).slice(0, length - k));
	        });
	      } else {
	        return true;
	      }
	    });
	
	    lines.on('mouseover', function (d, i) {
	      context.element.selectAll('.line').style('opacity', function (data, index) {
	        if (index !== i) {
	          return 0.25;
	        }
	        return 1;
	      });
	      context.tooltip.transition().duration(200).style('display', 'block').style('opacity', 0.9);
	      context.tooltip.html(function () {
	        return context.xColumnName + ': ' + context.xScale.invert(d3.event.pageX - context.getMargins.left - context.getMargins.right).toLocaleString() + '         ' + d.name + ': ' + context.yScale.invert(d3.event.pageY - context.getMargins.top - context.getMargins.bottom).toFixed(3);
	      }).style('left', d3.event.pageX + 'px').style('top', d3.event.pageY + 'px');
	    });
	
	    lines.on('mouseout', function () {
	      context.tooltip.transition().delay(1000).style('opacity', 0).style('display', 'none');
	      context.element.selectAll('.line').transition().delay(1000).style('opacity', 1.0);
	    });
	
	    return context;
	  },
	
	  // Rebuilds the line on the chart
	  /*
	  @private
	  @function updateChartComponents
	  @description Rebuilds the line on the chart
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateChartComponents: function updateChartComponents(context) {
	    context.svg.select('.line').remove();
	    context.svg.append('path').datum(context.data).attr('class', 'line').style({
	      fill: 'none',
	      stroke: context.getColors[0],
	      'stroke-width': 'crispEdges'
	    }).attr('d', context.line);
	
	    return context;
	  },
	
	  // Updates color of bar chart after initial render
	  /*
	  @private
	  @function updateColors
	  @description Updates color of bar chart after initial render
	  @@param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateColors: function updateColors(context) {
	    context.svg.selectAll('.line').style({
	      fill: 'none',
	      'stroke-width': 'crispEdges'
	    }).style('stroke', function (d, i) {
	      return context.getColors[i];
	    });
	
	    return context;
	  },
	
	  // Converts the data needed for the chart
	  /*
	  @private
	  @function convertData
	  @description Converts the data needed for the chart
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  convertData: function convertData(context) {
	    context.data = _utils2.default.parseTimeData(context.data, context.xColumnName, context._dateFormat);
	    var list = [];
	    var dataWorker = function dataWorker(i, columns) {
	      list.push({
	        name: columns[i],
	        values: context.data.map(function (val) {
	          var _ref;
	
	          return _ref = {}, _defineProperty(_ref, context.xColumnName, val[context.xColumnName]), _defineProperty(_ref, columns[i], Number(val[columns[i]])), _ref;
	        })
	      });
	    };
	    var columns = _utils2.default.getColumnNames(context.data);
	    for (var i = 0; i < columns.length; i++) {
	      if (columns[i] !== context.xColumnName && _utils2.default.isLinear(context.data, columns[i])) {
	        dataWorker(i, columns);
	      }
	    }
	    context.data = list;
	
	    return context;
	  },
	
	  // Sets the column names
	  /*
	  @private
	  @function setColumnNames
	  @description Sets the column names
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  setColumnNames: function setColumnNames(context) {
	    context.xColumnName = _utils2.default.getFirstTimeColumn(context.data, context._dateFormat);
	
	    return context;
	  },
	
	  // Sets the tick format for xAxis
	  /*
	  @private
	  @function setTickFormat
	  @description Sets the tick format for xAxis
	  @param {Object} context Chart object
	  @param {String} tickFormat a format specifier
	  */
	
	  setTickFormat: function setTickFormat(context, tickFormat) {
	    context.xAxis.tickFormat(d3.time.format(tickFormat));
	  },
	
	  // Sets the tick count for xAxis
	  /*
	  @private
	  @function setTickCount
	  @description Sets the tick count for xAxis
	  @param {Object} context Chart object
	  @param {String} tickCount A count for the number of ticks
	  @param {String} countBy countBy What interval ticks should count e.g. by month, year, minute
	  */
	
	  setTickCount: function setTickCount(context, tickCount, countBy) {
	    context.xAxis.ticks(d3.time[countBy], tickCount);
	  }
	};
	
	exports.default = InternalLine;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DonutChart = undefined;
	
	var _ChartMain2 = __webpack_require__(3);
	
	var _internal = __webpack_require__(4);
	
	var _internal2 = _interopRequireDefault(_internal);
	
	var _internalDonutChart = __webpack_require__(13);
	
	var _internalDonutChart2 = _interopRequireDefault(_internalDonutChart);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // This is required for d3 to load.
	
	/*  global d3  */
	
	var DonutChart = exports.DonutChart = (function (_ChartMain) {
	  _inherits(DonutChart, _ChartMain);
	
	  function DonutChart() {
	    _classCallCheck(this, DonutChart);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DonutChart).call(this));
	  }
	
	  // Builds up the Donut chart
	  /*
	  @private
	  @function build
	  @description Builds up the Donut chart
	  @returns {Object} this (chart instance)
	  */
	
	  _createClass(DonutChart, [{
	    key: 'build',
	    value: function build() {
	      var _this2 = this;
	
	      // Calls each of the methods on Internal and InternalDonut
	      // object necessary to build up all the components of the
	      // chart. Internal holds all the methods that do d3
	      // manipulation to create and update various parts of the chart
	
	      _internal2.default.selectElement(this);
	      _internal2.default.getParentDimensions(this);
	      _internal2.default.getChartDimensions(this);
	      _internal2.default.createSVGElement(this);
	      _internalDonutChart2.default.updateTranslation(this);
	      _internal2.default.createToolTip(this);
	      _internalDonutChart2.default.updateStyle(this);
	      _internalDonutChart2.default.updateOrdinalColumn(this);
	      _internal2.default.convertColorsToScale(this, this.data.map(function (d) {
	        return d[_this2.ordinalColumn];
	      }));
	      _internalDonutChart2.default.updateLinearColumn(this);
	      _internalDonutChart2.default.convertData(this);
	      _internalDonutChart2.default.updateRadius(this);
	      _internalDonutChart2.default.updateArc(this);
	      _internalDonutChart2.default.updatePie(this);
	      _internalDonutChart2.default.buildChartComponents(this);
	      _internalDonutChart2.default.updateTitle(this);
	
	      return this;
	    }
	
	    // Calls InternalDonut to update the Donut on chart
	    /*
	    @private
	    @function updateChartComponents
	    @description Calls InternalDonut to update the Donut on chart
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateChartComponents',
	    value: function updateChartComponents() {
	      // Calls method on InternalDonut to recreate all the
	      // chart components. Used to reflect any changes made
	      // to property values (e.g. font-size, axis-label, etc.)
	      _internalDonutChart2.default.updateChartComponents(this);
	
	      return this;
	    }
	
	    // Calls InternalDonut to update color of Donut chart after
	    // initial render.
	    // Used when a property changes that requires a re-render.
	    /*
	    @private
	    @function updateColors
	    @description Calls InternalDonut to update color of Donut chart after initial render
	    @returns {Object} this Chart object
	    */
	
	  }, {
	    key: 'updateColors',
	    value: function updateColors() {
	      _internalDonutChart2.default.updateChartComponents(this);
	      return this;
	    }
	
	    // Updates the chart's margin on the element itself
	    /*
	    @private
	    @function updateMargins
	    @description Updates the chart's margin on the element itself
	    // Used when the margins change that requires a re-render.
	    @returns {Object} this Chart object
	    */
	
	  }, {
	    key: 'updateMargins',
	    value: function updateMargins() {
	      this.updateHeight();
	      this.updateWidth();
	
	      return this;
	    }
	
	    // Updates the chart's width on the element itself
	    // Used when the width changes that requires a re-render.
	    /*
	    @private
	    @function updateWidth
	    @description Updates the chart's width on the element itself
	    @returns {Object} this Chart object
	    */
	
	  }, {
	    key: 'updateWidth',
	    value: function updateWidth() {
	      _internal2.default.updateSVGElement(this);
	      _internalDonutChart2.default.updateRadius(this);
	      _internalDonutChart2.default.updateArc(this);
	      _internalDonutChart2.default.updatePie(this);
	      _internalDonutChart2.default.updateChartComponents(this);
	
	      return this;
	    }
	
	    // Updates the chart's height on the element itself
	    // Used when the height changes that requires a re-render.
	    /*
	    @private
	    @function updateHeight
	    @description Updates the chart's height on the element itself
	    @returns {Object} this Chart object
	    */
	
	  }, {
	    key: 'updateHeight',
	    value: function updateHeight() {
	      _internal2.default.updateSVGElement(this);
	      _internalDonutChart2.default.updateRadius(this);
	      _internalDonutChart2.default.updateArc(this);
	      _internalDonutChart2.default.updatePie(this);
	      _internalDonutChart2.default.updateChartComponents(this);
	
	      return this;
	    }
	
	    // Overrides the default ChartMain setColors setter
	    // Maps to an ordinal scale
	    /*
	    @private
	    @function setColors
	    @description Overrides the default ChartMain setColors setter - maps to an ordinal scale
	    @param {Array} colors Array of colors to update the chart to
	    */
	
	  }, {
	    key: 'setColors',
	    set: function set(newColors) {
	      var _this3 = this;
	
	      this._colors = newColors;
	      _internal2.default.convertColorsToScale(this, this.data.map(function (d) {
	        return d[_this3.ordinalColumn];
	      }));
	      return this;
	    }
	  }]);
	
	  return DonutChart;
	})(_ChartMain2.ChartMain);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(5);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DonutChart = {
	  // Updates the chart style
	  /*
	  @private
	  @function updateStyle
	  @description Updates the chart style
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateStyle: function updateStyle(context) {
	    context.svg.style({
	      font: 'sans-serif',
	      'font-size': '11px',
	      'text-anchor': 'middle'
	    });
	    return context;
	  },
	
	  // Updates the radius
	  /*
	  @private
	  @function updateRadius
	  @description Updates the radius
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateRadius: function updateRadius(context) {
	    context.radius = Math.min(context.getChartHeight, context.getChartWidth) / 2;
	    return context;
	  },
	
	  // Updates the arc slices with a new scale
	  /*
	  @private
	  @function updateArc
	  @description Updates the arc slices with a new scale
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateArc: function updateArc(context) {
	    context.arc = d3.svg.arc().outerRadius(context.radius - context.radius / 1.8).innerRadius(context.radius - 10);
	    return context;
	  },
	
	  // Updates the pie slices with a new scale
	  /*
	  @private
	  @function updatePie
	  @description Updates the pie slices with a new scale
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updatePie: function updatePie(context) {
	    context.pie = d3.layout.pie().sort(null).value(function (d) {
	      return d[context.linearColumn];
	    });
	    return context;
	  },
	
	  // Update the linear name for ordinal data
	  /*
	  @private
	  @function updateLinearColunm
	  @description Update the linear name for ordinal data
	  @param {Object} context (chart instance)
	  @param {String} columnName The new column name
	  @returns {Object} context (chart instance)
	  */
	
	  updateLinearColumn: function updateLinearColumn(context, columnName) {
	    context.linearColumn = columnName || _utils2.default.getFirstLinearColumn(context.data);
	    return context;
	  },
	
	  // Update the colunm name for ordinal data
	  /*
	  @private
	  @function updateOrdinalColunm
	  @description Update the colunm name for ordinal data
	  @param {Object} context (chart instance)
	  @param {String} columnName the new column name
	  @returns {Object} context Char(chart instance)
	  */
	
	  updateOrdinalColumn: function updateOrdinalColumn(context, columnName) {
	    context.ordinalColumn = columnName || _utils2.default.getFirstOrdinalColumn(context.data);
	    return context;
	  },
	
	  // Coverts the charts data to the correct format
	  /*
	  @private
	  @function convertData
	  @description Coverts the charts data to the correct format
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  convertData: function convertData(context) {
	    context.data.forEach(function (item) {
	      item[context.linearColumn] = Number(item[context.linearColumn]);
	    });
	    return context;
	  },
	
	  // Builds the actual chart components with data, including the tooltips
	  /*
	  @private
	  @function buildChartComponents
	  @description Builds the actual chart components with data, including the tooltips
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	   */
	
	  buildChartComponents: function buildChartComponents(context) {
	    var tooltip = context.tooltip;
	
	    var g = context.svg.append('g').selectAll('.arc').data(context.pie(context.data)).enter().append('g').attr('class', function (d, i) {
	      return 'arc data-id-' + i;
	    });
	
	    g.append('path').style('stroke', '#fff').style('stroke-width', '3px').style('fill', function (d) {
	      return context.getColorScale(d.data[context.ordinalColumn]);
	    }).transition().attrTween('d', function (d) {
	      var i = d3.interpolate(d.startAngle, d.endAngle);
	      return function (t) {
	        d.endAngle = i(t);
	        return context.arc(d);
	      };
	    });
	
	    context.svg.selectAll('.arc').append('text').attr('transform', function (d) {
	      return 'translate(' + context.arc.centroid(d) + ')';
	    }).attr('dx', '.35em').style('text-anchor', 'middle').style('font-family', 'sans-serif').style('fill', '#fff').style('opacity', 0).text(function (d) {
	      return d.data[context.ordinalColumn];
	    }).transition().duration(200).style('opacity', 1);
	
	    g.on('mouseover', function (d, i) {
	      // select all unfocused arcs and lowers opacity
	      d3.selectAll('.arc').transition().duration(200).style('opacity', 0.6);
	
	      d3.select('.data-id-' + i).transition().duration(200).style('opacity', 1);
	
	      tooltip.show();
	      tooltip.setContent(context.ordinalColumn + ': ' + d.data[context.ordinalColumn] + '       ' + context.linearColumn + ': ' + d.data[context.linearColumn]);
	    });
	
	    g.on('mouseout', function () {
	      tooltip.hide();
	      d3.selectAll('.arc').transition().duration(200).style('opacity', 1);
	    });
	
	    return context;
	  },
	
	  // Updates the donut slices on chart
	  /*
	  @private
	  @function updateChartComponents
	  @description Updates the donut slices on chart
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateChartComponents: function updateChartComponents(context) {
	    var g = context.svg.selectAll('.arc').data(context.pie(context.data));
	    g.selectAll('path').attr('d', context.arc).style('fill', function (d) {
	      return context.getColorScale(d.data[context.ordinalColumn]);
	    });
	    g.selectAll('text').attr('transform', function (d) {
	      return 'translate(' + context.arc.centroid(d) + ')';
	    }).attr('dy', '.35em').text(function (d) {
	      return d.data[context.ordinalColumn];
	    });
	    return context;
	  },
	
	  // Updates the title on the chart
	  /*
	  @private
	  @function updateTitle
	  @description Updates the title on the chart
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateTitle: function updateTitle(context) {
	    context.svg.append('text').attr('class', 'title').attr('font-size', context.getFontSize).attr('text-anchor', 'middle').text(context.getTitle);
	    return this;
	  },
	
	  // Updates the donut's position
	  /*
	  @private
	  @function updateTranslation
	  @description Updates the donut's position
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateTranslation: function updateTranslation(context) {
	    context.svg.attr('transform', 'translate(' + context.getParentWidth / 2 + ',' + context.getParentHeight / 2 + ')');
	    return context;
	  },
	
	  // Updates color of left bar chart after initial render
	  /*
	  @private
	  @function updateColors
	  @description Updates color of left bar chart after initial render
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateColors: function updateColors(context) {
	    context.element.select('svg').selectAll('rect').remove();
	
	    this.buildChartComponents(context);
	
	    return context;
	  }
	}; /*
	   This is required for d3 to load.
	   */
	/*  global d3  */
	
	exports.default = DonutChart;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ScatterChart = undefined;
	
	var _ChartMain2 = __webpack_require__(3);
	
	var _internal = __webpack_require__(4);
	
	var _internal2 = _interopRequireDefault(_internal);
	
	var _internalScatter = __webpack_require__(15);
	
	var _internalScatter2 = _interopRequireDefault(_internalScatter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // This is required for d3 to load.
	/* global d3 */
	
	// Defines the subclass for the Scatter Chart.
	
	var ScatterChart = exports.ScatterChart = (function (_ChartMain) {
	  _inherits(ScatterChart, _ChartMain);
	
	  function ScatterChart() {
	    _classCallCheck(this, ScatterChart);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ScatterChart).call(this));
	  }
	
	  // Calls the necessary internal methods from Internal object
	  // and InternalScatter to build the scatter chart.
	  /*
	  @private
	  @function build
	  @description Calls the necessary internal methods from Internal object and InternalScatter to build the scatter chart.
	  @returns {Object} this (chart instance)
	  */
	
	  _createClass(ScatterChart, [{
	    key: 'build',
	    value: function build() {
	      var _this2 = this;
	
	      // Calls each of the methods on Internal and InternalScatter
	      // object necessary to build up all the components of the chart.
	      // Internal holds all the methods that do d3 manipulation to
	      // create and update various chart elements
	      _internal2.default.selectElement(this);
	      _internal2.default.getParentDimensions(this);
	      _internal2.default.getChartDimensions(this);
	      _internalScatter2.default.setColumns(this);
	      _internal2.default.convertColorsToScale(this, this.data.map(function (d) {
	        return d[_this2.ordinalNames];
	      }));
	      _internalScatter2.default.setXscale(this);
	      _internalScatter2.default.setYscale(this);
	      _internal2.default.createSVGElement(this);
	      _internal2.default.createToolTip(this);
	      // x-axis
	      _internal2.default.createxAxis(this);
	      _internal2.default.buildXAxis(this);
	      // y-axis
	      _internal2.default.createyAxis(this);
	      _internal2.default.buildYAxis(this);
	      _internal2.default.setAxisStyle(this, 'path', 'none', '#000', 'crispEdges');
	      _internal2.default.setAxisStyle(this, 'line', 'none', '#000', 'crispEdges');
	      _internalScatter2.default.buildChartComponents(this);
	      _internalScatter2.default.styleChart(this);
	      _internal2.default.createLegend(this);
	    }
	
	    // Updates the dots on chart. Calls the internal update function
	    /*
	    @private
	    @function updateChartComponents
	    @description Updates the dots on chart. Calls the internal update function
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateChartComponents',
	    value: function updateChartComponents() {
	      _internalScatter2.default.updateChartComponents(this);
	      _internal2.default.createLegend(this);
	      return this;
	    }
	
	    // Updates the chart's height on the element itself
	    /*
	    @private
	    @function updateHeight
	    @description Updates the chart's height on the element itself
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateHeight',
	    value: function updateHeight() {
	      // Calls each of the methods on Internal object
	      // necessary to update the height of the chart. Internal
	      //  holds all the methods that do d3 manipulation to
	      // create and update various parts of the chart
	      _internal2.default.updateSVGElement(this);
	      _internalScatter2.default.setYscale(this);
	      _internal2.default.updateYAxisScale(this);
	      _internal2.default.updateYAxis(this);
	      _internal2.default.updateXAxisPosition(this);
	
	      return this;
	    }
	
	    // Updates the chart's margin on the element itself
	    /*
	    @private
	    @function updateMargins
	    @description Updates the chart's margin on the element itself
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateMargins',
	    value: function updateMargins() {
	      // Calls updateHeight and updateWidth on this instance
	      // to reflect the new margins.
	
	      this.updateHeight();
	      this.updateWidth();
	      return this;
	    }
	
	    // Calls each of the methods on Internal object necessary to
	    // update the width of the chart. Internal holds all the
	    // methods that do d3 manipulation to create and update various
	    // parts of the chart
	    /*
	    @private
	    @function updateWidth
	    @description Updates the chart's width on the element itself
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateWidth',
	    value: function updateWidth() {
	      _internal2.default.updateSVGElement(this);
	      _internalScatter2.default.setXscale(this);
	      _internal2.default.updateXAxisScale(this);
	      _internal2.default.updateXAxis(this);
	
	      return this;
	    }
	
	    // Overrides the default ChartMain setColors setter.
	    // Maps to an ordinal scale
	    /*
	    @private
	    @function setColors
	    @description Overrides the default ChartMain setColors setter - maps to an ordinal scale
	    @param {Array} colors Array of colors to update the chart to
	    */
	
	  }, {
	    key: 'updateColors',
	
	    // Calls InternalScatter to update color of scatter
	    // chart after initial render
	    /*
	    @private
	    @function updateColors
	    @description Calls InternalScatter to update color of scatter chart after initial render
	    @returns {Object} this Chart object
	    */
	    value: function updateColors() {
	      _internalScatter2.default.updateColors(this);
	
	      return this;
	    }
	
	    // Calls Internal to update/rerender x-axis label.
	    /*
	    @private
	    @function updatexAxisLabel
	    @description Calls Internal to update x-axis label
	    @returns {Object} this Chart object
	    */
	
	  }, {
	    key: 'updatexAxisLabel',
	    value: function updatexAxisLabel() {
	      /*
	      Calls Internal object to update the x-axis label
	      */
	      _internal2.default.updateXAxis(this);
	
	      return this;
	    }
	
	    // Calls Internal to update/rerender y-axis label
	    /*
	    @private
	    @function updateyAxisLabel
	    @description Calls Internal to update/rerender y-axis label
	    @returns {Object} this Chart object
	    */
	
	  }, {
	    key: 'updateyAxisLabel',
	    value: function updateyAxisLabel() {
	      /*
	      Calls Internal object to update the x-axis label
	      */
	      _internal2.default.updateYAxis(this);
	
	      return this;
	    }
	  }, {
	    key: 'setColors',
	    set: function set(newColors) {
	      var _this3 = this;
	
	      this._colors = newColors;
	      _internal2.default.convertColorsToScale(this, this.data.map(function (d) {
	        return d[_this3.ordinalNames];
	      }));
	    }
	  }]);
	
	  return ScatterChart;
	})(_ChartMain2.ChartMain);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(5);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var scatter = {
	  // Parses and sets the column names for a particular chart instance
	  /*
	  @private
	  @function setColumns
	  @description Parses and sets the column names for a particular chart instance
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  setColumns: function setColumns(context) {
	    context.xColumnName = _utils2.default.getFirstLinearColumn(context.data);
	    context.yColumnName = _utils2.default.getColumnNames(context.data)[1];
	    context.ordinalNames = _utils2.default.getFirstOrdinalColumn(context.data);
	
	    return context;
	  },
	
	  // Sets the scale for the x-axis based on the results of the setColumns function
	  /*
	  @private
	  @function setXscale
	  @description Sets the scale for the x-axis based on the results of the setColumns function
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  setXscale: function setXscale(context) {
	    context.setxAxisLabel = context.xColumnName;
	    context.xScale = d3.scale.linear().range([0, context.getChartWidth]);
	    context.xScale.domain(d3.extent(context.data, function (d) {
	      return +d[context.xColumnName];
	    })).nice();
	
	    return context;
	  },
	
	  // Sets the scale for the y-axis based on the results of the setColumns function
	  /*
	  @private
	  @function setYscale
	  @description Sets the scale for the y-axis based on the results of the setColumns function
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  setYscale: function setYscale(context) {
	    context.setyAxisLabel = context.yColumnName;
	    context.yScale = d3.scale.linear().range([context.getChartHeight, 0]);
	    context.yScale.domain(d3.extent(context.data, function (d) {
	      return +d[context.yColumnName];
	    })).nice();
	    return context;
	  },
	
	  // Builds the actual chart components with data
	  /*
	  @private
	  @function buildChartComponents
	  @description Builds the actual chart components with data
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  buildChartComponents: function buildChartComponents(context) {
	    var tooltip = context.tooltip;
	
	    context.svg.selectAll('.scatter').data(context.data).enter().append('circle').attr('class', 'dot').on('mouseover', function (d) {
	      d3.select(d3.event.target).transition().duration(200).attr('r', 7);
	      tooltip.show();
	      tooltip.setContent(context.yColumnName + ': ' + d[context.yColumnName] + '           ' + context.xColumnName + ': ' + d[context.xColumnName]);
	    }).on('mouseout', function () {
	      d3.select(d3.event.target).transition().duration(200).attr('r', 4);
	      tooltip.hide();
	    }).attr('r', 4).attr('cx', function (d) {
	      return context.xScale(d[context.getxAxisLabel]);
	    }).attr('cy', function (d) {
	      return context.yScale(d[context.getyAxisLabel]);
	    }).style('fill', function (d) {
	      return context.getColorScale(d[context.ordinalNames]);
	    }).style('opacity', 0).transition().delay(function (d, i) {
	      return i * (Math.random() * 20);
	    }).style('opacity', 1);
	
	    return context;
	  },
	
	  // Updates the chart's style on the element
	  /*
	  @private
	  @function styleChart
	  @description Updates the chart's style on the element
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  styleChart: function styleChart(context) {
	    context.element.select('svg').style('font-family', context.getFontStyle).attr('font-size', context.getFontSize).append('text').attr('class', 'title').attr('x', context.getChartWidth * 0.5).attr('y', 20).text(context.getTitle);
	
	    return context;
	  },
	  updateChartComponents: function updateChartComponents(context) {
	    context.svg.select('.scatter').remove();
	    context.svg.selectAll('.dot').remove();
	    context.svg.selectAll('.legend').remove();
	    context.element.select('.title').remove();
	
	    this.buildChartComponents(context);
	    this.styleChart(context);
	    return context;
	  },
	
	  // Updates the chart's colors
	  /*
	  @private
	  @function  updateColors
	  @description Updates the chart's colors
	  @param {Object} context (chart instance)
	  @returns {Object} context(chart instance)
	  */
	
	  updateColors: function updateColors(context) {
	    context.element.select('svg').selectAll('.dot').style('fill', function (d) {
	      return context.getColorScale(d[context.ordinalNames]);
	    });
	
	    context.element.selectAll('.legend-data rect').style('fill', context.getColors);
	
	    return context;
	  }
	}; /* global d3 */
	
	exports.default = scatter;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.WaffleChart = undefined;
	
	var _ChartMain2 = __webpack_require__(3);
	
	var _internal = __webpack_require__(4);
	
	var _internal2 = _interopRequireDefault(_internal);
	
	var _internalWaffle = __webpack_require__(17);
	
	var _internalWaffle2 = _interopRequireDefault(_internalWaffle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // This is required for d3 to load.
	/* global d3 */
	
	// Constructor subclass for Waffle Chart.
	
	var WaffleChart = exports.WaffleChart = (function (_ChartMain) {
	  _inherits(WaffleChart, _ChartMain);
	
	  function WaffleChart() {
	    _classCallCheck(this, WaffleChart);
	
	    // Adds default waffleChart configuration
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WaffleChart).call(this));
	
	    _this._numColumns = 20;
	    _this._numRows = 5;
	    _this._squareValue = 0;
	    _this._squareSize = 25;
	    _this._gap = 1;
	    // Overwrites default colors with ordinal scale
	    _this._colors = d3.scale.category10();
	    return _this;
	  }
	
	  // All of the below setters and getters are used for the chart
	  // properties instantiated in the contructor function above.
	
	  _createClass(WaffleChart, [{
	    key: 'build',
	
	    // Builds up the elements of the waffle chart
	    /*
	    @private
	    @function build
	    @description Builds up the waffle chart
	    @returns {Object} this (chart instance)
	    */
	
	    value: function build() {
	      _internal2.default.selectElement(this);
	      _internal2.default.getParentDimensions(this);
	      _internal2.default.getChartDimensions(this);
	      _internalWaffle2.default.setColumns(this);
	      _internalWaffle2.default.processData(this);
	      _internalWaffle2.default.calculateSize(this);
	      _internal2.default.createSVGElement(this);
	      _internal2.default.createToolTip(this);
	      _internalWaffle2.default.buildChartComponents(this);
	      _internalWaffle2.default.styleChart(this);
	      _internalWaffle2.default.createLegend(this);
	
	      return this;
	    }
	
	    // Calls InternalWaffle to update the waffle chart components.
	    // Used when a property changes that requires a re-render.
	    /*
	    @private
	    @function updateChartComponents
	    @description Calls InternalWaffle to update the waffle chart components
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateChartComponents',
	    value: function updateChartComponents() {
	      _internalWaffle2.default.updateChartComponents(this);
	
	      return this;
	    }
	
	    // Overwrites setChartHeight for wafflechart (wafflechart is differet
	    // from the other charts)
	
	  }, {
	    key: 'changeColumns',
	    value: function changeColumns(columns) {
	      this.setNumColumns = columns;
	      _internal2.default.updateSVGElement(this);
	      _internalWaffle2.default.updateChartComponents(this);
	    }
	  }, {
	    key: 'changeSquareSize',
	    value: function changeSquareSize(size) {
	      this.setSquareSize = size;
	      _internal2.default.updateSVGElement(this);
	      _internalWaffle2.default.updateChartComponents(this);
	    }
	  }, {
	    key: 'changeRows',
	    value: function changeRows(rows) {
	      this.setNumRows = rows;
	      _internal2.default.updateSVGElement(this);
	      _internalWaffle2.default.updateChartComponents(this);
	    }
	  }, {
	    key: 'updateWidth',
	    value: function updateWidth() {
	      _internal2.default.updateSVGElement(this);
	      _internalWaffle2.default.updateChartComponents(this);
	    }
	  }, {
	    key: 'updateHeight',
	    value: function updateHeight() {
	      _internal2.default.updateSVGElement(this);
	      _internalWaffle2.default.updateChartComponents(this);
	    }
	
	    // Overrides the default ChartMain setColors setter.
	    // Maps to an ordinal scale
	    /*
	    @private
	    @function setColors
	    @description Overrides the default ChartMain setColors setter - maps to an ordinal scale
	    @param {Array} colors Array of colors to update the chart to
	    */
	
	  }, {
	    key: 'updateColors',
	
	    // Updates color of waffle chart after initial render
	    // Used when a property changes that requires a re-render.
	    /*
	    @private
	    @function Updates color of waffle chart after initial render
	    @returns {Object} this (chart instance)
	    */
	    value: function updateColors() {
	      _internalWaffle2.default.updateColors(this);
	
	      return this;
	    }
	  }, {
	    key: 'getSquareValue',
	    get: function get() {
	      return this._squareValue;
	    }
	  }, {
	    key: 'setSquareValue',
	    set: function set(squareValue) {
	      this._squareValue = squareValue;
	    }
	  }, {
	    key: 'getNumColumns',
	    get: function get() {
	      return this._numColumns;
	    }
	  }, {
	    key: 'setNumColumns',
	    set: function set(num) {
	      this._numColumns = num;
	    }
	  }, {
	    key: 'setNumRows',
	    set: function set(num) {
	      this._numRows = num;
	    }
	  }, {
	    key: 'getNumRows',
	    get: function get() {
	      return this._numRows;
	    }
	  }, {
	    key: 'getSquareSize',
	    get: function get() {
	      return this._squareSize;
	    }
	  }, {
	    key: 'setSquareSize',
	    set: function set(size) {
	      this._squareSize = size;
	    }
	  }, {
	    key: 'getGapSize',
	    get: function get() {
	      return this._gap;
	    }
	  }, {
	    key: 'setChartHeight',
	    set: function set(height) {
	      this.setNumRows = Math.floor(height / this.getSquareSize);
	      this._height = height;
	    }
	  }, {
	    key: 'setChartWidth',
	    set: function set(width) {
	      this.setNumColumns = Math.floor(width / this.getSquareSize);
	      this._width = width;
	    }
	  }, {
	    key: 'setColors',
	    set: function set(newColors) {
	      var color = d3.scale.ordinal().domain(this.getColors.domain()).range(newColors);
	      this._colors = color;
	    }
	  }]);
	
	  return WaffleChart;
	})(_ChartMain2.ChartMain);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(5);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /*
	                                                                                                                                                                                                                  This is required for d3 to load.
	                                                                                                                                                                                                                  */
	/* global d3 */
	
	var waffle = {
	  // Parses and sets the column names for a particular WaffleChart instance
	  /*
	  @private
	  @function setColumns
	  @description Parses and sets the column names for a particular WaffleChart instance
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  setColumns: function setColumns(context) {
	    context.xColumnName = _utils2.default.getFirstOrdinalColumn(context.data);
	    context.yColumnName = _utils2.default.getColumnNames(context.data)[1];
	
	    return context;
	  },
	
	  // Processes the data input and calculates the required number of squares and colors
	  /*
	  @private
	  @function processData
	  @description Processes the data input and calculates the required number of squares and colors
	  @param {Object} context (chart instance)
	  @returns {Object} context(chart instance)
	  */
	
	  processData: function processData(context) {
	    // sum of dataset
	    var total = d3.sum(context.data, function (d) {
	      return d[context.yColumnName];
	    });
	    context.processedData = [];
	    // setting square value to sum of data set divided by number of squares in the chart
	    context.setSquareValue = total / (context.getNumColumns * context.getNumRows);
	    // Remap the data
	    context.data.forEach(function (d, i) {
	      d[context.yColumnName] = +d[context.yColumnName];
	      // Figure out how many squares are needed
	      d.units = Math.floor(d[context.yColumnName] / context.getSquareValue);
	      context.processedData = context.processedData.concat(Array(d.units + 1).join(1).split('').map(function () {
	        var _ref;
	
	        return _ref = {
	          squareValue: context.getSquareValue,
	          units: d.units
	        }, _defineProperty(_ref, context.yColumnName, d[context.yColumnName]), _defineProperty(_ref, 'groupIndex', i), _defineProperty(_ref, context.xColumnName, d[context.xColumnName]), _ref;
	      }));
	    });
	
	    return context;
	  },
	
	  // Calculates the size of each square
	  /*
	  @private
	  @function calculateSize
	  @description Calculates the size of each square
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  calculateSize: function calculateSize(context) {
	    context.setChartWidth = context.getSquareSize * context.getNumColumns + context.getNumColumns * context.getGapSize + context.getSquareSize;
	    context.setChartHeight = context.getSquareSize * context.getNumRows + context.getNumRows * context.getGapSize + context.getSquareSize;
	
	    return context;
	  },
	
	  // Builds the actual chart components (dots) and tooltip with data.
	  /*
	  @private
	  @function buildChartComponents
	  @description Builds the actual chart components (dots) and tooltip with data.
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  buildChartComponents: function buildChartComponents(context) {
	    var tooltip = context.tooltip;
	
	    context.svg.append('g').selectAll('div').attr('class', 'waffle').data(context.processedData).enter().append('rect').attr('width', context.getSquareSize).attr('height', context.getSquareSize).attr('class', function (d) {
	      return 'square ' + context.xColumnName + d.groupIndex;
	    }).on('mouseover', function (d) {
	      d3.selectAll('rect').transition().duration(200).style('opacity', 0.6);
	
	      //  select all from same group
	      d3.selectAll('.' + d3.select(d3.event.target).attr('class').split(' ')[1]).transition().duration(200).style('opacity', 1);
	
	      tooltip.show();
	      tooltip.setContent(d[context.xColumnName] + ', ' + d[context.yColumnName]);
	    }).on('mouseout', function () {
	      tooltip.hide();
	      d3.selectAll('rect').transition().duration(500).style('opacity', 1);
	    }).style('opacity', 0).attr('x', function (d, i) {
	      //  groups n squares for column
	      var col = Math.floor(i / context.getNumRows);
	      return col * context.getSquareSize + col * context.getGapSize;
	    }).attr('y', 300).attr('fill', function (d) {
	      return context.getColors(d.groupIndex);
	    }).transition().delay(function (d, i) {
	      return i * 10;
	    }).attr('y', function (d, i) {
	      var row = i % context.getNumRows;
	      return context.getNumRows * context.getSquareSize - (row * context.getSquareSize + row * context.getGapSize + 10) - 17;
	    }).style('opacity', 1);
	
	    return context;
	  },
	
	  // Updates the chart's style on the element
	  /*
	  @private
	  @function styleChart
	  @description Updates the chart's style on the element
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  styleChart: function styleChart(context) {
	    context.element.select('svg').style('font-family', context.getFontStyle).attr('font-size', context.getFontSize).append('text').attr('class', 'title').attr('x', context.getChartWidth * 0.5).attr('y', 20).text(context.xColumnName + ' | ' + context.yColumnName);
	    return context;
	  },
	
	  // Creates a legend for the chart according to colors and data used
	  /*
	  @private
	  @function createLegend
	  @description Creates a legend for the chart according to colors and data used
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  createLegend: function createLegend(context) {
	    var legend = context.svg.append('g').attr('class', 'legend').selectAll('.legend-data').data(context.getColors.domain()).enter().append('g').attr('class', 'legend-data')
	    // Makes each rect spaced by 20px
	    .attr('transform', function (d, i) {
	      return 'translate(' + i * 50 + ', ' + context.getChartHeight + ')';
	    });
	    legend.append('rect').attr('x', 10).attr('width', context.getNumColumns).attr('height', 5)
	    // Setting colors
	    .style('fill', context.getColors);
	    // // append the name of ordinal data
	    legend.append('text').attr('x', 32).attr('y', 20).style('text-anchor', 'end').text(function (d) {
	      return context.data[d][context.xColumnName];
	    });
	
	    return context;
	  },
	
	  // Updates the chart's colors
	  /*
	  @private
	  @function updateColors
	  @description Updates the chart's colors
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateColors: function updateColors(context) {
	    context.element.select('svg').selectAll('.square').style('fill', function (d) {
	      return context.getColors(d[context.yColumnName]);
	    });
	
	    context.element.selectAll('.legend-data rect').style('fill', context.getColors);
	
	    return context;
	  },
	
	  // Updates the chart components by re-processing the data
	  /*
	  @private
	  @function updateChartComponents
	  @description Updates the chart components by re-processing the data
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateChartComponents: function updateChartComponents(context) {
	    context.element.select('svg').remove();
	    this.processData(context);
	    context.build(context);
	
	    return context;
	  }
	};
	
	exports.default = waffle;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BarChartLeft = undefined;
	
	var _ChartMain2 = __webpack_require__(3);
	
	var _internal = __webpack_require__(4);
	
	var _internal2 = _interopRequireDefault(_internal);
	
	var _internalBarLeft = __webpack_require__(19);
	
	var _internalBarLeft2 = _interopRequireDefault(_internalBarLeft);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Constructor subclass for Left Bar Chart.
	
	var BarChartLeft = exports.BarChartLeft = (function (_ChartMain) {
	  _inherits(BarChartLeft, _ChartMain);
	
	  function BarChartLeft(xAxisOrientation, yAxisOrientation) {
	    _classCallCheck(this, BarChartLeft);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BarChartLeft).call(this));
	
	    _this._xAxisOrientation = xAxisOrientation || 'bottom';
	    _this._yAxisOrientation = yAxisOrientation || 'left';
	    return _this;
	  }
	
	  // Builds up the components of left bar chart
	  /*
	  @private
	  @function build
	  @description Builds up the left bar chart
	  @returns {Object} this (chart instance)
	  */
	
	  _createClass(BarChartLeft, [{
	    key: 'build',
	    value: function build() {
	      // Calls each of the methods on Internal, InternalBar and
	      // InternalBarLeft object necessary to build up all the
	      // components of the chart. Internal holds all the methods
	      // that do d3 manipulation to create and update various
	      // parts of the chart
	
	      _internal2.default.selectElement(this);
	      _internal2.default.getParentDimensions(this);
	      _internal2.default.getChartDimensions(this);
	      _internalBarLeft2.default.setXscale(this);
	      _internalBarLeft2.default.setYscale(this);
	      _internal2.default.createSVGElement(this);
	      _internal2.default.createToolTip(this);
	      _internalBarLeft2.default.createxAxis(this);
	      _internalBarLeft2.default.buildXAxis(this);
	      _internalBarLeft2.default.createyAxis(this);
	      _internalBarLeft2.default.buildYAxis(this);
	      _internal2.default.setAxisStyle(this, 'path', 'none', '#000', 'crispEdges');
	      _internal2.default.setAxisStyle(this, 'line', 'none', '#000', 'crispEdges');
	      _internalBarLeft2.default.buildChartComponents(this);
	
	      return this;
	    }
	
	    // Calls InternalBarLeft to update the bar on chart
	    // Used when a property changes that requires a re-render.
	    /*
	    @private
	    @function updateChartComponents
	    @description Calls InternalBarLeft to update the bar on chart
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateChartComponents',
	    value: function updateChartComponents() {
	      // Calls method on InternalBarLeft to re-render all the
	      // chart components. Used to reflect any changes made
	      // to property values
	
	      _internalBarLeft2.default.updateChartComponents(this);
	
	      return this;
	    }
	
	    // Updates the chart's height on the element itself
	    // Used when the height changes that requires a re-render.
	    /*
	    @private
	    @function updateHeight
	    @description Updates the chart's height on the element itself
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateHeight',
	    value: function updateHeight() {
	      // Internal holds all the methods that do d3 manipulation
	      // to create and update various parts of the chart
	
	      _internal2.default.updateSVGElement(this);
	      _internalBarLeft2.default.setYscale(this);
	      _internal2.default.updateYAxisScale(this);
	      _internal2.default.updateYAxis(this);
	      _internal2.default.updateXAxisPosition(this);
	
	      return this;
	    }
	
	    // Updates the chart's margin on the element itself
	    // Used when the margins change that requires a re-render.
	    /*
	    @private
	    @function updateMargins
	    @description Updates the chart's margin on the element itself
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateMargins',
	    value: function updateMargins() {
	      // Calls updateHeight and updateWidth on this instance
	      // to reflect the new margins.
	      this.updateHeight();
	      this.updateWidth();
	
	      return this;
	    }
	
	    // Updates the chart's width on the element itself
	    // Used when the width changes that requires a re-render.
	    /*
	    @private
	    @function updateWidth
	    @description Updates the chart's width on the element itself
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateWidth',
	    value: function updateWidth() {
	      // Internal holds all the methods that do d3 manipulation
	      // to create and update various parts of the chart
	
	      _internal2.default.updateSVGElement(this);
	      _internalBarLeft2.default.setXscale(this);
	      _internal2.default.updateXAxisScale(this);
	      _internal2.default.updateXAxis(this);
	
	      return this;
	    }
	
	    // Calls InternalBar to update color of left bar chart
	    // after initial render. InternalBar does the d3 manipulation
	    /*
	    @private
	    @function updateColors
	    @description Calls InternalBar to update color of left bar chart after initial render
	    @param {Array} colors Array of colors to update the chart to
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateColors',
	    value: function updateColors() {
	      _internalBarLeft2.default.updateColors(this);
	
	      return this;
	    }
	
	    // Calls InternalBarLeft to x-axis label
	    /*
	    @private
	    @function updatexAxisLabel
	    @description Calls Internal to update x-axis label
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updatexAxisLabel',
	    value: function updatexAxisLabel() {
	      _internalBarLeft2.default.updateXAxis(this);
	
	      return this;
	    }
	
	    // Calls InternalBarLeft to y-axis label
	    /*
	    @private
	    @function updatexAxisLabel
	    @description Calls Internal to x-axis label
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateyAxisLabel',
	    value: function updateyAxisLabel() {
	      _internalBarLeft2.default.updateYAxis(this);
	
	      return this;
	    }
	  }]);
	
	  return BarChartLeft;
	})(_ChartMain2.ChartMain);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(5);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var InternalBarLeft = {
	  // Builds up the bar chart
	  /*
	  @private
	  @function buildChartComponents
	  @description Builds up the bar chart
	  @returns {Object} context (chart instance)
	  */
	
	  buildChartComponents: function buildChartComponents(context) {
	    // Uses d3 to build the chart components for left bar chart
	    // using the chart data. Sets event listeners mouseover and
	    // mouseout to hide/show tooltips. Uses transition to
	    // transition the bars into view.
	    var tooltip = context.tooltip;
	
	    context.svg.selectAll('.bar').data(context.data).enter().append('g').append('rect').attr('class', 'bar').on('mouseover', function (d) {
	      //  Set tooltips
	      tooltip.show();
	      tooltip.setContent('<strong>' + context.yColumnName + ':</strong> ' + d[context.yColumnName] + '</br>\n               <strong>' + context.xColumnName + ':</strong> ' + d[context.xColumnName]);
	
	      d3.select(d3.event.target).style('fill', context.getColors[1]);
	    }).on('mouseout', function () {
	      tooltip.hide();
	      d3.select(d3.event.target).style('fill', context.getColors[0]);
	    }).attr('height', context.y.rangeBand()).attr('y', function (d) {
	      var label = context.getyAxisLabel;
	      return context.yScale(d[label]);
	    }).attr('x', 0).attr('width', 0).style('fill', context.getColors[0]).transition().duration(300).delay(function (d, i) {
	      return i * 50;
	    }).attr('x', function (d) {
	      var label = context.getxAxisLabel;
	      return d[label];
	    }).attr('width', function (d) {
	      var label = context.getxAxisLabel;return context.x(d[label]);
	    });
	
	    return context;
	  },
	
	  // Calls InternalBar to update and rerender the bars on chart
	  /*
	  @private
	  @function updateChartComponents
	  @description Calls InternalBar to update and rerender the bars on chart
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateChartComponents: function updateChartComponents(context) {
	    context.svg.selectAll('rect').remove();
	
	    this.buildChartComponents(context);
	    return context;
	  },
	
	  // Creates d3 x-axis
	  /*
	  @private
	  @function createxAxis
	  @description Creates d3 x-axis
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  createxAxis: function createxAxis(context) {
	    context.xAxis = d3.svg.axis().scale(context.xScale).orient(context.getxAxisOrientation);
	
	    return context;
	  },
	
	  // Creates d3 axis - y
	  /*
	  @private
	  @function createyAxis
	  @description Creates d3 axis - y
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  createyAxis: function createyAxis(context) {
	    context.yAxis = d3.svg.axis().scale(context.yScale).orient(context.getyAxisOrientation);
	
	    return context;
	  },
	
	  // Builds up the x-axis
	  /*
	  @private
	  @function buildXAxis
	  @description Builds up the x-axis
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  buildXAxis: function buildXAxis(context) {
	    // Sets up x-axis positioning. Then appends x-axis label
	    context.svg.append('g').attr('class', 'x axis').attr('transform', 'translate(0,' + context.getChartHeight + ')').call(context.xAxis).append('text').attr('class', 'x-axis-label').text(context.getxAxisLabel).attr('dy', '35px').attr('dx', context.getChartWidth * 0.5 - context.getMargins.right * 0.5);
	
	    return context;
	  },
	
	  // Builds up the y-axis
	  /*
	  @private
	  @function buildYAxis
	  @description Builds up the y-axis
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  buildYAxis: function buildYAxis(context) {
	    // Sets up y-axis positioning. Then appends the x-axis label.
	    context.svg.append('g').attr('class', 'y axis').call(context.yAxis).append('text').attr('class', 'y-axis-label').attr('x', 0).text(context.getyAxisLabel).attr('transform', 'rotate(-90)').attr('dx', -context.getChartHeight * 0.5 - context.getMargins.right * 0.5).attr('dy', '-30px').style('text-anchor', 'top');
	
	    return context;
	  },
	
	  // Updates the up the y-axis
	  /*
	  @private
	  @function Updates the up the y-axis
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateYAxis: function updateYAxis(context) {
	    // Updates the y-axis on chart by rebuilding it. Used when
	    // properties on a chart are changed and require a rebuild.
	    context.element.select('svg').selectAll('g .y.axis').call(context.yAxis);
	
	    context.element.select('.y-axis-label').attr('class', 'y-axis-label').attr('x', 0).text(context.getyAxisLabel).attr('transform', 'rotate(-90)').attr('dx', -context.getChartHeight * 0.5 - context.getMargins.right * 0.5).attr('dy', '-30px').style('text-anchor', 'top');
	
	    return context;
	  },
	
	  // Updates the x-axis scale
	  /*
	  @private
	  @function updateXAxis
	  @description Updates the x-axis scale
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateXAxis: function updateXAxis(context) {
	    // Updates the x-axis on chart by rebuilding it.
	    //  Used when properties on a chart are changed and
	    // require a rebuild.
	    context.element.select('svg').selectAll('g .x.axis').call(context.xAxis);
	    context.element.select('.x-axis-label').text(context.getxAxisLabel).attr('dy', '35px').attr('dx', context.getChartWidth * 0.5 - context.getMargins.right * 0.5);
	
	    return context;
	  },
	
	  // Sets the appropriate y-scale
	  /*
	  @private
	  @function setYscale
	  @description Sets the appropriate y-scale
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  setYscale: function setYscale(context) {
	    // Sets the y-scale to be ordinal. Then maps the data to the scale's domain.
	    context.yColumnName = _utils2.default.getFirstOrdinalColumn(context.data);
	    context.setyAxisLabel = context.yColumnName;
	    context.yScale = d3.scale.ordinal().range([0, context.getChartHeight]).rangeRoundBands([0, context.getChartHeight], 0.1);
	
	    context.y = context.yScale.domain(context.data.map(function (d) {
	      return d[context.yColumnName];
	    }));
	
	    return context;
	  },
	
	  // Sets the appropriate x-scale
	  /*
	  @private
	  @function setXscale
	  @description Sets the appropriate x-scale
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  setXscale: function setXscale(context) {
	    // Sets the x-scale to be linear. Then maps the data to the scale's domain.
	    context.xColumnName = _utils2.default.getFirstLinearColumn(context.data);
	    context.setxAxisLabel = context.xColumnName;
	    context.xScale = d3.scale.linear().range([0, context.getChartWidth]);
	    context.x = context.xScale.domain([0, d3.max(context.data, function (d) {
	      var label = context.getxAxisLabel;return d[label];
	    })]);
	    return context;
	  },
	
	  // Updates color of left bar chart after initial render
	  /*
	  @private
	  @function updateColors
	  @description Updates color of left bar chart after initial render
	  @param {Object} context (chart instance)
	  @returns {Object} context (chart instance)
	  */
	
	  updateColors: function updateColors(context) {
	    context.element.select('svg').selectAll('rect').remove();
	
	    this.buildChartComponents(context);
	
	    return context;
	  }
	}; // This is required for d3 to load.
	/* global d3 */
	
	exports.default = InternalBarLeft;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AreaChart = undefined;
	
	var _ChartMain2 = __webpack_require__(3);
	
	var _internal = __webpack_require__(4);
	
	var _internal2 = _interopRequireDefault(_internal);
	
	var _internalArea = __webpack_require__(21);
	
	var _internalArea2 = _interopRequireDefault(_internalArea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AreaChart = exports.AreaChart = (function (_ChartMain) {
	  _inherits(AreaChart, _ChartMain);
	
	  function AreaChart() {
	    _classCallCheck(this, AreaChart);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AreaChart).call(this));
	
	    _this.dateFormat = '';
	    return _this;
	  }
	
	  // Build up all the components for the chart
	  /*
	  @private
	  @function build
	  @description Build up all the components for the chart
	  @returns {Object} this (chart instance)
	  */
	
	  _createClass(AreaChart, [{
	    key: 'build',
	    value: function build() {
	      // Calls each of the methods on Internal and InternalArea object
	      // necessary to build up all the components of the chart. Internal
	      // holds all the methods that do d3 manipulation to create and
	      // update various parts of the chart
	
	      _internal2.default.selectElement(this);
	      _internal2.default.getParentDimensions(this);
	      _internal2.default.getChartDimensions(this);
	      _internal2.default.createSVGElement(this);
	      _internal2.default.createToolTip(this);
	      _internalArea2.default.setColumnNames(this);
	      _internalArea2.default.convertData(this);
	      _internalArea2.default.setXScale(this);
	      _internalArea2.default.setYScale(this);
	      _internal2.default.createxAxis(this);
	      _internal2.default.buildXAxis(this);
	      _internal2.default.createyAxis(this);
	      _internalArea2.default.buildYAxis(this);
	      _internalArea2.default.buildArea(this);
	      _internal2.default.setAxisStyle(this, 'path', 'none', '#000', 'crispEdges');
	      _internal2.default.setAxisStyle(this, 'line', 'none', '#000', 'crispEdges');
	      _internalArea2.default.updateColors(this);
	      _internalArea2.default.buildChartComponents(this);
	      _internalArea2.default.styleChart(this);
	
	      return this;
	    }
	
	    // Updates the area components on the chart
	    // Used when a property changes that requires a re-render.
	    /*
	    @private
	    @function updateChartComponents
	    @description Updates the area components on the chart
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateChartComponents',
	    value: function updateChartComponents() {
	      _internalArea2.default.updateChartComponents(this);
	
	      return this;
	    }
	
	    // Updates the chart's height on the element
	    // Used when the height changes that requires a re-render.
	    /*
	    @private
	    @function updateHeight
	    @description Updates the chart's height on the element
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateHeight',
	    value: function updateHeight() {
	      _internal2.default.updateSVGElement(this);
	      _internalArea2.default.setYScale(this);
	      _internal2.default.createyAxis(this);
	      _internalArea2.default.buildYAxis(this);
	      _internal2.default.updateXAxisPosition(this);
	      _internalArea2.default.buildArea(this);
	      _internalArea2.default.updateChartComponents(this);
	
	      return this;
	    }
	
	    // Updates the chart's width on the element
	    // Used when the width changes that requires a re-render.
	    /*
	    @private
	    @function updateWidth
	    @description Updates the chart's width on the element
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateWidth',
	    value: function updateWidth() {
	      _internal2.default.updateSVGElement(this);
	      _internalArea2.default.setXScale(this);
	      _internal2.default.createxAxis(this);
	      _internal2.default.buildXAxis(this);
	      _internalArea2.default.buildArea(this);
	      _internalArea2.default.updateChartComponents(this);
	      return this;
	    }
	
	    // Updates the chart's margin on the element
	    // Used when the margins change that requires a re-render.
	    /*
	    @private
	    @function updateMargins
	    @description Updates the chart's margin on the element
	    @@returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateMargins',
	    value: function updateMargins() {
	      this.updateWidth();
	      this.updateHeight();
	      return this;
	    }
	
	    // Update color of area in chart
	    // Used when the color property changes that requires a re-render.
	    /*
	    @function updateColors
	    @description Update color of area in chart
	    @returns {Object} this (chart instance)
	    */
	
	  }, {
	    key: 'updateColors',
	    value: function updateColors() {
	      _internalArea2.default.updateColors(this);
	      return this;
	    }
	  }]);
	
	  return AreaChart;
	})(_ChartMain2.ChartMain);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(5);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /*
	                                                                                                                                                                                                                  This is required for d3 to load.
	                                                                                                                                                                                                                  */
	/*  global d3  */
	
	var internalArea = {
	  // Builds the actual chart components with data, including the tooltips
	  /*
	  @private
	  @function buildChartComponents
	  @description Builds the actual chart components with data, including the tooltips
	  @returns {Object} context Chart object
	   */
	
	  buildChartComponents: function buildChartComponents(context) {
	    var tooltip = context.tooltip;
	
	    var d0 = context.area(context.data.map(function () {
	      var _ref;
	
	      return _ref = {}, _defineProperty(_ref, context.xColumnName, context.xScale.domain()[0]), _defineProperty(_ref, context.yColumnName, context.yScale.domain()[0]), _ref;
	    }));
	    var d1 = context.area(context.data);
	
	    var transition = function transition(path) {
	      path.transition().duration(1000).attrTween('d', internalArea.pathTween(d1, 1));
	    };
	
	    context.svg.append('path').datum(context.data).attr('class', 'area').style({
	      fill: context.getColors[0],
	      stroke: context.getColors[0],
	      'stroke-width': 'crispEdges'
	    }).attr('d', d0).transition().call(transition, d0, d1);
	
	    var area = d3.select('.area');
	
	    area.on('mousemove', function () {
	      tooltip.show();
	
	      tooltip.setContent(context.xColumnName + ': ' + context.xScale.invert(d3.event.pageX - context.getMargins.left - context.getMargins.right).toLocaleString() + '      ' + context.yColumnName + ': ' + context.yScale.invert(d3.event.pageY - context.getMargins.top - context.getMargins.bottom).toFixed(3));
	    });
	
	    area.on('mouseout', function () {
	      tooltip.hide();
	    });
	
	    return context;
	  },
	
	  // Does the path tweening for the area chart transitions
	  /*
	  @private
	  @function pathTween
	  @description Does the path tweening for the area chart transitions
	  @param {String} d1 the path to be transitioned to
	  @param {Number} precision the precision needed for the graph
	  @returns {Function} function
	   */
	
	  pathTween: function pathTween(d1, precision) {
	    return function worker() {
	      var path0 = this;
	      var path1 = path0.cloneNode();
	      var n0 = path0.getTotalLength();
	      var n1 = (path1.setAttribute('d', d1), path1).getTotalLength();
	
	      // Uniform sampling of distance based on specified precision.
	      var distances = [0];
	      var i = 0;
	      var dt = precision / Math.max(n0, n1);
	
	      while (i < 1) {
	        distances.push(i);
	        i += dt;
	      }
	      distances.push(1);
	
	      // Compute point-interpolators at each distance.
	      var points = distances.map(function (t) {
	        var p0 = path0.getPointAtLength(t * n0);
	        var p1 = path1.getPointAtLength(t * n1);
	        return d3.interpolate([p0.x, p0.y], [p1.x, p1.y]);
	      });
	
	      return function (t) {
	        return t < 1 ? 'M' + points.map(function (p) {
	          return p(t);
	        }).join('L') : d1;
	      };
	    };
	  },
	
	  // Updates the data area on chart
	  /*
	  @private
	  @function updateChartComponents
	  @description Updates the data area on chart
	  @param {Object} context Chart object
	  @returns {Object} context Chart object
	  */
	
	  updateChartComponents: function updateChartComponents(context) {
	    context.svg.select('.area').datum(context.data).attr('d', context.area);
	
	    return context;
	  },
	
	  // Sets the columnNames for the graph
	  /*
	  @private
	  @function setColumnNames
	  @description Sets the columnNames for the graph
	  @param {Object} context Chart object
	  @returns {Object} context Chart object
	  */
	
	  setColumnNames: function setColumnNames(context) {
	    context.xColumnName = _utils2.default.getFirstTimeColumn(context.data);
	    context.yColumnName = _utils2.default.getFirstLinearColumn(context.data);
	    return this;
	  },
	
	  // Sets the x scale
	  /*
	  @private
	  @function setXScale
	  @description Sets the x scale
	  @param {Object} context Chart object
	  @returns {Object} context Chart object
	  */
	
	  setXScale: function setXScale(context) {
	    context.setxAxisLabel = context.xColumnName;
	    context.xScale = d3.time.scale().range([0, context.getChartWidth]).domain(d3.extent(context.data, function (d) {
	      return d[context.xColumnName];
	    }));
	
	    return context;
	  },
	
	  // Sets the y scale
	  /*
	  @private
	  @function setYScale
	  @description Sets the y scale
	  @param {Object} context Chart object
	  @returns {Object} context Chart object
	  */
	
	  setYScale: function setYScale(context) {
	    context.setyAxisLabel = context.yColumnName;
	    context.yScale = d3.scale.linear().range([context.getChartHeight, 0]).domain([0, d3.max(context.data, function (d) {
	      return d[context.yColumnName];
	    })]);
	
	    return context;
	  },
	
	  // Update chart area colors
	  /*
	  @private
	  @function updateColors
	  @description Update chart colors
	  @param {Object} context Chart object
	  @returns {Object} context Chart object
	  */
	
	  updateColors: function updateColors(context) {
	    context.element.select('svg').select('.area').style({
	      fill: context.getColors[0],
	      stroke: context.getColors[0],
	      'stroke-width': 'crispEdges'
	    });
	
	    return context;
	  },
	
	  // Create the area drawing function
	  /*
	  @private
	  @function buildArea
	  @description Create the area drawing function
	  @param {Object} context Chart object
	  @returns {Object} context Chart object
	  */
	
	  buildArea: function buildArea(context) {
	    context.area = d3.svg.area().x(function (d) {
	      return context.xScale(d[context.getxAxisLabel]);
	    }).y0(context.getChartHeight).y1(function (d) {
	      return context.yScale(d[context.getyAxisLabel]);
	    });
	
	    return context;
	  },
	
	  // Adds the y axis to the chart
	  /*
	  @private
	  @function buildYAxis
	  @description Adds the y axis to the chart
	  @param {Object} context Chart object
	  @returns {Object} context Chart object
	  */
	
	  buildYAxis: function buildYAxis(context) {
	    context.svg.append('g').attr('class', 'y axis').call(context.yAxis).append('text').attr('transform', 'rotate(-90)').attr('y', 6).attr('dy', '.71em').style('text-anchor', 'end').text(context.getyAxisLabel);
	
	    return context;
	  },
	
	  // Convert chart data
	  /*
	   @private
	   @function convertData
	   @description Convert chart data
	   @param {Object} context Chart object
	   @returns {Object} context Chart object
	   */
	
	  convertData: function convertData(context) {
	    context.data = _utils2.default.parseTimeData(context.data, context.xColumnName, context.dateFormat);
	    context.data = _utils2.default.parseNumberData(context.data, context.yColumnName);
	    return context;
	  },
	
	  // Updates the style on the chart
	  /*
	   @private
	   @function styleChart
	   @description Updates the style on the chart
	   @param {Object} context Chart object
	   @returns {Object} context Chart object
	   */
	
	  styleChart: function styleChart(context) {
	    context.element.select('svg').style('font-family', context.getFontStyle).attr('font-size', context.getFontSize).append('text').attr('class', 'title').attr('x', context.getChartWidth * 0.5).attr('y', 20).text(context.getTitle);
	  }
	};
	
	exports.default = internalArea;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=tld3.js.map