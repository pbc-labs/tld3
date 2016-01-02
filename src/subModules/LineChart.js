import { ChartMain } from '../core/ChartMain';
import Internal from '../internalCharts/internal';
import InternalLine from '../internalCharts/internalLine';


// Constructor subclass for Line Chart.

export class LineChart extends ChartMain {
  constructor() {
    super();
    this.dateFormat = '';
  }

  // Builds up the components of the line chart
  /*
  @private
  @function build
  @description Builds up the bar chart
  @returns {Object} this (chart instance)
  */

  build() {
    // Calls each of the methods on Internal and InternalLine
    // object necessary to build up all the components of the
    // chart. Internal and InternalLine hold all the methods
    // that do d3 manipulation to create and update various
    // parts of the chart

    Internal.selectElement(this);
    Internal.getParentDimensions(this);
    Internal.getChartDimensions(this);
    InternalLine.setColumnNames(this);
    InternalLine.convertData(this);
    Internal.convertColorsToScale(this, this.data.map(category => { return category.name; }));
    InternalLine.setXScale(this);
    InternalLine.setYScale(this);
    Internal.createSVGElement(this);
    Internal.createxAxis(this);
    Internal.buildXAxis(this);
    Internal.createyAxis(this);
    InternalLine.buildYAxis(this);
    InternalLine.buildLine(this);
    Internal.setAxisStyle(this, 'path', 'none', '#000', 'crispEdges');
    Internal.setAxisStyle(this, 'line', 'none', '#000', 'crispEdges');
    Internal.createToolTip(this);
    InternalLine.buildChartComponents(this);
    InternalLine.styleChart(this);
    InternalLine.updateColors(this);
    Internal.createLegend(this);
    return this;
  }

  // Calls InternalLine to update the line on chart
  // Used when a property changes that requires a re-render.
  /*
  @private
  @function updateChartComponents
  @description Calls InternalLine to update the line on chart
  @returns {Object} this (chart instance)
  */

  updateChartComponents() {
    // Calls method on InternalLine to recreate all the
    // chart components. Used to reflect any changes made
    // to property values (e.g. font-size, axis-label, etc.)
    InternalLine.updateChartComponents(this);

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
    // Calls each of the methods on Internal and InternalLine
    // object necessary to update the height of the chart.
    // Internal and Internal Line hold all the methods that do
    // d3 manipulation to create and update various chart elements
    Internal.updateSVGElement(this);
    Internal.setYscale(this, 'linear', 'number');
    Internal.updateYAxisScale(this);
    Internal.updateYAxis(this);
    Internal.updateXAxisPosition(this);
    InternalLine.buildLine(this);

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
    // Calls each of the methods on Internal and InternalLine
    // object necessary to update the width of the chart.
    // Internal and InternalLine hold all the methods that do
    // d3 manipulation to create and update various chart elements

    Internal.updateSVGElement(this);
    InternalLine.setXScale(this);
    Internal.updateXAxisScale(this);
    Internal.updateXAxis(this);
    InternalLine.buildLine(this);

    return this;
  }


  // Calls InternalLine to update color of line chart after
  // initial render. InternalLine does the d3 manipulation
  /*
  @private
  @function updateColors
  @description Calls InternalLine to update color of line chart after initial render
  @param {Array} colors Array of colors to update the chart to
  @returns {Object} this (chart instance)
  */

  updateColors() {
    InternalLine.updateColors(this);

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
    Internal.updateXAxis(this);

    return this;
  }

  // Calls InternalLine to update y-axis label
  // Used when the y-axis label changes that requires a re-render.
  /*
  @private
  @function updatexAxisLabel
  @description Calls InternalLine to update y-axis label
  @returns {Object} this (chart instance)
  */

  updateyAxisLabel() {
    InternalLine.updateYAxis(this);

    return this;
  }

  // Updates the time format and calls chart update functions
  // Used when the time format changes that requires a re-render.
  /*
  @private
  @function updateDateFormat
  @description Updates the time format and calls chart update functions
  @param {String} newDateFormat A new time format specifier
  @returns {Object} this (chart instance)
  */

  updateTimeFormat(dateFormat) {
    this.dateFormat = dateFormat;
    return this;
  }

  // Updates the formatting for the chart ticks
  // Used when tick formatting changes that requires a re-render.
  /*
  @private
  @function updateTickFormat
  @description Updates the formatting for the chart ticks
  @param {String} tickFormat A new time format specifier for ticks
  @returns {Object} this (chart instance)
  */

  updateTickFormat(tickFormat) {
    InternalLine.setTickFormat(this, tickFormat);
    Internal.updateXAxis(this);
    return this;
  }

  // Updates the number of ticks.
  // Used when tick count changes that requires a re-render.
  /*
  @private
  @function updateTickCount
  @description Updates the number of ticks
  @param {String} tickCount The number of ticks wanted
  @param {String} countBy What interval ticks should count e.g. by month, year, minute
  @returns {Object} this (chart instance)
  */

  updateTickCount(tickCount, countBy) {
    InternalLine.setTickCount(this, tickCount, countBy);
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
    Internal.convertColorsToScale(this, this.data.map(category => { return category.name; }));
    return this;
  }

}
