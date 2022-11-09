import React, { useEffect } from "react";
import { useState } from "react";
import {
  Loc,
  todayWeatherType,
  futureWeatherType,
  Context,
  CityName,
} from "../Types/type";
const apiKey: string = "66bf90ee7ac24837bb6104004220611";

export const WeatherContext = React.createContext<Context>({
  cityName: undefined,
  setCityName: (city: string) => {},
  todayWeather: {},
  futureWeather: {},
});
export const WeatherContextProvider = (props: any) => {
  const [cityName, setCityName] = useState<CityName>();
  const [geo, setGeo] = useState(false);
  const [todayWeather, setTodayWeather] = useState<todayWeatherType>();
  const [futureWeather, setFutureWeather] = useState<futureWeatherType>();
  const [location, setLocation] = useState<Loc>({ lat: null, lon: null });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const newLoc = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      setLocation(newLoc);
    });
    setGeo(true);
    if (geo === true && location.lat != null && location.lon != null) {
      const getWeather = async (apiKey: string) => {
        try {
          const res = await fetch(
            cityName === undefined
              ? `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location.lat},${location.lon}&days=6`
              : `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=6`
          );
          const data = await res.json();
          const todayWeatherData = {
            city: data.location.name,
            temp: data.current.temp_c,
            iconText: data.current.condition.text,
            humidity: data.current.humidity,
            wind: data.current.wind_kph,
          };

          setTodayWeather(todayWeatherData);
          const futureWeatherData = [];
          for (let i = 1; i < 6; i++) {
            const futureData = {
              temp: data.forecast.forecastday[i].day.avgtemp_c,
              iconText: data.forecast.forecastday[i].day.condition.text,
              date: data.forecast.forecastday[i].date,
            };
            futureWeatherData.push(futureData);
          }
          setFutureWeather(futureWeatherData);
        } catch (e) {
          console.log(e);
        }
      };
      getWeather(apiKey);
    } else {
      return;
    }
  }, [location.lon, location.lat, geo, cityName]);

  return (
    <WeatherContext.Provider
      value={{
        cityName: cityName,
        setCityName: setCityName,
        todayWeather: todayWeather,
        futureWeather: futureWeather,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
