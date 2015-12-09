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

  selectElement() {
    this.element = d3.select(this.location);
    return this;
  }

  setMargin(options) {
    if (!this.margin) {
      this.margin = utils.setDefaultMargins();
    } else {
      this.margins.margins = options;
    }
    return this;
  }

  setWidth(width) {
    if (!this.width) {
      this.width = utils.setDefaultWidth();
    } else {
      this.width.width = width;
    }
    return this;
  }

  setHeight(height) {
    if (!this.height) {
      this.height = utils.setDefaultHeight();
    } else {
      this.height.height = height;
    }
    return this;
  }

  createSVG() {
    this.svg = utils.createSVGElement(this.element, this.width.width, this.height.height, this.margin);
    return this;
  }

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

  setXaxis() {
    if (!this.xAxis) {
      this.xAxis = utils.createAxis('bottom', this.xScale);
      this.svg.append('g')
              .attr('class', 'x axis')
              .attr('transform', 'translate(0, ' + this.height.height + ')')
              .call(this.xAxis);
    }
    return this;
  }

  setYaxis() {
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
    } else {
      this.colors.colors = colorsArray;
      this.svg.selectAll('.bar')
          .style('fill', this.colors.colors);
    }

    return this;
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
      // utils func to do something to update the chart?
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
