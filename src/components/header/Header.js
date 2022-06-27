import { Link } from "react-router-dom";
import { UserIcon } from "@heroicons/react/outline";
import logo from "./sun-logo.png";
import { useContext } from "react";
import { CityContext } from "../../context/CityContext";
import { useAuth } from "../../hooks/useAuth";
import AuthForms from "./authForms/AuthForms";
import UserPanel from "./UserPanel";

function Header() {
  const { show, setShow, lang, setLang } = useContext(CityContext);
  const { isAuth, email } = useAuth();

  const showHandler = () => {
    setShow(!show);
  };

  return (
    <div className="header bg-white py-4 shadow-sm mb-4">
      <div className="max-w-6xl px-2 mx-auto flex justify-between items-center">
        <Link to="/weather-app" className="logo relative pt-1.5">
          <img className="absolute left-0 top-0 w-10" src={logo} alt="logo" />
          <span className="text-2xl tracking-tight font-semibold ml-10">
            tituWeather
          </span>
        </Link>
        <div className="details flex relative">
          <div className="languages font-medium">
            <button
              onClick={() => setLang("uz")}
              className={`${
                lang === "uz" && "bg-green-600 text-white "
              } uppercase py-1.5 px-2 rounded-full`}
            >
              uz
            </button>
            <button
              onClick={() => setLang("qq")}
              className={`${
                lang === "qq" && "bg-green-600 text-white"
              } uppercase  py-1.5 px-2 rounded-full`}
            >
              qq
            </button>
          </div>
          <div
            onClick={showHandler}
            className="login flex items-center cursor-pointer bg-green-600 font-medium text-white shadow-custom ml-4 py-1.5 px-3 rounded-3xl"
          >
            <UserIcon className="w-5 mr-1" />
            {isAuth ? email : "Kiriw"}
          </div>
          {(show && isAuth && <UserPanel />) || (show && <AuthForms />)}
        </div>
      </div>
    </div>
  );
}

export default Header;
