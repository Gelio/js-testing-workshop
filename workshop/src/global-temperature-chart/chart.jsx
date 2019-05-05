import React, { useEffect, useReducer } from 'react';
import { processChartPoint } from './process-chart-point';
import { getGlobalTemperatureChartData } from './get-global-temperature-chart-data';

function chartReducer(state, action) {
  switch (action.type) {
    case 'success':
      return {
        ...state,
        loading: false,
        chartData: action.chartData
      };

    case 'error':
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
}

export const GlobalTemperatureChart = ({ fetch }) => {
  const [{ loading, chartData, error }, dispatch] = useReducer(chartReducer, {
    loading: true
  });

  useEffect(() => {
    getGlobalTemperatureChartData(fetch, processChartPoint)
      .then(processedData => {
        dispatch({
          type: 'success',
          chartData: processedData
        });
      })
      .catch(error => {
        dispatch({
          type: 'error',
          error
        });
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
