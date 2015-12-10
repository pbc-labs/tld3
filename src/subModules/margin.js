export default class Margins {
  constructor({ top, left, right, bottom }) {
    this._top = top || 0;
    this._left = left || 0;
    this._right = right || 0;
    this._bottom = bottom || 0;
  }

  set margins(newMargins) {
    if (newMargins.top !== undefined) {
      this._top = newMargins.top;
    }
    if (newMargins.left !== undefined) {
      this._top = newMargins.left;
    }
    if (newMargins.right !== undefined) {
      this._top = newMargins.right;
    }
    if (newMargins.bottom !== undefined) {
      this._top = newMargins.bottom;
    }
  }

  get margins() {
    return {
      'top': this._top,
      'left': this._left,
      'right': this._right,
      'bottom': this._bottom,
    };
  }
}
