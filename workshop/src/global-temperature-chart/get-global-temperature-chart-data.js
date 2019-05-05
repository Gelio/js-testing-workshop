import { processChartPoint } from './process-chart-point';

export function getGlobalTemperatureChartData(fetch) {
  return fetch('/chart-data.json')
    .then(res => res.json())
    .then(rawData => {
      const processedData = rawData.map(processChartPoint);

      return processedData;
    });
}
