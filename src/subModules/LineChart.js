import { ChartMain } from '../core/ChartMain';
import Internal from '../internalCharts/internal';
import InternalLine from '../internalCharts/internalLine';

/*
Constructor subclass for Line Chart.
*/
export class LineChart extends ChartMain {
  constructor() {
    super();
    this.dateFormat = '';
  }

  /*
  @private
  @function build
  @description Builds up the bar chart
  @returns {Object} this (chart instance)
  */

  build() {
    /*
    Calls each of the methods on Internal and InternalLine object necessary to build up all the components of the chart. Internal and InternalLine hold all the methods that do d3 manipulation to create and update various parts of the chart
    */
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

  /*
  @private
  @function updateChartComponents
  @description Calls InternalLine to update the line on chart
  @returns {Object} this (chart instance)
  */

  updateChartComponents() {
    /* Calls method on InternalLine to recreate all the chart components. Used to reflect any changes made to property values (e.g. font-size, axis-label, etc.)
    */
    InternalLine.updateChartComponents(this);

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
    Calls each of the methods on Internal and InternalLine object necessary to update the height of the chart. Internal and Internal Line hold all the methods that do d3 manipulation to create and update various parts of the chart
    */
    Internal.updateSVGElement(this);
    Internal.setYscale(this, 'linear', 'number');
    Internal.updateYAxisScale(this);
    Internal.updateYAxis(this);
    Internal.updateXAxisPosition(this);
    InternalLine.buildLine(this);

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
    Calls each of the methods on Internal and InternalLine object necessary to update the width of the chart. Internal and InternalLine hold all the methods that do d3 manipulation to create and update various parts of the chart
    */
    Internal.updateSVGElement(this);
    InternalLine.setXScale(this);
    Internal.updateXAxisScale(this);
    Internal.updateXAxis(this);
    InternalLine.buildLine(this);

    return this;
  }


  /*
  @private
  @function updateColors
  @description Calls InternalLine to update color of line chart after initial render
  @param {Array} colors Array of colors to update the chart to
  @returns {Object} this (chart instance)
  */

  updateColors() {
    /*
    Calls InternalLine object to update the colors on the line chart. InternalLine does the d3 manipulation
    */
    InternalLine.updateColors(this);

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
  @description Calls InternalLine to update y-axis label
  @returns {Object} this (chart instance)
  */

  updateyAxisLabel() {
    /*
    Calls InternalLine object to update the x-axis label
    */
    InternalLine.updateYAxis(this);

    return this;
  }

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

  /*
  @private
  @function updateTickCount
  @description Updates the amount of ticks
  @param {String} tickCount The number of ticks wanted
  @param {String} countBy What interval ticks should count e.g. by month, year, minute
  @returns {Object} this (chart instance)
  */

  updateTickCount(tickCount, countBy) {
    InternalLine.setTickCount(this, tickCount, countBy);
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
    this._colors = newColors;
    Internal.convertColorsToScale(this, this.data.map(category => { return category.name; }));
    return this;
  }

}
