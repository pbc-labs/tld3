/* eslint-disable no-unused-expressions, no-unused-vars */
import chai from '../../node_modules/chai';
import Browser from '../../node_modules/zombie';
import utils from './utils/utils';

const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

describe('Donut Chart methods functionality', () => {
  const browser = new Browser();
  let data = [];
  let donutChart;
  before(() => {
    return browser.visit('file://' + __dirname + '/../index.html')
      .then(() => {
        return utils.csv(__dirname + '/../data/donutData.csv', 'testAge', 'testPopulation');
      })
      .then(newdata => {
        data = newdata;
      });
  });
  describe('Donut Chart methods', () => {
    describe('Donut Chart', () => {
      it('should make a chart in a div with id "donutchart"', () => {
        donutChart = browser.window.d3fault.make('DonutChart').using(data).in('#donutchart');
        const donutId = donutChart.element.attr('id');
        expect(donutId).to.equal('donutchart').and.to.be.an('String');
      });

      it('should make arc to represent donut chart', () => {
        const donutShape = browser.window.d3.select('#donutchart').select('.arc');
        expect(donutShape[0]).to.exist;
      });

      it('should make slices to represent data in donut chart', () => {
        const donutPaths = browser.window.d3.select('svg').selectAll('path');
        expect(donutPaths[0].length).to.equal(7);
      });
    });

    describe('changeColors', () => {
      it('should make slices red', () => {
        const donutPaths = browser.window.d3.select('svg').selectAll('path');
        expect(browser.window.d3.select(donutPaths[0][0]).style('fill')).to.equal('steelblue');
        donutChart.changeColors(['red']);
        expect(browser.window.d3.select(donutPaths[0][0]).style('fill')).to.equal('red');
      });
    });

    describe('changeFontStyle', () => {
      it('should change font style', () => {
        const current = browser.window.d3.select('svg').style('font-family');
        donutChart.changeFontStyle('sans-serif');
        expect(current === browser.window.d3.select('svg').style('font-family')).to.be.false;
      });
    });

    describe('changeFontSize', () => {
      it('should change font size', () => {
        donutChart.changeFontSize(100);
        expect(browser.window.d3.select('svg').attr('font-size')).to.equal('100');
      });
    });

    describe('changeMargins', () => {
      it('should change margins', () => {
        expect(donutChart.getMargins).to.eql({ top: 30, bottom: 60, left: 60, right: 30 });
        donutChart.changeMargins({ top: 10, bottom: 10, left: 10, right: 10 });
        expect(donutChart.getMargins).to.eql({ top: 10, bottom: 10, left: 10, right: 10 });
        expect(Number(browser.window.d3.select('svg').attr('height'))).to.equal(donutChart.getHeight + donutChart.getMargins.top + donutChart.getMargins.bottom);
        expect(Number(browser.window.d3.select('svg').attr('width'))).to.equal(donutChart.getWidth + donutChart.getMargins.left + donutChart.getMargins.right);
      });
    });

    describe('changeHeight', () => {
      it('should change chart height', () => {
        donutChart.changeHeight(460);
        expect(Number(browser.window.d3.select('svg').attr('height'))).to.equal(460 + donutChart.getMargins.top + donutChart.getMargins.bottom);
      });
    });

    describe('changeWidth', () => {
      it('should change chart width', () => {
        donutChart.changeWidth(999);
        expect(Number(browser.window.d3.select('svg').attr('width'))).to.equal(999 + donutChart.getMargins.right + donutChart.getMargins.left);
      });
    });

    describe('changeTitle', () => {
      it('should change the title', () => {
        const oldTile = donutChart.getTitle;
        expect(oldTile).to.equal(browser.window.d3.select('svg').select('.title').text());
        donutChart.changeTitle('Hello World!');
        expect(browser.window.d3.select('svg').select('.title').text()).to.equal('Hello World!');
      });
    });
  });
});
