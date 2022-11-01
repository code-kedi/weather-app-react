import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if(loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-2">
            <div className="WeatherForecast-day">{forecast[0].time}</div>
            <div className="WeatherForecast-info">
              <img src={forecast[0].condition.icon_url} width="42" alt={forecast[0].condition.description} />
              <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temp-max">{forecast[0].temperature.maximum}°</span>
                <span className="WeatherForecast-temp-min">{forecast[0].temperature.minimum}°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
