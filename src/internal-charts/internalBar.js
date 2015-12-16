/* global d3 */

const InternalBar = {
  /**
   @function Builds the actual chart components with data, including the tooltips
   @returns {Object} context
     @description Chart object
   */
  buildChartComponents(context) {
    context.svg.selectAll('.bar')
         .data(context.data)
         .enter()
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
         })
          .on('mouseout', () => {
            d3.select(d3.event.target).transition()
              .duration(200);
            context.tooltip.transition()
                   .duration(500)
                   .style('opacity', 0);
          })
         .attr('x', d => { return context.xScale(d[context.getxAxisLabel]); })
         .attr('y', context.getHeight)
         .attr('width', context.xScale.rangeBand())
         .attr('height', 0)
         .style('fill', context.getColors[0])
         .transition()
         .duration(300)
         .delay((d, i) => { return i * 50; })
         .attr('y', d => { return context.yScale(d[context.getyAxisLabel]); })
         .attr('height', d => { return context.getHeight - context.yScale(d[context.getyAxisLabel]); });

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
             .attr('x', d => { return context.xScale(d[context.getxAxisLabel]); })
             .attr('width', context.xScale.rangeBand())
             .attr('y', d => { return context.yScale(d[context.getyAxisLabel]); })
             .attr('height', d => { return context.getHeight - context.yScale(d[context.getyAxisLabel]); })
             .style('fill', context.getColors[0]);

    return context;
  },

  /**
  @private
  @function Updates the chart's style on the element
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */


  styleChart(context) {
    context.element.select('svg')
        .style('font-family', context.getFontStyle)
        .attr('font-size', context.getFontSize)
        .append('text')
        .attr('class', 'title')
        .attr('x', context.getWidth * 0.5)
        .attr('y', 20)
        .text(context.getTitle);

    return context;
  },

  /**
  @function Updates color of bar chart after initial render
  @param {Array} colors
    @description Array of colors to update the chart to
  */
  updateColors(colors, context) {
    context.element.select('svg')
           .selectAll('.bar')
           .style('fill', colors);

    return context;
  },


};

export default InternalBar;
