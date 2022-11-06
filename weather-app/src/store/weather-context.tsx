import React from "react";
import { useState } from "react";
const apiKey: string = "66bf90ee7ac24837bb6104004220611";
let geolocationSupported: boolean = true;
type Loc = {
  lat: number;
  lon: number;
};
type weatherType = {
  city: string;
  temp: number;
  icon: string;
  iconText: string;
  humidity: number;
  wind: number;
};
// export const WeatherContext = React.createContext<weatherType>({});
// export const WeatherContextProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [weatherData, setWeatherData] = useState();

//   async function getLocation() {
//     navigator.geolocation.getCurrentPosition(async (position) => {
//       const myLocation: Loc = {
//         lat: position.coords.latitude,
//         lon: position.coords.longitude,
//       };

//       try {
//         const res = await fetch(
//           `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${myLocation.lat},${myLocation.lon}&days=6`
//         );
//         const data = await res.json();

//         const tablica = [];

//         let obj = {
//           city: data.location.name,
//           temp: data.current.temp_c,
//           icon: data.current.condition.icon,
//           iconText: data.current.condition.text,
//           humidity: data.current.humidity,
//           wind: data.current.wind_kph,
//         };

//         tablica.push(obj);

//         for (let i = 1; i < 6; i++) {
//           const tempobj = {
//             temp: data.forecast.forecastday[i].day.avgtemp_c,
//             icon: data.forecast.forecastday[i].day.condition.icon,
//             date: data.forecast.forecastday[i].date,
//           };
//           tablica.push(tempobj);
//         }

//         setWeatherData(tablica);
//         return tablica;
//       } catch (e) {
//         console.log(e);
//       }
//     });
//   }

//   return (
//     <WeatherContext.Provider value={{ weatherData }}>
//       {children}
//     </WeatherContext.Provider>
//   );
// };

export const WeatherContext = React.createContext({
  cityName: "Sosnowiec",
  weatherData: [],
});

export const WeatherContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [weatherData, setWeatherData] = useState([]);
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    const res = await fetch("blabla");
    const data = await res.json();

    const tablica = [];

    let obj = {
      city: data.location.name,
      temp: data.current.temp_c,
      icon: data.current.condition.icon,
      iconText: data.current.condition.text,
      humidity: data.current.humidity,
      wind: data.current.wind_kph,
    };

    tablica.push(obj);

    for (let i = 1; i < 6; i++) {
      const tempobj = {
        temp: data.forecast.forecastday[i].day.avgtemp_c,
        icon: data.forecast.forecastday[i].day.condition.icon,
        date: data.forecast.forecastday[i].date,
      };
      tablica.push(tempobj);
    }

    setWeatherData(tablica);
  }, []);

  return (
    <WeatherContext.Provider value={(cityName, weatherData)}>
      {" "}
      {children}
    </WeatherContext.Provider>
  );
};
