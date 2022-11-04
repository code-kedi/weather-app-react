import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin"/>
        <footer>
          This project was coded by Sonja Peschke and is{" "}
          <a
            href="https://github.com/code-kedi/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
          {" "}on GitHub and{" "}
          <a
            href="https://lively-zabaione-deb2e5.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
