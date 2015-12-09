export default class Color {
  constructor(colors) { // pass in array
    this._colors = colors;
  }

  set color(newColors) {
    if (newColors !== undefined) {
      this._colors = newColors;
    }
  }

  get color() {
    return this._colors;
  }
}
