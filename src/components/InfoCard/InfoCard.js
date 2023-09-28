import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import "./InfoCard.styles.css";

function InfoCard() {
  return (
    <>
      <p className="weather">Estado do tempo</p>{" "}
      <IonCard className="info">
        <IonCardHeader>
          <IonCardTitle>Coimbra</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>Grafico com as temps</IonCardContent>
      </IonCard>
    </>
  );
}

export default InfoCard;
