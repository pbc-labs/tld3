/* eslint-disable no-unused-expressions, no-unused-vars */
import tld3 from '../../src/core/core';
import d3 from '../../node_modules/d3';
import chai from '../../node_modules/chai';
import Browser from '../../node_modules/zombie';
import data from '../data/data.js';

const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

describe('Main Chart Constructor', () => {
  it('should return an object when called to make a chart', () => {
    expect(tld3.make('BarChart')).to.exist;
  });

  it('should return an object when called to make a chart', () => {
    expect(tld3.make('BarChart')).to.be.an('Object');
  });

  describe('Default properties', () => {
    const chart = tld3.make('BarChart');
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
      const defaultMargins = { top: 30, right: 30, bottom: 60, left: 60 };
      expect(chart.getMargins).to.deep.equal(defaultMargins);
    });

    it('should use setter method to update default margins property', () => {
      const newMargins = { top: 50, right: 30, bottom: 50, left: 30 };
      chart.setMargins = newMargins;
      expect(chart.getMargins).to.deep.equal({ top: 50, right: 30, bottom: 50, left: 30 }).and.to.be.an('object');
    });

    it('should have a default colors array', () => {
      expect(chart.getColors).to.deep.equal(['#E71D36', '#26408B', '#FF9F1C', '#767B91', '#0FA3B1']).and.to.be.an('array');
    });

    it('should use setter method to update default colors array', () => {
      chart.setColors = ['green', 'blue'];
      expect(chart.getColors).to.deep.equal(['green', 'blue']);
    });

    it('should have a default chart title', () => {
      expect(chart.getTitle).to.equal('Default title').and.to.be.a('string');
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
    const chart = tld3.make('BarChart');
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
});
