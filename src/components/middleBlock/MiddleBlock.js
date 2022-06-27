import { useState, useEffect, useContext } from "react";
import { CityContext } from "../../context/CityContext";
import WeatherServices from "../../services/WeatherServices";

import Table from "./Table";

function MiddleBlock() {
  const [dailyWeather, setDailyWeahter] = useState(null);
  const { selectedId, lang } = useContext(CityContext);

  const { getDailyWeather } = WeatherServices();

  useEffect(() => {
    onRequest();
  }, [selectedId]);

  const onRequest = () => {
    if (selectedId) {
      getDailyWeather(selectedId).then((res) => onLoading(res));
    }
  };

  const onLoading = (res) => {
    if (res) {
      setDailyWeahter(res);
    }
  };

  return (
    <div className="middle-block w-min h-max bg-white shadow-custom rounded pt-4 mx-6">
      <h2 className="title text-xl px-5 font-bold mb-2">
        {lang === "qq" ? "Haptelik hawa-rayi" : "Haftalik ob-havo"}
      </h2>
      {dailyWeather ? <Table dailyWeather={dailyWeather} /> : null}
    </div>
  );
}

export default MiddleBlock;
