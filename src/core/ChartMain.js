import Internal from '../subModules/internal';
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
      this.margin = new Internal.config.Margins({ top: 20, right: 20, bottom: 30, left: 40 });
    } else {
      this.margins.margins(options);
    }
    return this;
  }

  setWidth(width) {
    if (!this.width) {
      this.width = new Internal.config.Width(600);
    } else {
      this.width.width(width);
    }
    return this;
  }

  setHeight(height) {
    if (!this.height) {
      this.height = new Internal.config.Height(40);
    } else {
      this.height.height(height);
    }
    return this;
  }

  createSVG() {
    // NOT exposed to user
    this.svg = utils.createSVGElement(this.element, this.width.width, this.height.height, this.margin);
    return this;
  }

  mapData() {

  }

  setXscale(type, dataDomain, columnName) {
    if (type === 'ordinal') {
      this.xScale = utils.setOridinalScale(this.width.width);
    } // do other tyes of scale

    if (dataDomain === 'string') { // do other types of data domain
      utils.mapDataDomainToString(this.xScale, this.data, columnName)
    }
    return this;
  }

  setYscale(type, dataDomain, columnName) {
    if (type === 'linear') {
      this.yScale = utils.setLinearScale(this.height.height);
    }

    if (dataDomain === 'number') {
      utils.mapDataDomainToNumber(this.yScale, this.data, columnName)
    }
    return this;
  }

  createXaxis(orientation) {
    this.xAxis = utils.createAxis(orientation, this.xScale);

    this.svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0, ' + this.height.height + ')')
            .call(this.xAxis);

    return this;
  }

  createYaxis() {
    this.yAxis = d3.svg.axis()
      .scale(this.yScale)
      .orient('left')
      .ticks(10, '%'); // TODO: make work for all data

    this.svg.append('g')
             .attr('class', 'y axis')
             .call(this.yAxis);

    return this;
  }

  setAxisPathStyle(fill, stroke, shapeRerendering) {
    utils.setAxisStyle(this.svg, 'path', fill, stroke, shapeRerendering)
    return this;
  }

  setAxisLineStyle(fill, stroke, shapeRerendering) {
    this.svg.selectAll('.axis').selectAll('line')
       .style({
         fill: fill,
         stroke: stroke,
         'shape-rendering': shapeRerendering,
       });
    return this;
  }

  setColors() {

  }

  setTitle() {

  }

  setFontSize() {

  }

  setFontType() {

  }

  createLegend() {

  }

  in(classOrid) {
    this.location = classOrid;
    this.render();
    return this;
  }

  using(dataInput) {
    // data handling happens here with es6 promise
    // DO DATA HANDLING
    this.data = dataInput;
    // TODO: Make work for all names

    return this;
  }

}
