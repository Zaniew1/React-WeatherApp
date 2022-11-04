import classes from "./FutureWeather.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
export const FutureWeather: React.FC = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.date}>12.08.2017</div>
      <div className={classes.icon}>
        <FontAwesomeIcon icon={faCloud} />
      </div>
      <div className={classes.temp}>15 C</div>
    </div>
  );
};
