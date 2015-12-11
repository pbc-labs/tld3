/* eslint-disable no-unused-expressions, no-unused-vars */
export default function (d3fault, expect, assert, should) {
  describe('Library', () => {
    xit('should exist as an Object', () => {
      expect(d3fault).to.exist;
      expect(d3fault).to.be.an('Object');
    });

    xit('should have a make method', () => {
      expect(d3fault.make).to.exist;
    });
  });
}
