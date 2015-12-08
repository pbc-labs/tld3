'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
@private
Constructor subclass for Bar Chart.
*/

var BarChart = exports.BarChart = (function (_ChartMain) {
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
      })
      // TODO: Make work for all names
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