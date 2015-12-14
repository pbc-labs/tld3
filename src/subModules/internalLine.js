import utils from '../utils/utils';

const InternalLine = {

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
    },

    /**
    @private
    @function Builds up the line
    @returns {Object} context
      @description Chart object
    */

    buildLine(context) {
      context.line = d3.svg.line()
          .x((d) => { return context.xScale(d.date); })
          .y((d) => { return context.yScale(d.close); });

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
      @returns {Object} context
        @description Chart object
      */

      setXScale(context) {
        context.xScale = d3.time.scale()
                        .range([0, context.getWidth]);

        context.xScale.domain(d3.extent(context.data, (d) => { return d.date; }));

        return context;
      },

      /**
      @private
      @function Builds up the line
      @returns {Object} context
        @description Chart object
      */

      setYScale(context) {
        context.yColumnName = utils.getFirstLinearColumn(context.data);
        context.setyAxisLabel = context.yColumnName;
        context.yScale = d3.scale.linear()
                        .range([context.getHeight, 0])

        context.yScale.domain(d3.extent(context.data, function(d) { return d.close; }));

        return context;
      },

      /**
       @function Builds the actual chart components with data.
       @returns {Object} context
         @description Chart object
       */
      buildChartComponents(context) {
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
      }
}


export default InternalLine;
