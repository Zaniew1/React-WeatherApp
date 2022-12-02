import React, { useEffect } from "react";
import { useState } from "react";
import {
  LocType,
  todayWeatherType,
  futureWeatherType,
  ContextType,
  CityNameType,
  BadValueType,
  WeatherContextPropsType,
} from "../Types/type";
const apiKey: string = "7c0f37f90300495283c174252220212";
const numberOfDays:number = 7;
const defaultFutureWeather = [
  {
    temp: 0,
    iconText: "",
    date: "",
  },
];
const defaultTodayWeather = {
  city: "",
  temp: 0,
  humidity: 0,
  wind: 0,
};
export const WeatherContext = React.createContext<ContextType>({
  cityName: "Warszawa",
  noSuchCity: false,
  setCityName: (city: string) => {},
  todayWeather: {
    city: "",
    temp: 0,
    humidity: 0,
    wind: 0,
  },
  futureWeather: [{ temp: 0, iconText: "", date: "" }],
});

export const WeatherContextProvider = (props: WeatherContextPropsType) => {
  const [cityName, setCityName] = useState<CityNameType>("");
  const [todayWeather, setTodayWeather] =
    useState<todayWeatherType>(defaultTodayWeather);
  const [futureWeather, setFutureWeather] =
    useState<futureWeatherType>(defaultFutureWeather);
  const [location, setLocation] = useState<LocType>({ lat: null, lon: null });
  const [noSuchCity, setNoSuchCity] = useState<BadValueType>(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const newLoc: {lat: number, lon: number} = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      setLocation(newLoc);
    });

    if (location.lat != null && location.lon != null) {
      const getWeather = async (apiKey: string) => {
        try {
          const res = await fetch(
            !cityName
              ? `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location.lat},${location.lon}&days=${numberOfDays}`
              : `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=${numberOfDays}`
          );
          const data = await res.json();
          const todayWeatherData = {
            city: data.location.name,
            temp: data.current.temp_c,
            humidity: data.current.humidity,
            wind: data.current.wind_kph,
          };
          setTodayWeather(todayWeatherData);
          const futureWeatherData = [];
          for (let i:number = 1; i < numberOfDays; i++) {
            const futureData = {
              temp: data.forecast.forecastday[i].day.avgtemp_c,
              iconText: data.forecast.forecastday[i].day.condition.text,
              date: data.forecast.forecastday[i].date,
            };
            futureWeatherData.push(futureData);
          }
          setNoSuchCity(false);
          setFutureWeather(futureWeatherData);
        } catch (e) {
          console.log(e);
          setNoSuchCity(true);
          setTodayWeather(defaultTodayWeather);
          setFutureWeather(defaultFutureWeather);
        }
      };
      getWeather(apiKey);
    } else {
      return;
    }
  }, [location.lon, location.lat, cityName]);
  return (
    <WeatherContext.Provider
      value={{
        cityName: cityName,
        noSuchCity: noSuchCity,
        setCityName: setCityName,
        todayWeather: todayWeather,
        futureWeather: futureWeather,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
