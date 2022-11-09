export type Loc = {
  lat: number | null;
  lon: number | null;
};
export type todayWeatherType = {
  city: string;
  temp: number;
  iconText: string;
  humidity: number;
  wind: number;
};
export type futureWeatherType = {
  temp: number;
  iconText: string;
  date: string;
}[];
export type Context = {
  cityName: any;
  setCityName: any;
  todayWeather: any;
  futureWeather: any;
};
export type Icon = {
  iconText: string;
};
export type CityName = {
  cityName: string;
};
