/* eslint-disable no-unused-expressions, no-unused-vars */
import d3fault from '../../src/core/core';
import d3 from '../../node_modules/d3';
import chai from '../../node_modules/chai';
import Browser from '../../node_modules/zombie';
import utils from './utils/utils';

const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

describe('Line Chart methods functionality', () => {
  const browser = new Browser();
  let data = [];
  let lineChart;
  before(() => {
    return browser.visit('file://' + __dirname + '/../index.html')
      .then(() => {
        return utils.csv(__dirname + '/../data/lineData.csv', 'testDate', 'testClose');
      })
      .then(newdata => {
        data = newdata;
      });
  });

  describe('Line Chart methods', () => {
    it('should make a chart in a div with id "linechart"', () => {
      lineChart = browser.window.d3fault.make('LineChart');
      lineChart.using(data).in('#linechart');
      const lineId = lineChart.element.attr('id');
      expect(lineId).to.equal('linechart').and.to.be.an('String');
    });

    it('should make a chart with a class "line"', () => {
      const lineClass = browser.window.d3.select('#linechart').select('.line').attr('class');
      expect(lineClass).to.equal('line').and.to.be.an('String');
    });

    it('should make line to represent data for the line chart', () => {
      const lineShape = browser.window.d3.select('#linechart').select('.line')[0];
      expect(lineShape).to.exist;
    });

    it('should change set the x-axis column name properly (to the one which is time scale)', () => {
      const xColumnNameActual = lineChart.xColumnName;
      expect(xColumnNameActual).to.equal('testDate');
    });

    it('should change set the y-axis column name properly (to the one which is linear scale)', () => {
      const yColumnNameActual = lineChart.yColumnName;
      expect(yColumnNameActual).to.equal('testClose');
    });

    describe('changeHeight', () => {
      it('should change chart height', () => {
        lineChart.changeHeight(460);
        expect(Number(browser.window.d3.select('svg').attr('height'))).to.equal(460 + lineChart.getMargins.top + lineChart.getMargins.bottom);
      });
    });

    describe('changeWidth', () => {
      it('should change chart width', () => {
        lineChart.changeWidth(999);
        expect(Number(browser.window.d3.select('svg').attr('width'))).to.equal(999 + lineChart.getMargins.right + lineChart.getMargins.left);
      });
    });

    describe('changeMargins', () => {
      it('should change margins', () => {
        expect(lineChart.getMargins).to.eql({ top: 30, bottom: 30, left: 50, right: 30 });
        lineChart.changeMargins({ top: 10, bottom: 10, left: 10, right: 10 });
        expect(lineChart.getMargins).to.eql({ top: 10, bottom: 10, left: 10, right: 10 });
        expect(Number(browser.window.d3.select('svg').attr('height'))).to.equal(lineChart.getHeight + lineChart.getMargins.top + lineChart.getMargins.bottom);
        expect(Number(browser.window.d3.select('svg').attr('width'))).to.equal(lineChart.getWidth + lineChart.getMargins.left + lineChart.getMargins.right);
      });
    });

    describe('changeColors', () => {
      it('should make line red', () => {
        const linePath = browser.window.d3.select('svg').select('.line');
        expect(browser.window.d3.select(linePath[0][0]).style('stroke')).to.equal('steelblue');
        lineChart.changeColors(['red']);
        expect(browser.window.d3.select(linePath[0][0]).style('stroke')).to.equal('red');
      });
    });

    describe('changeFontStyle', () => {
      it('should change font style', () => {
        const current = browser.window.d3.select('svg').style('font-family');
        lineChart.changeFontStyle('sans-serif');
        expect(current === browser.window.d3.select('svg').style('font-family')).to.be.false;
      });
    });

    describe('changeFontSize', () => {
      it('should change font size', () => {
        lineChart.changeFontSize(100);
        expect(browser.window.d3.select('svg').attr('font-size')).to.equal('100');
      });
    });

    describe('changeTitle', () => {
      it('should change the title', () => {
        const oldTile = lineChart.getTitle;
        expect(oldTile).to.equal(browser.window.d3.select('svg').select('.title').text());
        lineChart.changeTitle('Hello World!');
        expect(browser.window.d3.select('svg').select('.title').text()).to.equal('Hello World!');
      });
    });
  });
});
