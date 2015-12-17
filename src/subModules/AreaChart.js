import { ChartMain } from '../core/ChartMain';
import Internal from './internal';
import InternalArea from '../internal-charts/internalArea';

export class AreaChart extends ChartMain {
  constructor() {
    super();
  }

  build() {
    Internal.selectElement(this);
    Internal.createSVGElement(this);
    InternalArea.setColumnNames(this);
    InternalArea.convertData(this);
    InternalArea.setXScale(this);
    InternalArea.setYScale(this);
    Internal.createxAxis(this);
    Internal.buildXAxis(this);
    Internal.createyAxis(this);
    InternalArea.buildYAxis(this);
    InternalArea.buildArea(this);
    Internal.setAxisStyle(this, 'path', 'none', '#000', 'crispEdges');
    Internal.setAxisStyle(this, 'line', 'none', '#000', 'crispEdges');
    InternalArea.updateColors(this);
    Internal.createToolTip(this);
    InternalArea.buildChartComponents(this);
    InternalArea.styleChart(this);

    return this;
  }

  /**
  @private
  @function Updates the area on the chart
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  updateChartComponents() {
    InternalArea.updateChartComponents(this);

    return this;
  }

  /**
  @private
  @function Updates the chart's height on the element
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  updateHeight() {
    Internal.updateSVGElement(this);
    InternalArea.setYScale(this);
    Internal.createyAxis(this);
    InternalArea.buildYAxis(this);
    Internal.updateXAxisPosition(this);
    InternalArea.buildArea(this);
    InternalArea.updateChartComponents(this);

    return this;
  }

  /**
  @private
  @function Updates the chart's width on the element
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  updateWidth() {
    Internal.updateSVGElement(this);
    InternalArea.setXScale(this);
    Internal.createxAxis(this);
    Internal.buildXAxis(this);
    InternalArea.buildArea(this);
    InternalArea.updateChartComponents(this);
    return this;
  }

  /**
  @private
  @function Updates the chart's margin on the element
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  updateMargins() {
    this.updateWidth();
    this.updateHeight();
    return this;
  }

  /**
  @function Update color of line on chart
  @param {Array} colors
    @description Array of colors to update the chart to
  */

  updateColors() {
    InternalArea.updateColors(this);
    return this;
  }

}
