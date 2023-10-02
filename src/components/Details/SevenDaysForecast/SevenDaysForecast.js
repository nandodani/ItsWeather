import React, { useEffect, useState } from "react";
import { IonCardContent, IonGrid, IonRow, IonCol } from "@ionic/react";
import { useApi } from "../../../utils/WeatherDataContext";
import { ReactComponent as Cloudy } from "../../../assets/images/Cloudy.svg";
import { ReactComponent as PartiallyCloudy } from "../../../assets/images/Cloudy.svg";
import { ReactComponent as Sunny } from "../../../assets/images/Cloudy.svg";
import { ReactComponent as Fog } from "../../../assets/images/Cloudy.svg";
import { ReactComponent as Drizzle } from "../../../assets/images/Cloudy.svg";
import { ReactComponent as DenseDrizzle } from "../../../assets/images/Cloudy.svg";
import { ReactComponent as LightFreezingDrizzle } from "../../../assets/images/Cloudy.svg";
import { ReactComponent as DenseFreezingDrizzle } from "../../../assets/images/Cloudy.svg";
import { ReactComponent as LightRain } from "../../../assets/images/Cloudy.svg";
import { ReactComponent as HeavyRain } from "../../../assets/images/Cloudy.svg";
import { ReactComponent as LightFreezingRain } from "../../../assets/images/Cloudy.svg";
import { ReactComponent as HeavyFreezingRain } from "../../../assets/images/Cloudy.svg";
import { ReactComponent as SlightSnowFall } from "../../../assets/images/Cloudy.svg";
import { ReactComponent as ModerateSnowFall } from "../../../assets/images/Cloudy.svg";
import { ReactComponent as HeavySnowFall } from "../../../assets/images/Cloudy.svg";
import { ReactComponent as SnowGrains } from "../../../assets/images/Cloudy.svg";
import { ReactComponent as RainShowers } from "../../../assets/images/Cloudy.svg";
import { ReactComponent as SnowShowers } from "../../../assets/images/Cloudy.svg";
import { ReactComponent as Thunderstorm } from "../../../assets/images/Cloudy.svg";

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
      const next7DaysTemperature = apiData.daily.temperature_2m_max.map((temp) =>
        Math.round(temp)
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
        return <Sunny style={{ width: "100%", height: "100%" }} />;
      case 1:
      case 2:
        return <PartiallyCloudy style={{ width: "100%", height: "100%" }} />;
      case 3:
      case 4:
        return <Cloudy style={{ width: "100%", height: "100%" }} />;
      case 45:
      case 48:
        return <Fog style={{ width: "100%", height: "100%" }} />;
      case 51:
      case 53:
        return <Drizzle style={{ width: "100%", height: "100%" }} />;
      case 55:
        return <DenseDrizzle style={{ width: "100%", height: "100%" }} />;
      case 56:
        return (
          <LightFreezingDrizzle style={{ width: "100%", height: "100%" }} />
        );
      case 57:
        return (
          <DenseFreezingDrizzle style={{ width: "100%", height: "100%" }} />
        );
      case 61:
      case 62:
      case 63:
        return <LightRain style={{ width: "100%", height: "100%" }} />;
      case 65:
        return <HeavyRain style={{ width: "100%", height: "100%" }} />;
      case 66:
        return <LightFreezingRain style={{ width: "100%", height: "100%" }} />;
      case 67:
        return <HeavyFreezingRain style={{ width: "100%", height: "100%" }} />;
      case 71:
        return <SlightSnowFall style={{ width: "100%", height: "100%" }} />;
      case 73:
        return <ModerateSnowFall style={{ width: "100%", height: "100%" }} />;
      case 75:
        return <HeavySnowFall style={{ width: "100%", height: "100%" }} />;
      case 77:
        return <SnowGrains style={{ width: "100%", height: "100%" }} />;
      case 80:
      case 81:
      case 82:
        return <RainShowers style={{ width: "100%", height: "100%" }} />;
      case 85:
      case 86:
        return <SnowShowers style={{ width: "100%", height: "100%" }} />;
      case 95:
      case 96:
      case 99:
        return <Thunderstorm style={{ width: "100%", height: "100%" }} />;
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
    <IonCardContent style={{ width: "100%", height: "100%"}}>
      <IonGrid>
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
    </IonCardContent>
  );
}

export default ForecastWeather;
