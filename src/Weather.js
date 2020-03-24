import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-wrapper">
        <div className="row">
          <div className="col-5">
            <div>
              <form>
                <div className="row">
                  <div className="col-auto">
                    <form className="form-inline">
                      <label className="sr-only" for="inlineFormInputName2" />
                      <input
                        type="text"
                        className="form-control mb-2 mr-sm-2"
                        placeholder="Enter city"
                        autoComplete="off"
                      />
                      <button type="submit" className="btn btn-primary mb-2">
                        Submit
                      </button>
                      <div>
                        <button type="button" className="btn btn-primary mb-2">
                          Current city
                        </button>
                      </div>
                    </form>
                    <div className="overview">
                      <div className="location">
                        <h1>Lisbon</h1>
                        <ul>
                          <li>Last updated: 13.06</li>
                          <li>Sunny</li>
                        </ul>
                      </div>
                      <div className="clearfix">
                        <img
                          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                          alt="sun"
                          className="float-left"
                        />
                        <div className="float-left">
                          <strong>24</strong>
                          <span className="units">
                            <a href="/">ºC</a> | <a href="/">ºF</a>
                          </span>
                        </div>
                      </div>
                      <ul>
                        <li>Humidity: 10%</li>
                        <li>Wind: 12km/h</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-7">
            <h2>KnowYourWeather</h2>
            <br />
            <div className="row">
              <div className="col-auto">
                <h3>17:30</h3>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt=""
                />
                <div className="weather-forecast-temperature">
                  <strong>33º </strong>13º
                </div>
              </div>
              <div className="col-auto">
                <h3>13:00</h3>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt=""
                />
                <div className="weather-forecast-temperature">
                  <strong>14º </strong>12º
                </div>
              </div>
              <div className="col-auto">
                <h3>16:00</h3>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt=""
                />
                <div className="weather-forecast-temperature">
                  <strong>17º </strong>15º
                </div>
              </div>
              <div className="col-auto">
                <h3>19:00</h3>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt=""
                />
                <div className="weather-forecast-temperature">
                  <strong>13º </strong>10º
                </div>
              </div>
              <div className="col-auto">
                <h3>22:00</h3>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt=""
                />
                <div className="weather-forecast-temperature">
                  <strong>11º </strong>9º
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <small>
        <a href="https://github.com/Ritacer/my-app" target="_blank">
          Open-source code
        </a>{" "}
        by Rita Cerqueira, 2020
      </small>
    </div>
  );
}
