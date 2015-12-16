/* global d3 */
import utils from '../utils/utils';

const scatter = {
/**
@private
@function Parses and sets the column names for a particular chart instance.
*/
  setColumns(context) {
    context.xColumnName = utils.getFirstLinearColumn(context.data);
    context.yColumnName = utils.getColumnNames(context.data)[1];
    context.ordinalNames = utils.getFirstOrdinalColumn(context.data);
    return context;
  },

/**
@private
@function Sets the scale for the X-axis based on the results of the setColumns function
*/
  setXscale(context) {
    context.setxAxisLabel = context.xColumnName;
    context.xScale = d3.scale.linear()
                    .range([0, context.getWidth]);
    context.xScale.domain(d3.extent(context.data, (d) => { return +d[context.xColumnName]; })).nice();
    return context;
  },

/**
@private
@function Sets the scale for the Y-axis based on the results of the setColumns function
*/
  setYscale(context) {
    context.setyAxisLabel = context.yColumnName;
    context.yScale = d3.scale.linear()
                       .range([context.getHeight, 0]);
    context.yScale.domain(d3.extent(context.data, (d) => { return +d[context.yColumnName]; })).nice();
    return context;
  },
/**
@function Builds the actual chart components with data.
*/
  buildChartComponents(context) {
    context.svg.selectAll('.scatter')
         .data(context.data)
         .enter()
         .append('circle')
         .attr('class', 'dot')
         .attr('r', 3.5)
         .attr('cx', (d) => { return context.xScale(d[context.getxAxisLabel]); })
         .attr('cy', (d) => { return context.yScale(d[context.getyAxisLabel]); })
         .style('fill', (d) => { return context.getColors(d[context.ordinalNames]); })
         .style('opacity', 0)
         .transition()
         .delay((d, i) => { return i * (Math.random()*20); })
         .style('opacity', 1);

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
// TODO: change to change attribute, not remove
  updateChartComponents(context) {
    context.svg.select('.scatter').remove();
    context.svg.selectAll('.dot').remove();
    context.svg.selectAll('.legend').remove();
    context.element.select('.title').remove();

    this.buildChartComponents(context);
    this.createLegend(context);
    this.styleChart(context);
    return context;
  },
// TODO: move into general internal
  createLegend(context) {
    const legend = context.svg.append('g')
        .attr('class', 'legend')
        .selectAll('.legend-data')
        .data(context.getColors.domain())
        .enter().append('g')
        .attr('class', 'legend-data')
        // Makes each rect spaced by 20px
        .attr('transform', (d, i) => { return 'translate(0,' + i * 20 + ')'; });
    legend.append('rect')
        .attr('x', context.getWidth - 18)
        .attr('width', 18)
        .attr('height', 18)
        // Setting colors
        .style('fill', context.getColors);
    // // append the name of ordinal data
    legend.append('text')
        .attr('x', context.getWidth - 24)
        .attr('y', 12)
        .style('text-anchor', 'end')
        .text((d) => { return d; });
  },

  updateColors(context) {
    context.element.select('svg')
        .selectAll('.dot')
        .style('fill', (d) => { return context.getColors(d[context.ordinalNames]); });

    context.element.selectAll('.legend-data rect')
    .style('fill', context.getColors);
  },

};

export default scatter;
