import React from "react";
import { useContext } from "react";
import ContentLoader from "react-content-loader";
import { CityContext } from "../../context/CityContext";
import { translateService } from "../../services/TranslateService";

const Skeleton = (props) => {
  const { lang } = useContext(CityContext);

  return (
    <div>
      <h2 className="title text-xl font-bold ml-5 mt-3 mb-2">
        {translateService("Kúnlik rejeler", lang)}
      </h2>
      <ContentLoader
        speed={2}
        width={350}
        height={550}
        viewBox="0 0 350 615"
        backgroundColor="#bab5b5"
        foregroundColor="#c2c2c2"
        {...props}
      >
        <rect x="79" y="20" rx="0" ry="0" width="0" height="1" />
        <rect x="4" y="1" rx="0" ry="0" width="3" height="300" />
        <rect x="4" y="300" rx="0" ry="0" width="294" height="3" />
        <rect x="158" y="596" rx="0" ry="0" width="5" height="3" />
        <rect x="5" y="1" rx="0" ry="0" width="294" height="3" />
        <rect x="296" y="1" rx="0" ry="0" width="3" height="300" />
        <rect x="5" y="60" rx="0" ry="0" width="294" height="3" />
        <rect x="22" y="20" rx="0" ry="0" width="200" height="23" />
        <rect x="250" y="20" rx="0" ry="0" width="30" height="23" />
        <rect x="50" y="110" rx="4" ry="4" width="160" height="19" />
        <circle cx="240" cy="120" r="10" />
        <circle cx="240" cy="170" r="10" />
        <circle cx="240" cy="220" r="10" />
        <circle cx="240" cy="270" r="10" />
        <rect x="50" y="160" rx="4" ry="4" width="160" height="19" />
        <rect x="50" y="210" rx="4" ry="4" width="160" height="19" />
        <rect x="50" y="260" rx="4" ry="4" width="160" height="19" />
      </ContentLoader>
    </div>
  );
};

export default Skeleton;
