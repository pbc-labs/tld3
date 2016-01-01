/* eslint-disable no-unused-expressions, no-unused-vars */
import Browser from '../../node_modules/zombie';
import chai from '../../node_modules/chai';
import data from '../data/data.js';

const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

describe('Chart Main methods functionality', () => {
  const browser = new Browser();
  let tld3;
  let d3;

  before((done) => {
    browser.visit('file://' + __dirname + '/../index.html', () => {
      d3 = browser.window.d3;
      tld3 = browser.window.tld3;
      done();
    });
  });

  describe('Library instantiation methods', () => {
    it('should be find a div with \'chart\' id', () => {
      browser.assert.element('#chart');
    });

    it('should have the tld3 library loaded', () => {
      browser.assert.global('tld3');
    });

    it('should have the d3 library loaded', () => {
      browser.assert.global('d3');
    });

    it('should make a chart', () => {
      const chart = tld3.make('BarChart');
      expect(chart).to.exist;
      expect(chart).to.be.an('Object');
    });

    it('should add data to chart object when the \'using\' method is called with data', () => {
      const chart = tld3.make('BarChart');
      chart.using(data);
      expect(chart.data).to.deep.equal(data);
    });

    it('should change set the x-axis column name properly', () => {
      const chart = tld3.make('BarChart');
      chart.using(data).in('#chart');
      const xColumnNameActual = chart.xColumnName;
      expect(xColumnNameActual).to.equal('letter');
    });

    it('should change set the y-axis column name properly', () => {
      const chart = tld3.make('BarChart');
      chart.using(data).in('#chart');
      const yColumnNameActual = chart.yColumnName;
      expect(yColumnNameActual).to.equal('frequency');
    });

    it('should change margins when \'changeMargins\' method is invoked with options', () => {
      const chart = tld3.make('BarChart');
      chart.using(data).in('#chart');
      const newMargins = { top: 60, right: 40, bottom: 60, left: 40 };
      chart.changeMargins(newMargins);
      const topNew = d3.select('#chart').select('svg').attr('height') - chart.getChartHeight - chart.getMargins.bottom;
      const bottomNew = d3.select('#chart').select('svg').attr('height') - chart.getChartHeight - chart.getMargins.top;
      const rightNew = d3.select('#chart').select('svg').attr('width') - chart.setChartWidth - chart.getMargins.left;
      const leftNew = d3.select('#chart').select('svg').attr('width') - chart.setChartWidth - chart.getMargins.right;
      expect({ top: topNew, right: rightNew, bottom: bottomNew, left: leftNew }).to.deep.equal(newMargins);
    });

    it('should change colors when \'changeColors\' method is invoked with options', () => {
      const chart = tld3.make('BarChart');
      chart.using(data).in('#chart');
      const newColors = ['red', 'purple'];
      chart.changeColors(newColors);
      expect(chart.getColors).to.deep.equal(newColors).and.to.be.an('Array');
    });

    it('should change height when \'changeHeight\' method is invoked with options', () => {
      const chart = tld3.make('BarChart');
      chart.using(data).in('#chart');
      chart.changeHeight(500);
      const currentHeight = d3.select('#chart').select('svg').attr('height') - chart.getMargins.top - chart.getMargins.bottom;
      expect(currentHeight).to.deep.equal(500).and.to.be.a('Number');
    });

    it('should change width when \'changeWidth\' method is invoked with options', () => {
      const chart = tld3.make('BarChart');
      chart.using(data).in('#chart');
      chart.changeWidth(800);
      const currentWidth = d3.select('#chart').select('svg').attr('width') - chart.getMargins.right - chart.getMargins.left;
      expect(currentWidth).to.deep.equal(800).and.to.be.a('Number');
    });

    it('should change title when \'changeTitle\' method is invoked with options', () => {
      const chart = tld3.make('BarChart');
      chart.using(data).in('#chart');
      chart.changeTitle('new new new old gone');
      const currentTitle = d3.select('#chart').select('svg').select('.title').text();
      expect(currentTitle).to.equal('new new new old gone').and.to.be.a('String');
    });

    it('should change font size when \'changeFontSize\' method is invoked with options', () => {
      const chart = tld3.make('BarChart');
      chart.using(data).in('#chart');
      chart.changeFontSize(30);
      const currentFontSize = d3.select('#chart').select('svg').attr('font-size');
      expect(currentFontSize).to.equal('30').and.to.be.a('String');
    });

    it('should change font style when \'changeFontStyle\' method is invoked with options', () => {
      const chart = tld3.make('BarChart');
      chart.using(data).in('#chart');
      chart.changeFontStyle('Comic Sans');
      const currentFontStyle = d3.select('#chart').select('svg').style('font-family');
      expect(currentFontStyle).to.equal('Comic Sans').and.to.be.a('String');
    });
  });
});
