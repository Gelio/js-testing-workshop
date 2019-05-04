export function processChartPoint({ year, month, temperature }) {
  if (temperature < 5) {
    return {
      year,
      month,
      color: 'blue'
    };
  }

  if (temperature < 6.5) {
    return {
      year,
      month,
      color: 'yellow'
    };
  }

  if (temperature < 8) {
    return {
      year,
      month,
      color: 'orange'
    };
  }

  return {
    year,
    month,
    color: 'red'
  };
}
