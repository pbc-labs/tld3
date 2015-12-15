/*  global d3  */
import utils from '../utils/utils';

const DonutChart = {

  updateStyle(context) {
    context.svg.style({
      font: 'sans-serif',
      'font-size': '10px',
      'text-anchor': 'middle',
    });
    return context;
  },

  updateRadius(context) {
    context.radius = Math.min(context.getHeight, context.getWidth) / 2;
    return context;
  },

  updateColors(context) {
    context.colorScale = d3.scale.ordinal()
    .range(context.getColors);
    return context;
  },

  updateArc(context) {
    context.arc = d3.svg.arc()
               .outerRadius(context.radius - 80)
               .innerRadius(context.radius - 10);
    return context;
  },

  updatePie(context) {
    context.pie = d3.layout.pie()
               .sort(null)
               .value(d => { return d[context.linearColumn]; });
    return context;
  },

  updateLinearColumn(context, columnName) {
    context.linearColumn = columnName || utils.getFirstLinearColumn(context.data);
    return context;
  },

  updateOrdinalColumn(context, columnName) {
    context.ordinalColumn = columnName || utils.getFirstOrdinalColumn(context.data);
    return context;
  },

  convertData(context) {
    context.data.forEach(item => {
      item[context.linearColumn] = Number(item[context.linearColumn]);
    });
    return context;
  },

  updateTranslation(context) {
    context.svg.attr('transform', 'translate(' + context.getWidth / 2 + ',' + context.getHeight / 2 + ')');
    return context;
  },

  buildChartComponents(context) {
    const g = context.svg.selectAll('.arc')
        .data(context.pie(context.data))
        .enter().append('g')
        .attr('class', 'arc');
    g.append('path')
        .attr('d', context.arc)
        .style('fill', d => { return context.colorScale(d.data[context.ordinalColumn]); });
    g.append('text')
        .attr('transform', d => { return 'translate(' + context.arc.centroid(d) + ')'; })
        .attr('dx', '.35em')
        .text(d => { return d.data[context.ordinalColumn]; });
    return context;
  },

  updateChartComponents(context) {
    const g = context.svg.selectAll('.arc')
          .data(context.pie(context.data));
    g.selectAll('path')
          .attr('d', context.arc)
          .style('fill', d => { return context.colorScale(d.data[context.ordinalColumn]); });
    g.selectAll('text')
          .attr('transform', d =>{ return 'translate(' + context.arc.centroid(d) + ')'; })
          .attr('dy', '.35em')
          .text(d => { return d.data[context.ordinalColumn]; });
    return context;
  },

  updateTitle(context) {
    context.svg.append('text')
    .attr('class', 'title')
    .attr('text-anchor', 'middle')
    .text('Default Title');
    return this;
  },

};

export default DonutChart;
