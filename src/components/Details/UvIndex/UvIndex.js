import React, { useEffect, useState } from "react";
import { useApi } from "../../../utils/WeatherDataContext";
import { IconUvIndex } from "@tabler/icons-react";

function UVIndexCard() {
  const apiData = useApi();

  const [time, setTime] = useState(null);

  useEffect(() => {
    const today = new Date();
    const currentTime = today.getHours();
    setTime(currentTime);
  }, []);

  const UVIndex =
    apiData &&
    apiData.hourly &&
    apiData.hourly.uv_index &&
    apiData.hourly.uv_index[time];

  const getUVColor = (UVIndex) => {
    let color = "black";
    let label = "Desconhecido";

    switch (true) {
      case UVIndex >= 0 && UVIndex < 3:
        color = "green";
        label = "Baixo";
        break;
      case UVIndex >= 3 && UVIndex < 6:
        color = "yellow";
        label = "Moderado";
        break;
      case UVIndex >= 6 && UVIndex < 8:
        color = "orange";
        label = "Alto";
        break;
      case UVIndex >= 8 && UVIndex < 11:
        color = "red";
        label = "Muito Alto";
        break;
      case UVIndex >= 11 && UVIndex <= 12:
        color = "purple";
        label = "Extremo";
        break;
      default:
        color = "black";
        label = "Desconhecido";
        break;
    }

    return { color, label };
  };

  const uvInfo = getUVColor(UVIndex);

  return (
    <>
      <div className="card-details">
        <div className="title-card-details">
          <IconUvIndex />
          <h3>UV</h3>
        </div>
        <div className="content-card-details">
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: uvInfo.color,
            }}
          >
            {UVIndex}
          </div>
          {uvInfo.label}
        </div>
      </div>
    </>
  );
}

export default UVIndexCard;
