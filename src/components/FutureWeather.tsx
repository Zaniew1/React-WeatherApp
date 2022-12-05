import classes from "./FutureWeather.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import {
  faCloud,
  faCloudRain,
  faCloudSunRain,
  faCloudSun,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

export const FutureWeather = (props: {
  date: string;
  temp: number;
  icon: string;
}) => {
  const [icon, setIcon] = useState<string>();
  useEffect(() => {
    if (props.icon === "Cloudy" || "Overcast") {
      setIcon("Cloudy");
    }
    if (props.icon === "Partly cloudy") {
      setIcon("Partly cloudy");
    }
    if (props.icon === "Patchy rain possible") {
      setIcon("Patchy rain possible");
    }
    if (props.icon === "Sunny" || props.icon === "Clear") {
      setIcon("Sunny");
    }
    if (props.icon === "Clear") {
      setIcon("Patchy rain possible");
    }
    if (props.icon === "Moderate rain") {
      setIcon("Moderate rain");
    }
  }, [icon, props.icon]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.date}>{props.date}</div>
      <div className={classes.icon}>
        {icon === "Partly cloudy" && <FontAwesomeIcon icon={faCloudSun} />}
        {icon === "Sunny" && <FontAwesomeIcon icon={faSun} />}
        {icon === "Cloudy" && <FontAwesomeIcon icon={faCloud} />}
        {icon === "Patchy rain possible" && (
          <FontAwesomeIcon icon={faCloudRain} />
        )}
        {icon === "Moderate rain" && <FontAwesomeIcon icon={faCloudSunRain} />}
      </div>
      <div className={classes.temp}>{props.temp} C</div>
    </div>
  );
};
