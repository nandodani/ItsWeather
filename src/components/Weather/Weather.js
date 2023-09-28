import { useEffect, useState } from "react";
import axios from "axios";
import { ReactComponent as Cloudy } from "../../images/Cloudy.svg";
import "./Weather.styles.css";

function Weather() {
  const [temperature, setTemperature] = useState(null);

  const temperatureRounded = Math.round(temperature);

  var today = new Date(),
    time = today.getHours();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility,windspeed_10m,uv_index&timezone=auto"
        );
        console.log(response.data);
        setTemperature(response.data.hourly.temperature_2m[time]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Cloudy className="image-weather" />
      <h1 className="temperature">{temperatureRounded}</h1>
    </>
  );
}

export default Weather;
