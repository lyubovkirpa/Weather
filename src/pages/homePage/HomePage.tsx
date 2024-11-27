import SearchBar from "../../components/searchBar/SearchBar";
import { useWeather } from "../../context/WeatherContext";

export default function HomePage() {
  const { weatherData } = useWeather();

  return (
    <div>
      <SearchBar />
      <div>
        {weatherData.name ? (
          <div>
            <p>{weatherData.name}</p>
            <p>{(weatherData.main.temp - 273.15).toFixed()}°C</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
