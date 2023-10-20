import React, { useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonButton,
  IonButtons,
  IonTitle,
} from "@ionic/react";
import SettingsMenu from "../SettingsMenu/SettingsMenu";
import { IconMenu } from "@tabler/icons-react";

const Toolbar = () => {
  return (
    <>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => console.log("Settings")}>
              <IconMenu style={{ color: "white" }}/>
            </IonButton>
          </IonButtons>
          <IonTitle style={{ fontFamily: "Satoshi-Variable" }}>Cidade</IonTitle>
        </IonToolbar>
        <SettingsMenu />
    </>
  );
};

export default Toolbar;
