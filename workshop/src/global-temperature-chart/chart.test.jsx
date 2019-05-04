import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';
import { GlobalTemperatureChart } from './chart';

afterEach(cleanup);

describe('GlobalTemperatureChart', () => {
  it('should initially render the loading info', () => {
    const fakeFetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([])
      })
    );

    const { getByText } = render(<GlobalTemperatureChart fetch={fakeFetch} />);

    console.log(getByText('Loading'));
    expect(getByText('Loading')).toBeDefined();
  });
});
