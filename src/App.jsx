import { useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import CurrentWeather from "./components/current_weather/currentWeather";
import Forecast from "./components/forecast/forecast";
import Home from "./components/home/home";
import WeatherDetails from "./components/weather_details/weatherDetails";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState(null);

  const handleOnSearch = (searchData) => {
    setCity(searchData.label);

    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
    );

    Promise.all([currentWeatherFetch, forecastFetch]).then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({ city: searchData.label, ...weatherResponse });
      setForecast({ city: searchData.label, ...forecastResponse });
    });
  };

  return (
    <div className="home-container w-full min-h-screen flex flex-col gap-14">
      {currentWeather && forecast ? (
        <div className=" px-2  md:grid md:grid-cols-12 gap-16 md:gap-1 lg:mr-5  ">
          <CurrentWeather
            currentWeather={currentWeather}
            searchCity={city}
            handleOnSearch={handleOnSearch}
          />
          <div className=" md:col-span-6 ">
            <WeatherDetails currentWeather={currentWeather} />
            <Forecast forecastData={forecast.list} />
          </div>
        </div>
      ) : (
        <Home handleOnSearch={handleOnSearch} />
      )}
    </div>
  );
}

export default App;
