import React from "react";
import "./Details.styles.css";
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import WindDataChart from "./WindDataChart/WindDataChart";
import SevenDaysForecast from "./SevenDaysForecast/SevenDaysForecast.js";
import Visibility from "./Visibility/Visibility";
import Humidity from "./Humidity/Humidity";
import UvIndex from "./UvIndex/UvIndex";

function Details() {


  return (
    <>
      <h2>Details</h2>
      <IonGrid>
        <IonRow>
          <IonCol size="6">
            <Visibility />
          </IonCol>
          <IonCol size="6">
            <Humidity />
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
