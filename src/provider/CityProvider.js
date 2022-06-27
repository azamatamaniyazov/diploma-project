import { useEffect, useMemo, useState } from "react";
import { CityContext } from "../context/CityContext";

function CityProvider(props) {
  const cityId = +sessionStorage.getItem("cityId");
  const [selectedId, setSelectedId] = useState(cityId === 0 ? 601294 : cityId);
  const [show, setShow] = useState(false);
  const [lang, setLang] = useState("qq");

  useEffect(() => {
    sessionStorage.setItem("cityId", selectedId);
    setSelectedId(+sessionStorage.getItem("cityId"));
  }, [selectedId]);

  const contextValue = useMemo(
    () => ({
      show,
      setShow,
      lang,
      setLang,
      selectedId,
      setSelectedId,
    }),
    [show, setShow, lang, setLang, selectedId, setSelectedId]
  );

  return (
    <CityContext.Provider value={contextValue}>
      {props.children}
    </CityContext.Provider>
  );
}

export default CityProvider;
