/* eslint-disable no-unused-expressions, no-unused-vars */
import d3fault from '../../src/core/core';
import d3 from '../../node_modules/d3';
import chai from '../../node_modules/chai';
import Browser from '../../node_modules/zombie';
import csv from '../../node_modules/fast-csv';

const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

xdescribe('Donut Chart methods functionality', () => {
  const browser = new Browser();
  const dataDonutChart = [];
  before(() => {
    return browser.visit('file://' + __dirname + '/../index.html')
      .then(() => {
        return csv.fromPath(__dirname + '/../data/donutData.csv')
        .on('data', (data) => {
          if (data[0] !== 'age') {
            dataDonutChart.push({ age: data[0], population: data[1] });
          }
        });
      });
  });

  describe('Donut Chart methods', () => {
    it('should make a chart in a div with id "donutchart"', () => {
      const donutChart = browser.window.d3fault.make('DonutChart');
      donutChart.using(dataDonutChart).in('#donutchart');
      const donutId = donutChart.element.attr('id');
      expect(donutId).to.equal('donutchart').and.to.be.an('String');
    });

    it('should make arc to represent donut chart', () => {
      const donutChart = browser.window.d3fault.make('DonutChart');
      donutChart.using(dataDonutChart).in('#donutchart');
      const donutShape = browser.window.d3.select('#donutchart').select('.arc'); // TODO: update to the right selector
      expect(donutShape[0]).to.exist;
    });

    it('should make paths to represent data in donut chart', () => {
      const donutChart = browser.window.d3fault.make('DonutChart');
      donutChart.using(dataDonutChart).in('#donutchart');
      const donutPaths = browser.window.d3.select('svg').selectAll('path'); // TODO: update to the right selector
      expect(donutPaths).to.equal(7);
    });
  });
});
