'use strict';

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})(); //     D3fault.js 1.0.0
//     http://d3faultjs.org
//     (c) 2015 Preethi Kasireddy, Banun Atina Idris and Colin Seale
//     D3fault may be freely distributed under the MIT license.

/**
This is required for d3 to load.
*/
/* global d3 */

/**
Import all necessary submodules into the core module
*/

var _height = require('./height');

var _height2 = _interopRequireDefault(_height);

var _width = require('./width');

var _width2 = _interopRequireDefault(_width);

var _margin = require('./margin');

var _margin2 = _interopRequireDefault(_margin);

var _internal = require('./internal');

var _internal2 = _interopRequireDefault(_internal);

var _d3fault = require('./d3fault');

var _d3fault2 = _interopRequireDefault(_d3fault);

var _charts = require('./charts');

var _charts2 = _interopRequireDefault(_charts);

var _BarChart = require('../subModules/BarChart');

var _BarChart2 = _interopRequireDefault(_BarChart);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var data = [{ 'letter': 'A', 'frequency': 0.08167 }, { 'letter': 'B', 'frequency': 0.01492 }, { 'letter': 'C', 'frequency': 0.02782 }, { 'letter': 'D', 'frequency': 0.04253 }, { 'letter': 'E', 'frequency': 0.12702 }, { 'letter': 'F', 'frequency': 0.02288 }, { 'letter': 'G', 'frequency': 0.02015 }, { 'letter': 'H', 'frequency': 0.06094 }, { 'letter': 'I', 'frequency': 0.06966 }, { 'letter': 'J', 'frequency': 0.00153 }, { 'letter': 'K', 'frequency': 0.00772 }, { 'letter': 'L', 'frequency': 0.04025 }, { 'letter': 'M', 'frequency': 0.02406 }, { 'letter': 'N', 'frequency': 0.06749 }, { 'letter': 'O', 'frequency': 0.07507 }, { 'letter': 'P', 'frequency': 0.01929 }, { 'letter': 'Q', 'frequency': 0.00095 }, { 'letter': 'R', 'frequency': 0.05987 }, { 'letter': 'S', 'frequency': 0.06327 }, { 'letter': 'T', 'frequency': 0.09056 }, { 'letter': 'U', 'frequency': 0.02758 }, { 'letter': 'V', 'frequency': 0.00978 }, { 'letter': 'W', 'frequency': 0.0236 }, { 'letter': 'X', 'frequency': 0.0015 }, { 'letter': 'Y', 'frequency': 0.01974 }, { 'letter': 'Z', 'frequency': 0.00074 }];

/**
Defines the main Chart class. This is the super class for
all chart types. The Main Chart class holds all the common
methods that every chart would use.
@private
*/

var ChartMain = (function () {
  function ChartMain() {
    _classCallCheck(this, ChartMain);
  }

  _createClass(ChartMain, [{
    key: 'selectElement',
    value: function selectElement() {
      this.element = d3.select(this.location);
      return this;
    }
  }, {
    key: 'setMargin',
    value: function setMargin(options) {
      if (!this.margin) {
        this.margin = new _internal2.default.config.Margins({ top: 20, right: 20, bottom: 30, left: 40 });
      } else {
        this.margins.margins(options);
      }
      return this;
    }
  }, {
    key: 'setWidth',
    value: function setWidth(width) {
      if (!this.width) {
        this.width = new _internal2.default.config.Width(200);
      } else {
        this.width.width(width);
      }
      return this;
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      if (!this.height) {
        this.height = new _internal2.default.config.Height(120);
      } else {
        this.height.height(height);
      }
      return this;
    }
  }, {
    key: 'createSVG',
    value: function createSVG() {
      // NOT exposed to user
      this.svg = this.element.append('svg').attr('width', this.width.width + this.margin.left + this.margin.right).attr('height', this.height.height + this.margin.top + this.margin.bottom).append('g').attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
      return this;
    }
  }, {
    key: 'mapData',
    value: function mapData() {}
  }, {
    key: 'setXscale',
    value: function setXscale() {
      this.xScale = d3.scale.ordinal() // Add check to figure out scale
      .rangeRoundBands([0, this.width.width], 0.1);
      this.xScale.domain(this.data.map(function (d) {
        return d.letter;
      }));
      return this;
    }
  }, {
    key: 'setYscale',
    value: function setYscale() {
      this.yScale = d3.scale.linear().range([this.height.height, 0]);
      this.yScale.domain([0, d3.max(this.data, function (d) {
        return d.frequency;
      })]);
      return this;
    }
  }, {
    key: 'creteXaxis',
    value: function creteXaxis() {
      this.xAxis = d3.svg.axis().scale(this.xScale).orient('bottom');

      this.svg.append('g').attr('class', 'x axis').attr('transform', 'translate(0, ' + this.height.height + ')').call(this.xAxis);

      return this;
    }
  }, {
    key: 'createYaxis',
    value: function createYaxis() {
      this.yAxis = d3.svg.axis().scale(this.yScale).orient('left').ticks(10, '%'); // TODO: make work for all data

      this.svg.append('g').attr('class', 'y axis').call(this.yAxis);

      return this;
    }
  }, {
    key: 'setAxisPathStyle',
    value: function setAxisPathStyle() {
      var fill = arguments.length <= 0 || arguments[0] === undefined ? 'none' : arguments[0];
      var stroke = arguments.length <= 1 || arguments[1] === undefined ? '#000' : arguments[1];
      var shapeRerendering = arguments.length <= 2 || arguments[2] === undefined ? 'crispEdges' : arguments[2];

      this.svg.selectAll('.axis').selectAll('path').style({
        fill: fill,
        stroke: stroke,
        'shape-rendering': shapeRerendering
      });

      return this;
    }
  }, {
    key: 'setAxisLineStyle',
    value: function setAxisLineStyle() {
      var fill = arguments.length <= 0 || arguments[0] === undefined ? 'none' : arguments[0];
      var stroke = arguments.length <= 1 || arguments[1] === undefined ? '#000' : arguments[1];
      var shapeRerendering = arguments.length <= 2 || arguments[2] === undefined ? 'crispEdges' : arguments[2];

      this.svg.selectAll('.axis').selectAll('line').style({
        fill: fill,
        stroke: stroke,
        'shape-rendering': shapeRerendering
      });
      return this;
    }
  }, {
    key: 'setColors',
    value: function setColors() {}
  }, {
    key: 'setTitle',
    value: function setTitle() {}
  }, {
    key: 'setFontSize',
    value: function setFontSize() {}
  }, {
    key: 'setFontType',
    value: function setFontType() {}
  }, {
    key: 'createLegend',
    value: function createLegend() {}
  }, {
    key: 'in',
    value: function _in(classOrid) {
      this.location = classOrid;
      this.render();
      return this;
    }
  }, {
    key: 'using',
    value: function using(dataInput) {
      // data handling happens here with es6 promise
      // DO DATA HANDLING
      this.data = dataInput;
      // TODO: Make work for all names

      return this;
    }
  }]);

  return ChartMain;
})();

d3fault.make('BarChart').using(data).in('#yo');