import React, { useState, useEffect } from 'react';
import { processChartPoint } from './4-single-data-point';

export const GlobalTemperatureChart = () => {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/chart-data.json')
      .then(res => res.json())
      .then(rawData => {
        const processedData = rawData.map(processChartPoint);

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

  return <div>{chartData.length}</div>;
};
