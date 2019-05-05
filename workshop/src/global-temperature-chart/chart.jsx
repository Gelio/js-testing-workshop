import React, { useState, useEffect } from 'react';
import { getGlobalTemperatureChartData } from './get-global-temperature-chart-data';

export const GlobalTemperatureChart = () => {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getGlobalTemperatureChartData(window.fetch)
      .then(processedData => {
        setLoading(false);
        setChartData(processedData);
      })
      .catch(error => {
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

  return <div>{chartData}</div>;
};
