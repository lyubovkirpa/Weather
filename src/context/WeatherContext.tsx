import { createContext, useContext, useState } from "react";

interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IWeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: IWeather[];

  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface IAuthContexProps {
    children: React.ReactNode;
  }

const initWeather: IWeatherData = {
  coord: {
    lon: 0,
    lat: 0,
  },
  weather: [],
  base: "",
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
    sea_level: 0,
    grnd_level: 0,
  },
  visibility: 0,
  wind: {
    speed: 0,
    deg: 0,
  },
  clouds: {
    all: 0,
  },
  dt: 0,
  sys: {
    type: 0,
    id: 0,
    country: "",
    sunrise: 0,
    sunset: 0,
  },
  timezone: 0,
  id: 0,
  name: "",
  cod: 0,
};

interface IWeatherContext {
  weatherData: IWeatherData;
  setWeatherData: React.Dispatch<React.SetStateAction<IWeatherData>>;
  history: IWeatherData[];
  setHistory: React.Dispatch<React.SetStateAction<IWeatherData[]>>;
  addToHistory: (data: IWeatherData) => void;
  clearHistory: () => void;
}

export const WeatherContext = createContext<IWeatherContext|undefined>(undefined);

export default function WeatherProvider({children}:IAuthContexProps) {
  const [weatherData, setWeatherData] = useState<IWeatherData>(initWeather);
  const [history, setHistory] = useState<IWeatherData[]>([]);
  const addToHistory = (data: IWeatherData) => {
    setHistory((prevHistory) => [...prevHistory, data]);
  };
  const clearHistory = () => {
    setHistory([]);
  };


  return (
    <WeatherContext.Provider value={{weatherData, setWeatherData, history, setHistory, addToHistory, clearHistory}}>
        {children}
    </WeatherContext.Provider>
  );
}

 export const useWeather = ()=> {
 const context= useContext(WeatherContext);
 if(!context){
    throw new Error("no such context");
 }
 return context;
} 