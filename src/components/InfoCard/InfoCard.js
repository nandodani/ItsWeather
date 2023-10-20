import "./InfoCard.styles.css";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import ForecastWeather from "./ForecastWeather/ForecastWeather";

function InfoCard() {
  return (
    <>
      <div className="infocard">
        <CurrentWeather />
        <ForecastWeather />
      </div>
    </>
  );
}

export default InfoCard;
