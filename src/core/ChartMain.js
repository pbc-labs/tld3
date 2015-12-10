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
  @function Sets the xScale for chart. Checks for the type of scale passed in: ordinal vs. linear, and builds the scale accordingly. Then depending on whether we are using the ordinal scale or linear scale, we map the data to the scale accordingly.
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

  setXaxis() { // TODO: move D3 to utils
    if (!this.xAxis) {
      this.xAxis = utils.createAxis('bottom', this.xScale);
      this.svg.append('g')
              .attr('class', 'x axis')
              .attr('transform', 'translate(0, ' + this.height.height + ')')
              .call(this.xAxis);
    }
    return this;
  }

  setYaxis() { // TODO: move D3 to utils
    if (!this.yAxis) {
      this.yAxis = utils.createAxis('left', this.yScale);

      this.svg.append('g')
               .attr('class', 'y axis')
               .call(this.yAxis);
    }

    return this;
  }

  setAxisPathStyle(fill, stroke, shapeRerendering) {
    utils.setAxisStyle(this.svg, 'path', fill, stroke, shapeRerendering);

    return this;
  }

  setAxisLineStyle(fill, stroke, shapeRerendering) {
    utils.setAxisStyle(this.svg, 'line', fill, stroke, shapeRerendering);

    return this;
  }

  setColors(colorsArray) {
    if (!this.colors) {
      this.colors = utils.setColors(colorsArray);
    }

    return this;
  }

  updateAxisColor(color) {
    // TODO
  }

  updateTextColor(color) {
    // TODO
  }

  setTitle(title) {
    if (!this.title) {
      this.title = utils.setTitle(title);
    } else {
      this.title.title = title;
      this.element.select('.title').remove();
      this.element.select('svg')
          .append('text')
          .attr('x', this.width.width * 0.5)
          .attr('y', 20)
          .text(this.title.title);
    }

    return this;
  }

  setFontSize(size) {
    if (!this.fontSize) {
      this.fontSize = utils.setFontSize(size);
    } else {
      this.fontSize.fontSize = size;
      this.element.select('svg')
          .style('font-size', this.fontSize.fontSize);
    }

    return this;
  }

  setFontStyle(font) {
    if (!this.fontStyle) {
      this.fontStyle = utils.setFontStyle(font);
    } else {
      this.fontStyle.fontStyle = font;
      this.element.select('svg')
          .attr('font-family', this.fontStyle.fontStyle);
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
