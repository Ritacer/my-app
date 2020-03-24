import React from "react";

import "./Weather.css";

import Search from "./Search";
import Button from "./Button";
import Overview from "./Overview";
import Forecast from "./Forecast";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-wrapper">
        <div className="row">
          <div className="col-5">
            <Search />
            <Button />
            <Overview />
          </div>
          <div className="col-7">
            <Forecast />
          </div>
        </div>
      </div>
      <small>
        <a href="https://github.com/Ritacer/know.your.weather" target="_blank">
          Open-source code
        </a>{" "}
        by Rita Cerqueira, 2020
      </small>
    </div>
  );
}
