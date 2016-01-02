// This is required for d3 to load.
/* global d3 */

import { ChartMain } from '../core/ChartMain';
import Internal from '../internalCharts/internal';
import InternalScatter from '../internalCharts/internalScatter';

// Defines the subclass for the Scatter Chart.

export class ScatterChart extends ChartMain {
  constructor() {
    super();
  }

  // Calls the necessary internal methods from Internal object
  // and InternalScatter to build the scatter chart.
  /*
  @private
  @function build
  @description Calls the necessary internal methods from Internal object and InternalScatter to build the scatter chart.
  @returns {Object} this (chart instance)
  */

  build() {
    // Calls each of the methods on Internal and InternalScatter
    // object necessary to build up all the components of the chart.
    // Internal holds all the methods that do d3 manipulation to
    // create and update various chart elements
    Internal.selectElement(this);
    Internal.getParentDimensions(this);
    Internal.getChartDimensions(this);
    InternalScatter.setColumns(this);
    Internal.convertColorsToScale(this, this.data.map(d => { return d[this.ordinalNames]; }));
    InternalScatter.setXscale(this);
    InternalScatter.setYscale(this);
    Internal.createSVGElement(this);
    Internal.createToolTip(this);
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
    Internal.createLegend(this);
  }

  // Updates the dots on chart. Calls the internal update function
  /*
  @private
  @function updateChartComponents
  @description Updates the dots on chart. Calls the internal update function
  @returns {Object} this (chart instance)
  */
  updateChartComponents() {
    InternalScatter.updateChartComponents(this);
    Internal.createLegend(this);
    return this;
  }

  // Updates the chart's height on the element itself
  /*
  @private
  @function updateHeight
  @description Updates the chart's height on the element itself
  @returns {Object} this (chart instance)
  */

  updateHeight() {
    // Calls each of the methods on Internal object
    // necessary to update the height of the chart. Internal
    //  holds all the methods that do d3 manipulation to
    // create and update various parts of the chart
    Internal.updateSVGElement(this);
    InternalScatter.setYscale(this);
    Internal.updateYAxisScale(this);
    Internal.updateYAxis(this);
    Internal.updateXAxisPosition(this);

    return this;
  }

  // Updates the chart's margin on the element itself
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

  // Calls each of the methods on Internal object necessary to
  // update the width of the chart. Internal holds all the
  // methods that do d3 manipulation to create and update various
  // parts of the chart
  /*
  @private
  @function updateWidth
  @description Updates the chart's width on the element itself
  @returns {Object} this (chart instance)
  */

  updateWidth() {
    Internal.updateSVGElement(this);
    InternalScatter.setXscale(this);
    Internal.updateXAxisScale(this);
    Internal.updateXAxis(this);

    return this;
  }

  // Overrides the default ChartMain setColors setter.
  // Maps to an ordinal scale
  /*
  @private
  @function setColors
  @description Overrides the default ChartMain setColors setter - maps to an ordinal scale
  @param {Array} colors Array of colors to update the chart to
  */

  set setColors(newColors) {
    this._colors = newColors;
    Internal.convertColorsToScale(this, this.data.map(d => { return d[this.ordinalNames]; }));
  }

  // Calls InternalScatter to update color of scatter
  // chart after initial render
  /*
  @private
  @function updateColors
  @description Calls InternalScatter to update color of scatter chart after initial render
  @returns {Object} this Chart object
  */
  updateColors() {
    InternalScatter.updateColors(this);

    return this;
  }

  // Calls Internal to update/rerender x-axis label.
  /*
  @private
  @function updatexAxisLabel
  @description Calls Internal to update x-axis label
  @returns {Object} this Chart object
  */

  updatexAxisLabel() {
    /*
    Calls Internal object to update the x-axis label
    */
    Internal.updateXAxis(this);

    return this;
  }

  // Calls Internal to update/rerender y-axis label
  /*
  @private
  @function updateyAxisLabel
  @description Calls Internal to update/rerender y-axis label
  @returns {Object} this Chart object
  */

  updateyAxisLabel() {
    /*
    Calls Internal object to update the x-axis label
    */
    Internal.updateYAxis(this);

    return this;
  }

}
