export type LocType = {
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
export type ContextType = {
  cityName: string;
  noSuchCity: boolean;
  setCityName: (city: CityNameType) => void;
  todayWeather: todayWeatherType;
  futureWeather: futureWeatherType;
};

export type CityNameType = string;
export type BadValueType = boolean;
export type WeatherContextPropsType = {
  children: React.ReactNode
}