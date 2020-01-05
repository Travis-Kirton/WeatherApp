// react and runtime components
import React, { Component } from 'react';
import {
  WeatherDiv,
  WeatherPara,
  Div,
  Span
} from './styleComponents/weatherTileStyle';
import Moment from 'react-moment';
import WeatherIcon from 'react-open-weather-icons';

Moment.globalFormat = 'ddd MMM DD';

export class WeatherTile extends Component {
  constructor(props) {
    super(props);
  }

  tempToCelcius = temp => {
    return temp - 273;
  };

  tempToFahrenheit = temp => {
    return Math.floor((temp - 273) * (9 / 5) + 32);
  };

  render() {
    const { data, index } = this.props; // OpenWeatherMap Data object & date index

    const date = new Date(data.list[index].dt);
    const description = data.list[index].weather[0].description;
    const currTemp = data.list[index].temp.day;
    const fahrenheit = this.tempToFahrenheit(currTemp);
    const iconId = data.list[index].weather[0].icon;

    const initialMaxTemp = data.list[index].temp.max;
    const calculatedMaxTemp = this.tempToFahrenheit(initialMaxTemp);

    const initialMinTemp = data.list[index].temp.min;
    const calculatedMinTemp = this.tempToFahrenheit(initialMinTemp);

    return (
      <WeatherDiv>
        <WeatherPara>
          <Moment unix>{date}</Moment>
        </WeatherPara>

        <Div width={'350px'} height={'100px'}>
          <Div
            width={'125px'}
            height={'125px'}
            float={'left'}
            marginLeft={'50px'}
          >
            <WeatherIcon name={iconId} className="my-awesome-icon" />
          </Div>
          <Div
            width={'50px'}
            height={'100px'}
            float={'left'}
            marginLeft={'25px'}
          >
            <WeatherPara>{fahrenheit}°F</WeatherPara>
          </Div>
        </Div>
        <Div width={'350px'} height={'40px'}>
          <WeatherPara fontSize={'28px'}>{description}</WeatherPara>
        </Div>
        <Div width={'300px'} height={'40px'} float={'left'}>
          <WeatherPara fontSize={'24px'}>
            Max Temp{' '}
            <Span float={'right'} fontSize={'28px'}>
              {calculatedMaxTemp}°F
            </Span>
          </WeatherPara>
        </Div>
        <Div width={'300px'} height={'40px'} float={'left'}>
          <WeatherPara fontSize={'24px'}>
            Min Temp{' '}
            <Span float={'right'} fontSize={'28px'}>
              {calculatedMinTemp}°F
            </Span>
          </WeatherPara>
        </Div>
      </WeatherDiv>
    );
  }
}
