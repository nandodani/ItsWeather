import "./App.css";
import "@ionic/react/css/core.css";
import "./themes/variables.css";
import { setupIonicReact } from "@ionic/react";
import Weather from "./components/Weather/Weather";
import InfoCard from "./components/InfoCard/InfoCard";
import Details from "./components/Details/Details";
import Toolbar from "./components/Toolbar/Toolbar";
import { ApiProvider } from "./utils/WeatherDataContext";

setupIonicReact();

function App() {
  return (
    <ApiProvider>
      <div
        className="App"
        style={{
          paddingTop: "env(safe-area-inset-top",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <h3 className="welcome">Bom-dia, Nome!</h3>
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
        >
          <hr />
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
