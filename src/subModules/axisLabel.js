export default class AxisLabel {
  constructor(label) {
    this._label = label;
  }

  set label(newLabel) {
    if (newLabel !== undefined) {
      this._label = newLabel;
    }
  }

  get label() {
    return this._label;
  }
}
