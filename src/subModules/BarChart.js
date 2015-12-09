import { ChartMain } from '../core/ChartMain';
/**
@private
Constructor subclass for Bar Chart.
*/
export class BarChart extends ChartMain {
  constructor() {
    super();
  }

  render() {
    return this.selectElement()
              .setMargin()
              .setWidth()
              .setHeight()
              .setXscale('ordinal', 'string')
              .setYscale('linear', 'number')
              .createSVG()
              .setXaxis('bottom')
              .setYaxis('left')
              .setAxisPathStyle('none', '#000', 'crispEdges')
              .setAxisLineStyle('none', '#000', 'crispEdges')
              .final();
  }

  final() {
    this.svg.selectAll('.bar')
         .data(this.data)
         .enter()
         .append('rect')
         .attr('class', 'bar')
         .attr('x', d => { return this.xScale(d.letter); })
         // TODO: Make work for all names
         .attr('width', this.xScale.rangeBand())
         .attr('y', d => { return this.yScale(d.frequency); }) // TODO: Make work for all names
         .attr('height', d => { return this.height.height - this.yScale(d.frequency); }) // TODO: Make work for all names
         .style('fill', 'steelblue');
    return this;
  }

}
