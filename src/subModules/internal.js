/* global d3 */

import utils from '../utils/utils';

const Internal = {
  config: {
  },

  /**
  @private
  @function Creates a d3 element and assigns it to our internal this.element property
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  selectElement(context) {
    context.element = d3.select(context.location);

    return context;
  },

  /**
  @private
  @function Creates the main SVG element
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  createSVGElement(context) {
    context.svg = context.element
                          .append('svg')
                          .attr('width', context.getWidth + context.getMargins.left + context.getMargins.right)
                          .attr('height', context.getHeight + context.getMargins.top + context.getMargins.bottom)
                          .append('g')
                          .attr('transform', 'translate(' + context.getMargins.left + ',' + context.getMargins.top + ')');

    return context;
  },

  /**
  @private
  @function Creates d3 axis - x
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  createxAxis(context) {
    context.xAxis = d3.svg.axis()
                      .scale(context.xScale)
                      .orient(context.getxAxisOrientation);

    return context;
  },

  /**
  @private
  @function Creates d3 axis - y
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  createyAxis(context) {
    context.yAxis = d3.svg.axis()
                      .scale(context.yScale)
                      .orient(context.getyAxisOrientation);

    return context;
  },

  /**
  @private
  @function Builds up the x-axis
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  buildXAxis(context) {
    context.svg.append('g')
               .attr('class', 'x axis')
               .attr('transform', 'translate(0, ' + context.getHeight + ')')
               .call(context.xAxis);

    return context;
  },

  /**
  @private
  @function Builds up the y-axis
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  buildYAxis(context) {
    context.svg.append('g')
           .attr('class', 'y axis')
           .call(context.yAxis);

    return context;
  },

  /**
  @private
  @function Updates the chart's width on the element itself
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  updateWidth(context) {
    // TODO;

    return context;
  },

  /**
  @private
  @function Updates the chart's height on the element itself
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  updateHeight(context) {
    // TODO;

    return context;
  },

  /**
  @private
  @function Updates the chart's font size on the element itself
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  updateFontSize(context) {
    context.element.select('svg')
           .attr('font-size', context.getFontSize);

    return context;
  },

  /**
  @private
  @function Updates the chart's font style on the element itself
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  updateFontStyle(context) {
    context.element.select('svg')
           .attr('font-family', context.getFontStyle);

    return context;
  },

  /**
  @private
  @function Updates the chart's title on the element itself
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  updateTitle(context) {
    context.element.select('.title').remove();
    context.element.select('svg')
           .append('text')
           .attr('x', context.getWidth * 0.5)
           .attr('y', 20)
           .text(context.getTitle);

    return context;
  },

  /**
  @private
  @function Sets the xScale for chart. Checks for the type of scale passed in, and builds the scale accordingly. Then depending on whether we are using the ordinal scale or linear scale, we map the data to the scale accordingly.
  @param {Object} context
    @description Chart object
  @param {String} type
    @description type of scale (ordinal vs. linear)
  @param {String} dataDomain
    @description Type of data to map the scale to (String vs. Number)
  @returns {Object} context (Chart object)
  */

  setXscale(context, type, dataDomain) {
    if (type === 'ordinal') {
      context.xColumnName = utils.getFirstOrdinalColumn(context.data);
      context.setxAxisLabel = context.xColumnName;
      context.xScale = d3.scale.ordinal()
                      .rangeRoundBands([0, context.getWidth], 0.1);
    } else if (type === 'linear') {
      context.xColumnName = utils.getFirstLinearColumn(context.data);
      context.setxAxisLabel = context.xColumnName;
      context.xScale = d3.scale.linear()
                      .range([context.getWidth, 0]);
    }

    if (dataDomain === 'string') {
      context.xScale.domain(context.data.map(d => { return d[context.xColumnName]; }));
    } else if (dataDomain === 'number') {
      context.xScale.domain([0, d3.max(context.data, d => { return d[context.xColumnName]; })]);
    }

    return context;
  },

  /**
  @private
  @function Sets the yScale for chart. Checks for the type of scale passed in, and builds the scale accordingly. Then depending on whether we are using the ordinal scale or linear scale, we map the data to the scale accordingly.
  @param {Object} context
    @description Chart object
  @param {String} type
    @description type of scale (ordinal vs. linear)
  @param {String} dataDomain
    @description Type of data to map the scale to (String vs. Number)
  @returns {Object} this (Chart object)
  */

  setYscale(context, type, dataDomain) {
    if (type === 'ordinal') {
      context.yColumnName = utils.getFirstOrdinalColumn(context.data);
      context.setyAxisLabel = context.yColumnName;
      context.yScale = d3.scale.linear()
                      .range([context.getHeight, 0]);
    } else if (type === 'linear') {
      context.yColumnName = utils.getFirstLinearColumn(context.data);
      context.setyAxisLabel = context.yColumnName;
      context.yScale = d3.scale.linear()
                      .range([context.getHeight, 0]);
    }

    if (dataDomain === 'string') {
      context.yScale.domain(context.data.map(d => { return d[context.yColumnName]; }));
    } else if (dataDomain === 'number') {
      context.yScale.domain([0, d3.max(context.data, d => { return d[context.yColumnName]; })]);
    }

    return context;
  },

  /**
  @private
  @function Sets style properties for chart axis
  @param {Object} context
    @description Chart object
  @param {String} part
    @description The part of the axis we are generating
  @param {String} fill
    @description Fill color of axis
  @param {String} stroke
    @description Stroke style of axis
  @returns {String} shapeRerendering
    @description rerenders the line to be thinner
  */

  setAxisStyle(context, part, fill, stroke, shapeRerendering) {
    context.svg.selectAll('.axis').selectAll(part)
           .style({
             fill: fill,
             stroke: stroke,
             'shape-rendering': shapeRerendering,
            });

    return context;
  },


};

export default Internal;
