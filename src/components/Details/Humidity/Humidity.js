import React, { useEffect, useState } from "react";
import { useApi } from "../../../utils/WeatherDataContext";
import { IconDroplet, IconEye } from "@tabler/icons-react";

function Humidity() {
  const apiData = useApi();
  const [time, setTime] = useState(null);

  useEffect(() => {
    const today = new Date();
    const currentTime = today.getHours();
    setTime(currentTime);
  }, []);

  const humidity =
    apiData &&
    apiData.hourly &&
    apiData.hourly.relativehumidity_2m &&
    apiData.hourly.relativehumidity_2m[time];

  const humidityUnit =
    apiData && apiData.hourly_units && apiData.hourly_units.relativehumidity_2m;

  return (
    <>
      <div className="card-details">
        <div className="title-card-details">
          <IconDroplet />
          <h3>Humidade</h3>
        </div>
        <div className="content-card-details">
          {humidity ? humidity + " " + humidityUnit : "Carregando..."}
        </div>
      </div>
    </>
  );
}

export default Humidity;
