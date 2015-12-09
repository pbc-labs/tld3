export default class Title {
  constructor(title) {
    this._title = title;
  }

  set title(newtitle) {
    if (newtitle !== undefined) {
      this._title = newtitle;
    }
  }

  get title() {
    return this._title;
  }
}
