export default class Fontstyle {
  constructor(fontStyle) {
    this._fontStyle = fontStyle;
  }

  set fontStyle(newfontStyle) {
    if (newfontStyle !== undefined) {
      this._fontStyle = newfontStyle;
    }
  }

  get fontStyle() {
    return this._fontStyle;
  }
}
