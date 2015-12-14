/* global d3 */
import { ChartMain } from '../core/ChartMain';
import Internal from './internal';

/**
@private
Constructor subclass for Scatter Chart.
*/
export class ScatterChart extends ChartMain {
  constructor() {
    super();
    this.color = d3.scale.category10();
  }

  build() {
    Internal.selectElement(this);
    Internal.setXscale(this, 'linear', 'string');
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
    this.svg.selectAll('.dot')
         .data(this.data)
         .enter()
         .append('circle')
         .attr('class', 'dot')
         .attr('r', 3.5)
         .attr('cx', (d) => { return this.xScale(d[this.getxAxisLabel]); })
         .attr('cy', (d) => { return this.yScale(d[this.getyAxisLabel]); })
         .style('fill', (d) => { return this.color(d.species); });

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
    this.svg.selectAll('.dot')
             .data(this.data)
             .attr('class', 'circle')
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
    Internal.setXscale(this, 'ordinal', 'string');
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
