export default class AxisOrientation {
  constructor(orientation) {
    this._orientation = orientation;
  }

  set orientation(newOrientation) {
    if (newOrientation !== undefined) {
      this._orientation = newOrientation;
    }
  }

  get orientation() {
    return this._orientation;
  }
}
