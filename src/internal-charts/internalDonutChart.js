/*  global d3  */
import utils from '../utils/utils';

const DonutChart = {

  /**
  @private
  @function updateStyle
  @description Updates the chart style
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */
  updateStyle(context) {
    context.svg.style({
      font: 'sans-serif',
      'font-size': '10px',
      'text-anchor': 'middle',
    });
    return context;
  },

  /**
  @private
  @function updateRadius
  @description Updates the radius
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */
  updateRadius(context) {
    context.radius = Math.min(context.getHeight, context.getWidth) / 2;
    return context;
  },

  /**
  @private
  @function updateColors
  @description Updates the donut slice colors
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */
  updateColors(context) {
    context.colorScale = d3.scale.ordinal()
    .range(context.getColors);
    return context;
  },

  /**
  @private
  @function updateArc
  @description Updates the arc slices with a new scale
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */
  updateArc(context) {
    context.arc = d3.svg.arc()
               .outerRadius(context.radius - 80)
               .innerRadius(context.radius - 10);
    return context;
  },

  /**
  @private
  @function updatePie
  @description Updates the pie slices with a new scale
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */
  updatePie(context) {
    context.pie = d3.layout.pie()
               .sort(null)
               .value(d => { return d[context.linearColumn]; });
    return context;
  },

  /**
  @private
  @function updateLinearColunm
  @description Update the linear name for ordinal data
  @param {Object} context Chart object
  @param {String} the new column name
  @returns {Object} context Chart object
  */
  updateLinearColunm(context, columnName) {
    context.linearColumn = columnName || utils.getFirstLinearColumn(context.data);
    return context;
  },

  /**
  @private
  @function updateOrdinalColunm
  @description Update the colunm name for ordinal data
  @param {Object} context Chart object
  @param {String} the new column name
  @returns {Object} context Chart object
  */
  updateOrdinalColunm(context, columnName) {
    context.ordinalColumn = columnName || utils.getFirstOrdinalColumn(context.data);
    return context;
  },

  /**
  @private
  @function convertData
  @description Coverts the charts data to the correct format
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */
  convertData(context) {
    context.data.forEach(item => {
      item[context.linearColumn] = Number(item[context.linearColumn]);
    });
    return context;
  },

  /**
  @private
  @function updateTranslation
  @description Updates the donut's position
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */
  updateTranslation(context) {
    context.svg.attr('transform', 'translate(' + context.getWidth / 2 + ',' + context.getHeight / 2 + ')');
    return context;
  },

  /**
  @private
  @function buildChartComponents
  @description Builds the actual chart components with data, including the tooltips
  @returns {Object} context Chart object
   */
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
        });
    context.svg.selectAll('.arc').append('text')
            .attr('transform', (d) => { return 'translate(' + context.arc.centroid(d) + ')'; })
            .attr('dx', '.35em')
            .style('opacity', 0)
            .text((d) => { return d.data[context.ordinalColumn]; })
            .transition().duration(200)
            .style('opacity', 1);


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

  /**
  @private
  @function updateChartComponents
  @description Updates the donut slices on chart
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */
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

  /**
  @private
  @function updateTitle
  @description Updates the title on the chart
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */
  updateTitle(context) {
    context.svg.append('text')
    .attr('class', 'title')
    .attr('text-anchor', 'middle')
    .text(context.getTitle);
    return this;
  },

};

export default DonutChart;
