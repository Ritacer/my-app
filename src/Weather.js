import React from "react";

import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}ºC`
    );
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=294e4b388de693d904ecaa1582666157&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <Loader
      type="Audio"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
