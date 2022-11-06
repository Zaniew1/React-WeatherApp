import { Wrapper } from "./components/Wrapper";
import classes from "./App.module.css";
function App() {
  const apiKey: string = "66bf90ee7ac24837bb6104004220611";
  type Loc = {
    lat: number;
    lon: number;
  };

  navigator.geolocation.getCurrentPosition((position) => {
    const myLocation: Loc = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };
    const getWeather = async (apiKey: string) => {
      try {
        const res = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${myLocation.lat},${myLocation.lon}&days=7`
        );
        const data = await res.json();
        const weatherData = [
          {
            city: data.location.name,
            temp: data.current.temp_c,
            icon: data.current.icon,
            iconText: data.current.text,
            humidity: data.current.humidity,
            wind: data.current.wind_kph,
          },
          {
            temp: data.forecast.forecastday[1].day.avgtemp_c,
            icon: data.forecast.forecastday[1].day.conditions.icon,
            date: data.forecast.forecastday[1].date,
          },
          {
            temp: data.forecast.forecastday[2].day.avgtemp_c,
            icon: data.forecast.forecastday[2].day.conditions.icon,
            date: data.forecast.forecastday[2].date,
          },
          {
            temp: data.forecast.forecastday[3].day.avgtemp_c,
            icon: data.forecast.forecastday[3].day.conditions.icon,
            date: data.forecast.forecastday[3].date,
          },
          {
            temp: data.forecast.forecastday[4].day.avgtemp_c,
            icon: data.forecast.forecastday[4].day.conditions.icon,
            date: data.forecast.forecastday[4].date,
          },
          {
            temp: data.forecast.forecastday[5].day.avgtemp_c,
            icon: data.forecast.forecastday[5].day.conditions.icon,
            date: data.forecast.forecastday[5].date,
          },
        ];
        return weatherData;
      } catch (error) {
        throw new Error("error");
      }
    };
    getWeather(apiKey);
    // console.log(weatherData);
  });

  return (
    <div className={classes.app}>
      <Wrapper />
    </div>
  );
}

export default App;
