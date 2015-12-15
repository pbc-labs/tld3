/* global d3 */
import { ChartMain } from '../core/ChartMain';
import Internal from './internal';
import InternalScatter from '../internal-charts/scatter';
/**
@private
Constructor subclass for Scatter Chart.
*/
export class ScatterChart extends ChartMain {
  constructor() {
    super();
    // overwrites default colors with ordinal scale
    this._colors = d3.scale.category10();
  }

  build() {
    Internal.selectElement(this);
    InternalScatter.setColumns(this);
    InternalScatter.setXscale(this);
    InternalScatter.setYscale(this);
    Internal.createSVGElement(this);
    // x-axis
    Internal.createxAxis(this);
    Internal.buildXAxis(this);
    // y-axis
    Internal.createyAxis(this);
    Internal.buildYAxis(this);
    Internal.setAxisStyle(this, 'path', 'none', '#000', 'crispEdges');
    Internal.setAxisStyle(this, 'line', 'none', '#000', 'crispEdges');
    InternalScatter.buildChartComponents(this);
    InternalScatter.styleChart(this);
    InternalScatter.createLegend(this);
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
    InternalScatter.updateChartComponents(this);
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
    InternalScatter.setYscale(this);
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
    InternalScatter.setXscale(this);
    Internal.updateXAxisScale(this);
    Internal.updateXAxis(this);

    return this;
  }

  set setColors(newColors) {
    const color = d3.scale.ordinal()
                    .domain(this.getColors.domain())
                    .range(newColors);
    this._colors = color;
  }

/**
@function Updates color of bar chart after initial render
@param {Array} colors
  @description Array of colors to update the chart to
*/
// TODO: possible update to ordinal colors in general internal
  updateColors() {
    InternalScatter.updateColors(this);
  }
}
