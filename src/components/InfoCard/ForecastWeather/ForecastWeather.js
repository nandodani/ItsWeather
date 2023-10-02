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
    if (apiData && apiData.hourly && apiData.hourly.temperature_2m) {
      const currentIndex =
        time >= apiData.hourly.temperature_2m.length ? 0 : time;

      const next6HoursTemperature = apiData.hourly.temperature_2m.slice(
        currentIndex,
        currentIndex + 6
      );

      const roundedTemperatureData = next6HoursTemperature.map((temp) =>
        Math.round(temp)
      );

      setTemperatureData(roundedTemperatureData);
    }
    if (apiData && apiData.hourly && apiData.hourly.weathercode) {
      const currentIndex = time >= apiData.hourly.weathercode.length ? 0 : time;

      const next6HoursWeather = apiData.hourly.weathercode.slice(
        currentIndex,
        currentIndex + 6
      );

      setWeatherCodeData(next6HoursWeather);
    }
  }, [apiData, time]);

  // Function to get the appropriate SVG based on weather code
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

  const next6Hours = Array.from({ length: 6 }, (_, i) => `${i + 1 + time}h`);

  return (
    <IonCardContent>
      <IonGrid>
        <IonRow>
          {next6Hours.map((hour, index) => (
            <IonCol key={index} size="2">
              {hour}
            </IonCol>
          ))}
        </IonRow>
        <IonRow>
          {weatherCode.map((weatherCodeData, index) => (
            <IonCol key={index} size="2">
              {getWeatherIcon(weatherCodeData)}
            </IonCol>
          ))}
        </IonRow>
        <IonRow>
          {temperatureData.map((data, index) => (
            <IonCol key={index} size="2">
              {data}°
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </IonCardContent>
  );
}

export default ForecastWeather;
