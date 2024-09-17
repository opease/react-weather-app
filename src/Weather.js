import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  let [weatherData, setweatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);

    setweatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      time: response.data.time,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <input
            type="text"
            className="form-input"
            placeholder="Enter a city"
          />
          <input type="submit" value="Search" className="form-button" />
        </form>
        <div className="row">
          <div className="col-7 mt-4">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>Sunday 12:52, {weatherData.description}</li>
              <li>
                Humidity:{" "}
                <span className="humidity">{weatherData.humidity}%</span>, Wind:{" "}
                <span className="windspeed">{weatherData.wind}km/h</span>
              </li>
            </ul>
          </div>
          <div className="col-5">
            <span className="icon">
              <img src={weatherData.iconUrl} alt="icon" />
            </span>
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/opease"
            target="_blank"
            rel="noopener noreferrer"
          >
            Odille Pease
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/opease/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://react-weatherapp-opease.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    );
  } else {
    let city = "Harare";
    let apiKey = "1a3fca45557083c6198e4bt6d7cf4o1c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
