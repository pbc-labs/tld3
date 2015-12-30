/* eslint-disable no-unused-expressions, no-unused-vars */

import Browser from '../../node_modules/zombie';
import tld3 from '../../src/core/core';
import d3 from '../../node_modules/d3';
import chai from '../../node_modules/chai';
import utils from '../../src/utils/utils';
// import data from '../data.js';

const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

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

describe('Utils Tests', () => {
  const browser = new Browser();
  describe('isAcceptableFileExtension', () => {
    it('should accept json as an acceptable file format', () => {
      expect(utils.isAcceptableFileExtension('json')).to.be.true;
    });

    it('should accept csv as an accecptable file format', () => {
      expect(utils.isAcceptableFileExtension('csv')).to.be.true;
    });

    it('should accept tsv as an accecptable file format', () => {
      expect(utils.isAcceptableFileExtension('tsv')).to.be.true;
    });

    it('should reject unaccecptable file formats', () => {
      expect(utils.isAcceptableFileExtension('xml')).to.eql(false);
      expect(utils.isAcceptableFileExtension('txt')).to.eql(false);
      expect(utils.isAcceptableFileExtension('html')).to.eql(false);
    });
  });

  describe('getDataType', () => {
    it('should return a array data type', () => {
      expect(utils.getDataType(data)).to.eql('array');
      expect(utils.getDataType([])).to.eql('array');
    });

    it('should return a location data type', () => {
      expect(utils.getDataType('data.csv')).to.eql('location');
      expect(utils.getDataType('../data.csv')).to.eql('location');
    });

    it('should return an object data type', () => {
      expect(utils.getDataType({})).to.eql('object');
    });

    it('should return json as data type', () => {
      expect(utils.getDataType(JSON.stringify({ 'testing': 909834 }))).to.eql('json');
    });
  });

  xdescribe('getData', () => {
    before((done) => {
      return browser.visit('file://' + __dirname + '/../index.html', done);
    });

    it('should be able to upload data from a csv file', (done) => {
      browser.window.d3.csv('data/barData.csv', (newData, err) => {
        expect(newData).to.an('Object');
        done();
      });
    });

    it('should be able to upload data from a tsv file', () => {
      return browser.window.tld3.upload('data/data.json')
      .then(newdata => {
        expect(newdata).to.equal(data);
      });
    });
    it('should be able to upload data from a json file', () => {
      return browser.window.tld3.upload('data/data.tsv')
      .then(newdata => {
        expect(newdata).to.equal(data);
      });
    });
  });

  describe('isOrdinal', () => {
    it('should return true for ordinal data', () => {
      expect(utils.isOrdinal(data, 'letter')).to.be.true;
    });

    it('should return false for data that is not ordinal', () => {
      expect(utils.isOrdinal(data, 'frequency')).to.be.false;
    });
  });

  describe('isLinear', () => {
    it('should return true for linear data', () => {
      expect(utils.isLinear(data, 'frequency')).to.be.true;
    });

    it('should return false for data that is not linear', () => {
      expect(utils.isLinear(data, 'letter')).to.be.false;
    });
  });

  describe('isAcceptableTimeFormat', () => {
    it('should return true for time data', () => {
      expect(utils.isAcceptableTimeFormat('Jan 1 2015')).to.be.true;
      expect(utils.isAcceptableTimeFormat('January 1 2015')).to.be.true;
      expect(utils.isAcceptableTimeFormat('January 01 2015')).to.be.true;
      expect(utils.isAcceptableTimeFormat('January 2015')).to.be.true;
      expect(utils.isAcceptableTimeFormat('01 January 2015')).to.be.true;
      expect(utils.isAcceptableTimeFormat('2015 Jan 01')).to.be.true;
      expect(utils.isAcceptableTimeFormat('Jan-1-2015')).to.be.true;
      expect(utils.isAcceptableTimeFormat('January-1-2015')).to.be.true;
      expect(utils.isAcceptableTimeFormat('January-01-2015')).to.be.true;
      expect(utils.isAcceptableTimeFormat('January-2015')).to.be.true;
      expect(utils.isAcceptableTimeFormat('01-January-2015')).to.be.true;
      expect(utils.isAcceptableTimeFormat('2015-Jan-01')).to.be.true;
      expect(utils.isAcceptableTimeFormat('Jan/1/2015')).to.be.true;
      expect(utils.isAcceptableTimeFormat('January/1/2015')).to.be.true;
      expect(utils.isAcceptableTimeFormat('January/01/2015')).to.be.true;
      expect(utils.isAcceptableTimeFormat('January/2015')).to.be.true;
      expect(utils.isAcceptableTimeFormat('01/January/2015')).to.be.true;
      expect(utils.isAcceptableTimeFormat('2015/Jan/01')).to.be.true;
    });

    it('should return false for data that is not time data', () => {
      expect(utils.isAcceptableTimeFormat('hello')).to.be.false;
      expect(utils.isAcceptableTimeFormat('2015 January ONE')).to.be.false;
      expect(utils.isAcceptableTimeFormat(99)).to.be.false;
      expect(utils.isAcceptableTimeFormat('99')).to.be.false;
    });
  });

  describe('isTIme', () => {
    it('should return true for column data that does have time data', () => {
      expect(utils.isTime([{ 'test': 'January/2015' }], 'test')).to.be.true;
    });

    it('should return false for column data that does have time data', () => {
      expect(utils.isTime([{ 'test': 'Hello World!' }], 'test')).to.be.false;
    });
  });

  describe('getColumnNames', () => {
    it('should return array of column names', () => {
      expect(utils.getColumnNames(data)).to.eql(['letter', 'frequency']);
    });
  });

  describe('getFirstOrdinalColumn', () => {
    it('should return first ordinal column', () => {
      expect(utils.getFirstOrdinalColumn(data)).to.equal('letter');
    });
  });

  describe('getFirstLinearColumn', () => {
    it('should return first linear column', () => {
      expect(utils.getFirstLinearColumn(data)).to.equal('frequency');
    });
  });

  describe('getFirstTimeColumn', () => {
    it('should return null if no time columns exit', () => {
      expect(utils.getFirstTimeColumn([{ 'testNum': 99, 'testTime': 'January/2015' }])).to.eql('testTime');
    });

    it('should return null if no time columns exit', () => {
      expect(utils.getFirstTimeColumn(data)).to.be.null;
    });
  });

  describe('parseTimeData', () => {
    it('should convert data into time format', () => {
      expect(utils.parseTimeData([{ test: '02-12-2012' }, { test: '02-11-2012' }, { test: '02-11-2015' }], 'test'))
      .to.eql([{ test: new Date('02-12-2012') }, { test: new Date('02-11-2012') }, { test: new Date('02-11-2015') }]);
    });
  });

  describe('parseNumberData', () => {
    it('should convert data into Number', () => {
      expect(utils.parseNumberData([{ test: '2' }, { test: '7' }, { test: '8' }], 'test')).to.be.eql([{ test: 2 }, { test: 7 }, { test: 8 }]);
    });
  });
});
