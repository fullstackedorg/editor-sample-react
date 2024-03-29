import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return <div className="App">
      <header className="App-header">
        <img src={"logo.svg"} className="App-logo" alt="logo" />
        <p>
          Edit <code>index.jsx</code> and re-run your project.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);

