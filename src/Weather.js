import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="text" className="form-input" placeholder="Enter a city" />
        <input type="submit" value="Search" className="form-button" />
      </form>
      <div className="form"></div>
      <div className="row">
        <div className="col-8 mt-4">
          <h1>San Francisco</h1>
          <ul>
            <li>Sunday 12:52, overcast clouds</li>
            <li>
              Humidity: <span className="humidity">91%</span>, Wind:{" "}
              <span className="windspeed">8.05km/h</span>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <span className="icon">image</span>
          <span className="temperature">13</span>
          <span className="unit">°C</span>
        </div>
      </div>
    </div>
  );
}
