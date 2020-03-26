import React, { useState } from "react";
import axios from "axios";
import moment from "moment";

import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [meteorology, setMeteorology] = useState({});
  const properDate = moment.unix(meteorology.date).format("dddd, kk:mm");
  const [forecast, setForecast] = useState({});

  function showWeather(response) {
    setMeteorology({
      name: response.data.name,
      date: response.data.dt,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity
    });
  }

  function showForecast(response) {
    setForecast({
      forecIcon: `http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`,
      forecMaxTemp: response.data.list[0].main.temp
    });
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=294e4b388de693d904ecaa1582666157&units=metric`;
    axios.get(apiUrl).then(showWeather);

    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=294e4b388de693d904ecaa1582666157&units=metric`;
    axios.get(apiUrl).then(showForecast);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <div className="weather-wrapper">
        <div className="row">
          <div className="col-5">
            <div>
              <form>
                <div className="row">
                  <div className="col-auto">
                    <form className="form-inline" onSubmit={handleSubmit}>
                      <label className="sr-only" for="inlineFormInputName2" />
                      <input
                        type="text"
                        className="form-control mb-2 mr-sm-2"
                        placeholder="Enter city"
                        autoComplete="off"
                        onChange={updateCity}
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
                        <h1>{meteorology.name}</h1>
                        <ul>
                          <li>Last updated: {properDate}</li>
                          <li>{meteorology.description}</li>
                        </ul>
                      </div>
                      <div className="clearfix">
                        <img
                          src={meteorology.icon}
                          alt={meteorology.description}
                          className="float-left"
                        />
                        <div className="float-left">
                          <strong>{Math.round(meteorology.temperature)}</strong>
                          <span className="units">
                            <a href="/">ºC</a> | <a href="/">ºF</a>
                          </span>
                        </div>
                      </div>
                      <ul>
                        <li>Humidity: {meteorology.humidity}%</li>
                        <li>Wind: {Math.round(meteorology.wind)}km/h</li>
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
                <img src={forecast.forecIcon} alt="" />
                <div className="weather-forecast-temperature">
                  <strong>{forecast.forecMaxTemp}º </strong>13º
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
