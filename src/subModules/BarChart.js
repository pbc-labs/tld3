import { ChartMain } from '../core/ChartMain';
/**
@private
Constructor subclass for Bar Chart.
*/
export class BarChart extends ChartMain {
  constructor() {
    super();
  }

  build() {
    return this.selectElement()
              .setXscale('ordinal', 'string')
              .setYscale('linear', 'number')
              .createSVG()
              .setXaxis()
              .setYaxis()
              .setAxisPathStyle('none', '#000', 'crispEdges')
              .setAxisLineStyle('none', '#000', 'crispEdges')
              .setFontStyle('Arial')
              .setFontSize(16)
              .setTitle('Basic yo')
              .final();
  }
  render() {
    // used for data updates?
    // need to think about how we are "rendering" upon instantiation and upon update
  }

  final() {
    this.svg.selectAll('.bar')
         .data(this.data)
         .enter()
         .append('rect')
         .attr('class', 'bar')
         .attr('x', d => { return this.xScale(d[this.xAxisLabel.label]); })
         .attr('width', this.xScale.rangeBand())
         .attr('y', d => { return this.yScale(d[this.yAxisLabel.label]); })
         .attr('height', d => { return this.getHeight - this.yScale(d[this.yAxisLabel.label]); })
         .style('fill', this.getColors[0]);

    // Updates the font-style, font-size.
    // Adds a title to the chart
    this.element.select('svg')
        .style('font-family', this.fontStyle.fontStyle)
        .attr('font-size', this.fontSize.fontSize)
        .append('text')
        .attr('class', 'title')
        .attr('x', this.getWidth * 0.5)
        .attr('y', 20)
        .text(this.title.title);

    return this;
  }

  /**
  @function Updates color of bar chart after initial render
  @param {Array} colors
    @description Array of colors to update the chart to
  */
  updateColors(colors) {
    this.element.select('svg')
        .selectAll('.bar')
        .style('fill', colors);
  }

}
