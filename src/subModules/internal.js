import Height from '../subModules/height';
import Width from '../subModules/width';
import Margins from '../subModules/margin';
import AxisLabel from '../subModules/axisLabel';
import Color from '../subModules/color';
import Fontstyle from '../subModules/fontStyle';
import Fontsize from '../subModules/fontSize';
import Title from '../subModules/title';

const Internal = {
  config: {
    AxisLabel: AxisLabel,
    Color: Color,
    Fontstyle: Fontstyle,
    Fontsize: Fontsize,
    Title: Title,
  },

  /**
  @private
  @function Creates the main SVG element
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
  @function Builds d3 axis
  @param {String} orientation
    @description The orientation of the scale's ticks ('bottom' vs. 'top', etc)
  @returns {Object} scale
    @description y-scale or x-scale of the chart
  @returns d3 axis
  */

  createAxis(orientation, scale) {
    const axis = d3.svg.axis()
                 .scale(scale)
                 .orient(orientation);
    return axis;
  },

  /**
  @private
  @function Builds up the x-Axis
  @param {Object} svg
    @description The svg element of chart
  @param {Object} xAxis
    @description xAxis constructor function of chart
  @returns {Object} Constructor Class for Height
  */

  buildXAxis(svg, xAxis, height) {
    svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0, ' + height + ')')
        .call(xAxis);
  },

  /**
  @private
  @function Builds up the y-Axis
  @param {Object} svg
    @description The svg element of chart
  @param {Object} yAxis
    @description yAxis constructor function of chart
  @returns {Object} Constructor Class for Height
  */

  buildYAxis(svg, yAxis) {
    svg.append('g')
       .attr('class', 'y axis')
       .call(yAxis);
  },


};

export default Internal;
