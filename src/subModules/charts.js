import { BarChart } from '../subModules/BarChart';
import { LineChart } from '../subModules/LineChart';
import { DonutChart } from '../subModules/DonutChart';
<<<<<<< HEAD
import { ScatterChart } from '../subModules/ScatterChart';
=======
import { BarChartLeft } from '../subModules/BarChartLeft';
>>>>>>> Complete left bar chart class. Complete unit tests for left bar chart class

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
  BarChartLeft,
};

export default charts;
