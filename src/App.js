import "./App.css";
import "@ionic/react/css/core.css";
import "./themes/variables.css";
import { setupIonicReact } from "@ionic/react";
import Weather from "./components/Weather/Weather";
import InfoCard from "./components/InfoCard/InfoCard";
import Details from "./components/Details/Details";
import { IonIcon } from "@ionic/react";
import { cogOutline } from "ionicons/icons";
import Toolbar from "./components/Toolbar/Toolbar";
setupIonicReact();

function App() {
  return (
    <div
      className="App"
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <Toolbar />
      <div className="main">
        <div className="container">
          <Weather />
        </div>
        <div className="bottom-elements">
          <InfoCard />
        </div>
      </div>
      <div
        style={{
          paddingTop: "env(safe-area-inset-top",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      ></div>
      <div className="secondary">
        <Details />
      </div>
      <p className="source">
        Dados retirados do <a href="https://open-meteo.com">Open-Meteo</a>
      </p>
    </div>
  );
}

export default App;
