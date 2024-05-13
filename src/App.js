import "./App.css";
import Header from "./components/header/Header.js";
import PageTitle from "./components/PageTitle.js";
import SliderMainPage from "./components/slider/SliderMainPage.js";
import Bestsellers from "./components/bestsellers/Bestsellers.js";
import LinkToAboutUs from "./components/link-to-about-us/LinkToAboutUs.js";
import KabinetProducts from "./components/KabinetProducts.js";
import KabinetLounge from "./components/kabinet-lounge/KabinetLounge.js";
import LatestNews from "./components/LatestNews.js";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <PageTitle title="CRAFT BREWERY" />
        <SliderMainPage />
        <Bestsellers />
        <LinkToAboutUs />
        <KabinetProducts />
        <KabinetLounge />
        <LatestNews />
      </main>
    </div>
  );
}

export default App;
