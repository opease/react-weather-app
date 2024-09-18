import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  let [weatherData, setweatherData] = useState({});
  let [ready, setReady] = useState(false);
  let [city, setCity] = useState(props.city);

  function handleResponse(response) {
    console.log(response.data);
    setReady(true);

    setweatherData({
      temperature: response.data.temperature.current,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      time: response.data.time,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
    });
  }

  function search() {
    let apiKey = "1a3fca45557083c6198e4bt6d7cf4o1c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-input"
            placeholder="Enter a city"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" className="form-button" />
        </form>
        <WeatherInfo data={weatherData} />
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
    search();
    return "Loading...";
  }
}
