import { BarChart } from '../subModules/BarChart';
import { LineChart } from '../subModules/LineChart';
import { DonutChart } from '../subModules/DonutChart';
import { ScatterChart } from '../subModules/ScatterChart';

/**
This holds all our chart types within main library.
A subclass exists for each chart type.
@private
*/

const charts = {
  BarChart,
  LineChart,
  DonutChart,
  ScatterChart,
};

export default charts;
