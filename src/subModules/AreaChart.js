import { ChartMain } from '../core/ChartMain';
import Internal from '../internal-charts/internal';
import InternalArea from '../internal-charts/internalArea';

export class AreaChart extends ChartMain {
  constructor() {
    super();
    this.dateFormat = '';
  }

  /*
  @private
  @function build
  @description Build up all the components for the chart
  @returns {Object} this (chart instance)
  */

  build() {
    /*
    Calls each of the methods on Internal and InternalArea object necessary to build up all the components of the chart. Internal holds all the methods that do d3 manipulation to create and update various parts of the chart
    */

    Internal.selectElement(this);
    Internal.getParentDimensions(this);
    Internal.getChartDimensions(this);
    Internal.createSVGElement(this);
    Internal.createToolTip(this);
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
    InternalArea.buildChartComponents(this);
    InternalArea.styleChart(this);

    return this;
  }

  /*
  @private
  @function updateChartComponents
  @description Updates the area components on the chart
  @returns {Object} this (chart instance)
  */

  updateChartComponents() {
    InternalArea.updateChartComponents(this);

    return this;
  }

  /*
  @private
  @function updateHeight
  @description Updates the chart's height on the element
  @returns {Object} this (chart instance)
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

  /*
  @private
  @function updateWidth
  @description Updates the chart's width on the element
  @returns {Object} this (chart instance)
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

  /*
  @private
  @function updateMargins
  @description Updates the chart's margin on the element
  @@returns {Object} this (chart instance)
  */

  updateMargins() {
    this.updateWidth();
    this.updateHeight();
    return this;
  }

  /*
  @function updateColors
  @description Update color of area in chart
  @returns {Object} this (chart instance)
  */

  updateColors() {
    InternalArea.updateColors(this);
    return this;
  }

}
