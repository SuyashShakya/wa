"use client";

import { CurrentWeatherResponse, fetchCurrentWeather } from "@/app/api/weather";
import React, { useEffect, useState } from "react";
import { getWeatherIcon } from "./WeatherIcon";

export const WeatherBox = (props: {
  item: CurrentWeatherResponse;
  isHourly: boolean;
}) => {
  const { item, isHourly } = props;
  return (
    <div className="flex flex-col p-4 bg-gray-100 rounded-md gap-4">
      {isHourly && (
        <p>
          <b>Time</b>: {item?.dt_txt.split(" ")[1]}
        </p>
      )}
      <p>
        <b>Temperature</b>: {`${item?.main?.temp} K`}
      </p>
      <p>
        <b>Max Temperature</b>: {`${item?.main?.temp_max} K`}
      </p>
      <p>
        <b>Min Temperature</b>: {`${item?.main?.temp_min} k`}
      </p>
      <p>
        <b>Humidity</b>: {item?.main?.humidity}
      </p>
      <p>
        <b>Wind Speed</b>: {item?.wind?.speed}
      </p>
      <div className="flex items-center gap-4">
        <p>
          <b>Weather Icon:</b>
        </p>
        {getWeatherIcon(item?.weather[0]?.icon)}
      </div>
    </div>
  );
};

const CurrentWeather = () => {
  const [weatherData, setWeatherData] = useState<CurrentWeatherResponse>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch user's location using browser's Geolocation API
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const data = await fetchCurrentWeather(latitude, longitude);
          setWeatherData(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching weather data:", error);
          setLoading(false);
        }
      },
      (error) => {
        console.error("Error getting user location:", error);
        setLoading(false);
      }
    );
  }, []);
  if (!weatherData) {
    return <div>loading</div>;
  }
  return (
    <div className="flex flex-col items-center gap-4 ">
      <p className="text-3xl font-medium">Current Weather</p>
      <WeatherBox item={weatherData} isHourly={false} />
    </div>
  );
};

export default CurrentWeather;
