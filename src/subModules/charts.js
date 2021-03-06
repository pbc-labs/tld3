import { BarChart } from '../subModules/BarChart';
import { LineChart } from '../subModules/LineChart';
import { DonutChart } from '../subModules/DonutChart';
import { ScatterChart } from '../subModules/ScatterChart';
import { WaffleChart } from '../subModules/WaffleChart';
import { BarChartLeft } from '../subModules/BarChartLeft';
import { AreaChart } from '../subModules/AreaChart';

// This holds all our chart types within main library.
// A subclass exists for each chart type.
/*
@private
*/

const charts = {
  BarChart,
  LineChart,
  DonutChart,
  ScatterChart,
  WaffleChart,
  BarChartLeft,
  AreaChart,
};

export default charts;
