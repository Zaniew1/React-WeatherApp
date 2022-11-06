import classes from "./TodayWeather.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { WeatherContext } from "../store/weather-context";

export const TodayWeather: React.FC = (props) => {
  const weatherCTX = useContext(WeatherContext);
  return (
    <div className={classes.weather}>
      <h2 className={classes.city}>{`Weather in ${weatherCTX.cityName}`}</h2>
      <h1 className={classes.temp}>15 °C</h1>
      <p>
        <FontAwesomeIcon icon={faCloud} /> Broken Clouds
      </p>
      <div className={classes.himidity}>
        Humidity: <span>66%</span>
      </div>
      <div className={classes.wind}>
        Wind: <span>3.6km/h</span>
      </div>
    </div>
  );
};
