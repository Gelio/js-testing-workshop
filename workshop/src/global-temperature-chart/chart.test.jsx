import React from 'react';
import { render, cleanup, waitForElement, act } from 'react-testing-library';
import { GlobalTemperatureChart } from './chart';

afterEach(cleanup);

describe('GlobalTemperatureChart', () => {
  it('should initially render the loading info', done => {
    const fakeFetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([])
      })
    );

    act(async () => {
      const { getByText } = render(
        <GlobalTemperatureChart fetch={fakeFetch} />
      );

      expect(getByText('Loading')).toBeDefined();

      await waitForElement(() => getByText('Got data: 0'));
      done();
    });
  });

  it('should render the number of data points received', done => {
    const rawChartData = [
      {
        year: '2010',
        month: '1',
        temperature: 7.5
      },
      {
        year: '2010',
        month: '2',
        temperature: 8.5
      }
    ];

    const fakeFetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(rawChartData)
      })
    );

    act(async () => {
      const { getByText } = render(
        <GlobalTemperatureChart fetch={fakeFetch} />
      );

      await waitForElement(() => getByText('Got data: 2'));
      done();
    });
  });

  it('should render an error message if the request fails', done => {
    const fakeFetch = jest.fn(() => Promise.reject(new Error('Network error')));

    act(async () => {
      const { getByText } = render(
        <GlobalTemperatureChart fetch={fakeFetch} />
      );

      await waitForElement(() => getByText(/An error occurred/));
      done();
    });
  });
});
