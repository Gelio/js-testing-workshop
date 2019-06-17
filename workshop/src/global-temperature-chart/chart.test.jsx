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
});
