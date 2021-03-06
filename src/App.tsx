import { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import classes from "./App.module.scss";
import { Head } from "./Head";
import { HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <HelmetProvider>
      <Head />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <button
              type="button"
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </button>
          </p>
          <p className={classes.red}>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {" | "}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
          <p>{import.meta.env.VITE_TEST_ENV}</p>
          <Link to="/about">about</Link>
        </header>
      </div>
    </HelmetProvider>
  );
}

export default App;
