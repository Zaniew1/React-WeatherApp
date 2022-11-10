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
  cityName: string;
  noSuchCity: boolean;
  setCityName: (city: CityName) => void;
  todayWeather: todayWeatherType;
  futureWeather: futureWeatherType;
};

export type CityName = string;
export type BadValue = boolean;
