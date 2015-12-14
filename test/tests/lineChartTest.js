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
      { 'date': '24-Apr-07', 'close': 93.24 },
      { 'date': '28-Apr-07', 'close': 95.35 },
      { 'date': '1-May-07', 'close': 98.84 },
      { 'date': '4-May-07', 'close': 99.92 },
      { 'date': '5-May-07', 'close': 99.80 },
      { 'date': '9-May-07', 'close': 100.39 },
      { 'date': '10-May-07', 'close': 100.81 },
      { 'date': '11-May-07', 'close': 100.40 },
      { 'date': '12-May-07', 'close': 103.92 },
      { 'date': '13-May-07', 'close': 105.06 },
      { 'date': '14-May-07', 'close': 106.88 },
      { 'date': '15-May-07', 'close': 107.34 },
      { 'date': '16-May-07', 'close': 108.74 },
      { 'date': '17-May-07', 'close': 108.74 },
    ];

  before(() => {
    return browser.visit('file://' + __dirname + '/../index.html');
  });

  describe('Line Chart methods', () => {
    it('should make a chart in a div with id "linechart"', () => {
      const lineChart = browser.window.d3fault.make('LineChart');
      lineChart.using(dataLineChart).in('#linechart');
      const lineId = lineChart.element.attr('id');
      expect(lineId).to.equal('linechart').and.to.be.an('String');
    });

    it('should make a chart with a class "line"', () => {
      const lineChart = browser.window.d3fault.make('LineChart');
      lineChart.using(dataLineChart).in('#linechart');
      const lineClass = browser.window.d3.select('#linechart').select('.line').attr('class');
      expect(lineClass).to.equal('line').and.to.be.an('String');
    });

    it('should make line to represent data for the line chart', () => {
      const lineChart = browser.window.d3fault.make('LineChart');
      lineChart.using(dataLineChart).in('#linechart');
      const lineShape = browser.window.d3.select('#linechart').select('.line');
      expect(lineShape).to.exist;
    });

    it('should change set the x-axis column name properly (to the one which is time scale)', () => {
      const lineChart = browser.window.d3fault.make('LineChart');
      lineChart.using(dataLineChart).in('#linechart');
      const xColumnNameActual = lineChart.xColumnName;
      expect(xColumnNameActual).to.equal('date');
    });

    it('should change set the y-axis column name properly (to the one which is linear scale)', () => {
      const lineChart = browser.window.d3fault.make('LineChart');
      lineChart.using(dataLineChart).in('#linechart');
      const yColumnNameActual = lineChart.yColumnName;
      expect(yColumnNameActual).to.equal('close');
    });
  });
});
