/* eslint-disable no-unused-expressions, no-unused-vars */
import Browser from '../../node_modules/zombie';
import chai from '../../node_modules/chai';
import data from '../data';

const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

describe('Internal Tests', () => {
  const browser = new Browser();
  let d3fault;
  let d3;
  let internal;

  before((done) => {
    browser.visit('file://' + __dirname + '/../index.html', () => {
      d3 = browser.window.d3;
      d3fault = browser.window.d3fault;
      internal = d3fault.internal;
      done();
    });
  });

  describe('selectElement', () => {
    let chart;

    before((done) => {
      browser.visit('file://' + __dirname + '/../index.html', () => {
        chart = d3fault.make('BarChart').using(data).in('#chart');
        done();
      });
    });

    it('should select the d3 element of the chart given', () => {
      expect(chart.element).to.eql(d3.select('#chart'));
      chart.location = '#chart2';
      internal.selectElement(chart);
      expect(chart.element).to.eql(d3.select('#chart2'));
    });
  });

  describe('createSVGElement', () => {
    let context;

    before((done) => {
      browser.visit('file://' + __dirname + '/../index.html', () => {
        context = d3fault.make('BarChart');
        context.location = '#chart';
        internal.selectElement(context);
        done();
      });
    });

    it('should create an SVG element in the page', () => {
      internal.createSVGElement(context);
      expect(context.element.select('svg')).to.exist;
    });

    it('should have the correct attributes', () => {
      expect(+context.element.select('svg').attr('height')).to.equal(context.getHeight + context.getMargins.top + context.getMargins.bottom);
      expect(+context.element.select('svg').attr('width')).to.equal(context.getWidth + context.getMargins.left + context.getMargins.right);
    });
  });

  describe('updateSVGElement', () => {
    let context;

    before((done) => {
      browser.visit('file://' + __dirname + '/../index.html', () => {
        context = d3fault.make('BarChart');
        context.location = '#chart';
        internal.selectElement(context);
        internal.createSVGElement(context);
        done();
      });
    });

    it('should update the SVG element with new attributes', () => {
      const oldHeight = context.getHeight + context.getMargins.top + context.getMargins.bottom;
      const oldWidth = context.getWidth + context.getMargins.left + context.getMargins.right;
      expect(+context.element.select('svg').attr('height')).to.equal(oldHeight);
      expect(+context.element.select('svg').attr('width')).to.equal(oldWidth);
      context.setHeight = 140;
      context.setWidth = 700;
      internal.updateSVGElement(context);
      expect(+context.element.select('svg').attr('height')).to.not.equal(oldHeight);
      expect(+context.element.select('svg').attr('height')).to.equal(context.getHeight + context.getMargins.top + context.getMargins.bottom);
      expect(+context.element.select('svg').attr('width')).to.not.equal(oldWidth);
      expect(+context.element.select('svg').attr('width')).to.equal(context.getWidth + context.getMargins.left + context.getMargins.right);
    });
  });

  describe('X-Axis methods', () => {
    let context;

    before((done) => {
      browser.visit('file://' + __dirname + '/../index.html', () => {
        context = d3fault.make('BarChart');
        context.location = '#chart';
        context.data = data;
        internal.selectElement(context);
        done();
      });
    });

    it('have a custom X-Axis function', () => {
      internal.setXscale(context, 'ordinal', 'string');
      internal.createSVGElement(context);
      internal.createxAxis(context);
      expect(context.xAxis).to.be.a('Function');
    });

    it('should build the X-Axis', () => {
      internal.buildXAxis(context);
      expect(context.element.select('.x.axis')).to.exist;
      expect(d3.select('.x.axis')).to.exist;
    });

    xit('should be styled by setAxisStyle', () => {
      internal.setAxisStyle(context, 'path', 'none', '#fff', 'crispEdges');
      internal.setAxisStyle(context, 'line', 'none', '#fff', 'crispEdges');
      expect(d3.selectAll('.x.axis path').style('stroke')).to.equal('#fff');
    });
  });

  describe('Y-Axis methods', () => {
    let context;

    before((done) => {
      browser.visit('file://' + __dirname + '/../index.html', () => {
        context = d3fault.make('BarChart');
        context.location = '#chart';
        context.data = data;
        internal.selectElement(context);
        done();
      });
    });

    it('have a custom Y-Axis function', () => {
      internal.setYscale(context, 'ordinal', 'string');
      internal.createSVGElement(context);
      internal.createyAxis(context);
      expect(context.yAxis).to.be.a('Function');
    });

    it('should build the Y-Axis', () => {
      internal.buildYAxis(context);
      expect(context.element.select('.y.axis')).to.exist;
      expect(d3.select('.y.axis')).to.exist;
    });

    xit('should be styled by setAxisStyle', () => {
      internal.setAxisStyle(context, 'path', 'none', '#fff', 'crispEdges');
      internal.setAxisStyle(context, 'line', 'none', '#fff', 'crispEdges');
      expect(d3.selectAll('.y.axis path').style('stroke')).to.equal('#fff');
    });
  });

  describe('Update methods', () => {
    let chart;

    before((done) => {
      browser.visit('file://' + __dirname + '/../index.html', () => {
        chart = d3fault.make('BarChart').using(data).in('#chart');
        done();
      });
    });

    it('should update the font style', () => {
      expect(chart.getFontStyle).to.equal('Arial');
      expect(d3.select('#chart svg').style('font-family')).to.equal('Arial');
      chart.setFontStyle = 'Courier New';
      expect(chart.getFontStyle).to.equal('Courier New');
      internal.updateFontStyle(chart);
      expect(d3.select('#chart svg').style('font-family')).to.equal('Courier New');
    });

    it('should update the font size', () => {
      expect(chart.getFontSize).to.equal(14);
      expect(d3.select('#chart svg').attr('font-size')).to.equal('14');
      chart.setFontSize = 30;
      expect(chart.getFontSize).to.equal(30);
      internal.updateFontSize(chart);
      expect(d3.select('#chart svg').attr('font-size')).to.equal('30');
    });

    it('should update the title', () => {
      expect(chart.getTitle).to.equal('Default title, YO!');
      expect(d3.select('#chart .title').text()).to.equal('Default title, YO!');
      chart.setTitle = 'Not Default';
      expect(chart.getTitle).to.equal('Not Default');
      internal.updateTitle(chart);
      expect(d3.select('#chart .title').text()).to.equal('Not Default');
    });
  });
});
