import { createContext } from "react";

export const CityContext = createContext({
  show: false,
  setShow: () => {},
  lang: "qq",
  setLang: () => {},
  selectedId: null,
  setSelectedId: () => {},
});
