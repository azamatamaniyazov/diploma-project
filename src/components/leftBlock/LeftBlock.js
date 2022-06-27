import { useState, useEffect, useContext } from "react";
import { CityContext } from "../../context/CityContext";
import WeatherServices from "../../services/WeatherServices";
import DateServices from "../../services/DateServices";
import { translateService } from "../../services/TranslateService";

function LeftBlock() {
  const [weatherData, setWeatherData] = useState({});
  const { selectedId, lang } = useContext(CityContext);

  useEffect(() => {
    onRequest();
  }, [selectedId]);

  const { getCurrentWeather } = WeatherServices();
  const { getCurrentDate, transformSunTime, transformTimeIcon } =
    DateServices();
  const { today } = getCurrentDate();

  const onRequest = () => {
    if (selectedId) {
      getCurrentWeather(selectedId).then((res) => setWeatherData(res));
    }
  };

  const {
    name,
    description,
    temp,
    feels,
    sunrise,
    sunset,
    pressure,
    humidity,
    wind,
    icon,
  } = weatherData;
  return (
    <div className="left-block w-full h-max bg-white shadow-custom rounded p-4">
      <h2 className="title text-xl font-bold">
        {translateService(name, lang)}
      </h2>
      <p className="current-day">
        {translateService("Búgin", lang)}, <span>{today}</span>
      </p>
      <div className="current-forecast">
        <div className="temp-info w-full flex items-center mt-1">
          <img
            className="max-w-full h-auto"
            src={`http://openweathermap.org/img/wn/${transformTimeIcon(
              icon
            )}@2x.png`}
            alt="icon"
          />
          <span className="text-4xl mr-3">{temp}&#176;</span>
          <div className="w-[112px]">
            <div className="text-base font-medium leading-none mb-1">
              {translateService(icon?.slice(0, icon.length - 1), lang)}
            </div>
            <div className="text-[#666] flex">
              {translateService("Seziledi", lang)}: <span>{feels}&#176;</span>
            </div>
          </div>
        </div>
        <div className="other-info text-[#666] py-2">
          <div className="info-item flex justify-between py-1 border-b border-[#ccc]">
            <span>{translateService("Íǵǵallıq", lang)}:</span>
            <span>{humidity}</span>
          </div>
          <div className="info-item flex justify-between py-1 border-b border-[#ccc]">
            <span>{translateService("Samal tezligi", lang)}:</span>
            <span>{wind}</span>
          </div>
          <div className="info-item flex justify-between py-1 border-b border-[#ccc]">
            <span>{translateService("Basım", lang)}:</span>
            <span>{pressure}</span>
          </div>
          <div className="info-item flex justify-between py-1 border-b border-[#ccc]">
            <span>{translateService("Quyash shıǵıwı", lang)}:</span>
            <span>{transformSunTime(sunrise)}</span>
          </div>
          <div className="info-item flex justify-between py-1 border-b border-[#ccc]">
            <span>{translateService("Quyash batıwı", lang)}:</span>
            <span>{transformSunTime(sunset)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBlock;
