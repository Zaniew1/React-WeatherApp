import classes from "./TodayWeather.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloud } from "@fortawesome/free-solid-svg-icons";
// import { useContext, useEffect } from "react";
// import { WeatherContext } from "../store/weather-context";

export const TodayWeather: React.FC = (props) => {
  // const weatherCTX = useContext(WeatherContext);

  return (
    <div className={classes.weather}>
      <h2 className={classes.city}>{`Weather in `}</h2>
      <h1 className={classes.temp}>{"add"}</h1>
      <p></p>
      <div className={classes.himidity}>
        <span> {`Humidity: %`}</span>
      </div>
      <div className={classes.wind}>
        Wind: <span>km/h</span>
      </div>
    </div>
  );
};
