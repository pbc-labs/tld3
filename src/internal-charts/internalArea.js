import utils from '../utils/utils';
/*  global d3  */
const internalArea = {

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
      tooltip.transition()
       .duration(200)
       .style('display', 'block')
       .style('opacity', 0.9);

      tooltip
       .html(() => {
         return `${context.xColumnName}: ${context.xScale.invert(d3.event.pageX - context.getMargins.left - context.getMargins.right).toLocaleString()}\
        ${context.yColumnName}: ${context.yScale.invert(d3.event.pageY - context.getMargins.top - context.getMargins.bottom).toFixed(3)}`;
       })
       .style('left', (d3.event.pageX + 'px'))
       .style('top', (d3.event.pageY + 'px'));
    });

    area.on('mouseout', () => {
      tooltip.transition()
      .style('opacity', 0)
      .style('display', 'none');
    });

    return context;
  },

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

  updateChartComponents(context) {
    context.svg.select('.area')
            .datum(context.data)
            .attr('d', context.area);

    return context;
  },

  setColumnNames(context) {
    context.xColumnName = utils.getFirstTimeColumn(context.data);
    context.yColumnName = utils.getFirstLinearColumn(context.data);
    return this;
  },

  setXScale(context) {
    context.setxAxisLabel = context.xColumnName;
    context.xScale = d3.time.scale()
                    .range([0, context.getWidth])
                    .domain(d3.extent(context.data, (d) => { return d[context.xColumnName]; }));

    return context;
  },

  setYScale(context) {
    context.setyAxisLabel = context.yColumnName;
    context.yScale = d3.scale.linear()
                    .range([context.getHeight, 0])
                    .domain([0, d3.max(context.data, (d) => { return d[context.yColumnName]; })]);

    return context;
  },

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

  buildArea(context) {
    context.area = d3.svg.area()
        .x((d) => { return context.xScale(d[context.getxAxisLabel]); })
        .y0(context.getHeight)
        .y1((d) => { return context.yScale(d[context.getyAxisLabel]); });

    return context;
  },

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

  convertData(context) {
    context.data = utils.parseTimeData(context.data, context.xColumnName);
    context.data = utils.parseNumberData(context.data, context.yColumnName);
    return context;
  },

  styleChart(context) {
    context.element.select('svg')
        .style('font-family', context.getFontStyle)
        .attr('font-size', context.getFontSize)
        .append('text')
        .attr('class', 'title')
        .attr('x', context.getWidth * 0.5)
        .attr('y', 20)
        .text(context.getTitle);
  },

};

export default internalArea;
