import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { Spinner, WeatherPara } from './styleComponents/weatherTileStyle';

export class LoadingSpinner extends React.Component {
  render() {
    return (
      <Spinner>
        <WeatherPara fontSize={'28px'}>Loading weather...</WeatherPara>
        <Loader type="TailSpin" color="#000000" height={100} width={100} />
      </Spinner>
    );
  }
}
