import csv from '../../../node_modules/fast-csv';

const utils = {
  csv(file, ...args) {
    const data = [];
    let rowCount = 0;
    return new Promise((resolve) => {
      csv.fromPath(file)
      .on('data', (rowdata) => {
        if (rowCount !== 0) {
          const ob = rowdata.reduce((mem, item, i) => {
            mem[args[i]] = item;
            return mem;
          }, {});
          data.push(ob);
        }
        rowCount++;
      }).on('end', () => {
        resolve(data);
      });
    });
  },
};

export default utils;
