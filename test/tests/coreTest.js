/* eslint-disable no-unused-expressions, no-unused-vars */
import tld3 from '../../src/core/core';
import d3 from '../../node_modules/d3';
import chai from '../../node_modules/chai';

const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

describe('Library', () => {
  xit('should exist as an Object', () => {
    expect(tld3).to.exist;
    expect(tld3).to.be.an('Object');
  });

  xit('should have a make method', () => {
    expect(tld3.make).to.exist;
  });
});
