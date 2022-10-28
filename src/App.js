import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin"/>
        <footer>
          <a
            href="https://github.com/code-kedi/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          <span>by Sonja Peschke</span>
        </footer>
      </div>
    </div>
  );
}
