import { processChartPoint } from './process-chart-point';

describe('processChartPoint', () => {
  it('should return an object with the same year and month as passed in', () => {
    const rawPointData = {
      year: '2010',
      month: '1',
      temperature: 8
    };

    const result = processChartPoint(rawPointData);

    expect(result.year).toBe('2010');
    expect(result.month).toBe('1');
  });

  describe('returned color', () => {
    it('should be blue when the temperature is below 5', () => {
      const rawPointData = {
        year: '2010',
        month: '1',
        temperature: 4
      };

      const result = processChartPoint(rawPointData);

      expect(result.color).toBe('blue');
    });

    it('should be yellow when the temperature is between 5 and 6.5', () => {
      const rawPointData = {
        year: '2010',
        month: '1',
        temperature: 5.5
      };

      const result = processChartPoint(rawPointData);

      expect(result.color).toBe('yellow');
    });
  });
});
