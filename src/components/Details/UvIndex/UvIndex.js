import React, { useEffect, useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import { useApi } from "../../../utils/WeatherDataContext";

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
    <IonCard>
      <IonCardHeader>
        <IonCardTitle className="card-title">UV</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
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
      </IonCardContent>
    </IonCard>
  );
}

export default UVIndexCard;
