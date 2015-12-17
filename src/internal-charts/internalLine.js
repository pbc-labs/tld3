/*  global d3  */
import utils from '../utils/utils';

const InternalLine = {

  /**
  @private
  @function Updates the chart's style on the element
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
        .text(context.getTitle);
  },

  /**
  @private
  @function Builds up the line
  @returns {Object} context Chart object
  */

  buildLine(context) {
    /*
    Build the d3 line using by mapping the x and y values to the data
    */
    context.line = d3.svg.line()
        .x((d) => { return context.xScale(d[context.getxAxisLabel]); })
        .y((d) => { return context.yScale(d[context.getyAxisLabel]); });

    return context;
  },

  /**
  @private
  @function Builds up the y-axis
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  buildYAxis(context) {
    context.svg.append('g')
             .attr('class', 'y axis')
             .call(context.yAxis)
             .append('text')
             .attr('transform', 'rotate(-90)')
             .attr('y', 6)
             .attr('dy', '.71em')
             .style('text-anchor', 'end')
             .text(context.getyAxisLabel);

    return context;
  },

  /**
  @private
  @function Builds up the line
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  setXScale(context) {
    context.xColumnName = utils.getFirstTimeColumn(context.data);
    context.setxAxisLabel = context.xColumnName;
    context.xScale = d3.time.scale()
                    .range([0, context.getWidth]);
    context.xScale.domain(d3.extent(context.data, (d) => { return d[context.xColumnName]; }));

    return context;
  },

  /**
  @private
  @function Builds up the line
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  setYScale(context) {
    context.yColumnName = utils.getFirstLinearColumn(context.data);
    context.setyAxisLabel = context.yColumnName;
    context.yScale = d3.scale.linear()
                    .range([context.getHeight, 0]);

    context.yScale.domain(d3.extent(context.data, (d) => { return d[context.yColumnName]; }));

    return context;
  },

  /**
  @private
  @function Builds the actual chart components with data.
  @param {Object} context Chart object
  @returns {Object} context Chart object
   */
  buildChartComponents(context) {
    context.svg.append('path')
            .datum(context.data)
            .attr('class', 'line')
            .style({
              fill: 'none',
              stroke: context.getColors[0],
              'stroke-width': 'crispEdges',
            });
    const line = context.svg.select('.line');
    let k = context.data.length - 1;

    d3.timer(() => {
      if (k > 0) {
        k -= 7;
        line.attr('d', () => {
          return context.line(context.data.slice(0, context.data.length - k));
        });
      } else {
        line.attr('d', () => {
          return context.line(context.data);
        });
        return true;
      }
    });

    line.on('mouseover', () => {
      context.tooltip.transition()
       .duration(200)
       .style('opacity', 0.9);

      context.tooltip
       .html(() => {
         return `${context.xColumnName}: ${context.xScale.invert(d3.event.pageX - context.getMargins.left - context.getMargins.right).toLocaleString()}\
        ${context.yColumnName}: ${context.yScale.invert(d3.event.pageY - context.getMargins.top - context.getMargins.bottom).toFixed(3)}`;
       })
       .style('left', (d3.event.pageX + 'px'))
       .style('top', (d3.event.pageY + 'px'));
    });

    line.on('mouseout', () => {
      context.tooltip.transition().style('opacity', 0);
    });

    return context;
  },

  /**
  @private
  @function updateChartComponents
  @description Updates the line on the chart
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  updateChartComponents(context) {
    context.svg.select('.line').remove();
    context.svg.append('path')
            .datum(context.data)
            .attr('class', 'line')
            .style({
              fill: 'none',
              stroke: context.getColors[0],
              'stroke-width': 'crispEdges',
            })
            .attr('d', context.line);

    return context;
  },

  /**
  @private
  @function
  @description Updates color of line on chart after initial render
  @param {Array} colors Array of colors to update the chart to
  @param {Object} context Chart object
  */
  updateColors(colors, context) {
    context.element.select('svg')
        .select('.line')
        .style({
          fill: 'none',
          stroke: context.getColors[0],
          'stroke-width': 'crispEdges',
        });

    return context;
  },

  convertData(context) {
    context.data = utils.parseTimeData(context.data, context.xColumnName);
    context.data = utils.parseNumberData(context.data, context.yColumnName);
    return context;
  },

  setColumnNames(context) {
    context.yColumnName = utils.getFirstLinearColumn(context.data);
    context.xColumnName = utils.getFirstTimeColumn(context.data);
  },
};


export default InternalLine;
