/**
This defines our main library object.
@private
*/

import charts from '../subModules/charts';

const D3fault = {
  version: '1.0.0',
  make(chartType) {
    return new charts[chartType]();
  },
};

export default D3fault;
