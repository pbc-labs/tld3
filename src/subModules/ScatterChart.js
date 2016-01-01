/*
This is required for d3 to load.
*/
/* global d3 */

import { ChartMain } from '../core/ChartMain';
import Internal from '../internal-charts/internal';
import InternalScatter from '../internal-charts/internalScatter';

/*
Defines the subclass for the Scatter Chart.
*/

export class ScatterChart extends ChartMain {
  constructor() {
    super();
    // Sets the default color scale for the chart
    this._colors = d3.scale.category10();
  }

  /*
  @private
  @function build
  @description Calls the necessary internal methods from Internal object and InternalScatter to build the scatter chart.
  @returns {Object} this (chart instance)
  */

  build() {
    /*
    Calls each of the methods on Internal and InternalScatter object necessary to build up all the components of the chart. Internal holds all the methods that do d3 manipulation to create and update various parts of the chart
    */
    Internal.selectElement(this);
    InternalScatter.setColumns(this);
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
    InternalScatter.setYscale(this);
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
    InternalScatter.setXscale(this);
    Internal.updateXAxisScale(this);
    Internal.updateXAxis(this);

    return this;
  }

  /*
  @private
  @function setColors
  @description Overrides the default ChartMain setColors setter - maps to an ordinal scale
  @param {Array} colors Array of colors to update the chart to
  */

  set setColors(newColors) {
    const color = d3.scale.ordinal()
                    .domain(this.getColors.domain())
                    .range(newColors);
    this._colors = color;
  }

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

  /*
  @private
  @function updateyAxisLabel
  @description Calls Internal to update y-axis label
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
