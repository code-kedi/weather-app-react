import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature float-left">
      <strong className="temperature">{Math.round(props.celsius)}</strong>
      <span className="units">°C</span>
    </div>
    );
}
