import { ChartMain } from '../core/ChartMain';
import Internal from './internal';

/**
@private
Constructor subclass for Bar Chart.
*/
export class BarChart extends ChartMain {
  constructor() {
    super();
  }

  build() {
    Internal.selectElement(this);
    Internal.setXscale(this, 'ordinal', 'string');
    Internal.setYscale(this, 'linear', 'number');
    Internal.createSVGElement(this);
    Internal.createxAxis(this); // x-axis
    Internal.buildXAxis(this);
    Internal.createyAxis(this); // x-axis
    Internal.buildYAxis(this);
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
 @function Builds the actual chart components with data.
 */
  buildChartComponents() {
    this.svg.selectAll('.bar')
         .data(this.data)
         .enter()
         .append('rect')
         .attr('class', 'bar')
         .attr('x', d => { return this.xScale(d[this.getxAxisLabel]); })
         .attr('width', this.xScale.rangeBand())
         .attr('y', d => { return this.yScale(d[this.getyAxisLabel]); })
         .attr('height', d => { return this.getHeight - this.yScale(d[this.getyAxisLabel]); })
         .style('fill', this.getColors[0]);

    return this;
  }

  styleChart() {
    // Sets the font-style, font-size.
    // Adds a title to the chart
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
