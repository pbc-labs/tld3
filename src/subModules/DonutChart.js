/*
This is required for d3 to load.
*/
/*  global d3  */

import { ChartMain } from '../core/ChartMain';
import Internal from '../internalCharts/internal';
import InternalDonut from '../internalCharts/internalDonutChart';

export class DonutChart extends ChartMain {
  constructor() {
    super();
  }

  /*
  @private
  @function build
  @description Builds up the Donut chart
  @returns {Object} this (chart instance)
  */
  build() {
    /*
    Calls each of the methods on Internal and InternalDonut object necessary to build up all the components of the chart. Internal holds all the methods that do d3 manipulation to create and update various parts of the chart
    */
    Internal.selectElement(this);
    Internal.getParentDimensions(this);
    Internal.getChartDimensions(this);
    Internal.createSVGElement(this);
    Internal.createToolTip(this);
    InternalDonut.updateStyle(this);
    InternalDonut.updateOrdinalColumn(this);
    Internal.convertColorsToScale(this, this.data.map(d => { return d[this.ordinalColumn]; }));
    InternalDonut.updateLinearColumn(this);
    InternalDonut.convertData(this);
    InternalDonut.updateRadius(this);
    InternalDonut.updateArc(this);
    InternalDonut.updatePie(this);
    InternalDonut.buildChartComponents(this);
    InternalDonut.updateTitle(this);

    return this;
  }

  /*
  @private
  @function updateChartComponents
  @description Calls InternalDonut to update the Donut on chart
  @returns {Object} this (chart instance)
  */
  updateChartComponents() {
    /* Calls method on InternalDonut to recreate all the chart components. Used to reflect any changes made to property values (e.g. font-size, axis-label, etc.)
    */
    InternalDonut.updateChartComponents(this);

    return this;
  }

  /*
  @private
  @function updateColors
  @description Calls InternalDonut to update color of Donut chart after initial render
  @returns {Object} this Chart object
  */
  updateColors() {
    InternalDonut.updateChartComponents(this);
    return this;
  }

  /*
  @private
  @function updateMargins
  @description Updates the chart's margin on the element itself
  @returns {Object} this Chart object
  */

  updateMargins() {
    this.updateHeight();
    this.updateWidth();

    return this;
  }

  /*
  @private
  @function updateWidth
  @description Updates the chart's width on the element itself
  @returns {Object} this Chart object
  */
  updateWidth() {
    Internal.updateSVGElement(this);
    InternalDonut.updateRadius(this);
    InternalDonut.updateArc(this);
    InternalDonut.updatePie(this);
    InternalDonut.updateChartComponents(this);

    return this;
  }

  /*
  @private
  @function updateHeight
  @description Updates the chart's height on the element itself
  @returns {Object} this Chart object
  */
  updateHeight() {
    Internal.updateSVGElement(this);
    InternalDonut.updateRadius(this);
    InternalDonut.updateArc(this);
    InternalDonut.updatePie(this);
    InternalDonut.updateChartComponents(this);

    return this;
  }

  /*
  @private
  @function setColors
  @description Overrides the default ChartMain setColors setter - maps to an ordinal scale
  @param {Array} colors Array of colors to update the chart to
  */

  set setColors(newColors) {
    this._colors = newColors;
    Internal.convertColorsToScale(this, this.data.map(d => { return d[this.ordinalColumn]; }));
    return this;
  }

}
