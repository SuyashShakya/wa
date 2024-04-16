"use client";

import { HourlyWeatherResponse, fetchHourlyForcast } from "@/app/api/weather";
import React, { useEffect, useState } from "react";
import { WeatherBox } from "./CurrentWeather";

const HourlyForecast = () => {
  const [weatherData, setWeatherData] = useState<HourlyWeatherResponse>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch user's location using browser's Geolocation API
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const data = await fetchHourlyForcast(latitude, longitude);
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
    <div className="flex flex-col gap-4">
      <p className="text-3xl font-medium">Hourly Forecast</p>
      <div className="flex flex-wrap gap-4">
        {weatherData?.list?.slice(0, 24)?.map((item) => (
          <WeatherBox key={item?.dt_txt} item={item} isHourly />
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
