import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import ProgressBar from "./ProgressBar";
import AppBar from "./AppBar";

function App() {
  return (
    <>
      <CssBaseline />

      <ProgressBar />

      <AppBar />

      <div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          rel="noopener noreferrer"
          className="App-link"
          target="_blank"
        >
          Learn React
        </a>
      </div>
    </>
  );
}

export default App;
