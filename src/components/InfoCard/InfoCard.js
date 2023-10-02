import {
  IonCard,
  IonCardHeader,
} from "@ionic/react";
import "./InfoCard.styles.css";
import CurrentWeather from "./CurrentWeather/CurrentWeather"
import ForecastWeather from "./ForecastWeather/ForecastWeather"

function InfoCard() {

  return (
    <>
      <p className="weather">Local</p>{" "}
      <IonCard className="info">
        <IonCardHeader>
          <CurrentWeather />
        </IonCardHeader>
        <ForecastWeather />
      </IonCard>
    </>
  );
}

export default InfoCard;
