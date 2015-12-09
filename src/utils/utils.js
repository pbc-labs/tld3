'use strict';

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

    let svgElement = element
                     .append('svg')
                     .attr('width', width + margin.left + margin.right)
                     .attr('height', height + margin.top + margin.bottom)
                     .append('g')
                     .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    return svgElement;
  },

  /**
  @private
  @description Sets the default margins for all charts
  @returns {Object} Constructor Class for Margins
  */

  setDefaultMargins() {
    return new Internal.config.Margins({ top: 30, right: 30, bottom: 30, left: 50 });
  },

  setDefaultWidth() {
    return new Internal.config.Width(600);
  },

  setDefaultHeight() {
    return new Internal.config.Height(300);
  },

  setOridinalScale(length) {
    let scale = d3.scale.ordinal() // Add check to figure out scale
                    .rangeRoundBands([0, length], 0.1);
    return scale;
  },

  setLinearScale(length) {
    let scale = d3.scale.linear()
                    .range([length, 0]);
    return scale;
  },

  mapDataDomainToString(scale, data, input) {
      scale.domain(data.map(d => { return d.letter; }));
  },

  mapDataDomainToNumber(scale, data, input) {
      scale.domain([0, d3.max(data, d => { return d.frequency; })]);
  },

  createAxis(orientation, scale) {
    let axis = d3.svg.axis()
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
  }
};

export default utils;
