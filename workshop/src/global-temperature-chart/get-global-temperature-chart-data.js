export function getGlobalTemperatureChartData(fetch, processChartPoint) {
  return fetch('/chart-data.json')
    .then(res => res.json())
    .then(rawData => {
      const processedData = rawData.map(processChartPoint);

      return processedData;
    });
}
