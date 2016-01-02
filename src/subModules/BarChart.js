import { ChartMain } from '../core/ChartMain';
import Internal from '../internalCharts/internal';
import InternalBar from '../internalCharts/internalBar';

// Constructor subclass for Bar Chart.

export class BarChart extends ChartMain {
  constructor() {
    super();
  }

  // Builds up the bar chart
  /*
  @private
  @function build
  @description Builds up the bar chart
  @returns {Object} this (chart instance)
  */

  build() {
    // Calls each of the methods on Internal object necessary to
    // build up all the components of the chart. Internal holds all
    // the methods that do d3 manipulation to create and update
    // various parts of the chart

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

  // Calls InternalBar to update the bar on chart
  // Used when a property changes that requires a re-render.
  /*
  @private
  @function updateChartComponents
  @description Calls InternalBar to update the bar on chart
  @returns {Object} this (chart instance)
  */

  updateChartComponents() {
    // Calls method on InternalBar to recreate all the
    // chart components. Used to reflect any changes made to
    // property values (e.g. font-size, axis-label, etc.)
    InternalBar.updateChartComponents(this);

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
    Internal.setYscale(this, 'linear', 'number');
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
    Internal.setXscale(this, 'ordinal', 'string');
    Internal.updateXAxisScale(this);
    Internal.updateXAxis(this);

    return this;
  }

  // Calls InternalBar to update color of bar chart after initial
  // Used when the color property changes that requires a re-render.
  /*
  @private
  @function updateColors
  @description Calls InternalBar to update color of bar chart after initial render
  @param {Array} colors Array of colors to update the chart to
  @returns {Object} this (chart instance)
  */

  updateColors() {
    // InternalBar has the below method that does the d3 manipulation

    InternalBar.updateColors(this);
    return this;
  }

  // Calls Internal to update x-axis label
  // Used when the x-axis label changes that requires a re-render.
  /*
  @private
  @function updatexAxisLabel
  @description Calls Internal to update x-axis label
  @returns {Object} this (chart instance)
  */

  updatexAxisLabel() {
    // Internal has the below method does the d3 manipulation

    Internal.updateXAxis(this);

    return this;
  }

  // Calls Internal to update y-axis label
  // Used when the y-axis label changes that requires a re-render.
  /*
  @private
  @function updatexAxisLabel
  @description Calls Internal to update y-axis label
  @returns {Object} this (chart instance)
  */

  updateyAxisLabel() {
    // Internal has the below method that does the d3 manipulation
    Internal.updateYAxis(this);

    return this;
  }

}
