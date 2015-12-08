"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Margin = function Margin(_ref) {
  var top = _ref.top;
  var left = _ref.left;
  var right = _ref.right;
  var bottom = _ref.bottom;

  _classCallCheck(this, Margin);

  this.top = top || 0;
  this.left = left || 0;
  this.right = right || 0;
  this.bottom = bottom || 0;
};

exports.default = Margin;