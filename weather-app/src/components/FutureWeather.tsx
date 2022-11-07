import classes from "./FutureWeather.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { WeatherContext } from "../store/weather-context";
import { useContext } from "react";
export const FutureWeather: React.FC = (props) => {
  const weatherCTX = useContext(WeatherContext);
  return (
    <div className={classes.wrapper}>
      <div className={classes.date}></div>
      <div className={classes.icon}>
        <FontAwesomeIcon icon={faCloud} />
      </div>
      <div className={classes.temp}>15 C</div>
    </div>
  );
};
