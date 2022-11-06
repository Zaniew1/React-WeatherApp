import React from "react";
const apiKey: string = "66bf90ee7ac24837bb6104004220611";
let geolocationSupported: boolean = true;
type Loc = {
  lat: number;
  lon: number;
};
const getWeather = async (
  apiKey: string,
  myLocation: { lat: number; lon: number }
) => {
  try {
    const res = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${myLocation.lat},${myLocation.lon}&days=6`
    );
    const data = await res.json();
    console.log(data);
    const weatherData = await [
      {
        city: data.location.name,
        temp: data.current.temp_c,
        icon: data.current.condition.icon,
        iconText: data.current.condition.text,
        humidity: data.current.humidity,
        wind: data.current.wind_kph,
      },
      {
        temp: data.forecast.forecastday[1].day.avgtemp_c,
        icon: data.forecast.forecastday[1].day.condition.icon,
        date: data.forecast.forecastday[1].date,
      },
      {
        temp: data.forecast.forecastday[2].day.avgtemp_c,
        icon: data.forecast.forecastday[2].day.condition.icon,
        date: data.forecast.forecastday[2].date,
      },
      {
        temp: data.forecast.forecastday[3].day.avgtemp_c,
        icon: data.forecast.forecastday[3].day.condition.icon,
        date: data.forecast.forecastday[3].date,
      },
      {
        temp: data.forecast.forecastday[4].day.avgtemp_c,
        icon: data.forecast.forecastday[4].day.condition.icon,
        date: data.forecast.forecastday[4].date,
      },
      {
        temp: data.forecast.forecastday[5].day.avgtemp_c,
        icon: data.forecast.forecastday[5].day.condition.icon,
        date: data.forecast.forecastday[5].date,
      },
    ];
    return weatherData;
  } catch (e) {
    console.log(e);
  }
};

async function getLocation() {
  navigator.geolocation.getCurrentPosition((position) => {
    const myLocation: Loc = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };
    const data = getWeather(apiKey, myLocation);
    console.log(data);
  });
}
getLocation();

export const WeatherContext = React.createContext({
  cityName: "Sosnowiec",
  geolocationSupported: geolocationSupported,
  // weatherData: weatherData,
});
