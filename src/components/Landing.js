// react and runtime components
import React, { Component } from 'react';
import { WeatherTile } from './WeatherTile';
import { LoadingSpinner } from './LoadingSpinner';
import { weatherAPI } from '../API/offBoardWeather';
import { Screen, Wrap, LocationHead } from './styleComponents/weatherTileStyle';

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: undefined,
      data: undefined,
      timeOutOver: false
    };
  }

  componentDidMount() {
    weatherAPI().then(data => {
      let location = data.city.name + ', ' + data.city.country;
      this.setState({ location: location, data: data });
    });

    setTimeout(() => {
      this.setState({ timeoutOver: true });
    }, 3000);
  }

  render() {
    return this.state.data && this.state.timeoutOver ? (
      <Screen>
        <LocationHead marginRight={'100px'}>{this.state.location}</LocationHead>
        <Wrap>
          {[0, 1, 2, 3, 4].map(index => (
            <WeatherTile data={this.state.data} index={index} />
          ))}
        </Wrap>
      </Screen>
    ) : (
      <LoadingSpinner></LoadingSpinner>
    );
  }
}
