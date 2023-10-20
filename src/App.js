import "./App.css";
import "@ionic/react/css/core.css";
import "./themes/variables.css";
import { setupIonicReact, IonHeader } from "@ionic/react";
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
        <IonHeader>
          <Toolbar />
        </IonHeader>
        <div className="main">
          <Weather />
          <InfoCard />
        </div>
        <div className="secondary">
          <Details />
        </div>
        <p className="source">
          Dados retirados do <a href="https://open-meteo.com">Open-Meteo</a>.
        </p>
      </div>
    </ApiProvider>
  );
}

export default App;
