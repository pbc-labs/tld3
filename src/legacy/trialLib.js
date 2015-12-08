'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global d3 */

var data = [{ 'letter': 'A', 'frequency': 0.08167 }, { 'letter': 'B', 'frequency': 0.01492 }, { 'letter': 'C', 'frequency': 0.02782 }, { 'letter': 'D', 'frequency': 0.04253 }, { 'letter': 'E', 'frequency': 0.12702 }, { 'letter': 'F', 'frequency': 0.02288 }, { 'letter': 'G', 'frequency': 0.02015 }, { 'letter': 'H', 'frequency': 0.06094 }, { 'letter': 'I', 'frequency': 0.06966 }, { 'letter': 'J', 'frequency': 0.00153 }, { 'letter': 'K', 'frequency': 0.00772 }, { 'letter': 'L', 'frequency': 0.04025 }, { 'letter': 'M', 'frequency': 0.02406 }, { 'letter': 'N', 'frequency': 0.06749 }, { 'letter': 'O', 'frequency': 0.07507 }, { 'letter': 'P', 'frequency': 0.01929 }, { 'letter': 'Q', 'frequency': 0.00095 }, { 'letter': 'R', 'frequency': 0.05987 }, { 'letter': 'S', 'frequency': 0.06327 }, { 'letter': 'T', 'frequency': 0.09056 }, { 'letter': 'U', 'frequency': 0.02758 }, { 'letter': 'V', 'frequency': 0.00978 }, { 'letter': 'W', 'frequency': 0.0236 }, { 'letter': 'X', 'frequency': 0.0015 }, { 'letter': 'Y', 'frequency': 0.01974 }, { 'letter': 'Z', 'frequency': 0.00074 }];

/**
This defines our main library object.
@private
*/

var Margin = function Margin(_ref) {
  var top = _ref.top;
  var left = _ref.left;
  var right = _ref.right;
  var bottom = _ref.bottom;

  _classCallCheck(this, Margin);

  this.top = top || 0;
  this.left = left || 0;
  this.right = right || 0;
  this.bottom = bottom || 0;
};

var Width = function Width(width) {
  _classCallCheck(this, Width);

  this.width = width;
};

var Height = function Height(height) {
  _classCallCheck(this, Height);

  this.height = height;
};

var Internal = {
  config: {
    Height: Height,
    Width: Width,
    Margins: Margin,
    fontSize: true,
    fontStyle: true,
    axisLabels: true,
    axisPosition: true,
    xScale: true,
    yScale: true,
    color: []
  },

  internalUpdateHeight: function internalUpdateHeight() {}
};

/**
Internal defines .....
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
        this.margin = new Internal.config.Margins({ top: 20, right: 20, bottom: 30, left: 40 });
      } else {
        this.margins.margins(options);
      }
      return this;
    }
  }, {
    key: 'setWidth',
    value: function setWidth(width) {
      if (!this.width) {
        this.width = new Internal.config.Width(200);
      } else {
        this.width.width(width);
      }
      return this;
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      if (!this.height) {
        this.height = new Internal.config.Height(120);
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

/**
This creates the Bar subclass.
*/

var BarChart = (function (_ChartMain) {
  _inherits(BarChart, _ChartMain);

  function BarChart() {
    _classCallCheck(this, BarChart);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BarChart).call(this));
  }

  _createClass(BarChart, [{
    key: 'render',
    value: function render() {
      return this.selectElement().setMargin().setWidth().setHeight().setXscale().setYscale().createSVG().creteXaxis().createYaxis().setAxisPathStyle().setAxisLineStyle().final();
    }
  }, {
    key: 'final',
    value: function final() {
      var _this2 = this;

      this.svg.selectAll('.bar').data(this.data).enter().append('rect').attr('class', 'bar').attr('x', function (d) {
        return _this2.xScale(d.letter);
      }) // TODO: Make work for all names
      .attr('width', this.xScale.rangeBand()).attr('y', function (d) {
        return _this2.yScale(d.frequency);
      }) // TODO: Make work for all names
      .attr('height', function (d) {
        return _this2.height.height - _this2.yScale(d.frequency);
      }) // TODO: Make work for all names
      .style('fill', 'steelblue');
      return this;
    }
  }]);

  return BarChart;
})(ChartMain);

var charts = {
  // holds all sub classes
  BarChart: BarChart
};

var d3fault = {
  version: '1.0.0',
  make: function make(chartType) {
    return new charts[chartType]();
  }
};

d3fault.make('BarChart').using(data).in('#yo');