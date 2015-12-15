/*  global d3  */
import { ChartMain } from '../core/ChartMain';
import Internal from './internal';
import InternalDonut from './internalDonutChart';

export class DonutChart extends ChartMain {
  constructor() {
    super();
  }

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

  updateColors() {
    InternalDonut.updateColors(this);
    InternalDonut.updateChartComponents(this);
    return this;
  }

  updateMargins() {
    this.updateHeight();
    this.updateWidth();
    return this;
  }

  updateWidth() {
    Internal.updateSVGElement(this);
    InternalDonut.updateTranslation(this);
    InternalDonut.updateRadius(this);
    InternalDonut.updateArc(this);
    InternalDonut.updatePie(this);
    InternalDonut.updateChartComponents(this);
    return this;
  }

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
