/*
This is required for d3 to load.
*/
/* global d3 */

import { ChartMain } from '../core/ChartMain';
import Internal from '../internal-charts/internal';
import InternalWaffle from '../internal-charts/internalWaffle';
/**
Constructor subclass for Waffle Chart.
*/
export class WaffleChart extends ChartMain {
  constructor() {
    super();
    // Adds default waffleChart configuration
    this._numColumns = 20;
    this._numRows = 5;
    this._squareValue = 0;
    this._squareSize = 25;
    this._gap = 1;
    // Overwrites default colors with ordinal scale
    this._colors = d3.scale.category10();
  }

  /*
  All of the below setters and getters are used for the chart properties instantiated in the contructor function above.
  */

  get getSquareValue() {
    return this._squareValue;
  }

  set setSquareValue(squareValue) {
    this._squareValue = squareValue;
  }

  get getNumColumns() {
    return this._numColumns;
  }

  set setNumColumns(num) {
    this._numColumns = num;
  }

  set setNumRows(num) {
    this._numRows = num;
  }

  get getNumRows() {
    return this._numRows;
  }

  get getSquareSize() {
    return this._squareSize;
  }

  set setSquareSize(size) {
    this._squareSize = size;
  }
  get getGapSize() {
    return this._gap;
  }

  /*
  @private
  @function build
  @description Builds up the waffle chart
  @returns {Object} this Chart object
  */

  build() {
    Internal.selectElement(this);
    InternalWaffle.setColumns(this);
    InternalWaffle.processData(this);
    InternalWaffle.calculateSize(this);
    Internal.createSVGElement(this);
    Internal.createToolTip(this);
    InternalWaffle.buildChartComponents(this);
    InternalWaffle.styleChart(this);
    InternalWaffle.createLegend(this);

    return this;
  }

  /*
  @private
  @function updateChartComponents
  @description Calls InternalWaffle to update the waffle chart components
  @returns {Object} this Chart object
  */
  updateChartComponents() {
    InternalWaffle.updateChartComponents(this);

    return this;
  }

// overwrites setHeight for wafflechart
  set setHeight(height) {
    this.setNumRows = Math.floor(height / this.getSquareSize);
    this._height = height;
  }

  set setWidth(width) {
    this.setNumColumns = Math.floor(width / this.getSquareSize);
    this._width = width;
  }

  changeColumns(columns) {
    this.setNumColumns = columns;
    Internal.updateSVGElement(this);
    InternalWaffle.updateChartComponents(this);
  }

  changeSquareSize(size) {
    this.setSquareSize = size;
    Internal.updateSVGElement(this);
    InternalWaffle.updateChartComponents(this);
  }
  changeRows(rows) {
    this.setNumRows = rows;
    Internal.updateSVGElement(this);
    InternalWaffle.updateChartComponents(this);
  }

  updateWidth() {
    Internal.updateSVGElement(this);
    InternalWaffle.updateChartComponents(this);
  }

  updateHeight() {
    Internal.updateSVGElement(this);
    InternalWaffle.updateChartComponents(this);
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
@function Updates color of waffle chart after initial render
@returns {Object} this Chart object
*/
  updateColors() {
    InternalWaffle.updateColors(this);

    return this;
  }
}
