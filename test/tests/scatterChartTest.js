/* eslint-disable no-unused-expressions, no-unused-vars */
import tld3 from '../../src/core/core';
import d3 from '../../node_modules/d3';
import chai from '../../node_modules/chai';
import Browser from '../../node_modules/zombie';

const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();
import utils from './utils/utils';

describe('Scatter Chart methods functionality', () => {
  const browser = new Browser();
  let data = [];
  let scatterChart;
  before(() => {
    return browser.visit('file://' + __dirname + '/../index.html')
      .then(() => {
        return utils.csv(__dirname + '/../data/scatterData.csv', 'testSepalLength', 'testSepalWidth', 'testPetalLength', 'tsetPetalWidth', 'testSpecies');
      })
      .then(newdata => {
        data = newdata;
      });
  });

  describe('Scatter Chart methods', () => {
    it('should make a chart in a div with id "barchart"', () => {
      scatterChart = browser.window.tld3.make('ScatterChart');
      scatterChart.using(data).in('#scatterchart');
      const scatterId = scatterChart.element.attr('id');
      expect(scatterId).to.equal('scatterchart').and.to.be.an('String');
    });

    it('should make cirlces to represent data for the scatter chart', () => {
      const scatterCircles = browser.window.d3.select('#scatterchart').selectAll('circle');
      expect(scatterCircles[0].length).to.equal(data.length);
    });
  });

  describe('changeColors', () => {
    it('should make circles red', () => {
      const donutPaths = browser.window.d3.select('svg').selectAll('circle');
      scatterChart.changeColors(['red']);
      expect(browser.window.d3.select(donutPaths[0][0]).style('fill')).to.equal('red');
    });
  });

  describe('changeFontStyle', () => {
    it('should change font style', () => {
      const current = browser.window.d3.select('svg').style('font-family');
      scatterChart.changeFontStyle('sans-serif');
      expect(current === browser.window.d3.select('svg').style('font-family')).to.be.false;
    });
  });

  describe('changeFontSize', () => {
    it('should change font size', () => {
      scatterChart.changeFontSize(100);
      expect(browser.window.d3.select('svg').attr('font-size')).to.equal('100');
    });
  });

  describe('changeHeight', () => {
    it('should change chart height', () => {
      scatterChart.changeHeight(460);
      expect(Number(browser.window.d3.select('svg').attr('height'))).to.equal(460 + scatterChart.getMargins.top + scatterChart.getMargins.bottom);
    });
  });

  describe('changeWidth', () => {
    it('should change chart width', () => {
      scatterChart.changeWidth(999);
      expect(Number(browser.window.d3.select('svg').attr('width'))).to.equal(999 + scatterChart.getMargins.right + scatterChart.getMargins.left);
    });
  });

  describe('changeTitle', () => {
    it('should change the title', () => {
      const oldTile = scatterChart.getTitle;
      expect(oldTile).to.equal(browser.window.d3.select('svg').select('.title').text());
      scatterChart.changeTitle('Hello World!');
      expect(browser.window.d3.select('svg').select('.title').text()).to.equal('Hello World!');
    });
  });
});
