import { SearchBar } from "./UI/SearchBar";
import { TodayWeather } from "./TodayWeather";
import { FutureWeather } from "./FutureWeather";
import classes from "./Wrapper.module.css";
export const Wrapper: React.FC = (props) => {
  return (
    <div className={classes.wrapper}>
      <SearchBar />
      <TodayWeather />
      <div className={classes.wrap}>
        <FutureWeather />
        <FutureWeather />
        <FutureWeather />
        <FutureWeather />
        <FutureWeather />
      </div>
    </div>
  );
};
