import React from 'react';

export class GlobalTemperatureChart extends Component {
  state = {
    loading: true,
    chartData: null,
    error: null,
  };

  componentDidMount() {
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

        this.setState({
          loading: false,
          chartData: processedData,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error,
        });
      });
  }

  render() {
    const { loading, chartData, error } = this.state;

    if (loading) {
      return <div>Loading</div>;
    }

    if (error) {
      return <div>An error occurred while downloading data</div>;
    }

    return <Chart chartData={chartData} />;
  }
}
