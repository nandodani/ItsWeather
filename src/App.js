import "./App.css";
import "@ionic/react/css/core.css";
import "./themes/variables.css";
import {
  setupIonicReact,
  IonHeader,
  IonPage,
  IonModal,
  IonContent,
  IonMenu,
  IonTitle,
  IonButton,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonRow,
} from "@ionic/react";
import Weather from "./components/Weather/Weather";
import InfoCard from "./components/InfoCard/InfoCard";
import Toolbar from "./components/Toolbar/Toolbar";
import Details from "./components/Details/Details";
import { ApiProvider } from "./utils/WeatherDataContext";
import { IconMenu } from "@tabler/icons-react";
import { useState } from "react";
setupIonicReact();

function App() {
  const [isCelsius, setIsCelsius] = useState(true);
  const [isMetric, setIsMetric] = useState(true);
  const [is24h, setIs24h] = useState(true);

  const toggleWeatherUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const toggleDistanceUnit = () => {
    setIsMetric(!isMetric);
  };

  const toggle24h = () => {
    setIs24h(!is24h);
  };
  return (
    <ApiProvider>
      <div className="App">
        <IonMenu contentId="main-content">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Definições</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <h3>Unidades</h3>
            <IonRow>
              <button className="settings-button" onClick={toggleWeatherUnit}>
                {isCelsius ? (
                  <>
                    Celsius
                    <br />
                    <span>(23°C)</span>
                  </>
                ) : (
                  <>
                    Fahrenheit
                    <br />
                    <span>(73°F)</span>
                  </>
                )}
              </button>
            </IonRow>
            <IonRow>
              <button className="settings-button" onClick={toggleDistanceUnit}>
                {isMetric ? (
                  <>
                    Metric
                    <br />
                    <span>(10km, 12km/h)</span>
                  </>
                ) : (
                  <>
                    Imperial
                    <br />
                    <span>(6.2 miles, 7.5 mph)</span>
                  </>
                )}
              </button>
            </IonRow>
            <IonRow>
              <button className="settings-button" onClick={toggle24h}>
                {is24h ? (
                  <>
                    24h
                    <br />
                    <span>(13:00)</span>
                  </>
                ) : (
                  <>
                    12h
                    <br />
                    <span>(1:00 PM)</span>
                  </>
                )}
              </button>
            </IonRow>
          </IonContent>
        </IonMenu>
        <IonPage id="main-content">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton autoHide="false">
                  <IconMenu style={{ color: "white" }} />
                </IonMenuButton>
              </IonButtons>
              <IonTitle style={{ fontFamily: "Satoshi-Variable" }}>
                Cidade
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div className="main">
              <Weather />
              <InfoCard />
            </div>
            <div className="secondary">
              <Details />
            </div>
            <p className="source">
              Dados retirados do <a href="https://open-meteo.com">Open-Meteo</a>
              .
            </p>
          </IonContent>
        </IonPage>
      </div>
    </ApiProvider>
  );
}

export default App;
