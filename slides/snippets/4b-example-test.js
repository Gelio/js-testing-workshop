import { processChartPoint } from './4-single-data-point';

describe('Global temperature chart', () => {
  describe('processChartPoint', () => {
    it('should map temperature below 5 to blue', () => {
      // Arrange
      const dataPoint = { year: '2010', month: '1', temperature: 4 };

      // Act
      const result = processChartPoint(dataPoint);

      // Assert
      expect(result).toEqual({ year: '2010', month: '1', color: 'blue' });
    });
  });
});
