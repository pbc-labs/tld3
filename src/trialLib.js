/* global d3 */

const data =
  [
  { 'letter': 'A', 'frequency': 0.08167 },
  { 'letter': 'B', 'frequency': 0.01492 },
  { 'letter': 'C', 'frequency': 0.02782 },
  { 'letter': 'D', 'frequency': 0.04253 },
  { 'letter': 'E', 'frequency': 0.12702 },
  { 'letter': 'F', 'frequency': 0.02288 },
  { 'letter': 'G', 'frequency': 0.02015 },
  { 'letter': 'H', 'frequency': 0.06094 },
  { 'letter': 'I', 'frequency': 0.06966 },
  { 'letter': 'J', 'frequency': 0.00153 },
  { 'letter': 'K', 'frequency': 0.00772 },
  { 'letter': 'L', 'frequency': 0.04025 },
  { 'letter': 'M', 'frequency': 0.02406 },
  { 'letter': 'N', 'frequency': 0.06749 },
  { 'letter': 'O', 'frequency': 0.07507 },
  { 'letter': 'P', 'frequency': 0.01929 },
  { 'letter': 'Q', 'frequency': 0.00095 },
  { 'letter': 'R', 'frequency': 0.05987 },
  { 'letter': 'S', 'frequency': 0.06327 },
  { 'letter': 'T', 'frequency': 0.09056 },
  { 'letter': 'U', 'frequency': 0.02758 },
  { 'letter': 'V', 'frequency': 0.00978 },
  { 'letter': 'W', 'frequency': 0.0236 },
  { 'letter': 'X', 'frequency': 0.0015 },
  { 'letter': 'Y', 'frequency': 0.01974 },
  { 'letter': 'Z', 'frequency': 0.00074 },
  ];

/**
This defines our main library object.
@private
*/

class Margin {
  constructor({ top, left, right, bottom }) {
    this.top = top || 0;
    this.left = left || 0;
    this.right = right || 0;
    this.bottom = bottom || 0;
  }
}

class Width {
  constructor(width) {
    this.width = width;
  }
}

class Height {
  constructor(height) {
    this.height = height;
  }
}

const Internal = {
  config: {
    Height: Height,
    Width: Width,
    Margins: Margin,
    fontSize: true,
    fontStyle: true,
    axisLabels: true,
    axisPosition: true,
    xScale: true,
    yScale: true,
    color: [],
  },

  internalUpdateHeight() {

  },
};

/**
Internal defines .....
@private
*/

class ChartMain {
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
      this.width = new Internal.config.Width(200);
    } else {
      this.width.width(width);
    }
    return this;
  }

  setHeight(height) {
    if (!this.height) {
      this.height = new Internal.config.Height(120);
    } else {
      this.height.height(height);
    }
    return this;
  }

  createSVG() {
    // NOT exposed to user
    this.svg = this.element
                    .append('svg')
                    .attr('width', this.width.width + this.margin.left + this.margin.right)
                    .attr('height', this.height.height + this.margin.top + this.margin.bottom)
                    .append('g')
                    .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    return this;
  }

  mapData() {

  }

  setXscale() {
    this.xScale = d3.scale.ordinal() // Add check to figure out scale
                    .rangeRoundBands([0, this.width.width], 0.1);
    this.xScale.domain(this.data.map(d => { return d.letter; }));
    return this;
  }

  setYscale() {
    this.yScale = d3.scale.linear()
                    .range([this.height.height, 0]);
    this.yScale.domain([0, d3.max(this.data, d => { return d.frequency; })]);
    return this;
  }

  creteXaxis() {
    this.xAxis = d3.svg.axis()
          .scale(this.xScale)
          .orient('bottom');

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

  setAxisPathStyle(fill = 'none', stroke = '#000', shapeRerendering = 'crispEdges') {
    this.svg.selectAll('.axis').selectAll('path')
       .style({
         fill: fill,
         stroke: stroke,
         'shape-rendering': shapeRerendering,
       });

    return this;
  }

  setAxisLineStyle(fill = 'none', stroke = '#000', shapeRerendering = 'crispEdges') {
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

/**
This creates the Bar subclass.
*/
class BarChart extends ChartMain {
  constructor() {
    super();
  }

  render() {
    return this.selectElement()
                .setMargin()
                .setWidth()
                .setHeight()
                .setXscale()
                .setYscale()
                .createSVG()
                .creteXaxis()
                .createYaxis()
                .setAxisPathStyle()
                .setAxisLineStyle()
                .final();
  }

  final() {
    this.svg.selectAll('.bar')
         .data(this.data)
         .enter()
       .append('rect')
         .attr('class', 'bar')
         .attr('x', d => { return this.xScale(d.letter); }) // TODO: Make work for all names
         .attr('width', this.xScale.rangeBand())
         .attr('y', d => { return this.yScale(d.frequency); }) // TODO: Make work for all names
         .attr('height', d => { return this.height.height - this.yScale(d.frequency); }) // TODO: Make work for all names
         .style('fill', 'steelblue');
    return this;
  }

}


const charts = {
    // holds all sub classes
  BarChart,
};

const d3fault = {
  version: '1.0.0',
  make(chartType) {
    return new charts[chartType]();
  },
};


d3fault.make('BarChart')
        .using(data)
        .in('#yo');
