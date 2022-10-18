import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York"
  };

  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form className="mb-3">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a city..."
                    className="form-control"
                    autocomplete="off"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-dark w-100"
                  />
                </div>
              </div>
            </form>
            <div className="overview">
              <h1>{weatherData.city}</h1>
              <ul>
                <li>
                  last updated: <span>Wednesday 16:08</span>
                </li>
                <li>mist</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="clearfix weather-temperature">
                  <img
                    src="http://openweathermap.org/img/wn/50d@2x.png"
                    alt="mist"
                    className="float-left"
                  />
                  <div className="float-left">
                    <strong>13</strong>
                    <span className="units">°C</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Humidity: <span>93</span>%
                  </li>
                  <li>
                    Wind: <span>5</span> m/h
                  </li>
                </ul>
              </div>
            </div>
            <div className="weather-forecast">
              <div className="row">
                <div className="col-2">
                  <div className="weather-forecast-date">Wed</div>
                  <img
                    src="http://openweathermap.org/img/wn/10d@2x.png"
                    width="42"
                    alt="icon-tomorrow"
                  />
                  <div className="weather-forecast-temperatures">
                    <span className="weather-forecast-temp-max"> 14°</span>
                    <span className="weather-forecast-temp-min"> 13°</span>
                  </div>
                </div>
                <div className="col-2">
                  <div className="weather-forecast-date">Thu</div>
                  <img
                    src="http://openweathermap.org/img/wn/02d@2x.png"
                    width="42"
                    alt="icon-two-days-later"
                  />
                  <div className="weather-forecast-temperatures">
                    <span className="weather-forecast-temp-max"> 23°</span>
                    <span className="weather-forecast-temp-min"> 13°</span>
                  </div>
                </div>
                <div className="col-2">
                  <div className="weather-forecast-date">Fri</div>
                  <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    width="42"
                    alt="icon-three-days-later"
                  />
                  <div className="weather-forecast-temperatures">
                    <span className="weather-forecast-temp-max"> 21°</span>
                    <span className="weather-forecast-temp-min"> 10°</span>
                  </div>
                </div>
                <div className="col-2">
                  <div className="weather-forecast-date">Sat</div>
                  <img
                    src="http://openweathermap.org/img/wn/02d@2x.png"
                    width="42"
                    alt="icon-four-days-later"
                  />
                  <div className="weather-forecast-temperatures">
                    <span className="weather-forecast-temp-max"> 15°</span>
                    <span className="weather-forecast-temp-min"> 8°</span>
                  </div>
                </div>
                <div className="col-2">
                  <div className="weather-forecast-date">Sun</div>
                  <img
                    src="http://openweathermap.org/img/wn/04d@2x.png"
                    width="42"
                    alt="icon-five-days-later"
                  />
                  <div className="weather-forecast-temperatures">
                    <span className="weather-forecast-temp-max"> 18°</span>
                    <span className="weather-forecast-temp-min"> 10°</span>
                  </div>
                </div>
                <div className="col-2">
                  <div className="weather-forecast-date">Mon</div>
                  <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    width="42"
                    alt="icon-six-days-later"
                  />
                  <div className="weather-forecast-temperatures">
                    <span className="weather-forecast-temp-max"> 18°</span>
                    <span className="weather-forecast-temp-min"> 12°</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <small>
            <a
              href="https://github.com/code-kedi/sonja-weather"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            <span>by Sonja Peschke</span>
          </small>
        </div>
      </div>
    </div>
  );
}
