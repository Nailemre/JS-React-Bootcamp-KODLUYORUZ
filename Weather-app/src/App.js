import React, { useEffect, useState } from "react";
import "./App.scss";

const App = () => {
  const [location, setLocation] = useState("Sivas");
  const [weatherInfo, setWeatherInfo] = useState({});
  const [city, setCity] = useState("");
  const params = {
    location,
  };
  useEffect(() => {
    // fetch weather
    fetch(
      //`http://api.weatherapi.com/v1/current.json?key=82d399518dd346dfa1c232014211003&q=${params.location}`
      `http://api.weatherapi.com/v1/forecast.json?key=82d399518dd346dfa1c232014211003&q=${params.location}&days=3`
    )
      .then((response) => response.json())
      .then((data) => setWeatherInfo(data));
  }, [params.location]);

  return (
    <div className="wearher-wrapper">
      <input onChange={(event) => setCity(event.target.value)} />
      <div id="button" onClick={() => setLocation(city)}>
        <input
          type="button"
          id="convertButton"
          value="Convert"
          onclick="hex2rgb()"
        ></input>
      </div>
      <div className="weather-card">
        {weatherInfo.current && (
          <>
            <img
              className="weather-icon"
              src={weatherInfo.current.condition.icon}
            />

            <p>
              <h2>Max:{weatherInfo.forecast.forecastday[0].day.maxtemp_c}</h2>
              <h2>Min:{weatherInfo.forecast.forecastday[0].day.mintemp_c}</h2>
              {weatherInfo.location.name}-
              <span>{weatherInfo.current.condition.text}</span>
            </p>
            <h5>{weatherInfo.forecast.forecastday[0].date}</h5>
          </>
        )}
      </div>
      <div className="weather-card">
        {weatherInfo.current && (
          <>
            <img
              className="weather-icon"
              src={weatherInfo.current.condition.icon}
            />

            <p>
              <h2>Max:{weatherInfo.forecast.forecastday[1].day.maxtemp_c}</h2>
              <h2>Min:{weatherInfo.forecast.forecastday[1].day.mintemp_c}</h2>
              {weatherInfo.location.name}-
              <span>{weatherInfo.current.condition.text}</span>
            </p>
            <h5>{weatherInfo.forecast.forecastday[1].date}</h5>
          </>
        )}
      </div>
      <div className="weather-card">
        {weatherInfo.current && (
          <>
            <img
              className="weather-icon"
              src={weatherInfo.current.condition.icon}
            />

            <p>
              <h2>Max:{weatherInfo.forecast.forecastday[2].day.maxtemp_c}</h2>
              <h2>Min:{weatherInfo.forecast.forecastday[2].day.mintemp_c}</h2>
              {weatherInfo.location.name}-
              <span>{weatherInfo.current.condition.text}</span>
            </p>
            <h5>{weatherInfo.forecast.forecastday[2].date}</h5>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
