import { ChartMain } from '../core/ChartMain';
import Internal from './internal';
import InternalBar from './internalBar';

/**
@private
Constructor subclass for Bar Chart.
*/
export class BarChart extends ChartMain {
  constructor() {
    super();
  }

  build() {
    Internal.selectElement(this);
    Internal.setXscale(this, 'ordinal', 'string');
    Internal.setYscale(this, 'linear', 'number');
    Internal.createSVGElement(this);
    Internal.createxAxis(this);
    Internal.buildXAxis(this);
    Internal.createyAxis(this);
    Internal.buildYAxis(this);
    Internal.setAxisStyle(this, 'path', 'none', '#000', 'crispEdges');
    Internal.setAxisStyle(this, 'line', 'none', '#000', 'crispEdges');
    InternalBar.buildChartComponents(this);
    InternalBar.styleChart(this);
  }

  render() {
    // used for data updates?
    // need to think about how we are "rendering" upon instantiation and upon update
    // I think this render needs to be a customized update function depending on what attribute is being updated
  }

  /**
  @private
  @function Calls InternalBar to updates the bar on chart
  @param {Object} context
    @description Chart object
  @returns {Object} this
    @description Chart object
  */

  updateChartComponents() {
    InternalBar.updateChartComponents(this);
  }

  /**
  @private
  @function Updates the chart's height on the element itself
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  updateHeight() {
    Internal.updateSVGElement(this);
    Internal.setYscale(this, 'linear', 'number');
    Internal.updateYAxisScale(this);
    Internal.updateYAxis(this);
    Internal.updateXAxisPosition(this);
    return this;
  }

  /**
  @private
  @function Updates the chart's margin on the element itself
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  updateMargins() {
    this.updateHeight();
    this.updateWidth();
    return this;
  }

  /**
  @private
  @function Updates the chart's width on the element itself
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  updateWidth() {
    Internal.updateSVGElement(this);
    Internal.setXscale(this, 'ordinal', 'string');
    Internal.updateXAxisScale(this);
    Internal.updateXAxis(this);

    return this;
  }

  /**
  @function Calls InternalBar to update color of bar chart after initial render
  @param {Array} colors
    @description Array of colors to update the chart to
  */
  updateColors(colors) {
    InternalBar.updateColors(colors, this);
  }

}
