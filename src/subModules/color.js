export default class Color {
  constructor(colors) {
    this._colors = colors;
  }

  set colors(newColors) {
    if (newColors !== undefined) {
      this._colors = newColors;
    }
  }

  get colors() {
    return this._colors;
  }
}
