const rawChartData = [
  {
    year: '2001',
    month: '1',
    temperature: 8,
  },
];

const fakeFetch = () =>
  Promise.resolve({
    json: () => Promise.resolve(rawChartData),
  });

expect(getGlobalTemperatureChartData(fakeFetch)).resolves.toEqual([
  {
    year: '2001',
    month: '1',
    color: 'red',
  },
]);
