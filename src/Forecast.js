import React from "react";
import "./Forecast.css";

export default function Forecast() {
  let forecastData = {
    hour: 10,
    minutes: 30,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    maxTemp: 12,
    minTemp: 9
  };
  return (
    <div>
      <h2>KnowYourWeather</h2>
      <br />
      <div className="row">
        <div className="col-auto">
          <h3>
            {forecastData.hour}:{forecastData.minutes}
          </h3>
          <img src={forecastData.imgUrl} alt="" />
          <div className="weather-forecast-temperature">
            <strong>{forecastData.maxTemp}º </strong>
            {forecastData.minTemp}º
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
  );
}
