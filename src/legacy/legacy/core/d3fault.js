'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
This defines our main library object.
@private
*/

var D3fault = {
  version: '1.0.0',
  make: function make(chartType) {
    return new charts[chartType]();
  }
};

exports.default = D3fault;