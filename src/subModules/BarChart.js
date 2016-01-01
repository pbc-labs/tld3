import { ChartMain } from '../core/ChartMain';
import Internal from '../internal-charts/internal';
import InternalBar from '../internal-charts/internalBar';

/*
Constructor subclass for Bar Chart.
*/
export class BarChart extends ChartMain {
  constructor() {
    super();
  }

  /*
  @private
  @function build
  @description Builds up the bar chart
  @returns {Object} this (chart instance)
  */

  build() {
    /*
    Calls each of the methods on Internal object necessary to build up all the components of the chart. Internal holds all the methods that do d3 manipulation to create and update various parts of the chart
    */
    Internal.selectElement(this);
    Internal.getParentDimensions(this);
    Internal.getChartDimensions(this);
    Internal.setXscale(this, 'ordinal', 'string');
    Internal.setYscale(this, 'linear', 'number');
    Internal.createSVGElement(this);
    Internal.createToolTip(this);
    Internal.createxAxis(this);
    Internal.buildXAxis(this);
    Internal.createyAxis(this);
    Internal.buildYAxis(this);
    Internal.setAxisStyle(this, 'path', 'none', '#000', 'crispEdges');
    Internal.setAxisStyle(this, 'line', 'none', '#000', 'crispEdges');
    InternalBar.buildChartComponents(this);
    InternalBar.styleChart(this);

    return this;
  }

  /*
  @private
  @function updateChartComponents
  @description Calls InternalBar to update the bar on chart
  @returns {Object} this (chart instance)
  */

  updateChartComponents() {
    /* Calls method on InternalBar to recreate all the chart components. Used to reflect any changes made to property values (e.g. font-size, axis-label, etc.)
    */
    InternalBar.updateChartComponents(this);

    return this;
  }

  /*
  @private
  @function updateHeight
  @description Updates the chart's height on the element itself
  @returns {Object} this (chart instance)
  */

  updateHeight() {
    /*
    Calls each of the methods on Internal object necessary to update the height of the chart. Internal holds all the methods that do d3 manipulation to create and update various parts of the chart
    */
    Internal.updateSVGElement(this);
    Internal.setYscale(this, 'linear', 'number');
    Internal.updateYAxisScale(this);
    Internal.updateYAxis(this);
    Internal.updateXAxisPosition(this);

    return this;
  }

  /*
  @private
  @function updateMargins
  @description Updates the chart's margin on the element itself
  @returns {Object} this (chart instance)
  */

  updateMargins() {
    /*
    Calls updateHeight and updateWidth on this instance to reflect the new margins.
    */
    this.updateHeight();
    this.updateWidth();

    return this;
  }

  /*
  @private
  @function updateWidth
  @description Updates the chart's width on the element itself
  @returns {Object} this (chart instance)
  */

  updateWidth() {
    /*
    Calls each of the methods on Internal object necessary to update the width of the chart. Internal holds all the methods that do d3 manipulation to create and update various parts of the chart
    */
    Internal.updateSVGElement(this);
    Internal.setXscale(this, 'ordinal', 'string');
    Internal.updateXAxisScale(this);
    Internal.updateXAxis(this);

    return this;
  }

  /*
  @private
  @function updateColors
  @description Calls InternalBar to update color of bar chart after initial render
  @param {Array} colors Array of colors to update the chart to
  @returns {Object} this (chart instance)
  */

  updateColors() {
    /*
    Calls InternalBar object to update the colors on the bar chart. InternalBar does the d3 manipulation
    */
    InternalBar.updateColors(this);
    return this;
  }

  /*
  @private
  @function updatexAxisLabel
  @description Calls Internal to x-axis label
  @returns {Object} this (chart instance)
  */

  updatexAxisLabel() {
    /*
    Calls Internal object to update the x-axis label
    */
    Internal.updateXAxis(this);

    return this;
  }

  /*
  @private
  @function updatexAxisLabel
  @description Calls Internal to x-axis label
  @returns {Object} this (chart instance)
  */

  updateyAxisLabel() {
    /*
    Calls Internal object to update the x-axis label
    */
    Internal.updateYAxis(this);

    return this;
  }

}
