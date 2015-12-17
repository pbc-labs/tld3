/* eslint-disable no-unused-expressions, no-unused-vars */
import chai from '../../node_modules/chai';
import Browser from '../../node_modules/zombie';
import csv from '../../node_modules/fast-csv';

const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

describe('Donut Chart methods functionality', () => {
  const browser = new Browser();
  const dataDonutChart = [];

  before((done) => {
    browser.visit('file://' + __dirname + '/../index.html', done);
  });

  describe('Donut Chart methods', () => {
    it('should make a chart in a div with id "donutchart"', () => {
      let donutChart;
      browser.window.d3fault.upload('./data/donutData.csv')
      .then((data) => {
        donutChart = browser.window.d3fault.make('DonutChart').using(data).in('#donutchart');
        const donutId = donutChart.element.attr('id');
        expect(donutId).to.equal('donutchart').and.to.be.an('String');
      });
    });

    it('should make arc to represent donut chart', () => {
      const donutShape = browser.window.d3.select('#donutchart').select('.arc'); // TODO: update to the right selector
      expect(donutShape[0]).to.exist;
    });

    xit('should make paths to represent data in donut chart', () => {
      const donutPaths = browser.window.d3.select('svg').selectAll('path'); // TODO: update to the right selector
      expect(donutPaths).to.equal(7);
    });
  });
});
