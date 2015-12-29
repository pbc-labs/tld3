import chai from '../../node_modules/chai';
import Browser from '../../node_modules/zombie';
import utils from './utils/utils';
import errors from '../../src/utils/errors';

const expect = chai.expect;

describe('Errors For User Inputs', () => {
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

  describe('WidthError', () => {
    it('should throw a WidthError', () => {
      lineChart = browser.window.d3fault.make('LineChart');
      lineChart.using(data).in('#linechart');
      expect(() => { lineChart.changeWidth('1234567'); }).to.throw('Width must be a Number');
    });
  });

  describe('MarginsFormatError', () => {
    it('should throw a MarginsFormatError', () => {
      expect(() => { lineChart.changeMargins('1234567'); }).to.throw('New margins must be an object with top, right, bottom and left defined');
    });
  });

  describe('HeightError', () => {
    it('should throw a HeightError', () => {
      expect(() => { lineChart.changeHeight('1234567'); }).to.throw('Height must be a Number');
    });
  });

  describe('TitleError', () => {
    it('should throw a TitleError', () => {
      expect(() => { lineChart.changeTitle([[]]); }).to.throw('Title must be a Number or String');
    });
  });

  describe('FontSizeError', () => {
    it('should throw a FontSizeError', () => {
      expect(() => { lineChart.changeFontSize([[]]); }).to.throw('Font size must be a Number');
    });
  });

  describe('FontStyleError', () => {
    it('should throw a FontStyleError', () => {
      expect(() => { lineChart.changeFontStyle([[]]); }).to.throw('Font style must be a string');
    });
  });

  describe('ColorError', () => {
    it('should throw a ColorError', () => {
      expect(() => { lineChart.changeColors('lorem ipsm'); }).to.throw('Colors must be an array of colors');
    });
  });

  describe('InBeforeUsingError', () => {
    it('should throw a InBeforeUsingError', () => {
      const barChart = browser.window.d3fault.make('BarChart');
      expect(() => { barChart.in('#BarChart'); }).to.throw('The "in" function can only be used after the "using" function has been used');
    });
  });

  describe('NoDataError', () => {
    it('should throw a NoDataError', () => {
      const barChart = browser.window.d3fault.make('BarChart');
      expect(() => { barChart.using(); }).to.throw('Must pass in data, data cannot be undefined');
    });
  });
});
