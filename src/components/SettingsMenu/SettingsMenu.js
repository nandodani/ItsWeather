import React from "react";
import { IonItem, IonMenu, IonList, IonIcon } from "@ionic/react";

const SettingsMenu = () => {
  return (
    <IonMenu>
      <IonList>
        <IonItem>
          <IonIcon name="settings" />
          Configurações
        </IonItem>
      </IonList>
    </IonMenu>
  );
};

export default SettingsMenu;
