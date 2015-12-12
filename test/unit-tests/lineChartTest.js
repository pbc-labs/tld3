/* eslint-disable no-unused-expressions, no-unused-vars */
import d3fault from '../../src/core/core';
import d3 from '../../node_modules/d3';
import chai from '../../node_modules/chai';
import Browser from '../../node_modules/zombie';

const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

describe('Line Chart methods functionality', () => {
  const browser = new Browser();
  const dataLineChart =
    [
    { 'letter': 'A', 'frequency': 0.08167 },
    { 'letter': 'B', 'frequency': 0.01492 },
    { 'letter': 'C', 'frequency': 0.02782 },
    { 'letter': 'D', 'frequency': 0.04253 },
    { 'letter': 'E', 'frequency': 0.12702 },
    { 'letter': 'F', 'frequency': 0.02288 },
    { 'letter': 'G', 'frequency': 0.02015 },
    { 'letter': 'H', 'frequency': 0.06094 },
    { 'letter': 'I', 'frequency': 0.06966 },
    { 'letter': 'J', 'frequency': 0.00153 },
    { 'letter': 'K', 'frequency': 0.00772 },
    { 'letter': 'L', 'frequency': 0.04025 },
    { 'letter': 'M', 'frequency': 0.02406 },
    { 'letter': 'N', 'frequency': 0.06749 },
    { 'letter': 'O', 'frequency': 0.07507 },
    { 'letter': 'P', 'frequency': 0.01929 },
    { 'letter': 'Q', 'frequency': 0.00095 },
    { 'letter': 'R', 'frequency': 0.05987 },
    { 'letter': 'S', 'frequency': 0.06327 },
    { 'letter': 'T', 'frequency': 0.09056 },
    { 'letter': 'U', 'frequency': 0.02758 },
    { 'letter': 'V', 'frequency': 0.00978 },
    { 'letter': 'W', 'frequency': 0.0236 },
    { 'letter': 'X', 'frequency': 0.0015 },
    { 'letter': 'Y', 'frequency': 0.01974 },
    { 'letter': 'Z', 'frequency': 0.00074 },
    ];

  before(() => {
    return browser.visit('file://' + __dirname + '/../index.html');
  });

  describe('Line Chart methods', () => {
    xit('should make a chart in a div with id "linechart"', () => {
      const lineChart = browser.window.d3fault.make('LineChart');
      lineChart.using(dataLineChart).in('#linechart');
      const lineId = lineChart.element.attr('id');
      expect(lineId).to.equal('linechart').and.to.be.an('String');
    });

    xit('should make a chart with a class "line"', () => {
      const lineChart = browser.window.d3fault.make('LineChart');
      lineChart.using(dataLineChart).in('#linechart');
      const lineClass = browser.window.d3.select('#linechart').select('line').attr('class');
      expect(lineClass).to.equal('linechart').and.to.be.an('String');
    });

    xit('should make rects to represent data for the line chart', () => {
      const lineChart = browser.window.d3fault.make('LineChart');
      lineChart.using(dataLineChart).in('#linechart');
      const lineShape = browser.window.d3.select('#linechart').select('line');
      expect(lineShape).to.exist;
    });
  });
});
