/* eslint-disable no-unused-expressions, no-unused-vars */
import d3fault from '../../src/core/core';
import d3 from '../../node_modules/d3';
import chai from '../../node_modules/chai';
import Browser from '../../node_modules/zombie';

const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

describe('Main Chart Constructor', () => {
  it('should return an object when called to make a chart', () => {
    expect(d3fault.make('BarChart')).to.exist;
  });

  it('should return an object when called to make a chart', () => {
    expect(d3fault.make('BarChart')).to.be.an('Object');
  });

  describe('Default properties', () => {
    const chart = d3fault.make('BarChart');
    it('should have a default width property of 600', () => {
      expect(chart.getWidth).to.equal(600);
    });

    it('should use setter method to update default width property to 700', () => {
      chart.setWidth = 700;
      expect(chart.getWidth).to.equal(700);
    });

    it('should have a default height property of 300', () => {
      expect(chart.getHeight).to.equal(300);
    });

    it('should use setter method to update default height property to 400', () => {
      chart.setHeight = 400;
      expect(chart.getHeight).to.equal(400);
    });

    it('should have default top margins property of 30', () => {
      const defaultMargins = { top: 30, right: 30, bottom: 30, left: 50 };
      expect(chart.getMargins).to.deep.equal(defaultMargins);
    });

    it('should use setter method to update default margins property', () => {
      const newMargins = { top: 50, right: 30, bottom: 50, left: 30 };
      chart.setMargins = newMargins;
      expect(chart.getMargins).to.deep.equal({ top: 50, right: 30, bottom: 50, left: 30 }).and.to.be.an('object');
    });

    it('should have a default colors array', () => {
      expect(chart.getColors).to.deep.equal(['steelblue', 'red', 'green']).and.to.be.an('array');
    });

    it('should use setter method to update default colors array', () => {
      chart.setColors = ['green', 'blue'];
      expect(chart.getColors).to.deep.equal(['green', 'blue']);
    });

    it('should have a default chart title', () => {
      expect(chart.getTitle).to.equal('Default title, YO!').and.to.be.a('string');
    });

    it('should use setter method to update default chart title', () => {
      chart.setColors = 'My hella cool new title, yo!';
      expect(chart.getColors).to.deep.equal('My hella cool new title, yo!');
    });

    it('should have a default font size of 14', () => {
      expect(chart.getFontSize).to.equal(14).and.to.be.a('number');
    });

    it('should use setter method to update default size', () => {
      chart.setFontSize = 22;
      expect(chart.getFontSize).to.equal(22);
    });

    it('should have a default font style of Arial', () => {
      expect(chart.getFontStyle).to.equal('Arial').and.to.be.a('string');
    });

    it('should use setter method to update default font style', () => {
      chart.setFontStyle = 'Comic Sans'; // ha, ha, ha...
      expect(chart.getFontStyle).to.equal('Comic Sans');
    });

    it('should have a default x axis label', () => {
      expect(chart.getxAxisLabel).to.equal('x Axis Label').and.to.be.a('string');
    });

    it('should use setter method to update default x axis label', () => {
      chart.setxAxisLabel = 'new x axis, weee';
      expect(chart.getxAxisLabel).to.equal('new x axis, weee');
    });

    it('should have a default y axis label', () => {
      expect(chart.getyAxisLabel).to.equal('y Axis Label').and.to.be.a('string');
    });

    it('should use setter method to update default y axis label', () => {
      chart.setyAxisLabel = 'new y axis, weee';
      expect(chart.getyAxisLabel).to.equal('new y axis, weee');
    });

    it('should have a default x axis orientation set to bottom', () => {
      expect(chart.getxAxisOrientation).to.equal('bottom').and.to.be.a('string');
    });

    it('should use setter method to update default x axis orientation', () => {
      chart.setxAxisOrientation = 'top';
      expect(chart.getxAxisOrientation).to.equal('top');
    });

    it('should have a default y axis orientation set to bottom', () => {
      expect(chart.getyAxisOrientation).to.equal('left').and.to.be.a('string');
    });

    it('should use setter method to update default y axis orientation', () => {
      chart.setyAxisOrientation = 'right';
      expect(chart.getyAxisOrientation).to.equal('right');
    });
  });

  describe('Chart Main Update Methods Exist', () => {
    const chart = d3fault.make('BarChart');
    describe('Creation Methods', () => {
      it('should have a using method', () => {
        expect(chart.using).to.exist;
      });

      it('should have an in method', () => {
        expect(chart.in).to.exist;
      });
    });

    describe('changeMargins', () => {
      it('should have a changeMargins method', () => {
        expect(chart.changeMargins).to.exist;
      });
    });

    describe('changeWidth', () => {
      it('should have a changeWidth method', () => {
        expect(chart.changeWidth).to.exist;
      });
    });

    describe('changeHeight', () => {
      it('should have a changeHeight method', () => {
        expect(chart.changeWidth).to.exist;
      });
    });

    describe('changeTitle', () => {
      it('should have a changeTitle method', () => {
        expect(chart.changeWidth).to.exist;
      });
    });

    describe('changeFontSize', () => {
      it('should have a changeFontSize method', () => {
        expect(chart.changeFontSize).to.exist;
      });
    });

    describe('changeFontStyle', () => {
      it('should have a changeFontStyle method', () => {
        expect(chart.changeFontStyle).to.exist;
      });
    });

    describe('changexAxisLabel', () => {
      xit('should have a changexAxisLabel method', () => {
        expect(chart.changexAxisLabel).to.exist;
      });
    });

    describe('changeyAxisLabel', () => {
      xit('should have a changeyAxisLabel method', () => {
        expect(chart.changexAxisLabel).to.exist;
      });
    });

    describe('changeColors', () => {
      xit('should have a changeColorsl method', () => {
        expect(chart.changeColors).to.exist;
      });
    });

    describe('createLegend', () => {
      xit('should have a createLegend method', () => {
        expect(chart.createLegend).to.exist;
      });
    });
  });

  describe('Chart Main methods functionality', () => {
    const browser = new Browser();
    const data =
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

    describe('Library instantiation methods', () => {
      it('should be find a div with \'chart\' id', () => {
        browser.assert.element('#chart');
      });

      it('should have the d3fault library loaded', () => {
        browser.assert.global('d3fault');
      });

      it('should have the d3 library loaded', () => {
        browser.assert.global('d3');
      });

      it('should make a chart', () => {
        const chart = browser.window.d3fault.make('BarChart');
        expect(chart).to.exist;
        expect(chart).to.be.an('Object');
      });

      it('should add data to chart object when the \'using\' method is called with data', () => {
        const chart = browser.window.d3fault.make('BarChart');
        chart.using(data);
        expect(chart.data).to.deep.equal(data);
      });

      it('should change margins when \'changeMargins\' method is invoked with options', () => {
        const chart = browser.window.d3fault.make('BarChart');
        chart.using(data).in('#chart');
        const newMargins = { top: 60, right: 40, bottom: 60, left: 40 };
        chart.changeMargins(newMargins);
        expect(chart.getMargins).to.deep.equal(newMargins).and.to.be.an('Object');
      });

      it('should change colors when \'changeColors\' method is invoked with options', () => {
        const chart = browser.window.d3fault.make('BarChart');
        chart.using(data).in('#chart');
        const newColors = ['blueblueblue','greengreen'];
        chart.changeColors(newColors);
        const currentColor = browser.window.d3.select('#chart').select('svg').select('.bar').style('fill').split(',');
        expect(currentColor).to.deep.equal(newColors).and.to.be.an('Array');
      });

      it('should change height when \'changeHeight\' method is invoked with options', () => {
        const chart = browser.window.d3fault.make('BarChart');
        chart.using(data).in('#chart');
        chart.changeHeight(500);
        const currentHeight = browser.window.d3.select('#chart').select('svg').attr('height') - chart.getMargins.top - chart.getMargins.bottom;
        expect(currentHeight).to.deep.equal(500).and.to.be.a('Number');
      });

      it('should change width when \'changeWidth\' method is invoked with options', () => {
        const chart = browser.window.d3fault.make('BarChart');
        chart.using(data).in('#chart');
        chart.changeWidth(800);
        const currentWidth = browser.window.d3.select('#chart').select('svg').attr('width') - chart.getMargins.right - chart.getMargins.left;
        expect(currentWidth).to.deep.equal(800).and.to.be.a('Number');
      });

      it('should change title when \'changeTitle\' method is invoked with options', () => {
        const chart = browser.window.d3fault.make('BarChart');
        chart.using(data).in('#chart');
        chart.changeTitle('new new new old gone');
        const currentTitle = browser.window.d3.select('#chart').select('svg').select('.title').text();
        expect(currentTitle).to.equal('new new new old gone').and.to.be.a('String');
      });

      it('should change font size when \'changeFontSize\' method is invoked with options', () => {
        const chart = browser.window.d3fault.make('BarChart');
        chart.using(data).in('#chart');
        chart.changeFontSize(30);
        const currentFontSize = browser.window.d3.select('#chart').select('svg').attr('font-size');
        expect(currentFontSize).to.equal('30').and.to.be.a('String');
      });

      it('should change font style when \'changeFontStyle\' method is invoked with options', () => {
        const chart = browser.window.d3fault.make('BarChart');
        chart.using(data).in('#chart');
        chart.changeFontStyle('Comic Sans');
        const currentFontStyle = browser.window.d3.select('#chart').select('svg').attr('font-family');
        expect(currentFontStyle).to.equal('Comic Sans').and.to.be.a('String');
      });

    });
  });
});
