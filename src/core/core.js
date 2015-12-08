//     D3fault.js 1.0.0
//     http://d3faultjs.org
//     (c) 2015 Preethi Kasireddy, Banun Atina Idris and Colin Seale
//     D3fault may be freely distributed under the MIT license.

/**
This is required for d3 to load.
*/
/* global d3 */

/**
Import all necessary submodules into the core module
*/
import D3fault from './d3fault';
import charts from '../subModules/charts';
import Height from '../subModules/height';
import Width from '../subModules/width';
import Margin from '../subModules/margin';
import Internal from '../subModules/internal';
import ChartMain from './ChartMain';
import BarChart from '../subModules/BarChart';
import data from '../subModules/data';
import utils from '../utils/utils';

d3fault.make('BarChart')
        .using(data)
        .in('#yo');
