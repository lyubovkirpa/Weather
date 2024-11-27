import SearchBar from "../../components/searchBar/SearchBar";
import { useWeather } from "../../context/WeatherContext";

export default function HomePage() {
  const { weatherData, addToHistory } = useWeather();

  //   const APP_ID = "b7047a24973b9d8fb1a91e6d55ea4f15";

  //   const fetchWeather = async (cityName: string) => {
  //     const res = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_ID}`
  //     );
  //     const data = await res.json();
  //     // console.log(data);
  //     setWeatherData(data);
  //     addToHistory(data);
  //   };

  return (
    <div>
      <SearchBar />
      <div>
        {weatherData.name ? (
          <div>
            <p>{weatherData.name}</p>
            <p>{(weatherData.main.temp-273.15).toFixed(1)}°C</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
