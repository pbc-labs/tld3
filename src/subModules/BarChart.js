import { ChartMain } from '../core/ChartMain';
/**
@private
Constructor subclass for Bar Chart.
*/
export class BarChart extends ChartMain {
  constructor() {
    super();
    this._xScaleType = undefined;
    this._yScaleType = 'linear';
  }

  render() {
    return this.selectElement()
              .setMargin()
              .setWidth()
              .setHeight()
              .setXscale('ordinal', 'string')
              .setYscale('linear', 'number')
              .createSVG()
              .setXaxis()
              .setYaxis()
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
         .attr('x', d => { return this.xScale(d[this.xAxisLabel.label]); })
         .attr('width', this.xScale.rangeBand())
         .attr('y', d => { return this.yScale(d[this.yAxisLabel.label]); })
         .attr('height', d => { return this.height.height - this.yScale(d[this.yAxisLabel.label]); })
         .style('fill', 'steelblue');
    return this;
  }

}
