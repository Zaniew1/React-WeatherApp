export type Loc = {
  lat: number | null;
  lon: number | null;
};
export type todayWeatherType = {
  city: string;
  temp: number;
  humidity: number;
  wind: number;
};
export type futureWeatherType = {
  date: string;
  iconText: string;
  temp: number;
}[];
export type Context = {
  cityName: string | undefined;
  setCityName: (city: CityName) => void;
  todayWeather: todayWeatherType | undefined;
  futureWeather: futureWeatherType | undefined;
};

export type CityName = string;
