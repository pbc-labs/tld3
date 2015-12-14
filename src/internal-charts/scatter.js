/* global d3 */
import utils from '../utils/utils';

const scatter = {
  setXscale(context) {
    context.xColumnName = utils.getFirstLinearColumn(context.data);
    context.setxAxisLabel = context.xColumnName;
    context.xScale = d3.scale.linear()
                    .range([0, context.getWidth]);
    context.xScale.domain(d3.extent(context.data, (d) => { return +d[context.xColumnName]; })).nice();
    return context;
  },

  setYscale(context) {
    context.yColumnName = utils.getColumnNames(context.data)[1];
    context.setyAxisLabel = context.yColumnName;
    context.yScale = d3.scale.linear()
                       .range([context.getHeight, 0]);
    context.yScale.domain(d3.extent(context.data, (d) => { return +d[context.yColumnName]; })).nice();
    return context;
  },

  buildXAxisLabel(context) {
    context.element.select('.x.axis').append('text')
          .attr('class', 'label')
          .attr('x', context.getWidth)
          .attr('y', -6)
          .style('text-anchor', 'end')
          .text(`${context.getxAxisLabel}`);
    return context;
  },

  buildYAxisLabel(context) {
    context.element.select('.y.axis').append('text')
          .attr('class', 'label')
          .attr('transform', 'rotate(-90)')
          .attr('y', 12)
          .style('text-anchor', 'end')
          .text(`${context.getyAxisLabel}`);
    return context;
  },
  /**
   @function Builds the actual chart components with data.
   */
  buildChartComponents(context) {
    context.svg.selectAll('.dot')
         .data(context.data)
         .enter()
         .append('circle')
         .attr('class', 'dot')
         .attr('r', 3.5)
         .attr('cx', (d) => { return context.xScale(d[context.getxAxisLabel]); })
         .attr('cy', (d) => { return context.yScale(d[context.getyAxisLabel]); })
// species?
         .style('fill', (d) => { return context.color(d.species); });

    return context;
  },

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

  updateChartComponents(context) {
    context.svg.selectAll('.dot')
             .data(context.data)
             .attr('class', 'circle')
             .attr('cx', (d) => { return context.xScale(d[context.getxAxisLabel]); })
             .attr('width', context.xScale.rangeBand())
             .attr('cy', (d) => { return context.yScale(d[context.getyAxisLabel]); })
             .attr('height', (d) => { return context.getHeight - context.yScale(d[context.getyAxisLabel]); })
             .style('fill', (d) => { return context.getColorScale(d.species); });

    return context;
  },
};

export default scatter;
