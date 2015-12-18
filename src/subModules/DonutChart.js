/*  global d3  */
import { ChartMain } from '../core/ChartMain';
import Internal from './internal';
import InternalDonut from '../internal-charts/internalDonutChart';

export class DonutChart extends ChartMain {
  constructor() {
    super();
  }

  /**
  @private
  @function build
  @description Builds up the Donut chart
  @returns {Object} context Chart object
  */
  build() {
    Internal.selectElement(this);
    Internal.createSVGElement(this);
    InternalDonut.updateStyle(this);
    InternalDonut.updateTranslation(this);
    InternalDonut.updateOrdinalColunm(this);
    InternalDonut.updateLinearColunm(this);
    InternalDonut.convertData(this);
    InternalDonut.updateRadius(this);
    InternalDonut.updateColors(this);
    InternalDonut.updateArc(this);
    InternalDonut.updatePie(this);
    InternalDonut.buildChartComponents(this);
    InternalDonut.updateTitle(this);
    return this;
  }

  /**
  @private
  @function updateChartComponents
  @description Calls InternalDonut to update the Donut on chart
  @returns {Object} this Chart object
  */
  updateChartComponents() {
    /* Calls method on InternalDonut to recreate all the chart components. Used to reflect any changes made to property values (e.g. font-size, axis-label, etc.)
    */
    InternalDonut.updateChartComponents(this);

    return this;
  }

  /**
  @private
  @function updateColors
  @description Calls InternalDonut to update color of Donut chart after initial render
  @param {Array} colors Array of colors to update the chart to
  @returns {Object} context Chart object
  */
  updateColors() {
    InternalDonut.updateColors(this);
    InternalDonut.updateChartComponents(this);
    return this;
  }

  /**
  @private
  @function updateMargins
  @description Updates the chart's margin on the element itself
  @returns {Object} context Chart object
  */
  updateMargins() {
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
    Internal.updateSVGElement(this);
    InternalDonut.updateTranslation(this);
    InternalDonut.updateRadius(this);
    InternalDonut.updateArc(this);
    InternalDonut.updatePie(this);
    InternalDonut.updateChartComponents(this);
    return this;
  }

  /**
  @private
  @function updateHeight
  @description Updates the chart's height on the element itself
  @returns {Object} context Chart object
  */
  updateHeight() {
    Internal.updateSVGElement(this);
    InternalDonut.updateTranslation(this);
    InternalDonut.updateRadius(this);
    InternalDonut.updateArc(this);
    InternalDonut.updatePie(this);
    InternalDonut.updateChartComponents(this);
    return this;
  }

}
