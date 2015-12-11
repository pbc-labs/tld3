/* eslint-disable no-unused-expressions, no-unused-vars */
import d3fault from '../src/core/core';
import d3 from '../node_modules/d3';
import chai from '../node_modules/chai';

const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

// import coreTest from './unit-tests/coreTest.js';
import chartMainTest from './unit-tests/chartMainTest.js';

// coreTest(d3fault, expect, assert, should);
chartMainTest(d3fault, expect, assert, should);
