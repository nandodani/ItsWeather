import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useApi } from "../../../utils/WeatherDataContext";
import { IconWind } from "@tabler/icons-react";

function WindDataChart() {
  const [time, setTime] = useState(null);
  const [windData, setWindData] = useState(null);
  const apiData = useApi();

  useEffect(() => {
    if (apiData && apiData.hourly && apiData.hourly.windspeed_10m) {
      const currentIndex =
        time >= apiData.hourly.windspeed_10m.length ? 0 : time;

      const windData = apiData.hourly.windspeed_10m.slice(
        currentIndex,
        currentIndex + 12
      );
      setWindData(windData);
    }
  }, [apiData]);

  useEffect(() => {
    const today = new Date();
    const currentTime = today.getHours();
    setTime(currentTime);
  }, []);

  const chartData = {
    labels: windData
      ? Array.from({ length: windData.length }, (_, i) => {
          const hour = (time + i) % 24;
          return `${hour}h`;
        })
      : [],
    datasets: [
      {
        data: windData,
        borderColor: "white",
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw;
            const unit = apiData?.hourly_units?.windspeed_10m;
            return `${value} ${unit}`;
          },
        },
      },
    },
    tension: 0.4,
    scales: {
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <div className="card-details">
        <div className="title-card-details">
          <IconWind />
          <h3>Vento</h3>
        </div>
        <div className="content-card-details">
          <Line
            data={chartData}
            options={chartOptions}
            height={200}
            width={500}
          />
        </div>
      </div>
    </>
  );
}

export default WindDataChart;
