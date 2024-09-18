import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-7 mt-4">
        <h1>{props.data.city}</h1>
        <ul>
          <li className="text-capitalize">
            Sunday 12:52, {props.data.description}
          </li>
          <li>
            Humidity: <span className="humidity">{props.data.humidity}%</span>,
            Wind: <span className="windspeed">{props.data.wind}km/h</span>
          </li>
        </ul>
      </div>
      <div className="col-5">
        <span className="icon">
          <img src={props.data.iconUrl} alt="icon" />
        </span>
        <span className="temperature">
          {Math.round(props.data.temperature)}
        </span>
        <span className="unit">°C</span>
      </div>
    </div>
  );
}
