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
@private
@function Builds the X-Axis label with the appropriate column name.
*/
  buildXAxisLabel(context) {
    context.element.select('.x.axis').append('text')
          .attr('class', 'label')
          .attr('x', context.getWidth)
          .attr('y', -6)
          .style('text-anchor', 'end')
          .text(`${context.getxAxisLabel}`);
    return context;
  },
/**
@private
@function Builds the Y-Axis label with the appropriate column name.
*/
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
         .style('fill', (d) => { return context.color(d[context.ordinalNames]); });

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


  updateChartComponents(context) {
    context.svg.selectAll('.dot')
             .data(context.data)
             .attr('class', 'circle')
             .attr('cx', (d) => { return context.xScale(d[context.getxAxisLabel]); })
             .attr('width', context.xScale.rangeBand())
             .attr('cy', (d) => { return context.yScale(d[context.getyAxisLabel]); })
             .attr('height', (d) => { return context.getHeight - context.yScale(d[context.getyAxisLabel]); })
             .style('fill', (d) => { return context.getColorScale(d[context.ordinalNames]); });

    return context;
  },
// TODO: refactor
  createLegend(context) {
    const legend = context.svg.append('g')
        .attr('class', 'legend')
        .selectAll('.legend-data')
        .data(context.color.domain())
        .enter().append('g')
        .attr('class', 'legend-data')
        // Makes each rect spaced by 20px
        .attr('transform', (d, i) => { return 'translate(0,' + i * 20 + ')'; });
    legend.append('rect')
        .attr('x', context.getWidth - 18)
        .attr('width', 18)
        .attr('height', 18)
        // Setting colors
        .style('fill', context.color);
    // // append the name of species
    legend.append('text')
        .attr('x', context.getWidth - 24)
        .attr('y', 12)
        .style('text-anchor', 'end')
        .text((d) => { return d; });
  },
};

export default scatter;
