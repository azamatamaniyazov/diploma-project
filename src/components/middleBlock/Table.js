import TableItem from "./TableItem";
import { translateService } from "../../services/TranslateService";
import { useContext } from "react";
import { CityContext } from "../../context/CityContext";

function Table({ dailyWeather }) {
  const {
    dates: { days },
  } = dailyWeather;
  const { lang } = useContext(CityContext);

  const tableItem = days.map((item, index) => {
    return <TableItem key={index} dailyWeather={dailyWeather} index={index} />;
  });

  return (
    <table className="w-max">
      <thead className="text-xs text-[#999]">
        <tr>
          <th className="font-semibold text-left py-2 px-5">
            {translateService("Kún", lang)}
          </th>
          <th className="font-semibold py-2 px-5">
            {translateService("Kúndiz", lang)}
          </th>
          <th className="font-semibold py-2 px-5">
            {translateService("Keshki", lang)}
          </th>
        </tr>
      </thead>
      <tbody>{tableItem}</tbody>
    </table>
  );
}

export default Table;
