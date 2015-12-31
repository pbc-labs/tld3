/*  global d3  */
import Internal from '../internal-charts/internal';
import Firebase from 'firebase';
import errors from '../utils/errors';

/*
Defines the main Chart class that servers as the super class for all
chart types. The ChartMain class defines the default inherited property
values, setters and getters, and the user-facing API.
*/

export class ChartMain {
  // Sets the default inherited property values for all charts
  constructor(width, height, margins, colors, title, fontSize, fontStyle, xAxisLabel, yAxisLabel, xAxisOrientation, yAxisOrientation) {
    this._width = width || 600;
    this._height = height || 300;
    this._margins = margins || { top: 30, right: 30, bottom: 60, left: 60 };
    this._colors = colors || ['#E71D36', '#26408B', '#FF9F1C', '#767B91', '#0FA3B1'];
    this._title = title || 'Default title';
    this._fontSize = fontSize || 14;
    this._fontStyle = fontStyle || 'Arial';
    this._xAxisLabel = xAxisLabel || 'x Axis Label';
    this._yAxisLabel = yAxisLabel || 'y Axis Label';
    this._xAxisOrientation = xAxisOrientation || 'bottom';
    this._yAxisOrientation = yAxisOrientation || 'left';
    this._dateFormat = '';
  }

  /* All of the below setters and getters are used for the chart properties instantiated in the contructor function above.
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

  /*
  @function changeMargins
  @description Updates the margins on the chart
  @param {Object} options New margin values formatted as such: { top: 30, right: 30, bottom: 30, left: 50 }
  @returns {Object} this (the chart instance)
  */

  changeMargins(options) {
    // Check for valid input
    if (typeof options !== 'object' || Array.isArray(options)) {
      throw new errors.MarginsFormatError;
    }
    // Use setter to update margins property
    this.setMargins = options;
    // Call the updateMargins method that exists on the subclass
    this.updateMargins();
    // Call the updateChartComponents method on the subclass
    // to recreate the chart components so the changes are visible
    this.updateChartComponents();
    return this;
  }

  /*
  @function changeWidth
  @description Updates the width of the chart
  @param {Number} width New width in px
  @returns {Object} this (the chart instance)
  */

  changeWidth(width) {
    // Check for valid input
    if (typeof width !== 'number') {
      throw new errors.WidthError;
    }
    // Use setter to update width property
    this.setWidth = width;
    // Call the updateWidth method that exists on the subclass
    this.updateWidth();
    // Call the updateChartComponents method on the subclass
    // to recreate the chart components so the changes are visible
    this.updateChartComponents();
    return this;
  }

  /*
  @function changeHeight
  @description Updates the height of the chart
  @param {Number} height New height in px
  @returns {Object} this (the chart instance)
  */

  changeHeight(height) {
    // Check for valid input
    if (typeof height !== 'number') {
      throw new errors.HeightError;
    }
    // Use setter to update height property
    this.setHeight = height;
    // Call the updateHeight method that exists on the subclass
    this.updateHeight();
    // Call the updateChartComponents method on the subclass
    // to recreate the chart components so the changes are visible
    this.updateChartComponents();

    return this;
  }

  /*
  @function changeTitle
  @description Updates the title of the chart
  @param {String} title New chart title
  @returns {Object} this (the chart instance)
  */

  changeTitle(title) {
    // Check for valid input
    if (typeof title !== 'string' && typeof title !== 'number') {
      throw new errors.TitleError;
    }
    // Use setter to update title property
    this.setTitle = title;
    // Call the updateTitle method on Internal config object
    // which handles the d3 manipulation
    Internal.updateTitle(this);

    return this;
  }

  /*
  @function changeFontSize
  @description Updates the font size on the chart
  @param {Number} size New font size
  @returns {Object} this (the chart instance)
  */

  changeFontSize(size) {
    // Check for valid input
    if (typeof size !== 'number') {
      throw new errors.FontSizeError;
    }
    // Use setter to update size property
    this.setFontSize = size;
    // Call the updateFontSize method on Internal config object
    // which handles the d3 manipulation
    Internal.updateFontSize(this);

    return this;
  }

  /*
  @function changeFontStyle
  @description Updates the font style on the chart
  @param {String} font New font style
  @returns {Object} this (the chart instance)
  */

  changeFontStyle(font) {
    // Check for valid input
    if (typeof font !== 'string') {
      throw new errors.FontStyleError;
    }
    // Use setter to update font style property
    this.setFontStyle = font;
    // Call the updateFontStyle method on Internal config object
    // which handles the d3 manipulation
    Internal.updateFontStyle(this);

    return this;
  }

  /*
  @function changexAxisLabel
  @description Updates the x-axis label on the chart
  @param {String} label New x-axis label
  @returns {Object} this (the chart instance)
  */

  changexAxisLabel(label) {
    // Use setter to update x-axis-label property
    this.setxAxisLabel = label;
    // Call the updatexAxisLabel method on the subclass instance.
    // The update functionality varies for each chart type,
    // hence why we call the method on the instance
    this.updatexAxisLabel();

    return this;
  }

  /**
  @function changeyAxisLabel
  @description Updates the y-axis label on the chart.
  @param {String} label New y-axis label
  @returns {Object} this (the chart instance)
  */

  changeyAxisLabel(label) {
    // Use setter to update y-axis-label property
    this.setyAxisLabel = label;
    // Call the updateyAxisLAbel method on the subclass instance.
    // The update functionality varies for each chart type,
    // hence why we call the method on the instance
    this.updateyAxisLabel();

    return this;
  }

  /*
  @function changeColors
  @description Updates the colors on the chart.
  @param {Array} colors New chart colors. Can be RGB, HEX or string
  color name
  @returns {Object} this (the chart instance)
  */

  changeColors(colors) {
    // Check for valid input
    if (!Array.isArray(colors)) {
      throw new errors.ColorError;
    }
    // Use setter to update colors property
    this.setColors = colors;
    // Call the updateColors method on the subclass instance.
    // The update functionality varies for each chart type,
    // hence why we call the method on the instance
    this.updateColors();

    return this;
  }

  /*
  @function in
  @description Sets the div element in which the d3 chart will created.
  @param {String} classOrid Class or Id of the div element where d3 chart
  will be created
  @returns {Object} this (the chart instance)
  */

  in(classOrid) {
    // Check to make sure data has already been set
    if (!this.data) {
      throw new errors.InBeforeUsingError;
    }
    // Set the location of the d3 chart element to the DOM
    // element with the class or id passed in
    this.location = classOrid;
    // Builds up the d3 chart. The functionality for building the
    // chart varies by Chart type, hence why it lives on the
    // subclass instance
    this.build();

    return this;
  }

  /*
  @function using
  @description Sets the data for the chart.
  @param {Object/JSON/URL} dataInput Data for D3 chart
  @returns {Object} this (the chart instance)
  */

  using(dataInput) {
    // Check for valid input
    if (!dataInput) {
      throw new errors.NoDataError;
    }
    // Set the data for the d3 chart using the data passed in
    this.data = dataInput;

    return this;
  }

  /*
  @function refreshFirebaseData
  @description If using Firebase database as data source, chaining this method will capture updates to data in real-time. And chart will update without refresh
  @param {String} url Firebase database url
  @returns {Object} this (the chart instance)
  */

  liveUpdateFirebaseData(url) {
    const ref = new Firebase(url);

    ref.on('value', (snapshot) => {
      this.data = snapshot.val();
      this.updateChartComponents();
    }, this);

    return this;
  }
}
