import "./App.css";
import "@ionic/react/css/core.css";
import "./themes/variables.css";
import {
  setupIonicReact,
  IonHeader,
  IonPage,
  IonModal,
  IonContent,
} from "@ionic/react";
import Weather from "./components/Weather/Weather";
import InfoCard from "./components/InfoCard/InfoCard";
import Toolbar from "./components/Toolbar/Toolbar";
import Details from "./components/Details/Details";
import { ApiProvider } from "./utils/WeatherDataContext";

setupIonicReact();

function App() {
  return (
    <ApiProvider>
      <div className="App">
        <IonPage>
          <IonHeader>
            <Toolbar />
          </IonHeader>
          <IonContent className="ion-padding">
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

          <IonModal
            trigger="open-modal"
            initialBreakpoint={1}
            breakpoints={[0, 1]}
          >
            <div className="block">No Data.</div>
          </IonModal>
        </IonPage>
      </div>
    </ApiProvider>
  );
}

export default App;
