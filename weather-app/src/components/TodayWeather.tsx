import classes from "./TodayWeather.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { WeatherContext } from "../store/weather-context";

export const TodayWeather: React.FC = (props) => {
  const weatherCTX = useContext(WeatherContext);
  // console.log(weatherCTX);
  return (
    <div className={classes.weather}>
      <h2
        className={classes.city}
      >{`Weather in ${weatherCTX.todayWeather.cityName}`}</h2>
      <h1 className={classes.temp}>{weatherCTX.todayWeather.temp}</h1>
      <p>
        {weatherCTX.todayWeather.icon} {weatherCTX.todayWeather.iconText}
      </p>
      <div className={classes.himidity}>
        <span> {`Humidity: ${weatherCTX.todayWeather.humidity}%`}</span>
      </div>
      <div className={classes.wind}>
        Wind: <span>{weatherCTX.todayWeather.wind}km/h</span>
      </div>
    </div>
  );
};
