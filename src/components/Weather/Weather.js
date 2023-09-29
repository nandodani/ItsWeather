import React, { useEffect, useState } from "react";
import { useApi } from "../../utils/WeatherDataContext";
import { ReactComponent as Cloudy } from "../../assets/images/Cloudy.svg";
import "./Weather.styles.css";

function Weather() {
  const apiData = useApi();
  const [time, setTime] = useState(null);

  useEffect(() => {
    const today = new Date();
    const currentTime = today.getHours();
    setTime(currentTime);
    console.log(currentTime);
  }, []);

  const temperature =
    apiData &&
    apiData.hourly &&
    apiData.hourly.temperature_2m &&
    apiData.hourly.temperature_2m[time]
      ? Math.round(apiData.hourly.temperature_2m[time])
      : null;

  return (
    <>
      <Cloudy className="image-weather" />
      {temperature !== null ? (
        <h1 className="temperature">{temperature}</h1>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Weather;
