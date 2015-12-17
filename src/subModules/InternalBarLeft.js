/* global d3 */

import utils from '../utils/utils';

const InternalBarLeft = {
  /**
  @private
  @function buildChartComponents
  @description Builds up the bar chart
  */
  buildChartComponents(context) {
    /*
    Uses d3 to build the chart components for bar chart using the chart data. Sets event listeners mouseover and mouseout to hide/show tooltips. Uses transition to transition the bars into view.
    */
    context.svg.selectAll('.bar')
           .data(context.data)
           .enter()
           .append('g')
           .append('rect')
           .attr('class', 'bar')
           .on('mouseover', (d) => {
             d3.select(d3.event.target).transition()
               .duration(200);
             context.tooltip.transition()
            .duration(200)
            .style('opacity', 0.9);
             context.tooltip
                    .html(() => {
                      return `<strong>${context.yColumnName}:</strong> ${d[context.yColumnName]}</br>
                      <strong>${context.xColumnName}:</strong> ${d[context.xColumnName]}`;
                    })
             .style('left', (d3.event.pageX + 'px'))
             .style('top', (d3.event.pageY + 'px'));
             d3.select(d3.event.target)
               .style('fill', 'orangered');
           })
           .on('mouseout', () => {
             d3.select(d3.event.target).transition()
               .duration(200);
             context.tooltip.transition()
                    .duration(500)
                    .style('opacity', 0);
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

  /**
  @private
  @function updateChartComponents
  @description Calls InternalBar to updates the bar on chart
  @param {Object} context Chart object
  @returns {Object} this Chart object
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
  @function createxAxis
  @description Creates d3 x-axis
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  createxAxis(context) {
    context.xAxis = d3.svg.axis()
                      .scale(context.xScale)
                      .orient(context.getxAxisOrientation);

    return context;
  },

  /**
  @private
  @function createyAxis
  @description Creates d3 axis - y
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  createyAxis(context) {
    context.yAxis = d3.svg.axis()
                      .scale(context.yScale)
                      .orient(context.getyAxisOrientation);

    return context;
  },

  /**
  @private
  @function buildXAxis
  @description Builds up the x-axis
  @param {Object} context Chart object
  @returns {Object} context Chart object
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
  @function buildYAxis
  @description Builds up the y-axis
  @param {Object} context Chart object
  @returns {Object} context Chart object
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

  /**
  @private
  @function setYscale
  @description Sets the appropriate y-scale
  @param {Object} context Chart object
  @returns {Object} context Chart object
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

  /**
  @private
  @function setXscale
  @description Sets the appropriate x-scale
  @param {Object} context Chart object
  @returns {Object} context Chart object
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
