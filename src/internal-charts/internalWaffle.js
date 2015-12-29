/*
This is required for d3 to load.
*/
/* global d3 */

import utils from '../utils/utils';

const waffle = {
  /*
  @private
  @function setColumns
  @description Parses and sets the column names for a particular WaffleChart instance
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  setColumns(context) {
    context.xColumnName = utils.getFirstOrdinalColumn(context.data);
    context.yColumnName = utils.getColumnNames(context.data)[1];

    return context;
  },

  /*
  @private
  @function processData
  @description Processes the data input and calculates the required number of squares and colors
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  processData(context) {
    // sum of dataset
    const total = d3.sum(context.data, (d) => { return d[context.yColumnName]; });
    context.processedData = [];
    // setting square value to sum of data set divided by number of squares in the chart
    context.setSquareValue = total / (context.getNumColumns * context.getNumRows);
    // Remap the data
    context.data.forEach((d, i) => {
      d[context.yColumnName] = +d[context.yColumnName];
      // Figure out how many squares are needed
      d.units = Math.floor(d[context.yColumnName] / context.getSquareValue);
      context.processedData = context.processedData.concat(Array(d.units + 1)
                           .join(1)
                           .split('')
                           .map(() => {
                             return {
                               squareValue: context.getSquareValue,
                               units: d.units,
                               [context.yColumnName]: d[context.yColumnName],
                               groupIndex: i,
                               [context.xColumnName]: d[context.xColumnName],
                             };
                           }));
    });

    return context;
  },

  /*
  @private
  @function calculateSize
  @description Calculates the size of each square
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  calculateSize(context) {
    context.setWidth = ((context.getSquareSize * context.getNumColumns) + context.getNumColumns * context.getGapSize + context.getSquareSize);
    context.setHeight = ((context.getSquareSize * context.getNumRows) + context.getNumRows * context.getGapSize + context.getSquareSize);

    return context;
  },

  /*
  @private
  @function buildChartComponents
  @description Builds the actual chart components (dots) and tooltip with data.
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  buildChartComponents(context) {
    const tooltip = d3.select('body')
    .append('div')
    .attr('class', 'tooltip')
    .style({
      position: 'absolute',
      color: 'black',
      'text-align': 'center',
      width: '100px',
      padding: '2px',
      font: '12px sans-serif',
      background: '#f2f2f2',
      border: '0px',
      opacity: '0',
      'border-radius': '1px',
      cursor: 'pointer',
    });

    context.svg.append('g')
               .selectAll('div')
               .attr('class', 'waffle')
               .data(context.processedData)
               .enter()
               .append('rect')
               .attr('width', context.getSquareSize)
               .attr('height', context.getSquareSize)
               .attr('class', (d) => { return 'square ' + context.xColumnName + d.groupIndex; })
               .on('mouseover', (d) => {
                 tooltip.transition()
                   .duration(200)
                   .style('opacity', 0.9)
                   .style('left', (d3.event.pageX + 'px'))
                   .style('top', (d3.event.pageY + 'px'));
                 d3.selectAll('rect').transition()
                  .duration(200)
                  .style('opacity', 0.6);

                  //  select all from same group
                 d3.selectAll('.' + d3.select(d3.event.target).attr('class').split(' ')[1]).transition()
                   .duration(200)
                   .style('opacity', 1);
                 tooltip
                   .html(() => {
                     return `${d[context.xColumnName]}, ${d[context.yColumnName]}`;
                   });
               })
              .on('mouseout', () => {
                d3.selectAll('rect').transition()
                  .duration(500)
                  .style('opacity', 1);
                tooltip.transition()
                   .duration(500)
                   .style('opacity', 0);
              })
               .style('opacity', 0)
               .attr('x', (d, i) => {
                //  groups n squares for column
                 const col = Math.floor(i / context.getNumRows);
                 return (col * context.getSquareSize) + (col * context.getGapSize);
               })
               .attr('y', 300)
               .attr('fill', (d) => {
                 return context.getColors(d.groupIndex);
               })
               .transition()
               .delay((d, i) => { return i * 10; })
              .attr('y', (d, i) => {
                const row = i % context.getNumRows;
                return (context.getNumRows * context.getSquareSize) - ((row * context.getSquareSize) + (row * context.getGapSize) + 10) - 17;
              })
              .style('opacity', 1);

    return context;
  },

  /*
  @private
  @function styleChart
  @description Updates the chart's style on the element
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  styleChart(context) {
    context.element.select('svg')
           .style('font-family', context.getFontStyle)
           .attr('font-size', context.getFontSize)
           .append('text')
           .attr('class', 'title')
           .attr('x', context.getWidth * 0.5)
           .attr('y', 20)
           .text(`${context.xColumnName} | ${context.yColumnName}`);
    return context;
  },

  /*
  @private
  @function createLegend
  @description Creates a legend for the chart according to colors and data used
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  createLegend(context) {
    const legend = context.svg.append('g')
        .attr('class', 'legend')
        .attr('transform', 'translate(' + context.getNumColumns + ', 0)')
        .selectAll('.legend-data')
        .data(context.getColors.domain())
        .enter().append('g')
        .attr('class', 'legend-data')
        // Makes each rect spaced by 20px
        .attr('transform', (d, i) => { return 'translate(' + (i * 50) + ', ' + (context.getHeight - 10) + ')'; });
    legend.append('rect')
        .attr('x', 10)
        .attr('width', context.getNumColumns)
        .attr('height', 5)
        // Setting colors
        .style('fill', context.getColors);
    // // append the name of ordinal data
    legend.append('text')
        .attr('x', 32)
        .attr('y', 20)
        .style('text-anchor', 'end')
        .text((d) => { return context.data[d][context.xColumnName]; });

    return context;
  },

  /*
  @private
  @function updateColors
  @description Updates the chart's colors
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  updateColors(context) {
    context.element.select('svg')
        .selectAll('.square')
        .style('fill', (d) => { return context.getColors(d[context.yColumnName]); });

    context.element.selectAll('.legend-data rect')
    .style('fill', context.getColors);

    return context;
  },

  /*
  @private
  @function updateChartComponents
  @description Updates the chart components by re-processing the data
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  updateChartComponents(context) {
    context.element.select('svg').remove();
    this.processData(context);
    context.build(context);

    return context;
  },
};

export default waffle;
