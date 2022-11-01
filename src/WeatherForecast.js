import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-info">
            <img src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" width="42" alt="icon-forecast" />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temp-max">14°</span>
              <span className="WeatherForecast-temp-min">13°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
