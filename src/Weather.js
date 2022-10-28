import axios from "axios";
import React, {useState} from "react";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                  autoComplete="off"
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
                <li>{weatherData.description}</li>
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
                <div className="float-left temperature">
                  <strong>{Math.round(weatherData.temperature)}</strong>
                    <span className="units">°C</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Humidity: <span>{weatherData.humidity}</span>%
                </li>
                <li>
                  Wind: <span>{weatherData.wind}</span> m/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading ...";
  }
}
