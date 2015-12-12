/* eslint-disable no-unused-expressions, no-unused-vars */
import Browser from '../../node_modules/zombie';
import chai from '../../node_modules/chai';

const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

describe('Browser Test', () => {
  const browser = new Browser();

  before(() => {
    return browser.visit('file://' + __dirname + '/../index.html');
  });

  it('should be find a div with \'chart\' id', () => {
    browser.assert.element('#chart');
  });

  it('should have the d3fault library loaded', () => {
// TODO: call d3fault and d3
  });
});
