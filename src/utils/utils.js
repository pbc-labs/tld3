'use strict';

/**
@private
Holds various utility functions used throughout the library.
*/
// Helper functions

const utils = {
  createSVGElement(element, width, height, margin) {

    let svgElement = element
                    .append('svg')
                    .attr('width', width + margin.left + margin.right)
                    .attr('height', height + margin.top + margin.bottom)
                    .append('g')
                    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    return svgElement;
  },

  setOridinalScale(length) {
    let scale = d3.scale.ordinal() // Add check to figure out scale
                    .rangeRoundBands([0, width], 0.1);
    return scale;
  },

  setLinearScale(length) {
    let scale = d3.scale.linear()
                    .range([length, 0]);
    return scale;
  },

  mapDataDomainToString(scale, data, input) {
      scale.domain(data.map(d => { return d.input; }));
  },

  mapDataDomainToNumber(scale, data, input) {
      scale.domain([0, d3.max(data, d => { return d.input; })]);
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
