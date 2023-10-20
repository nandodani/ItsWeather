import React, { useEffect, useState } from "react";
import { IonCardContent, IonGrid, IonRow, IonCol } from "@ionic/react";
import { useApi } from "../../../utils/WeatherDataContext";
import {
  IconCloud,
  IconCloudBolt,
  IconCloudFog,
  IconCloudRain,
  IconCloudSnow,
  IconSnowflake,
  IconSun,
} from "@tabler/icons-react";

function ForecastWeather() {
  const [temperatureData, setTemperatureData] = useState([]);
  const [weatherCode, setWeatherCodeData] = useState([]);
  const [time, setTime] = useState(null);
  const apiData = useApi();

  useEffect(() => {
    const today = new Date();
    const currentTime = today.getHours();
    setTime(currentTime);
  }, []);

  useEffect(() => {
    if (apiData && apiData.daily && apiData.daily.temperature_2m_max) {
      const next7DaysTemperature = apiData.daily.temperature_2m_max.map(
        (temp) => Math.round(temp)
      );

      setTemperatureData(next7DaysTemperature);
    }
    if (apiData && apiData.daily && apiData.daily.weathercode) {
      const currentIndex = time >= apiData.daily.weathercode.length ? 0 : time;

      const next6HoursWeather = apiData.daily.weathercode.slice(
        currentIndex,
        currentIndex + 7
      );

      setWeatherCodeData(next6HoursWeather);
    }
  }, [apiData, time]);

  function getWeatherIcon(weatherCode) {
    switch (weatherCode) {
      case 0:
        return <IconSun style={{ width: "75%", height: "75%" }} />;
      case 1:
      case 2:
        return <IconCloud style={{ width: "75%", height: "75%" }} />;
      case 3:
      case 4:
        return <IconCloud style={{ width: "75%", height: "75%" }} />;
      case 45:
      case 48:
        return <IconCloudFog style={{ width: "75%", height: "75%" }} />;
      case 51:
      case 53:
        return <IconCloudRain style={{ width: "75%", height: "75%" }} />;
      case 55:
        return <IconCloudRain style={{ width: "75%", height: "75%" }} />;
      case 56:
        return <IconCloudRain style={{ width: "75%", height: "75%" }} />;
      case 57:
        return <IconCloudRain style={{ width: "75%", height: "75%" }} />;
      case 61:
      case 62:
      case 63:
        return <IconCloudRain style={{ width: "75%", height: "75%" }} />;
      case 65:
        return <IconCloudRain style={{ width: "75%", height: "75%" }} />;
      case 66:
        return <IconCloudRain style={{ width: "75%", height: "75%" }} />;
      case 67:
        return <IconCloudSnow style={{ width: "75%", height: "75%" }} />;
      case 71:
        return <IconSnowflake style={{ width: "75%", height: "75%" }} />;
      case 73:
        return <IconSnowflake style={{ width: "75%", height: "75%" }} />;
      case 75:
        return <IconSnowflake style={{ width: "75%", height: "75%" }} />;
      case 77:
        return <IconCloudSnow style={{ width: "75%", height: "75%" }} />;
      case 80:
      case 81:
      case 82:
        return <IconCloudRain style={{ width: "75%", height: "75%" }} />;
      case 85:
      case 86:
        return <IconCloudSnow style={{ width: "75%", height: "75%" }} />;
      case 95:
      case 96:
      case 99:
        return <IconCloudBolt style={{ width: "75%", height: "75%" }} />;
      default:
        return null;
    }
  }

  const today = new Date();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const next7Days = Array.from({ length: 7 }, (_, i) => {
    const dayIndex = (today.getDay() + i) % 7;
    if (i === 0) {
      return "Now";
    } else {
      return daysOfWeek[dayIndex];
    }
  });

  return (
    <>
      <h3 style={{ textAlign: "center" }}>Próximos 7 Dias</h3>
      <IonGrid style={{ width: "100%", textAlign: "center" }}>
        <IonRow>
          {next7Days.map((day, index) => (
            <IonCol key={index}>{day}</IonCol>
          ))}
        </IonRow>
        <IonRow>
          {weatherCode.map((weatherCodeData, index) => (
            <IonCol key={index}>{getWeatherIcon(weatherCodeData)}</IonCol>
          ))}
        </IonRow>
        <IonRow>
          {temperatureData.map((data, index) => (
            <IonCol key={index}>{data}°</IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </>
  );
}

export default ForecastWeather;
