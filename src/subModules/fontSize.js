export default class Fontsize {
  constructor(fontSize) {
    this._fontSize = fontSize;
  }

  set fontSize(newfontSize) {
    if (newfontSize !== undefined) {
      this._fontSize = newfontSize;
    }
  }

  setter(size) {
    this._fontSize = size;
  }

  get fontSize() {
    return this._fontSize;
  }
}
