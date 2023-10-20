import { IonCardSubtitle } from "@ionic/react";
import { useApi } from "../../../utils/WeatherDataContext";
import { useEffect, useState } from "react";

function InfoCard() {
  const apiData = useApi();
  const [time, setTime] = useState(null);

  useEffect(() => {
    const today = new Date();
    const currentTime = today.getHours();
    setTime(currentTime);
  }, []);

  const weathercode =
    apiData &&
    apiData.hourly &&
    apiData.hourly.weathercode &&
    apiData.hourly.weathercode[time];

  const getWeatherDescription = (weathercode) => {
    switch (weathercode) {
      case 0:
        return "Céu limpo";
      case 1:
        return "Maioritariamente limpo";
      case 2:
        return "Parcialmente nublado";
      case 3:
        return "Nublado";
      case 45:
        return "Nevoeiro";
      case 48:
        return "Nevoeiro gélido";
      case 51:
        return "Chuviscos leves";
      case 53:
        return "Chuviscos moderados";
      case 55:
        return "Chuviscos densos";
      case 56:
        return "Chuviscos gélidos leves";
      case 57:
        return "Chuviscos gélidos densos";
      case 61:
        return "Chuva fraca";
      case 63:
        return "Chuva moderada";
      case 65:
        return "Chuva forte";
      case 66:
        return "Chuva gélida leve";
      case 67:
        return "Chuva gélida forte";
      case 71:
        return "Queda de neve leve";
      case 73:
        return "Queda de neve moderada";
      case 75:
        return "Queda de neve forte";
      case 77:
        return "Granizo";
      case 80:
        return "Chuva fraca";
      case 81:
        return "Chuva moderada";
      case 82:
        return "Chuva forte";
      case 85:
        return "Queda de neve leve";
      case 86:
        return "Queda de neve forte";
      case 95:
        return "Trovoada";
      case 96:
        return "Trovoada com granizo leve";
      case 99:
        return "Trovoada com granizo forte";
      default:
        return "Desconhecido";
    }
  };

  const weatherLabel = getWeatherDescription(weathercode);

  return (
    <>
      <div style={{color: "white"}}>{weatherLabel}</div>
    </>
  );
}

export default InfoCard;
