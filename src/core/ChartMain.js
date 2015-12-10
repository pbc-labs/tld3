/*  global d3  */
// import Internal from '../subModules/internal';
import utils from '../utils/utils';

/**
Defines the main Chart class. This is the super class for
all chart types. The Main Chart class holds all the common
methods that every chart would use.
@private
*/

export class ChartMain {
  constructor() {
  }

  /**
  @private
  @function Creates a d3 element and assigns it to our internal this.element property
  @returns {Object} this (ChartMain class)
  */

  selectElement() {
    this.element = d3.select(this.location);
    return this;
  }

  /**
  @function Sets the margins for chart. If no margins have been set yet (i.e. upon instantiation of chart), it will set the this.margins property to the Margin constructor class. If a margin exists already, we know that a user is attempting to update the margins explicitly so we use the setter method on the Margin class to update the margins.
  @returns {Object} this (ChartMain class)
  */

  setMargins(options) {
    if (!this.margins) {
      this.margins = utils.setDefaultMargins();
    } else {
      this.margins.margins = options;
    }
    return this;
  }

  /**
  @function Sets the width for chart. If width has not been set yet (i.e. upon instantiation of chart), it will set the this.width property to the Width constructor class. If a width exists already, we know that a user is attempting to update the width explicitly so we use the setter methods on the Width class to update the width.
  @returns {Object} this (ChartMain class)
  */

  setWidth(width) {
    if (!this.width) {
      this.width = utils.setDefaultWidth();
    } else {
      this.width.width = width;
    }
    return this;
  }

  /**
  @function Sets the height for chart. If height has not been set yet (i.e. upon instantiation of chart), it will set the this.height property to the Height constructor class. If a height exists already, we know that a user is attempting to update the height explicitly so we use the setter methods on the height class to update the height.
  @returns {Object} this (ChartMain class)
  */

  setHeight(height) {
    if (!this.height) {
      this.height = utils.setDefaultHeight();
    } else {
      this.height.height = height;
    }
    return this;
  }

  /**
  @private
  @function Sets the height for chart. If height has not been set yet (i.e. upon instantiation of chart), it will set the this.height property to the Height constructor class. If a height exists already, we know that a user is attempting to update the height explicitly so we use the setter methods on the height class to update the height.
  @returns {Object} this (ChartMain class)
  */

  createSVG() {
    this.svg = utils.createSVGElement(this.element, this.width.width, this.height.height, this.margins.margins);

    return this;
  }

  /**
  @private
  @param {String} type
    @description type of scale (ordinal vs. linear)
  @param {String} dataDomain
    @description Type of data to map the scale to (String vs. Number)
  @function Sets the xScale for chart. Checks for the type of scale passed in, and builds the scale accordingly. Then depending on whether we are using the ordinal scale or linear scale, we map the data to the scale accordingly.
  @returns {Object} this (ChartMain class)
  */

  setXscale(type, dataDomain) {
    if (type === 'ordinal') {
      this.xColumnName = utils.getFirstOrdinalColumn(this.data);
      this.xAxisLabel = utils.setAxisLabel(this.xColumnName);
      this.xScale = utils.setOridinalScale(this.width.width);
    } else if (type === 'linear') {
      this.xColumnName = utils.getFirstLinearColumn(this.data);
      this.xAxisLabel = utils.setAxisLabel(this.xColumnName);
      this.xScale = utils.setLinearScale(this.width.width);
    }

    if (dataDomain === 'string') {
      utils.mapDataDomainToString(this.xScale, this.data, this.xColumnName);
    } else if (dataDomain === 'number') {
      utils.mapDataDomainToNumber(this.xScale, this.data, this.xColumnName);
    }

    return this;
  }

  /**
  @private
  @param {String} type
    @description type of scale (ordinal vs. linear)
  @param {String} dataDomain
    @description Type of data to map the scale to (String vs. Number)
  @function Sets the yScale for chart. Uses the same logic as xScale above
  @returns {Object} this (ChartMain class)
  */

  setYscale(type, dataDomain) {
    if (type === 'ordinal') {
      this.yColumnName = utils.getFirstOrdinalColumn(this.data);
      this.yAxisLabel = utils.setAxisLabel(this.yColumnName);
      this.yScale = utils.setOridinalScale(this.height.height);
    } else if (type === 'linear') {
      this.yColumnName = utils.getFirstLinearColumn(this.data);
      this.yAxisLabel = utils.setAxisLabel(this.yColumnName);
      this.yScale = utils.setLinearScale(this.height.height);
    }

    if (dataDomain === 'string') {
      utils.mapDataDomainToString(this.yScale, this.data, this.yColumnName);
    } else if (dataDomain === 'number') {
      utils.mapDataDomainToNumber(this.yScale, this.data, this.yColumnName);
    }

    return this;
  }

  /**
  @private
  @function Sets the x-Axis to the Axis class structure and then builds the xAxis.
  @returns {Object} this (ChartMain class)
  */

  setXaxis() {
    if (!this.xAxis) {
      this.xAxis = utils.createAxis('bottom', this.xScale);
      utils.buildXAxis(this.svg, this.xAxis);
    }
    return this;
  }

  /**
  @private
  @function Sets the y-Axis to the Axis class structure and then builds the xAxis.
  @returns {Object} this (ChartMain class)
  */

  setYaxis() {
    if (!this.yAxis) {
      this.yAxis = utils.createAxis('left', this.yScale);
      utils.buildYAxis(this.svg, this.yAxis);
    }

    return this;
  }

  /**
  @private
  @function Sets the axis path style
  @param {String} fill
    @description fill color of axis path
  @param {String} stroke
    @description stroke color of axis path
  @param {String} shapeRerendering
    @description rerenders the axis to be thinner and have crisp edges
  @returns {Object} this (ChartMain class)
  */

  setAxisPathStyle(fill, stroke, shapeRerendering) {
    utils.setAxisStyle(this.svg, 'path', fill, stroke, shapeRerendering);

    return this;
  }

  /**
  @private
  @function Sets the axis line style
  @param {String} fill
    @description fill color of axis path
  @param {String} stroke
    @description stroke color of axis path
  @param {String} shapeRerendering
    @description rerenders the axis to be thinner and have crisp edges
  @returns {Object} this (ChartMain class)
  */

  setAxisLineStyle(fill, stroke, shapeRerendering) {
    utils.setAxisStyle(this.svg, 'line', fill, stroke, shapeRerendering);

    return this;
  }

  /**
  @function Set the colors of chart
  @returns {Object} this (ChartMain class)
  */

  setColors(colorsArray) {
    if (!this.colors) {
      this.colors = utils.setColors(colorsArray);
    }

    return this;
  }

  // updateAxisColor(color) {
  //   // TODO
  // }
  //
  // updateTextColor(color) {
  //   // TODO
  // }

  /**
  @function Sets the title of the chart if it has not already been instatiated. If title already exists, it means the user is updating the title, so this case is handled in the else block.
  @returns {Object} this (ChartMain class)
  */

  setTitle(title) {
    if (!this.title) {
      this.title = utils.setTitle(title);
    } else {
      this.title.title = title;
      utils.updateTitle(this.element, this.title.title, this.width.width);
    }

    return this;
  }

  /**
  @function Sets the font size on the chart if it has not already been instatiated. If font size already exists, it means the user is updating the font size, so this case is handled in the else block.
  @returns {Object} this (ChartMain class)
  */

  setFontSize(size) {
    if (!this.fontSize) {
      this.fontSize = utils.setFontSize(size);
    } else {
      this.fontSize.fontSize = size;
      utils.updateFontSize(this.element, this.fontSize.fontSize);
    }

    return this;
  }

  /**
  @function Sets the font style on the chart if it has not already been instatiated. If font style already exists, it means the user is updating the font style, so this case is handled in the else block.
  @returns {Object} this (ChartMain class)
  */

  setFontStyle(font) {
    if (!this.fontStyle) {
      this.fontStyle = utils.setFontStyle(font);
    } else {
      this.fontStyle.fontStyle = font;
      utils.updateFontStyle(this.element, this.fontStyle.fontStyle);
    }

    return this;
  }

  createLegend() {

  }

  in(classOrid) {
    this.location = classOrid;
    // utils.getData(this.data)
    // .then((data) => {
    //   this.data = data;
    //   this.render();
    // });
    this.render();
    return this;
  }

  using(dataInput) {
    this.data = dataInput;

    return this;
  }

}
