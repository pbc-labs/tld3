/*
This is required for d3 to load.
*/
/*  global d3  */

import utils from '../utils/utils';

const DonutChart = {

  /*
  @private
  @function updateStyle
  @description Updates the chart style
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  updateStyle(context) {
    context.svg.style({
      font: 'sans-serif',
      'font-size': '11px',
      'text-anchor': 'middle',
    });
    return context;
  },

  /*
  @private
  @function updateRadius
  @description Updates the radius
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  updateRadius(context) {
    context.radius = Math.min(context.getHeight, context.getWidth) / 2;
    return context;
  },

  /*
  @private
  @function updateColors
  @description Updates the donut slice colors
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  updateColors(context) {
    context.colorScale = d3.scale.ordinal()
    .range(context.getColors);
    return context;
  },

  /*
  @private
  @function updateArc
  @description Updates the arc slices with a new scale
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  updateArc(context) {
    context.arc = d3.svg.arc()
               .outerRadius(context.radius - 80)
               .innerRadius(context.radius - 10);
    return context;
  },

  /*
  @private
  @function updatePie
  @description Updates the pie slices with a new scale
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  updatePie(context) {
    context.pie = d3.layout.pie()
      .sort(null)
      .value(d => { return d[context.linearColumn]; });
    return context;
  },

  /*
  @private
  @function updateLinearColunm
  @description Update the linear name for ordinal data
  @param {Object} context (chart instance)
  @param {String} columnName The new column name
  @returns {Object} context (chart instance)
  */

  updateLinearColumn(context, columnName) {
    context.linearColumn = columnName || utils.getFirstLinearColumn(context.data);
    return context;
  },

  /*
  @private
  @function updateOrdinalColunm
  @description Update the colunm name for ordinal data
  @param {Object} context (chart instance)
  @param {String} columnName the new column name
  @returns {Object} context Char(chart instance)
  */

  updateOrdinalColumn(context, columnName) {
    context.ordinalColumn = columnName || utils.getFirstOrdinalColumn(context.data);
    return context;
  },

  /*
  @private
  @function convertData
  @description Coverts the charts data to the correct format
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  convertData(context) {
    context.data.forEach(item => {
      item[context.linearColumn] = Number(item[context.linearColumn]);
    });
    return context;
  },

  /*
  @private
  @function updateTranslation
  @description Updates the donut's position
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  updateTranslation(context) {
    context.svg.attr('transform', 'translate(' + context.getWidth / 2 + ',' + context.getHeight / 2 + ')');
    return context;
  },

  /*
  @private
  @function buildChartComponents
  @description Builds the actual chart components with data, including the tooltips
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
   */

  buildChartComponents(context) {
    const tooltip = context.tooltip;

    const g = context.svg.selectAll('.arc')
        .data(context.pie(context.data))
        .enter().append('g')
        .attr('class', (d, i) => { return `arc data-id-${i}`; });

    g.append('path')
        .style('stroke', '#fff')
        .style('stroke-width', '3px')
        .style('fill', d => { return context.colorScale(d.data[context.ordinalColumn]); })
        .transition()
        .attrTween('d', d => {
          const i = d3.interpolate(d.startAngle, d.endAngle);
          return (t) => {
            d.endAngle = i(t);
            return context.arc(d);
          };
        });

    context.svg.selectAll('.arc').append('text')
            .attr('transform', (d) => { return 'translate(' + context.arc.centroid(d) + ')'; })
            .attr('dx', '.35em')
            .style('text-anchor', 'middle')
            .style('font-family', 'sans-serif')
            .style('fill', '#fff')
            .style('opacity', 0)
            .text((d) => { return d.data[context.ordinalColumn]; })
            .transition().duration(200)
            .style('opacity', 1);


    g.on('mouseover', (d, i) => {
// select all unfocused arcs and lowers opacity
      d3.selectAll('.arc').transition()
        .duration(200)
        .style('opacity', 0.6);

      d3.select(`.data-id-${i}`).transition()
        .duration(200)
        .style('opacity', 1);

      tooltip.show();
      tooltip.setContent(`${context.ordinalColumn}: ${d.data[context.ordinalColumn]}\
       ${context.linearColumn}: ${d.data[context.linearColumn]}`);
    });

    g.on('mouseout', () => {
      tooltip.hide();
      d3.selectAll('.arc').transition()
        .duration(200)
        .style('opacity', 1);
    });

    return context;
  },

  /*
  @private
  @function updateChartComponents
  @description Updates the donut slices on chart
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
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

  /*
  @private
  @function updateTitle
  @description Updates the title on the chart
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  updateTitle(context) {
    context.svg.append('text')
    .attr('class', 'title')
    .attr('font-size', context.getFontSize)
    .attr('text-anchor', 'middle')
    .text(context.getTitle);
    return this;
  },

};

export default DonutChart;
