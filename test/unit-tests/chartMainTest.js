/* eslint-disable no-unused-expressions, no-unused-vars */
export default function (d3fault, expect, assert, should) {
  describe('Main Chart Constructor', () => {
    it('should return an object when called to make a chart', () => {
      expect(d3fault.make('BarChart')).to.exist;
    });

    it('should return an object when called to make a chart', () => {
      expect(d3fault.make('BarChart')).to.be.an('Object');
    });

    describe('Default properties', () => {
      const chart = d3fault.make('BarChart');
      it('should have a default width property of 600', () => {
        expect(chart.getWidth).to.equal(600);
      });

      it('should use setter method to update default width property to 700', () => {
        chart.setWidth = 700;
        expect(chart.getWidth).to.equal(700);
      });

      it('should have a default height property of 300', () => {
        expect(chart.getHeight).to.equal(300);
      });

      it('should use setter method to update default height property to 400', () => {
        chart.setHeight = 400;
        expect(chart.getHeight).to.equal(400);
      });

      it('should have default top margins property of 30', () => {
        const defaultMargins = { top: 30, right: 30, bottom: 30, left: 50 };
        expect(chart.getMargins).to.deep.equal(defaultMargins);
      });

      it('should use setter method to update default margins property', () => {
        const newMargins = { top: 50, right: 30, bottom: 50, left: 30 };
        chart.setMargins = newMargins;
        expect(chart.getMargins).to.deep.equal({ top: 50, right: 30, bottom: 50, left: 30 }).and.to.be.an('object');
      });

      it('should have a default colors array', () => {
        expect(chart.getColors).to.deep.equal(['steelblue', 'red', 'green']).and.to.be.an('array');
      });

      it('should use setter method to update default colors array', () => {
        chart.setColors = ['green', 'blue'];
        expect(chart.getColors).to.deep.equal(['green', 'blue']);
      });

      it('should have a default chart title', () => {
        expect(chart.getTitle).to.equal('Default title, YO!').and.to.be.a('string');
      });

      it('should use setter method to update default chart title', () => {
        chart.setColors = 'My hella cool new title, yo!';
        expect(chart.getColors).to.deep.equal('My hella cool new title, yo!');
      });

      it('should have a default font size of 14', () => {
        expect(chart.getFontSize).to.equal(14).and.to.be.a('number');
      });

      it('should use setter method to update default size', () => {
        chart.setFontSize = 22;
        expect(chart.getFontSize).to.equal(22);
      });

      it('should have a default font style of Arial', () => {
        expect(chart.getFontStyle).to.equal('Arial').and.to.be.a('string');
      });

      it('should use setter method to update default font style', () => {
        chart.setFontStyle = 'Comic Sans'; // ha, ha, ha...
        expect(chart.getFontStyle).to.equal('Comic Sans');
      });

      it('should have a default x axis label', () => {
        expect(chart.getxAxisLabel).to.equal('x Axis Label').and.to.be.a('string');
      });

      it('should use setter method to update default x axis label', () => {
        chart.setxAxisLabel = 'new x axis, weee';
        expect(chart.getxAxisLabel).to.equal('new x axis, weee');
      });

      it('should have a default y axis label', () => {
        expect(chart.getyAxisLabel).to.equal('y Axis Label').and.to.be.a('string');
      });

      it('should use setter method to update default y axis label', () => {
        chart.setyAxisLabel = 'new y axis, weee';
        expect(chart.getyAxisLabel).to.equal('new y axis, weee');
      });

      it('should have a default x axis orientation set to bottom', () => {
        expect(chart.getxAxisOrientation).to.equal('bottom').and.to.be.a('string');
      });

      it('should use setter method to update default x axis orientation', () => {
        chart.setxAxisOrientation = 'top';
        expect(chart.getxAxisOrientation).to.equal('top');
      });

      it('should have a default y axis orientation set to bottom', () => {
        expect(chart.getyAxisOrientation).to.equal('left').and.to.be.a('string');
      });

      it('should use setter method to update default y axis orientation', () => {
        chart.setyAxisOrientation = 'right';
        expect(chart.getyAxisOrientation).to.equal('right');
      });
    });

    describe('Chart Main Update Methods', () => {
      const chart = d3fault.make('BarChart');
      describe('Creation Methods', () => {
        it('should have a using method', () => {
          expect(chart.using).to.exist;
        });

        it('should set data passed into using method as chart.data', () => {
          const data =
            [
            { 'letter': 'A', 'frequency': 0.08167 },
            { 'letter': 'B', 'frequency': 0.01492 },
            { 'letter': 'C', 'frequency': 0.02782 },
            { 'letter': 'D', 'frequency': 0.04253 },
            { 'letter': 'E', 'frequency': 0.12702 },
            { 'letter': 'F', 'frequency': 0.02288 },
            { 'letter': 'G', 'frequency': 0.02015 },
            { 'letter': 'H', 'frequency': 0.06094 },
            { 'letter': 'I', 'frequency': 0.06966 },
            { 'letter': 'J', 'frequency': 0.00153 },
            { 'letter': 'K', 'frequency': 0.00772 },
            { 'letter': 'L', 'frequency': 0.04025 },
            { 'letter': 'M', 'frequency': 0.02406 },
            { 'letter': 'N', 'frequency': 0.06749 },
            { 'letter': 'O', 'frequency': 0.07507 },
            { 'letter': 'P', 'frequency': 0.01929 },
            { 'letter': 'Q', 'frequency': 0.00095 },
            { 'letter': 'R', 'frequency': 0.05987 },
            { 'letter': 'S', 'frequency': 0.06327 },
            { 'letter': 'T', 'frequency': 0.09056 },
            { 'letter': 'U', 'frequency': 0.02758 },
            { 'letter': 'V', 'frequency': 0.00978 },
            { 'letter': 'W', 'frequency': 0.0236 },
            { 'letter': 'X', 'frequency': 0.0015 },
            { 'letter': 'Y', 'frequency': 0.01974 },
            { 'letter': 'Z', 'frequency': 0.00074 },
            ];

          chart.using(data)
          expect(chart.data).to.deep.equal(data);
        });

        it('should have an in method', () => {
          expect(chart.in).to.exist;
        });
      });

      describe('selectElement', () => {
        xit('should have a selectElement method', () => {
          expect(chart.selectElement).to.exist;
        });
      });

      describe('setMargin', () => {
        xit('should have a setMargin method', () => {
          expect(chart.setMargins).to.exist;
        });

        xit('should set default margins if no parameters are passed in', () => {
          const defaultMargins = { '_bottom': 30, '_left': 50, '_right': 30, '_top': 30 };
          expect(chart.setMargins().margins).to.eql(defaultMargins);
        });

        xit('should set custom margins if parameters are passed in', () => {
          const customMargins = { 'bottom': 1, 'left': 1, 'right': 1, 'top': 1 };
          expect(chart.setMargins(customMargins).margins).to.eql(customMargins);
        });
      });

      describe('setWidth', () => {
        xit('should have a setWidth method', () => {
          expect(chart.setWidth).to.exist;
        });

        xit('should set default width if no parameters are passed in', () => {
          expect(chart.setWidth().width.width).to.equal(600);
        });

        xit('should set custom width if parameters are passed in', () => {
          expect(chart.setWidth(300).width.width).to.equal(300);
        });
      });

      describe('setHeight', () => {
        xit('should have a setHeight method', () => {
          expect(chart.setHeight).to.exist;
        });

        xit('should set default height if no parameters are passed in', () => {
          expect(chart.setHeight().height.height).to.equal(300);
        });

        xit('should set custom height if parameters are passed in', () => {
          expect(chart.setHeight(700).height.height).to.equal(700);
        });
      });

      describe('setScale methods', () => {
        xit('should have a setXscale method', () => {
          expect(chart.setXscale).to.exist;
        });

        xit('should have a setYscale method', () => {
          expect(chart.setYscale).to.exist;
        });
        // TODO: write test for functionality
      });

      describe('setAxisStyle methods', () => {
        xit('should have a setAxisPathStyle method', () => {
          expect(chart.setAxisPathStyle).to.exist;
        });

        xit('should have a setAxisLineStyle method', () => {
          expect(chart.setAxisLineStyle).to.exist;
        });
        // TODO: write test for functionality
      });

      describe('setColors', () => {
        xit('should have a setColors method', () => {
          expect(chart.setColors).to.exist;
        });

        xit('should set default colors if no parameters are passed in', () => {
          const defaultColors = [];
          expect(chart.setColors().colors).to.eql(defaultColors);
        });

        xit('should set custom colors if parameters are passed in', () => {
          const customColors = ['black', 'grey', 'chartruse'];
          expect(chart.setColors(customColors).colors).to.eql(customColors);
        });
      });

      describe('setTitle', () => {
        xit('should have a setTitle method', () => {
          expect(chart.setTitle).to.exist;
        });

        xit('should set the default title if no parameters are passed in', () => {
          expect(chart.setTitle().title.title).to.eql('Chart');
        });

        xit('should set the title correctly', () => {
          expect(chart.setTitle('ChartNumberOne').title.title).to.eql('ChartNumberOne');
        });
      });

      describe('setFontSize', () => {
        xit('should have a setFontSize method', () => {
          expect(chart.setFontSize).to.exist;
        });

        xit('should set default font size if no parameters are passed in', () => {
          // TODO: write test for default font sizing
        });

        xit('should set custom font size if parameters are passed in', () => {
          // TODO: write test for custom font sizing
        });
      });

      describe('createLegend', () => {
        xit('should have a createLegend method', () => {
          expect(chart.createLegend).to.exist;
        });

        xit('should create a legend with the options passed it', () => {
          // TODO: write tests for functionality
        });
      });
    });
  });
}
