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
    Internal.scatter.setColumns(this);
    Internal.scatter.setXscale(this);
    Internal.scatter.setYscale(this);
    Internal.createSVGElement(this);
    // x-axis
    Internal.createxAxis(this);
    Internal.buildXAxis(this);
    Internal.scatter.buildXAxisLabel(this);
    // y-axis
    Internal.createyAxis(this);
    Internal.buildYAxis(this);
    Internal.scatter.buildYAxisLabel(this);
    Internal.setAxisStyle(this, 'path', 'none', '#000', 'crispEdges');
    Internal.setAxisStyle(this, 'line', 'none', '#000', 'crispEdges');
    Internal.scatter.buildChartComponents(this);
    Internal.scatter.styleChart(this);
    Internal.scatter.createLegend(this);
  }

  render() {
    // used for data updates?
    // need to think about how we are "rendering" upon instantiation and upon update
    // I think this render needs to be a customized update function depending on what attribute is being updated
  }

  /**
  @private
  @function Updates the dots on chart. Calls the internal update function.
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */
  updateChartComponents() {
    Internal.scatter.updateChartComponents(this);
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
    // TODO: make scale type a chart property
    Internal.scatter.setYscale(this, 'linear', 'number');
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
    Internal.scatter.setXscale(this, 'ordinal', 'string');
    Internal.updateXAxisScale(this);
    // Internal.scatter.updateXAxisLabel
    Internal.updateXAxis(this);

    return this;
  }

/**
@function Updates color of bar chart after initial render
@param {Array} colors
  @description Array of colors to update the chart to
*/
  updateColors(colors) {
    this.element.select('svg')
        .selectAll('.dot')
        .style('fill', colors);
  }
}
