/* eslint-disable no-unused-expressions, no-unused-vars */
import Browser from '../../node_modules/zombie';
import chai from '../../node_modules/chai';
import data from '../data';
import Internal from '../../src/subModules/internal';

const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

describe('Internal Tests', () => {
  const browser = new Browser();

  beforeEach(() => {
    return browser.visit('file://' + __dirname + '/../index.html');
  });

  describe('selectElement', () => {
    it('should select the d3 element of the chart given', () => {
      browser.assert.element('#chart');
    });

    it('should create a bar chart', () => {
      const d3fault = browser.window.d3fault;
      const d3 = browser.window.d3;
      expect(d3fault.make('BarChart').using(data).in('#chart')).to.be.an('Object');
    });
  });
});
