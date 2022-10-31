import React, { useState } from "react";

export default function WeatherTemperature(props) {
  console.log(props.celsius);
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature float-left">
        <strong className="temperature">{Math.round(props.celsius)}</strong>
        <span className="units">°C | <a href="/" onClick={showFahrenheit}>°F</a></span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature float-left">
        <strong className="temperature">{Math.round(convertToFahrenheit())}</strong>
        <span className="units"><a href="/" onClick={showCelsius}>°C</a> | °F</span>
      </div>
    );
  }
}
