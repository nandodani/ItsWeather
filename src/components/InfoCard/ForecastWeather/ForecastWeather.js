import React, { useEffect, useState } from "react";
import { IonCardContent, IonGrid, IonRow, IonCol } from "@ionic/react";
import { useApi } from "../../../utils/WeatherDataContext";
import { IconCloud, IconCloudBolt, IconCloudFog, IconCloudRain, IconCloudSnow, IconSnowflake, IconSun } from "@tabler/icons-react";


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
        return (
          <IconCloudRain style={{ width: "75%", height: "75%" }} />
        );
      case 57:
        return (
          <IconCloudRain style={{ width: "75%", height: "75%" }} />
        );
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
