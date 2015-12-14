/*  global d3  */
import { ChartMain } from '../core/ChartMain';
import Internal from './internal';
import utils from '../utils/utils';

export class DonutChart extends ChartMain {
  constructor() {
    super();
  }

  build() {
    Internal.selectElement(this);
    Internal.createSVGElement(this)
    .updateOrdinalColunm()
    .updateLinearColunm()
    .convertData()
    .updateRadius()
    .updateColors()
    .updateArc()
    .updatePie()
    .buildChartComponents();

    return this;
  }

  buildChartComponents() {
    this.svg.selectAll('.arc')
        .data(this.pie(this.data))
        .enter().append('g')
        .attr('class', 'arc')
      .append('path')
        .attr('d', this.arc)
        .style('fill', d => { return this.colorScale(d.data.age); })
      .append('text')
        .attr('transform', d => { return 'translate(' + this.arc.centroid(d) + ')'; })
        .attr('dy', '.35em')
        .text(d => { return d.data.age; });
    return this;
  }

  updateChartComponents() {
    this.svg.selectAll('.arc')
        .data(this.pie(this.data))
      .selectAll('path')
        .attr('d', this.arc)
        .style('fill', d => { return this.colorScale(d.data.age); })
      .selectAll('text')
        .attr('transform', d =>{ return 'translate(' + this.arc.centroid(d) + ')'; })
        .attr('dy', '.35em')
        .text(d => { return d.data.age; });
    return this;
  }

  updateRadius() {
    this.getRadius = Math.min(this.getHeight, this.getWidth);
    return this;
  }

  updateColors(colors) {
    this.colorScale = d3.scale.ordinal()
    .range(colors || this.getColors);
    return this;
  }

  updateArc() {
    this.arc = d3.svg.arc()
               .innerRadius(this.radius - 10)
               .outerRadius(this.radius - 80);
    return this;
  }

  updatePie() {
    this.pie = d3.layout.pie()
               .sort(null)
               .value(() => { return this.data[this.ordinalColumn]; });
    return this;
  }

  updateLinearColunm(columnName) {
    this.linearColumn = columnName || utils.getFirstLinearColumn(this.data);
    return this;
  }

  updateOrdinalColunm(columnName) {
    this.ordinalColumn = columnName || utils.getFirstOrdinalColumn(this.data);
    return this;
  }

  convertData() {
    this.data.forEach(item => {
      item[this.linearColumn] = Number(item[this.linearColumn]);
    });
    return this;
  }

}
