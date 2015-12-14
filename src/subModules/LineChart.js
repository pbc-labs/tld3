import { ChartMain } from '../core/ChartMain';
import Internal from './internal';

/**
@private
Constructor subclass for Bar Chart.
*/
export class LineChart extends ChartMain {
  constructor() {
    super();
  }

  build() {
    Internal.selectElement(this);
    this.setXScale();
    this.setYScale();
    Internal.createSVGElement(this);
    Internal.createxAxis(this);
    Internal.buildXAxis(this);
    Internal.createyAxis(this);
    this.buildYAxis();
    this.buildLine();
    Internal.setAxisStyle(this, 'path', 'none', '#000', 'crispEdges');
    Internal.setAxisStyle(this, 'line', 'none', '#000', 'crispEdges')
            .buildChartComponents()
            .styleChart();
  }

  render() {
    // used for data updates?
    // need to think about how we are "rendering" upon instantiation and upon update
    // I think this render needs to be a customized update function depending on what attribute is being updated
  }

  /**
  @private
  @function Builds up the line
  @returns {Object} this
    @description Chart object
  */

  buildLine() {
    this.line = d3.svg.line()
        .x((d) => { return this.xScale(d.date); })
        .y((d) => { return this.yScale(d.close); });

    return this;
  }

  /**
  @private
  @function Builds up the line
  @returns {Object} this
    @description Chart object
  */

  setXScale() {
    this.xScale = d3.time.scale()
                    .range([0, this.getWidth]);

    this.xScale.domain(d3.extent(this.data, (d) => { return d.date; }));

    return this;
  }

  /**
  @private
  @function Builds up the line
  @returns {Object} this
    @description Chart object
  */

  setYScale() {
    this.yScale = d3.scale.linear()
                    .range([this.getHeight, 0])

    this.yScale.domain(d3.extent(this.data, function(d) { return d.close; }));

    return this;
  }


  /**
  @private
  @function Builds up the y-axis
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  buildYAxis() {
    this.svg.append('g')
             .attr('class', 'y axis')
             .call(this.yAxis)
             .append('text')
             .attr('transform', 'rotate(-90)')
             .attr('y', 6)
             .attr('dy', '.71em')
             .style('text-anchor', 'end')
             .text('TESING ONLY');

    return this;
  }

  /**
   @function Builds the actual chart components with data.
   */
  buildChartComponents() {
    this.svg.append('path')
            .datum(this.data)
            .attr('class', 'line')
            .style({
              fill: 'none',
              stroke: this.getColors[0],
              'stroke-width': 'crispEdges',
            })
            .attr('d', this.line);

    return this;
  }

  /**
  @private
  @function Updates the bar on chart
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  updateChartComponents() {
    this.svg.selectAll('.bar')
             .data(this.data)
             .attr('class', 'bar')
             .attr('x', d => { return this.xScale(d[this.getxAxisLabel]); })
             .attr('width', this.xScale.rangeBand())
             .attr('y', d => { return this.yScale(d[this.getyAxisLabel]); })
             .attr('height', d => { return this.getHeight - this.yScale(d[this.getyAxisLabel]); })
             .style('fill', this.getColors[0]);

    return this;
  }

  /**
  @private
  @function Updates the chart's height on the element itself
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  updateHeight() {
    Internal.updateSVGElement(this);
    // TODO: make scale type a chart properties
    Internal.setYscale(this, 'linear', 'number');
    Internal.updateYAxisScale(this);
    Internal.updateYAxis(this);
    Internal.updateXAxisPosition(this);
    return this;
  }

  /**
  @private
  @function Updates the chart's margin on the element itself
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  updateMargins() {
    this.updateHeight();
    this.updateWidth();
    return this;
  }

  /**
  @private
  @function Updates the chart's width on the element itself
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  updateWidth() {
    Internal.updateSVGElement(this);
    // TODO: make scale type a chart properties
    Internal.setXscale(this, 'time', 'date');
    Internal.updateXAxisScale(this);
    Internal.updateXAxis(this);

    return this;
  }

  /**
  @private
  @function Updates the chart's style on the element
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */


  styleChart() {
    this.element.select('svg')
        .style('font-family', this.getFontStyle)
        .attr('font-size', this.getFontSize)
        .append('text')
        .attr('class', 'title')
        .attr('x', this.getWidth * 0.5)
        .attr('y', 20)
        .text(this.getTitle);

    return this;
  }

  /**
  @function Updates color of bar chart after initial render
  @param {Array} colors
    @description Array of colors to update the chart to
  */
  updateColors(colors) {
    this.element.select('svg')
        .selectAll('.bar')
        .style('fill', colors);
  }

}
