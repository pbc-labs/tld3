import { ChartMain } from '../core/ChartMain';
import Internal from './internal';
import InternalBar from '../internal-charts/internalBar';
import InternalBarLeft from './InternalBarLeft';

/**
@private
Constructor subclass for Bar Chart.
*/
export class BarChartLeft extends ChartMain {
  constructor(xAxisOrientation, yAxisOrientation) {
    super();
    this._xAxisOrientation = xAxisOrientation || 'bottom';
    this._yAxisOrientation = yAxisOrientation || 'left';
  }

  build() {
    Internal.selectElement(this);
    InternalBarLeft.setXscale(this);
    InternalBarLeft.setYscale(this);
    Internal.createSVGElement(this);
    Internal.createToolTip(this);
    InternalBarLeft.createxAxis(this);
    InternalBarLeft.buildXAxis(this);
    InternalBarLeft.createyAxis(this);
    InternalBarLeft.buildYAxis(this);
    Internal.setAxisStyle(this, 'path', 'none', '#000', 'crispEdges');
    Internal.setAxisStyle(this, 'line', 'none', '#000', 'crispEdges');
    InternalBarLeft.buildChartComponents(this);
    InternalBar.styleChart(this);
  }

  render() {
    // used for data updates?
    // need to think about how we are "rendering" upon instantiation and upon update
    // I think this render needs to be a customized update function depending on what attribute is being updated
  }

  /**
  @private
  @function Calls InternalBar to updates the bar on chart
  @param {Object} context
    @description Chart object
  @returns {Object} this
    @description Chart object
  */

  updateChartComponents() {
    InternalBarLeft.updateChartComponents(this);
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
    InternalBarLeft.setYscale(this);
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
    InternalBarLeft.setXscale(this);
    Internal.updateXAxisScale(this);
    Internal.updateXAxis(this);

    return this;
  }

  /**
  @function Calls InternalBar to update color of bar chart after initial render
  @param {Array} colors
    @description Array of colors to update the chart to
  */
  updateColors(colors) {
    InternalBar.updateColors(colors, this);
  }

}
