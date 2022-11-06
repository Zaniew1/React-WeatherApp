import React, { useEffect } from "react";
import { useState } from "react";
const apiKey: string = "66bf90ee7ac24837bb6104004220611";
// let geolocationSupported: boolean = true;
type Loc = {
  lat: number;
  lon: number;
};
// type todayWeatherType = {
//   city: string;
//   temp: number;
//   icon: string;
//   iconText: string;
//   humidity: number;
//   wind: number;
// };
// type futureWeatherType = {
//   temp: number;
//   icon: string;
//   date: string;
// };
type Context = {
  cityName: string;
  // todayWeather: any;
  // futureWeather: any;
};

export const WeatherContext = React.createContext<Context>({
  cityName: "sosnowiec",
  // todayWeather: todayWeather,
  // futureWeather: futureWeather,
});

export const WeatherContextProvider = (props: any) => {
  // const [cityName, setCityName] = useState();
  // const [todayWeather, setTodayWeather] = useState<todayWeatherType>();
  // const [futureWeather, setFutureWeather] = useState<futureWeatherType>();
  const [location, setLocation] = useState<Loc>();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      setLocation({ lat, lon });
    });

    const getWeather = async (apiKey: string) => {
      console.log(location);
      try {
        const res = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location},${location}&days=6`
        );
        const data = await res.json();
        console.log(data);
        // setCityName(data.)
        // setTodayWeather();
        // setFutureWeather();
      } catch (e) {
        console.log(e);
      }
    };
    getWeather(apiKey);
    console.log(location);
  });
  // return (
  //   <WeatherContext.Provider
  //     value={{
  //       cityName: cityName,
  //       todayWeather: todayWeather,
  //       futureWeather: futureWeather,
  //     }}
  //   >
  //     {props.children}
  //   </WeatherContext.Provider>
  // );
};
