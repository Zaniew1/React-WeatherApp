import React, { useEffect } from "react";
import { useState } from "react";
const apiKey: string = "66bf90ee7ac24837bb6104004220611";
// let geolocationSupported: boolean = true;
type Loc = {
  lat: number;
  lon: number;
};
type todayWeatherType = {
  city: string;
  temp: number;
  iconText: string;
  humidity: number;
  wind: number;
};
type futureWeatherType = {
  temp: number;
  iconText: string;
  date: string;
}[];
type Context = {
  cityName: string;
  todayWeather: any;
  futureWeather: any;
};
export const WeatherContext = React.createContext<Context>({
  cityName: "sosnowiec",
  todayWeather: {},
  futureWeather: {},
});
export const WeatherContextProvider = (props: any) => {
  // const [cityName, setCityName] = useState();
  const [todayWeather, setTodayWeather] = useState<todayWeatherType>();
  const [futureWeather, setFutureWeather] = useState<futureWeatherType>();
  const [location, setLocation] = useState<Loc>({ lat: 0, lon: 0 });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const newLoc = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      setLocation(newLoc);
    });
  }, []);
  useEffect(() => {
    const getWeather = async (apiKey: string) => {
      try {
        const res = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location.lon},${location.lat}&days=6`
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
            iconText: data.forecast.forecastday[i].day.condition.icon,
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
  }, [location.lon, location.lat]);
  return (
    <WeatherContext.Provider
      value={{
        cityName: "Warszawa",
        todayWeather: todayWeather,
        futureWeather: futureWeather,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
