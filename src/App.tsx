import { Wrapper } from "./components/Wrapper";
import classes from "./App.module.css";
import { WeatherContextProvider } from "./store/weather-context";
function App() {
  return (
    <WeatherContextProvider>
      <div className={classes.app}>
        <Wrapper />
      </div>
    </WeatherContextProvider>
  );
}

export default App;
