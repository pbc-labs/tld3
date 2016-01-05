import { ChartMain } from '../core/ChartMain';
import Internal from '../internalCharts/internal';
import InternalBarLeft from '../internalCharts/internalBarLeft';

// Constructor subclass for Left Bar Chart.

export class BarChartLeft extends ChartMain {
  constructor(xAxisOrientation, yAxisOrientation) {
    super();
    this._xAxisOrientation = xAxisOrientation || 'bottom';
    this._yAxisOrientation = yAxisOrientation || 'left';
  }

  // Builds up the components of left bar chart
  /*
  @private
  @function build
  @description Builds up the left bar chart
  @returns {Object} this (chart instance)
  */

  build() {
    // Calls each of the methods on Internal, InternalBar and
    // InternalBarLeft object necessary to build up all the
    // components of the chart. Internal holds all the methods
    // that do d3 manipulation to create and update various
    // parts of the chart

    Internal.selectElement(this);
    Internal.getParentDimensions(this);
    Internal.getChartDimensions(this);
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

    return this;
  }

  // Calls InternalBarLeft to update the bar on chart
  // Used when a property changes that requires a re-render.
  /*
  @private
  @function updateChartComponents
  @description Calls InternalBarLeft to update the bar on chart
  @returns {Object} this (chart instance)
  */

  updateChartComponents() {
    // Calls method on InternalBarLeft to re-render all the
    // chart components. Used to reflect any changes made
    // to property values

    InternalBarLeft.updateChartComponents(this);

    return this;
  }

  // Updates the chart's height on the element itself
  // Used when the height changes that requires a re-render.
  /*
  @private
  @function updateHeight
  @description Updates the chart's height on the element itself
  @returns {Object} this (chart instance)
  */

  updateHeight() {
    // Internal holds all the methods that do d3 manipulation
    // to create and update various parts of the chart

    Internal.updateSVGElement(this);
    InternalBarLeft.setYscale(this);
    Internal.updateYAxisScale(this);
    Internal.updateYAxis(this);
    Internal.updateXAxisPosition(this);

    return this;
  }

  // Updates the chart's margin on the element itself
  // Used when the margins change that requires a re-render.
  /*
  @private
  @function updateMargins
  @description Updates the chart's margin on the element itself
  @returns {Object} this (chart instance)
  */

  updateMargins() {
    // Calls updateHeight and updateWidth on this instance
    // to reflect the new margins.
    this.updateHeight();
    this.updateWidth();

    return this;
  }

  // Updates the chart's width on the element itself
  // Used when the width changes that requires a re-render.
  /*
  @private
  @function updateWidth
  @description Updates the chart's width on the element itself
  @returns {Object} this (chart instance)
  */

  updateWidth() {
    // Internal holds all the methods that do d3 manipulation
    // to create and update various parts of the chart

    Internal.updateSVGElement(this);
    InternalBarLeft.setXscale(this);
    Internal.updateXAxisScale(this);
    Internal.updateXAxis(this);

    return this;
  }

  // Calls InternalBar to update color of left bar chart
  // after initial render. InternalBar does the d3 manipulation
  /*
  @private
  @function updateColors
  @description Calls InternalBar to update color of left bar chart after initial render
  @param {Array} colors Array of colors to update the chart to
  @returns {Object} this (chart instance)
  */

  updateColors() {
    InternalBarLeft.updateColors(this);

    return this;
  }

  // Calls InternalBarLeft to x-axis label
  /*
  @private
  @function updatexAxisLabel
  @description Calls Internal to update x-axis label
  @returns {Object} this (chart instance)
  */

  updatexAxisLabel() {
    InternalBarLeft.updateXAxis(this);

    return this;
  }

  // Calls InternalBarLeft to y-axis label
  /*
  @private
  @function updatexAxisLabel
  @description Calls Internal to x-axis label
  @returns {Object} this (chart instance)
  */

  updateyAxisLabel() {
    InternalBarLeft.updateYAxis(this);

    return this;
  }

}
