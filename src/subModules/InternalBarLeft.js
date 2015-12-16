/* global d3 */

import utils from '../utils/utils';

const InternalBarLeft = {
  /**
   @function Builds the actual chart components with data.
   @returns {Object} context
     @description Chart object
   */
  buildChartComponents(context) {
    context.svg.selectAll('.bar')
           .data(context.data)
           .enter()
           .append('g')
           .append('rect')
           .attr('class', 'bar')
           .attr('height', context.y.rangeBand())
           .attr('y', d => { const label = context.getyAxisLabel; return context.y(d[label]); })
           .attr('width', d => { const label = context.getxAxisLabel; return context.x(d[label]); })
           .style('fill', context.getColors[0])
           .append('text')
           .attr('text-anchor', 'end')
           .attr('x', d => { const label = context.getxAxisLabel; return d[label]; })
           .attr('y', context.y.rangeBand())
           .attr('dy', '.35em')
           .text((d, i) => { return i; });

    return context;
  },

   /**
   @private
   @function Updates the bar on chart
   @param {Object} context
     @description Chart object
   @returns {Object} context
     @description Chart object
   */

  updateChartComponents(context) {
    context.svg.selectAll('.bar')
               .data(context.data)
               .attr('class', 'bar')
               .attr('height', context.y.rangeBand())
               .attr('y', d => { const label = context.getyAxisLabel; return context.y(d[label]); })
               .attr('width', d => { const label = context.getxAxisLabel; return context.x(d[label]); })
               .attr('x', d => { const label = context.getxAxisLabel; return d[label]; })
              .style('fill', context.getColors[0]);

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
                .attr('transform', 'translate(0,' + context.getHeight + ')')
               .call(context.xAxis)
               .append('text')
               .attr('class', 'x-axis-label')
               .text(context.getxAxisLabel)
               .attr('dy', '-10px')
               .attr('dx', context.getWidth - context.getMargins.right * 2);

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
           .call(context.yAxis)
           .append('text')
           .attr('class', 'y-axis-label')
           .attr('x', context.getMargins.right)
           .text(context.getyAxisLabel)
           .attr('dx', '-50px')
           .attr('dy', '-5px')
           .style('text-anchor', 'top');

    return context;
  },

  setYscale(context) {
    context.yColumnName = utils.getFirstOrdinalColumn(context.data);
    context.setyAxisLabel = context.yColumnName;
    context.yScale = d3.scale.ordinal()
                    .range([0, context.getHeight])
                    .rangeRoundBands([0, context.getHeight], 0.1);

    context.y = context.yScale.domain(context.data.map(d => { return d[context.yColumnName]; }));

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

  setXscale(context) {
    context.xColumnName = utils.getFirstLinearColumn(context.data);
    context.setxAxisLabel = context.xColumnName;
    context.xScale = d3.scale.linear()
                    .range([0, context.getWidth]);
    context.x = context.xScale.domain([0, d3.max(context.data, (d) => { const label = context.getxAxisLabel; return d[label]; })]);
    return context;
  },


};

export default InternalBarLeft;
