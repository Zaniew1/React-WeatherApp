import classes from "./TodayWeather.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { WeatherContext } from "../store/weather-context";

export const TodayWeather: React.FC = (props) => {
  const weatherCTX = useContext(WeatherContext);
  const city = weatherCTX.todayWeather?.city;
  const temp = weatherCTX.todayWeather?.temp;
  const humidity = weatherCTX.todayWeather?.humidity;
  const wind = weatherCTX.todayWeather?.wind;

  return (
    <div className={classes.weather}>
      <h2 className={classes.city}>{`Weather in ${city} `}</h2>
      <h1 className={classes.temp}>{temp} °C</h1>
      <p></p>
      <div className={classes.humidity}>
        <span> {`Humidity: ${humidity}%`}</span>
      </div>
      <div className={classes.wind}>
        Wind: <span>{wind}km/h</span>
      </div>
    </div>
  );
};
