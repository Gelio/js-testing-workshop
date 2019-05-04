import React, { useState, useEffect } from 'react';
import { processChartPoint } from './4-single-data-point';
import { getGlobalTemperatureChartData } from './7-data-fetching-with-di';

export const GlobalTemperatureChart = () => {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getGlobalTemperatureChartData(window.fetch, processChartPoint)
      .then((processedData) => {
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
