import { BarChart } from '../subModules/BarChart';
import { LineChart } from '../subModules/LineChart';
import { DonutChart } from '../subModules/DonutChart';

/**
This holds all our chart types within main library.
A subclass exists for each chart type.
@private
*/

const charts = {
  BarChart,
  LineChart,
  DonutChart,
};

export default charts;
