/* global d3 */
import utils from '../utils/utils';

const waffle = {
  setColumns(context) {
    context.xColumnName = utils.getFirstLinearColumn(context.data);
    context.yColumnName = utils.getColumnNames(context.data)[1];
    return context;
  },

  processData(context) {
    const total = d3.sum(context.data, (d) => { return d[context.yColumnName]; });
    context.processedData = [];
    context.setSquareValue = total / (context.getSquareWidth * context.getSquareHeight);
// Remap the data
    context.data.forEach((d, i) => {
      d[context.yColumnName] = +d[context.yColumnName];
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
                                     };
                                   }));
    });

    return context;
  },

  calculateSize(context) {
    context.setWidth = ((context.getSquareSize * context.getSquareWidth) + context.getSquareWidth * context.getGapSize + context.getSquareSize);
    context.setHeight = ((context.getSquareSize * context.getSquareHeight) + context.getSquareHeight * context.getGapSize + context.getSquareSize);
    return context;
  },

  buildChartComponents(context) {
    context.svg.append('g')
               .selectAll('div')
               .attr('class', 'waffle')
               .data(context.processedData)
               .enter()
               .append('rect')
               .attr('width', context.getSquareSize)
               .attr('height', context.getSquareSize)
               .attr('fill', (d) => {
                 return context.getColors(d.groupIndex);
               })
               .attr('x', (d, i) => {
                //  groups n squares for column
                 const col = Math.floor(i / context.getSquareHeight);
                 return (col * context.getSquareSize) + (col * context.getGapSize);
               })
               .attr('y', (d, i) => {
                 const row = i % context.getSquareHeight;
                 return (context.getSquareHeight * context.getSquareSize) - ((row * context.getSquareSize) + (row * context.getGapSize));
               });
    return context;
  },
};

export default waffle;
