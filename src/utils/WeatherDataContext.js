import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [apiData, setApiData] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility,windspeed_10m,uv_index&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=GMT"
      );
      console.log(response.data);
      setApiData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <ApiContext.Provider value={apiData}>{children}</ApiContext.Provider>;
}

export function useApi() {
  return useContext(ApiContext);
}
