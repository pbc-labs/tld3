/*
This is required for d3 to load.
*/
/* global d3 */

import utils from '../utils/utils';

const Internal = {
  /*
  @private
  @function selectElement
  @description Creates a d3 element and assigns it to our internal 'element' property
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  selectElement(context) {
    /* Use d3 to select the DOM element where the chart will be drawn. Set the element to our chart's 'element' property
    */
    context.element = d3.select(context.location);

    return context;
  },

  /*
  @private
  @function createSVGElement
  @description Creates the main SVG element
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  createSVGElement(context) {
    /* Appends the SVG to our chart element. Sets the width and height of the SVG.
    */
    context.svg = context.element
                          .append('svg')
                          .attr('width', context.getWidth + context.getMargins.left + context.getMargins.right)
                          .attr('height', context.getHeight + context.getMargins.top + context.getMargins.bottom)
                          .append('g')
                          .attr('transform', 'translate(' + context.getMargins.left + ',' + context.getMargins.top + ')');

    return context;
  },

  /*
  @private
  @function updateSVGElement
  @description Updates the main SVG element
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  updateSVGElement(context) {
    /* Select current SVG element and tpdates the width and height of the SVG.
    */
    context.element.select('svg')
           .attr('width', context.getWidth + context.getMargins.left + context.getMargins.right)
           .attr('height', context.getHeight + context.getMargins.top + context.getMargins.bottom)
           .append('g')
           .attr('transform', 'translate(' + context.getMargins.left + ',' + context.getMargins.top + ')');

    return context;
  },

  /*
  @private
  @function createxAxis
  @description Creates d3 x-axis
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  createxAxis(context) {
    /*
    Builds x-axis using the appropriate scale and orientation.
    */
    context.xAxis = d3.svg.axis()
                      .scale(context.xScale)
                      .orient(context.getxAxisOrientation)
                      .ticks(6);
    return context;
  },

  /*
  @private
  @function createyAxis
  @description Creates d3 y-axis
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  createyAxis(context) {
    /*
    Builds y-axis using the appropriate scale and orientation.
    */
    context.yAxis = d3.svg.axis()
                      .scale(context.yScale)
                      .orient(context.getyAxisOrientation);

    return context;
  },

  /*
  @private
  @function updateYAxisScale
  @description Updates the up the y-axis scale
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  updateYAxisScale(context) {
    /*
    Updates y-axis using the new scale. Used when user
    updates some chart property that requires recreation
    of Axis
    */
    context.yAxis = d3.svg.axis()
                      .scale(context.yScale)
                      .orient(context.getyAxisOrientation);

    return context;
  },

  /*
  @private
  @function updateXAxisScale
  @description Updates the up the x-axis scale
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  updateXAxisScale(context) {
    /*
    Updates x-axis using the new scale. Used when user
    updates some chart property that requires recreation
    of Axis
    */
    context.xAxis = d3.svg.axis()
                      .scale(context.xScale)
                      .orient(context.getxAxisOrientation);

    return context;
  },

  /*
  @private
  @function buildXAxis
  @description Builds up the x-axis
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  buildXAxis(context) {
    /*
    Builds up the x-axis. Sets the class property, transforms the height to the bottom of graph, and appends an axis label
    */
    context.svg.append('g')
               .attr('class', 'x axis')
               .attr('transform', 'translate(0, ' + context.getHeight + ')')
               .call(context.xAxis)
               .append('text')
               .attr('class', 'x-axis-label')
               .attr('x', context.getWidth * 0.5)
               .attr('y', 35)
               .style('text-anchor', 'middle')
               .text(context.getxAxisLabel);

    return context;
  },

  /*
  @private
  @function updateXAxisPosition
  @description Translates the x-axis
  @param {Object} context (chart instance)
  @returns {Object} contextsetXscale (chart instance)
  */

  updateXAxisPosition(context) {
    context.element
           .select('svg')
           .select('g .x.axis')
           .attr('transform', 'translate(0, ' + context.getHeight + ')');

    return context;
  },

  /*
  @private
  @function buildYAxis
  @description Builds up the y-axis and adds the label
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */
  buildYAxis(context) {
    /*
    Builds up the y-axis. Sets the class property, rotates the position to be to left of graph, and appends an axis label
    */
    context.svg.append('g')
           .attr('class', 'y axis')
           .call(context.yAxis)
           .append('text')
           .attr('class', 'y-axis-label')
           .attr('transform', 'rotate(-90)')
           .attr('y', -45)
           .attr('x', -context.getHeight * 0.5 + context.getMargins.top)
           .style('text-anchor', 'end')
           .text(context.getyAxisLabel);
    return context;
  },

  /*
  @private
  @function Updates the up the y-axis
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  updateYAxis(context) {
    /*
    Updates the y-axis on chart by rebuilding it. Used when properties on a chart are changed that requires axis rebuild.
    */
    context.element
           .select('svg')
           .selectAll('g .y.axis')
           .call(context.yAxis);

    context.element.select('.y-axis-label')
           .attr('class', 'y-axis-label')
           .attr('transform', 'rotate(-90)')
           .attr('y', -45)
           .attr('x', -context.getHeight * 0.5 + context.getMargins.top)
           .style('text-anchor', 'end')
           .text(context.getyAxisLabel);

    return context;
  },

  /*
  @private
  @function updateXAxis
  @description Updates the up the x-axis scale
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  updateXAxis(context) {
    /*
    Updated the x-axis on chart by rebuilding it. Used when properties on a chart are changed that requires axis rebuild.
    */
    context.element
           .select('svg')
           .selectAll('g .x.axis')
           .call(context.xAxis);
    context.element.select('.x-axis-label')
           .attr('x', context.getWidth * 0.5)
           .attr('y', 35)
           .style('text-anchor', 'middle')
           .text(context.getxAxisLabel);

    return context;
  },


  /*
  @private
  @function updateFontSize
  @description Updates the chart's font size on the svg
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  updateFontSize(context) {
    context.element.select('svg')
           .attr('font-size', context.getFontSize);

    return context;
  },

  /*
  @private
  @function updateFontStyle
  @description Updates the chart's font style on the svg
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  updateFontStyle(context) {
    context.element.select('svg')
           .style('font-family', context.getFontStyle);

    return context;
  },

  /*
  @private
  @function updateTitle
  @description Updates the chart's title on the svg
  @param {Object} context (chart instance)
  @returns {Object} context (chart instance)
  */

  updateTitle(context) {
    context.element.select('.title')
            .text(context.getTitle);

    return context;
  },

  /*
  @private
  @function setXscale
  @description Sets the xScale for chart. Checks for the type of scale passed in, and builds the scale accordingly. Then depending on whether we are using the ordinal scale or linear scale, we map the data to the scale accordingly.
  @param {Object} context (chart instance)
  @param {String} type Type of scale (ordinal vs. linear)
  @param {String} dataDomain Type of data to map the scale to (String vs. Number)
  @returns {Object} context (chart instance)
  */

  setXscale(context, type, dataDomain) {
    /*
    If check for the type of axis and build accordingly.
    In addition, we use helper functions to get the column name and
    set it to be the axis label.
    */
    if (type === 'ordinal') {
      context.xColumnName = utils.getFirstOrdinalColumn(context.data);
      context.setxAxisLabel = context.xColumnName;
      context.xScale = d3.scale.ordinal()
                      .rangeRoundBands([0, context.getWidth], 0.1);
    } else if (type === 'linear') {
      context.xColumnName = utils.getFirstLinearColumn(context.data);
      context.setxAxisLabel = context.xColumnName;
      context.xScale = d3.scale.linear()
                      .range([context.getWidth, 0]);
    }

    /*
    We map the x-axis scale domain to the data. How the mapping is done various depending on whether we have string (ordinal) values or Number (linear) values
    */
    if (dataDomain === 'string') {
      context.xScale.domain(context.data.map(d => { return d[context.xColumnName]; }));
    } else if (dataDomain === 'number') {
      context.xScale.domain([0, d3.max(context.data, d => { return d[context.xColumnName]; })]);
    }

    return context;
  },

  /*
  @private
  @function setYscale
  @description Sets the yScale for chart. Checks for the type of scale passed in, and builds the scale accordingly. Then depending on whether we are using the ordinal scale or linear scale, we map the data to the scale accordingly.
  @param {Object} context (chart instance)
  @param {String} type Type of scale (ordinal vs. linear)
  @param {String} dataDomain Type of data to map the scale to (String vs. Number)
  @returns {Object} this (chart instance)
  */

  setYscale(context, type, dataDomain) {
    /*
    If check for the type of axis and build accordingly.
    In addition, we use helper functions to get the column name and set it to be the axis label.
    */
    if (type === 'ordinal') {
      context.yColumnName = utils.getFirstOrdinalColumn(context.data);
      context.setyAxisLabel = context.yColumnName;
      context.yScale = d3.scale.linear()
                      .range([context.getHeight, 0]);
    } else if (type === 'linear') {
      context.yColumnName = utils.getFirstLinearColumn(context.data);
      context.setyAxisLabel = context.yColumnName;
      context.yScale = d3.scale.linear()
                      .range([context.getHeight, 0]);
    }

    /*
    We map the y-axis scale domain to the data. How the mapping is done various depending on whether we have string (ordinal) values or Number (linear) values
    */
    if (dataDomain === 'string') {
      context.yScale.domain(context.data.map(d => { return d[context.yColumnName]; }));
    } else if (dataDomain === 'number') {
      context.yScale.domain([0, d3.max(context.data, d => { return d[context.yColumnName]; })]);
    }

    return context;
  },

  /*
  @private
  @function
  @description Sets style properties for chart axis
  @param {Object} context (chart instance)
  @param {String} part The part of the axis we are generating
  @param {String} fill Fill color of axis
  @param {String} stroke Stroke style of axis
  @param {String} shapeRerendering Style property to make the axis line thinner
  @returns {Object} this (chart instance)
  */

  setAxisStyle(context, part, fill, stroke, shapeRerendering) {
    context.svg.selectAll('.axis').selectAll(part)
           .style({
             fill: fill,
             stroke: stroke,
             'shape-rendering': shapeRerendering,
           });

    return context;
  },

  /*
  @private
  @function createToolTip
  @description Creates tooltips on chart
  @param {Object} context (chart instance)
  @returns {Object} this (chart instance)
  */

  createToolTip(context) {
    context.tooltip = d3.select('body')
                      .append('div')
                      .attr('class', 'tooltip')
                      .style({
                        'position': 'absolute',
                        'color': 'black',
                        'text-align': 'center',
                        'width': '120px',
                        'padding': '5px',
                        'font': '12px Arial',
                        'background': '#f2f2f2',
                        'border': '1px',
                        'opacity': '0',
                        'border-color': '#606060',
                        'border-style': 'solid',
                        'border-radius': '1px',
                        'cursor': 'pointer',
                      });
    // Turns on visibility of tooltip
    function show(time = 200) {
      this.transition()
          .duration(time)
          .style('opacity', 1);
    }

    // Turns off visibility of tooltip
    function hide(time = 200) {
      this.transition()
          .duration(time)
          .style('opacity', 0);
    }

    // Determines the location the tooltip should render
    // Sets the content of the tooltip
    function setContent(content = 'Tooltip') {
      this.html(() => {
        return content;
      })
      .style('left', (d3.event.pageX + 'px'))
      .style('top', (d3.event.pageY + 'px'));
    }

    context.tooltip.show = show;
    context.tooltip.hide = hide;
    context.tooltip.setContent = setContent;
    return context;
  },


  /*
  @private
  @function createLegend
  @description Creates legend on chart
  @param {Object} context (chart instance)
  @returns {Object} this (chart instance)
  */

  createLegend(context) {
    context.legend = context.svg.append('g')
      .attr('class', 'legend')
      .selectAll('.legend-data')
      .data(context.getColors.domain())
      .enter().append('g')
      .attr('class', 'legend-data')
      .attr('transform', (d, i) => { return 'translate(0,' + i * 20 + ')'; });

    context.legend.append('rect')
      .attr('x', context.getWidth - 18)
      .attr('width', 18)
      .attr('height', 18)
      // Setting colors
      .style('fill', context.getColors);
    // append the name of ordinal data
    context.legend.append('text')
      .attr('x', context.getWidth - 24)
      .attr('y', 12)
      .style('text-anchor', 'end')
      .text((d) => { return d; });

    return context;
  },


};

export default Internal;
