import React from "react";
import { IonItem, IonMenu, IonList, IonIcon } from "@ionic/react";
import { settings } from 'ionicons/icons';


const SettingsMenu = () => {
  return (
    <IonMenu>
      <IonList>
        <IonItem>
          <IonIcon name={settings} />
          Configurações
        </IonItem>
      </IonList>
    </IonMenu>
  );
};

export default SettingsMenu;
