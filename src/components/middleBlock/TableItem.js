import { useContext } from "react";
import { CityContext } from "../../context/CityContext";
import { translateService } from "../../services/TranslateService";

function TableItem({ dailyWeather, index }) {
  const {
    dates: { days, datemonth },
    dayTimeForecasts: { dmax, dmin, dIcons, dDescriptions },
    nightTimeForecasts: { nmax, nmin, nIcons, nDescriptions },
  } = dailyWeather;
  const { lang } = useContext(CityContext);

  return (
    <tr>
      <td className="px-5 border-y border-solid border-[#ddd]">
        <strong>{translateService(days[index], lang)}</strong>
        <div className="text-[13px]">{datemonth[index]}</div>
      </td>
      <td className="px-4 border-y border-solid border-[#ddd]">
        <div className="flex w-max items-center">
          <img
            className="w-[68px]"
            src={`http://openweathermap.org/img/wn/${dIcons[index]}@2x.png`}
            alt="icon"
          />
          <div>
            <div className="text-base ">{dmax[index]}&#176;</div>
            <div className="text-[#999] text-center">{dmin[index]}&#176;</div>
          </div>
        </div>
      </td>
      <td className="px-5 border-y border-solid border-[#ddd]">
        <div className="flex items-center">
          <img
            className="w-[68px]"
            src={`http://openweathermap.org/img/wn/${nIcons[index]}@2x.png`}
            alt="icon"
          />
          <div>
            <div className="text-base ">{nmax[index]}&#176;</div>
            <div className="text-[#999] text-center">{nmin[index]}&#176;</div>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default TableItem;
