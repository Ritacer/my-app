import React from "react";
import "./Overview.css";

export default function Overview() {
  let overviewData = {
    city: "Lisbon",
    date: "Sunday 16:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    temperature: 18,
    humidity: 10,
    wind: 5
  };
  return (
    <div className="overview">
      <div className="location">
        <h1>{overviewData.city}</h1>
        <ul>
          <li>Last updated: {overviewData.date}</li>
          <li>{overviewData.description}</li>
        </ul>
      </div>
      <div className="clearfix">
        <img
          src={overviewData.imgUrl}
          alt={overviewData.description}
          className="float-left"
        />
        <div className="float-left">
          <strong>{overviewData.temperature}</strong>
          <span className="units">
            <a href="/">ºC</a> | <a href="/">ºF</a>
          </span>
        </div>
      </div>
      <ul>
        <li>Humidity: {overviewData.humidity}%</li>
        <li>Wind: {overviewData.wind}km/h</li>
      </ul>
    </div>
  );
}
