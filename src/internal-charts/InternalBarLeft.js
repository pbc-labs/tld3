/*
This is required for d3 to load.
*/
/* global d3 */

import utils from '../utils/utils';

const InternalBarLeft = {
  /*
  @private
  @function buildChartComponents
  @description Builds up the bar chart
  @returns {Object} context (chart instance)
  */

  buildChartComponents(context) {
    /*
    Uses d3 to build the chart components for left bar chart using the chart data. Sets event listeners mouseover and mouseout to hide/show tooltips. Uses transition to transition the bars into view.
    */
    const tooltip = context.tooltip;

    context.svg.selectAll('.bar')
           .data(context.data)
           .enter()
           .append('g')
           .append('rect')
           .attr('class', 'bar')
           .on('mouseover', (d) => {
             d3.select(d3.event.target).transition()
               .style('fill', context.getColors[1]);
          //  Set tooltips
             tooltip.show();
             tooltip.setContent(`<strong>${context.yColumnName}:</strong> ${d[context.yColumnName]}</br>
             <strong>${context.xColumnName}:</strong> ${d[context.xColumnName]}`);
           })
           .on('mouseout', () => {
             tooltip.hide();
             d3.select(d3.event.target)
               .style('fill', context.getColors[0]);
           })
           .attr('height', context.y.rangeBand())
           .attr('y', d => { const label = context.getyAxisLabel; return context.y(d[label]); })
           .attr('x', context.getWidth)
           .attr('width', 0)
           .style('fill', context.getColors[0])
           .transition()
           .duration(700)
           .delay((d, i) => { return i * 50; })
           .attr('x', d => { const label = context.getxAxisLabel; return d[label]; })
           .attr('width', d => { const label = context.getxAxisLabel; return context.x(d[label]); });

    return context;
  },

  /*
  @private
  @function updateChartComponents
  @description Calls InternalBar to update and rerender the bars on chart
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  updateChartComponents(context) {
    context.svg.selectAll('rect')
           .remove();

    this.buildChartComponents(context);
    return context;
  },

  /*
  @private
  @function createxAxis
  @description Creates d3 x-axis
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  createxAxis(context) {
    context.xAxis = d3.svg.axis()
                      .scale(context.xScale)
                      .orient(context.getxAxisOrientation);

    return context;
  },

  /*
  @private
  @function createyAxis
  @description Creates d3 axis - y
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  createyAxis(context) {
    context.yAxis = d3.svg.axis()
                      .scale(context.yScale)
                      .orient(context.getyAxisOrientation);

    return context;
  },

  /*
  @private
  @function buildXAxis
  @description Builds up the x-axis
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  buildXAxis(context) {
    // Sets up x-axis positioning. Then appends x-axis label
    context.svg.append('g')
               .attr('class', 'x axis')
                .attr('transform', 'translate(0,' + context.getHeight + ')')
               .call(context.xAxis)
               .append('text')
               .attr('class', 'x-axis-label')
               .text(context.getxAxisLabel)
               .attr('dy', '35px')
               .attr('dx', context.getWidth * 0.5 - context.getMargins.right * 0.5);

    return context;
  },

  /*
  @private
  @function buildYAxis
  @description Builds up the y-axis
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  buildYAxis(context) {
    // Sets up y-axis positioning. Then appends x-axis label
    context.svg.append('g')
           .attr('class', 'y axis')
           .call(context.yAxis)
           .append('text')
           .attr('class', 'y-axis-label')
           .attr('x', 0)
           .text(context.getyAxisLabel)
           .attr('transform', 'rotate(-90)')
           .attr('dx', -context.getHeight * 0.5 - context.getMargins.right * 0.5)
           .attr('dy', '-30px')
           .style('text-anchor', 'top');

    return context;
  },

  /*
  @private
  @function Updates the up the y-axis
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  updateYAxis(context) {
    /*
    Updates the y-axis on chart by rebuilding it. Used when properties on a chart are changed and require a rebuild.
    */
    context.element
           .select('svg')
           .selectAll('g .y.axis')
           .call(context.yAxis);

    context.element.select('.y-axis-label')
           .attr('class', 'y-axis-label')
           .attr('x', 0)
           .text(context.getyAxisLabel)
           .attr('transform', 'rotate(-90)')
           .attr('dx', -context.getHeight * 0.5 - context.getMargins.right * 0.5)
           .attr('dy', '-30px')
           .style('text-anchor', 'top');

    return context;
  },

  /*
  @private
  @function updateXAxis
  @description Updates the up the x-axis scale
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  updateXAxis(context) {
    /*
    Updates the x-axis on chart by rebuilding it. Used when properties on a chart are changed and require a rebuild.
    */
    context.element
           .select('svg')
           .selectAll('g .x.axis')
           .call(context.xAxis);
    context.element.select('.x-axis-label')
            .text(context.getxAxisLabel)
            .attr('dy', '35px')
            .attr('dx', context.getWidth * 0.5 - context.getMargins.right * 0.5);

    return context;
  },


  /*
  @private
  @function setYscale
  @description Sets the appropriate y-scale
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  setYscale(context) {
    /*
    Sets the y-scale to be ordinal. Then maps the data to the scale's domain.
    */
    context.yColumnName = utils.getFirstOrdinalColumn(context.data);
    context.setyAxisLabel = context.yColumnName;
    context.yScale = d3.scale.ordinal()
                    .range([0, context.getHeight])
                    .rangeRoundBands([0, context.getHeight], 0.1);

    context.y = context.yScale.domain(context.data.map(d => { return d[context.yColumnName]; }));

    return context;
  },

  /*
  @private
  @function setXscale
  @description Sets the appropriate x-scale
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  setXscale(context) {
    /*
    Sets the x-scale to be linear. Then maps the data to the scale's domain.
    */
    context.xColumnName = utils.getFirstLinearColumn(context.data);
    context.setxAxisLabel = context.xColumnName;
    context.xScale = d3.scale.linear()
                    .range([0, context.getWidth]);
    context.x = context.xScale.domain([0, d3.max(context.data, (d) => { const label = context.getxAxisLabel; return d[label]; })]);
    return context;
  },


};

export default InternalBarLeft;
