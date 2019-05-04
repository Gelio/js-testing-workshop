import React, { useState, useEffect } from 'react';
import { processChartPoint } from './process-chart-point';
import { getGlobalTemperatureChartData } from './get-global-temperature-chart-data';

export const GlobalTemperatureChart = ({ fetch }) => {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getGlobalTemperatureChartData(fetch, processChartPoint)
      .then(processedData => {
        setLoading(false);
        setChartData(processedData);
      })
      .catch(error => {
        setLoading(false);
        setError(error);
      });
  }, [fetch]);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>An error occurred while downloading data</div>;
  }

  return <div>Got data: {chartData.length}</div>;
};
