import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/nitinkatole">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="">
          Nitin Katole
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="">
         @NK
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
