/*
This is required for d3 to load.
*/
/*  global d3  */

import utils from '../utils/utils';

const internalArea = {
  // Builds the actual chart components with data, including the tooltips
  /*
  @private
  @function buildChartComponents
  @description Builds the actual chart components with data, including the tooltips
  @returns {Object} context Chart object
   */

  buildChartComponents(context) {
    const tooltip = context.tooltip;

    const d0 = context.area(context.data.map(() => { return { [context.xColumnName]: context.xScale.domain()[0], [context.yColumnName]: context.yScale.domain()[0] }; }));
    const d1 = context.area(context.data);

    const transition = (path) => {
      path.transition()
          .duration(1000)
          .attrTween('d', internalArea.pathTween(d1, 1));
    };

    context.svg.append('path')
            .datum(context.data)
            .attr('class', 'area')
            .style({
              fill: context.getColors[0],
              stroke: context.getColors[0],
              'stroke-width': 'crispEdges',
            })
            .attr('d', d0)
            .transition()
            .call(transition, d0, d1);

    const area = d3.select('.area');

    area.on('mousemove', () => {
      tooltip.show();

      tooltip.setContent(`${context.xColumnName}: ${context.xScale.invert(d3.event.pageX - context.getMargins.left - context.getMargins.right).toLocaleString()}\
      ${context.yColumnName}: ${context.yScale.invert(d3.event.pageY - context.getMargins.top - context.getMargins.bottom).toFixed(3)}`);
    });

    area.on('mouseout', () => {
      tooltip.hide();
    });

    return context;
  },

  // Does the path tweening for the area chart transitions
  /*
  @private
  @function pathTween
  @description Does the path tweening for the area chart transitions
  @param {String} d1 the path to be transitioned to
  @param {Number} precision the precision needed for the graph
  @returns {Function} function
   */

  pathTween(d1, precision) {
    return function worker() {
      const path0 = this;
      const path1 = path0.cloneNode();
      const n0 = path0.getTotalLength();
      const n1 = (path1.setAttribute('d', d1), path1).getTotalLength();

      // Uniform sampling of distance based on specified precision.
      const distances = [0];
      let i = 0;
      const dt = precision / Math.max(n0, n1);

      while (i < 1) {
        distances.push(i);
        i += dt;
      }
      distances.push(1);

      // Compute point-interpolators at each distance.
      const points = distances.map((t) => {
        const p0 = path0.getPointAtLength(t * n0);
        const p1 = path1.getPointAtLength(t * n1);
        return d3.interpolate([p0.x, p0.y], [p1.x, p1.y]);
      });

      return (t) => {
        return t < 1 ? 'M' + points.map((p) => { return p(t); }).join('L') : d1;
      };
    };
  },

  // Updates the data area on chart
  /*
  @private
  @function updateChartComponents
  @description Updates the data area on chart
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  updateChartComponents(context) {
    context.svg.select('.area')
            .datum(context.data)
            .attr('d', context.area);

    return context;
  },

  // Sets the columnNames for the graph
  /*
  @private
  @function setColumnNames
  @description Sets the columnNames for the graph
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  setColumnNames(context) {
    context.xColumnName = utils.getFirstTimeColumn(context.data);
    context.yColumnName = utils.getFirstLinearColumn(context.data);
    return this;
  },

  // Sets the x scale
  /*
  @private
  @function setXScale
  @description Sets the x scale
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  setXScale(context) {
    context.setxAxisLabel = context.xColumnName;
    context.xScale = d3.time.scale()
                    .range([0, context.getChartWidth])
                    .domain(d3.extent(context.data, (d) => { return d[context.xColumnName]; }));

    return context;
  },

  // Sets the y scale
  /*
  @private
  @function setYScale
  @description Sets the y scale
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  setYScale(context) {
    context.setyAxisLabel = context.yColumnName;
    context.yScale = d3.scale.linear()
                    .range([context.getChartHeight, 0])
                    .domain([0, d3.max(context.data, (d) => { return d[context.yColumnName]; })]);

    return context;
  },

  // Update chart area colors
  /*
  @private
  @function updateColors
  @description Update chart colors
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  updateColors(context) {
    context.element.select('svg')
        .select('.area')
        .style({
          fill: context.getColors[0],
          stroke: context.getColors[0],
          'stroke-width': 'crispEdges',
        });

    return context;
  },

  // Create the area drawing function
  /*
  @private
  @function buildArea
  @description Create the area drawing function
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  buildArea(context) {
    context.area = d3.svg.area()
        .x((d) => { return context.xScale(d[context.getxAxisLabel]); })
        .y0(context.getChartHeight)
        .y1((d) => { return context.yScale(d[context.getyAxisLabel]); });

    return context;
  },

  // Adds the y axis to the chart
  /*
  @private
  @function buildYAxis
  @description Adds the y axis to the chart
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  buildYAxis(context) {
    context.svg.append('g')
             .attr('class', 'y axis')
             .call(context.yAxis)
             .append('text')
             .attr('transform', 'rotate(-90)')
             .attr('y', 6)
             .attr('dy', '.71em')
             .style('text-anchor', 'end')
             .text(context.getyAxisLabel);

    return context;
  },

  // Convert chart data
 /*
  @private
  @function convertData
  @description Convert chart data
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  convertData(context) {
    context.data = utils.parseTimeData(context.data, context.xColumnName, context.dateFormat);
    context.data = utils.parseNumberData(context.data, context.yColumnName);
    return context;
  },

  // Updates the style on the chart
 /*
  @private
  @function styleChart
  @description Updates the style on the chart
  @param {Object} context Chart object
  @returns {Object} context Chart object
  */

  styleChart(context) {
    context.element.select('svg')
        .style('font-family', context.getFontStyle)
        .attr('font-size', context.getFontSize)
        .append('text')
        .attr('class', 'title')
        .attr('x', context.getChartWidth * 0.5)
        .attr('y', 20)
        .text(context.getTitle);
  },

};

export default internalArea;
