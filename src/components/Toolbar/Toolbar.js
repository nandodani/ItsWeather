import React, { useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon,
} from "@ionic/react";
import { cogOutline } from "ionicons/icons";
import SettingsMenu from "../SettingsMenu/SettingsMenu";

const Toolbar = () => {

  return (
    <>
      <IonHeader translucent={true}>
       <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => console.log("Settings")}>
              <IonIcon icon={cogOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
          <SettingsMenu />
      </IonHeader>
    </>
  );
};

export default Toolbar;
