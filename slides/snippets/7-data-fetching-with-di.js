import { processChartPoint } from './4-single-data-point';

export function getGlobalTemperatureChartData(fetch) {
  return fetch('/chart-data.json')
    .then((res) => res.json())
    .then((rawData) => {
      const processedData = rawData.map(processChartPoint);

      return processedData;
    });
}

// usage:
getGlobalTemperatureChartData(window.fetch);
