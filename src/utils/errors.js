
/*
Holds various error classes used throughout the library
*/

const errors = {

  UnacceptableFileExtensionError: class UnacceptableFileExtensionError extends Error {
    constructor() {
      super();
      this.name = 'UnacceptableFileExtensionError';
      this.message = 'Only .csv, .tsv, and .json are acceptable file extensions';
    }
  },

  MarginsFormatError: class MarginsFormatError extends Error {
    constructor() {
      super();
      this.name = 'MarginsFormatError';
      this.message = 'New margins must be an object with top, right, bottom and left defined';
    }
  },

  WidthError: class WidthError extends Error {
    constructor() {
      super();
      this.name = 'WidthError';
      this.message = 'Width must be a Number';
    }
  },

  HeightError: class HeightError extends Error {
    constructor() {
      super();
      this.name = 'HeightError';
      this.message = 'Height must be a Number';
    }
  },

  TitleError: class TitleError extends Error {
    constructor() {
      super();
      this.name = 'TitleError';
      this.message = 'Title must be a Number or String';
    }
  },

  FontSizeError: class FontSizeError extends Error {
    constructor() {
      super();
      this.name = 'FontSizeError';
      this.message = 'Font size must be a Number';
    }
  },

  FontStyleError: class FontStyleError extends Error {
    constructor() {
      super();
      this.name = 'FontStyleError';
      this.message = 'Font style must be a string';
    }
  },

  ColorError: class ColorError extends Error {
    constructor() {
      super();
      this.name = 'ColorError';
      this.message = 'Colors must be an array of colors';
    }
  },

  InBeforeUsingError: class InBeforeUsingError extends Error {
    constructor() {
      super();
      this.name = 'InBeforeUsingError';
      this.message = 'The "in" function can only be used after the "using" function has been used';
    }
  },

  NoDataError: class NoDataError extends Error {
    constructor() {
      super();
      this.name = 'NoDataError';
      this.message = 'Must pass in data, data cannot be undefined';
    }
  },

  DateError: class DateError extends Error {
    constructor() {
      super();
      this.name = 'DateError';
      this.message = 'Error formatting date, use updateTimeFormat function set custom formatting';
      this.constructor = this;
      Error.captureStackTrace(this, this.constructor.name);
    }
  },

};

export default errors;
