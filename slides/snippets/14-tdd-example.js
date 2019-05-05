function processChartPoint({ year, month, temperature }) {
  if (temperature < 5) {
    return {
      year,
      month,
      color: 'blue',
    };
  }

  if (temperature < 6.5) {
    return {
      year,
      month,
      color: 'yellow',
    };
  }

  if (temperature < 8) {
    return {
      year,
      month,
      color: 'orange',
    };
  }

  return {
    year,
    month,
    color: 'red',
  };
}

function processChartPoint({ year, month, temperature }) {}

describe('processChartPoint', () => {
  it('should return an object with the same year and month as passed in', () => {
    const rawPointData = {
      year: '2010',
      month: '1',
      temperature: 8,
    };

    const result = processChartPoint(rawPointData);

    expect(result.year).toBe('2010');
    expect(result.month).toBe('1');
  });
});

function processChartPoint({ year, month, temperature }) {
  return {
    year,
    month,
  };
}

describe('processChartPoint', () => {
  it('should return an object with the same year and month as passed in', () => {
    const rawPointData = {
      year: '2010',
      month: '1',
      temperature: 8,
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
        temperature: 4,
      };

      const result = processChartPoint(rawPointData);

      expect(result.color).toBe('blue');
    });
  });
});

function processChartPoint({ year, month, temperature }) {
  return {
    year,
    month,
    color: 'blue',
  };
}

describe('processChartPoint', () => {
  it('should return an object with the same year and month as passed in', () => {
    const rawPointData = {
      year: '2010',
      month: '1',
      temperature: 8,
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
        temperature: 4,
      };

      const result = processChartPoint(rawPointData);

      expect(result.color).toBe('blue');
    });

    it('should be yellow when the temperature is between 5 and 6.5', () => {
      const rawPointData = {
        year: '2010',
        month: '1',
        temperature: 5.5,
      };

      const result = processChartPoint(rawPointData);

      expect(result.color).toBe('yellow');
    });
  });
});

function processChartPoint({ year, month, temperature }) {
  if (temperature < 5) {
    return {
      year,
      month,
      color: 'blue',
    };
  }

  return {
    year,
    month,
    color: 'yellow',
  };
}

// ...
