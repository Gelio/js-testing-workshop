import React, { useState, useEffect } from 'react';

export const GlobalTemperatureChart = () => {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/chart-data.json')
      .then((res) => res.json())
      .then((rawData) => {
        const processedData = rawData.map(({ year, month, temperature }) => {
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
        });

        setLoading(false);
        setChartData(processedData);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>An error occurred while downloading data</div>;
  }

  return <Chart chartData={chartData} />;
};
