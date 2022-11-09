import { SearchBar } from "./form/SearchBar";
import { TodayWeather } from "./TodayWeather";
import { FutureWeather } from "./FutureWeather";
import classes from "./Wrapper.module.css";
import { useContext } from "react";
import { WeatherContext } from "../store/weather-context";

export const Wrapper: React.FC = (props) => {
  const weatherCtx = useContext(WeatherContext);
  console.log(weatherCtx);
  return (
    <div className={classes.wrapper}>
      <SearchBar />
      <TodayWeather />
      <div className={classes.wrap}>
        <>
          {weatherCtx.futureWeather !== undefined &&
            [...weatherCtx.futureWeather].map((el) => {
              return (
                <FutureWeather
                  key={String(Math.random())}
                  date={el.date}
                  temp={el.temp}
                  icon={el.iconText}
                ></FutureWeather>
              );
            })}
        </>
      </div>
    </div>
  );
};
