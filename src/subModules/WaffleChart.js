/* global d3 */
import { ChartMain } from '../core/ChartMain';
import Internal from './internal';
import InternalWaffle from '../internal-charts/internalWaffle';
/**
Constructor subclass for Waffle Chart.
*/
export class WaffleChart extends ChartMain {
  constructor() {
    super();
    // Adds default waffleChart configuration
    this._squareWidth = 20;
    this._squareHeight = 5;
    this._squareValue = 0;
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

  get getSquareWidth() {
    return this._squareWidth;
  }

  get getSquareHeight() {
    return this._squareHeight;
  }

  get getSquareSize() {
    return this._squareHeight + this._squareWidth;
  }

  get getGapSize() {
    return this._gap;
  }

  /**
  @private
  @function build
  @description Builds up the waffle chart
  */

  build() {
    Internal.selectElement(this);
    InternalWaffle.setColumns(this);
    InternalWaffle.processData(this);
    InternalWaffle.calculateSize(this);
    Internal.createSVGElement(this);
    InternalWaffle.buildChartComponents(this);
    InternalWaffle.styleChart(this);
    InternalWaffle.createLegend(this);
  }

  /**
  @private
  @function updateChartComponents
  @description Calls InternalWaffle to update the waffle chart components
  */
  updateChartComponents() {
    InternalWaffle.updateChartComponents(this);
  }

  // TODO: Calculate change in squares for updateHeight and updateWidth
  updateHeight() {

  }

  updateWidth() {

  }

  /**
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

/**
@private
@function Updates color of waffle chart after initial render
@param {Array} colors
  @description Array of colors to update the chart to
*/
  updateColors() {
    InternalWaffle.updateColors(this);
  }
}
