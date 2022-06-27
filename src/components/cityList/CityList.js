import { useContext } from "react";
import { Link } from "react-router-dom";
import { CityContext } from "../../context/CityContext";

const cities = [
  { id: 601294, name_qq: "Nókis", name_uz: "Nukus" },
  { id: 829959, name_qq: "Xojeli", name_uz: "Xojayli" },
  { id: 601349, name_qq: "Kegeyli", name_uz: "Kegeyli" },
  { id: 829955, name_qq: "Qońırat", name_uz: "Qo`ng`irot" },
  { id: 829960, name_qq: "Shimbay", name_uz: "Chimboy" },
  { id: 829964, name_qq: "Shomanay", name_uz: "Shumanay" },
  { id: 601306, name_qq: "Qanlıkól", name_uz: "Qonliko`l" },
  { id: 829962, name_qq: "Moynaq", name_uz: "Mo`ynoq" },
  { id: 829930, name_qq: "Nókis rayonı", name_uz: "Nukus tumani" },
  { id: 1512699, name_qq: "Taxtakópir", name_uz: "Taxtako`pir" },
  { id: 1513733, name_qq: "Qaraózek", name_uz: "Qorao`zak" },
  { id: 1538221, name_qq: "Beruniy", name_uz: "Beruniy" },
  { id: 1538222, name_qq: "Tórtkól", name_uz: "To`rtko`l" },
  { id: 1538224, name_qq: "Manǵıt", name_uz: "Mang`it" },
];

function CityList() {
  const { selectedId, setSelectedId, lang } = useContext(CityContext);

  const listItems = cities.map((item) => {
    return (
      <li key={item.id} className="list-item mr-4 mt-2 text-[#666] text-center">
        <Link
          to={`/weather-app/${item[`name_${lang}`]}`}
          onClick={() => setSelectedId(item.id)}
          className={`${
            item.id === selectedId && "text-[#F03346]"
          } item-link hover:text-[#F03346]`}
        >
          {item[`name_${lang}`]}
        </Link>
      </li>
    );
  });

  return (
    <ul className="city-list flex justify-center flex-wrap max-w-6xl mb-6 mx-auto px-2">
      {listItems}
    </ul>
  );
}

export default CityList;
