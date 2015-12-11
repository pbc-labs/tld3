/*  global d3  */
// import Internal from '../subModules/internal';
import Internal from '../subModules/internal';

/**
Defines the main Chart class. This is the super class for
all chart types. The Main Chart class holds all the common
methods that every chart would use.
@private
*/

export class ChartMain {
  constructor(width, height, margins, colors, title, fontSize, fontStyle, xAxisLabel, yAxisLabel, xAxisOrientation, yAxisOrientation) {
    this._width = width || 600;
    this._height = height || 300;
    this._margins = margins || { top: 30, right: 30, bottom: 30, left: 50 };
    this._colors = colors || ['steelblue', 'red', 'green'];
    this._title = title || 'Default title, YO!';
    this._fontSize = fontSize || 14;
    this._fontStyle = fontStyle || 'Arial';
    this._xAxisLabel = xAxisLabel || 'x Axis Label';
    this._yAxisLabel = yAxisLabel || 'y Axis Label';
    this._xAxisOrientation = xAxisOrientation || 'bottom';
    this._yAxisOrientation = yAxisOrientation || 'left';
  }

  /**
  @private
  @method All of the below setters and getters are used for the chart properties instantiated in the contructor function above.
  */

  set setWidth(newWidth) {
    this._width = newWidth;
  }

  get getWidth() {
    return this._width;
  }

  set setHeight(newHeight) {
    this._height = newHeight;
  }

  get getHeight() {
    return this._height;
  }

  set setMargins(newMargins) {
    this._margins = newMargins;
  }

  get getMargins() {
    return this._margins;
  }

  set setColors(newColors) {
    this._colors = newColors;
  }

  get getColors() {
    return this._colors;
  }

  set setTitle(newTitle) {
    this._title = newTitle;
  }

  get getTitle() {
    return this._title;
  }

  set setFontSize(newFontSize) {
    this._fontSize = newFontSize;
  }

  get getFontSize() {
    return this._fontSize;
  }

  set setFontStyle(newFontStyle) {
    this._fontStyle = newFontStyle;
  }

  get getFontStyle() {
    return this._fontStyle;
  }

  set setxAxisLabel(newLabel) {
    this._xAxisLabel = newLabel;
  }

  get getxAxisLabel() {
    return this._xAxisLabel;
  }

  set setyAxisLabel(newLabel) {
    this._yAxisLabel = newLabel;
  }

  get getyAxisLabel() {
    return this._yAxisLabel;
  }

  set setxAxisOrientation(newOrientation) {
    this._xAxisOrientation = newOrientation;
  }

  get getxAxisOrientation() {
    return this._xAxisOrientation;
  }

  set setyAxisOrientation(newOrientation) {
    this._yAxisOrientation = newOrientation;
  }

  get getyAxisOrientation() {
    return this._yAxisOrientation;
  }

  /**
  @function Updates the margins of the chart.
  @returns {Object} this (ChartMain class)
  */

  changeMargins(options) {
    this.setMargins = options;
    this.updateMargins();
    this.updateChartComponents();
    return this;
  }

  /**
  @function Update the width of the chart.
  @returns {Object} this (ChartMain class)
  */

  changeWidth(width) {
    this.setWidth = width;
    this.updateWidth();
    this.updateChartComponents();
    return this;
  }

  /**
  @function Updates the height of the chart.
  @returns {Object} this (ChartMain class)
  */

  changeHeight(height) {
    this.setHeight = height;
    this.updateHeight();
    this.updateChartComponents();
    return this;
  }

  /**
  @function Updates the title of the chart.
  @returns {Object} this (ChartMain class)
  */

  changeTitle(title) {
    this.setTitle = title;
    Internal.updateTitle(this);

    return this;
  }

  /**
  @function Updates the font size on the chart.
  @returns {Object} this (ChartMain class)
  */

  changeFontSize(size) {
    this.setFontSize = size;
    Internal.updateFontSize(this);

    return this;
  }

  /**
  @function Updates the font style on the chart.
  @returns {Object} this (ChartMain class)
  */

  changeFontStyle(font) {
    this.setFontStyle = font;
    Internal.updateFontStyle(this);

    return this;
  }

  /**
  @function Updates the x-axis label on the chart.
  @returns {Object} this (ChartMain class)
  */

  changexAxisLabel(label) {
    this.setxAxisLabel = label;
    Internal.updatexAxis(// TODO
    );

    return this;
  }

  /**
  @function Updates the y-axis label on the chart.
  @returns {Object} this (ChartMain class)
  */

  changeyAxisLabel(label) {
    this.setyAxisLabel = label;
    Internal.updatexAxis(// TODO
    );

    return this;
  }

  // updateAxisColor(color) {
  //   // TODO
  // }
  //
  // updateTextColor(color) {
  //   // TODO
  // }
  //
  // createLegend() {
  // // TODO
  // }

  changeColors(colors) {
    this.updateColors(colors);
  }
  /**
  @function Sets the div element in which the d3 chart will created.
  @param {String} Class or Id of the div element where d3 chart will be created
  @returns {Object} this (ChartMain class)
  */

  in(classOrid) {
    this.location = classOrid;
    this.build();
    return this;
  }

  /**
  @function Sets the data for the chart.
  @param {Object, JSON, URL} Data for d3 chart
  @returns {Object} this (ChartMain class)
  */

  using(dataInput) {
    this.data = dataInput;
    return this;
  }

}
