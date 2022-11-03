import { CenterDiv } from "./UI/CenterDiv";
import classes from "./TodayWeather.module.css";
export const TodayWeather: React.FC = (props) => {
  return (
    <div className={classes.weather}>
      <h2 className={classes.city}>Weather in Tokyo</h2>
      <h1 className={classes.temp}>15 °C</h1>
      <p>
        <span>chmurka</span> Broken Clouds
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
