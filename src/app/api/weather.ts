import axios from 'axios';
import { HourlyForecast, Weather } from './types';

const API_KEY = '920e416e06ad3a34c0ec275b1e96bc49';


export interface CurrentWeatherResponse{
  dt_txt: string
  name: string;
  main: {
    humidity: string;
    pressure: string;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    icon: string
  }[];
  wind: {speed: number}
}

export interface HourlyWeatherResponse{
  list : CurrentWeatherResponse[]
}

export const fetchCurrentWeather = async (latitude: number, longitude: number) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`

  try {
    const response = await axios.get(apiUrl);
    return response.data as CurrentWeatherResponse;
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};

export const fetchHourlyForcast = async (latitude: number, longitude: number) => {
  const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`

  try {
    const response = await axios.get(apiUrl);
    return response.data as HourlyWeatherResponse;
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};

