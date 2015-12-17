import { ChartMain } from '../core/ChartMain';
import Internal from './internal';
import InternalLine from '../internal-charts/internalLine';

/**
Constructor subclass for Line Chart.
*/
export class LineChart extends ChartMain {
  constructor() {
    super();
  }

  /**
  @private
  @function build
  @description Builds up the bar chart
  @returns {Object} context Chart object
  */

  build() {
    /*
    Calls each of the methods on Internal and InternalLine object necessary to build up all the components of the chart. Internal and InternalLine hold all the methods that do d3 manipulation to create and update various parts of the chart
    */
    Internal.selectElement(this);
    InternalLine.setColumnNames(this);
    InternalLine.convertData(this);
    InternalLine.setXScale(this);
    InternalLine.setYScale(this);
    Internal.createSVGElement(this);
    Internal.createxAxis(this);
    Internal.buildXAxis(this);
    Internal.createyAxis(this);
    InternalLine.buildYAxis(this);
    InternalLine.buildLine(this);
    Internal.setAxisStyle(this, 'path', 'none', '#000', 'crispEdges');
    Internal.setAxisStyle(this, 'line', 'none', '#000', 'crispEdges');
    InternalLine.buildChartComponents(this);
    InternalLine.styleChart(this);

    return this;
  }

  /**
  @private
  @function render
  */

  render() {
    // used for data updates?
    // need to think about how we are "rendering" upon instantiation and upon update
    // I think this render needs to be a customized update function depending on what attribute is being updated
  }

  /**
  @private
  @function updateChartComponents
  @description Calls InternalLine to update the line on chart
  @returns {Object} this Chart object
  */

  updateChartComponents() {
    /* Calls method on InternalLine to recreate all the chart components. Used to reflect any changes made to property values (e.g. font-size, axis-label, etc.)
    */
    InternalLine.updateChartComponents(this);

    return this;
  }

  /**
  @private
  @function updateHeight
  @description Updates the chart's height on the element itself
  @returns {Object} context Chart object
  */

  updateHeight() {
    /*
    Calls each of the methods on Internal and InternalLine object necessary to update the height of the chart. Internal and Internal Line hold all the methods that do d3 manipulation to create and update various parts of the chart
    */
    Internal.updateSVGElement(this);
    Internal.setYscale(this, 'linear', 'number');
    Internal.updateYAxisScale(this);
    Internal.updateYAxis(this);
    Internal.updateXAxisPosition(this);
    InternalLine.buildLine(this);

    return this;
  }

  /**
  @private
  @function updateMargins
  @description Updates the chart's margin on the element itself
  @returns {Object} context Chart object
  */

  updateMargins() {
    /*
    Calls updateHeight and updateWidth on this instance to reflect the new margins.
    */
    this.updateHeight();
    this.updateWidth();

    return this;
  }

  /**
  @private
  @function updateWidth
  @description Updates the chart's width on the element itself
  @returns {Object} context Chart object
  */

  updateWidth() {
    /*
    Calls each of the methods on Internal and InternalLine object necessary to update the width of the chart. Internal and InternalLine hold all the methods that do d3 manipulation to create and update various parts of the chart
    */
    Internal.updateSVGElement(this);
    InternalLine.setXScale(this);
    Internal.updateXAxisScale(this);
    Internal.updateXAxis(this);
    InternalLine.buildLine(this);

    return this;
  }


  /**
  @private
  @function updateColors
  @description Calls InternalLine to update color of line chart after initial render
  @param {Array} colors Array of colors to update the chart to
  @returns {Object} context Chart object
  */

  updateColors(colors) {
    /*
    Calls InternalLine object to update the colors on the line chart. InternalLine does the d3 manipulation
    */
    InternalLine.updateColors(colors, this);

    return this;
  }

}
