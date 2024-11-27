import { useFormik } from "formik";
import { useWeather } from "../../context/WeatherContext";

export default function SearchBar() {

    const { weatherData, setWeatherData, addToHistory } = useWeather();

    const APP_ID = "b7047a24973b9d8fb1a91e6d55ea4f15";
  
    const fetchWeather = async (cityName: string) => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_ID}`
      );
      const data = await res.json();
      // console.log(data);
      setWeatherData(data);
      addToHistory(data);
    };




  const formik = useFormik({
    initialValues: {
      cityName: "",
    },
    onSubmit: (values, { resetForm }) => {
      resetForm();
      fetchWeather(values.cityName);
    },
  });



  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          type="text"
          name="cityName"
          value={formik.values.cityName}
        />
        <button type="submit">Get</button>
      </form>
    </div>
  );
}
