import React, { useEffect, useState } from "react";
import { useApi } from "../../../utils/WeatherDataContext";
import { IconEye } from "@tabler/icons-react";

function Visibility() {
  const apiData = useApi();

  const [time, setTime] = useState(null);

  useEffect(() => {
    const today = new Date();
    const currentTime = today.getHours();
    setTime(currentTime);
  }, []);

  const visibilityMeters =
    apiData &&
    apiData.hourly &&
    apiData.hourly.visibility &&
    apiData.hourly.visibility[time];

  const visibilityKilometers = Math.round(visibilityMeters / 1000);

  return (
    <>
      <div className="card-details">
        <div className="title-card-details" expand="block">
          <IconEye />
          <h3>Visibilidade</h3>
        </div>
        <div className="content-card-details">
          {visibilityMeters
            ? visibilityKilometers + " km"
            : "Carregando..."}
        </div>
      </div>
    </>
  );
}

export default Visibility;
