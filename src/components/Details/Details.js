import React, { useEffect, useState } from "react";
import "./Details.styles.css";
import {
  IonCol,
  IonGrid,
  IonRow,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import WindDataChart from "./WindDataChart/WindDataChart";
import SevenDaysForecast from "./SevenDaysForecast/SevenDaysForecast.js";
import { useApi } from "../../utils/WeatherDataContext";
import UvIndex from "./UvIndex/UvIndex";

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
            <IonCard>
              <IonCardHeader>
                <IonCardTitle className="card-title">Visibilidade</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {visibility
                  ? visibility + " " + visibilityUnit
                  : "Carregando..."}
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle className="card-title">Humidade</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {humidity ? humidity + " " + humidityUnit : "Carregando..."}
              </IonCardContent>
            </IonCard>
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
            <IonCard className="seven-days">
              <IonCardHeader>
                <IonCardTitle className="card-title">7 Days Forecast</IonCardTitle>
              </IonCardHeader>
              <SevenDaysForecast />
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}

export default Details;
