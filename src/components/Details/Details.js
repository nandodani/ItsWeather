import React, { useEffect, useState } from "react";
import "./Details.styles.css";
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import WindDataChart from "./WindDataChart/WindDataChart";
import SevenDaysForecast from "./SevenDaysForecast/SevenDaysForecast.js";
import { useApi } from "../../utils/WeatherDataContext";
import UvIndex from "./UvIndex/UvIndex";
import { IconEye } from "@tabler/icons-react";

function Details() {
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

  const visibility =
    apiData &&
    apiData.hourly &&
    apiData.hourly.visibility &&
    apiData.hourly.visibility[time];

  const visibilityUnit =
    apiData && apiData.hourly_units && apiData.hourly_units.visibility;

  const humidityUnit =
    apiData && apiData.hourly_units && apiData.hourly_units.relativehumidity_2m;

  return (
    <>
      <h2>Details</h2>
      <IonGrid>
        <IonRow>
          <IonCol>
            <div className="title-details" id="open-modal" expand="block">
              <IconEye />
              <h3>Visibilidade</h3>
            </div>
            {visibility ? visibility + " " + visibilityUnit : "Carregando..."}
          </IonCol>
          <IonCol>
            <div className="title-details" id="open-modal" expand="block">
              <IconEye />
              <h3>Humidade</h3>
            </div>
            {humidity ? humidity + " " + humidityUnit : "Carregando..."}
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <WindDataChart />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <UvIndex />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <SevenDaysForecast />
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}

export default Details;
