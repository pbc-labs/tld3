/* eslint-disable no-unused-expressions, no-unused-vars */
import Browser from '../node_modules/zombie';
import chai from '../node_modules/chai';

const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

describe('Browser Test', () => {
  const browser = new Browser();

  beforeEach(() => {
    return browser.visit('file://' + __dirname + '/index.html');
  });

  it('should find a div with \'chart\' id', () => {
    browser.assert.element('#chart');
  });

  it('should have the tld3 library loaded', () => {
    browser.assert.global('tld3');
  });

  it('should have the d3 library loaded', () => {
    browser.assert.global('d3');
  });

  it('should make a chart', () => {
    const chart = browser.window.tld3.make('BarChart');
    expect(chart).to.exist;
    expect(chart).to.be.an('Object');
  });
});
