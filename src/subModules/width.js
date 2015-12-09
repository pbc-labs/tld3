export default class Width {
  constructor(width) {
    this._width = width;
  }

  set width(width) {
    this._width = width;
    // update d3 width
  }
}
