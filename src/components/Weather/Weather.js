import React, { useEffect, useState } from "react";
import { useApi } from "../../utils/WeatherDataContext";
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
      <div className="weather">
        {temperature !== null ? (
          <p className="temperature">
            {temperature}
            <span className="unit">º</span>
          </p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default Weather;
