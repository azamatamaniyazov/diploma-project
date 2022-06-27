import CityList from "./components/cityList/CityList";
import Header from "./components/header/Header";
import LeftBlock from "./components/leftBlock/LeftBlock";
import MiddleBlock from "./components/middleBlock/MiddleBlock";
import RightBlock from "./components/rightBlock/RightBlock";

function App() {
  return (
    <div className="App overflow-hidden">
      <Header />
      <CityList />
      <div className="max-w-6xl mx-auto px-2 flex flex-row">
        <LeftBlock />
        <MiddleBlock />
        <RightBlock />
      </div>
    </div>
  );
}

export default App;
