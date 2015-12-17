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

  updateLinearColunm(context, columnName) {
    context.linearColumn = columnName || utils.getFirstLinearColumn(context.data);
    return context;
  },

  updateOrdinalColunm(context, columnName) {
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
    const tooltip = d3.select('body')
    .append('div')
    .attr('class', 'tooltip')
    .style({
      position: 'absolute',
      color: 'black',
      'text-align': 'center',
      width: '100px',
      padding: '2px',
      font: '12px sans-serif',
      background: '#f2f2f2',
      border: '0px',
      'border-radius': '1px',
      cursor: 'pointer',
    });

    const g = context.svg.selectAll('.arc')
        .data(context.pie(context.data))
        .enter().append('g')
        .attr('class', 'arc');
    g.append('path')
        .style('fill', d => { return context.colorScale(d.data[context.ordinalColumn]); })
        .transition()
        .attrTween('d', d => {
          const i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
          return (t) => {
            d.endAngle = i(t);
            return context.arc(d);
          };
        }).each('end', d => {
          g.append('text')
            .attr('transform', 'translate(' + context.arc.centroid(d) + ')')
            .attr('dx', '.35em')
            .style('opacity', 0)
            .text(d.data[context.ordinalColumn])
            .transition().duration(200)
            .style('opacity', 1);
        });

    g.on('mouseover', d => {
      tooltip.transition()
       .duration(200)
       .style('opacity', 0.9);
      tooltip
       .html(() => {
         return `${context.ordinalColumn}: ${d.data[context.ordinalColumn]}\
        ${context.linearColumn}: ${d.data[context.linearColumn]}`;
       })
       .style('left', (d3.event.pageX + 'px'))
       .style('top', (d3.event.pageY + 'px'));
    });

    g.on('mouseout', () => {
      tooltip.transition().style('opacity', 0);
    });

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
    .text('Default Tilte');
    return this;
  },

};

export default DonutChart;
