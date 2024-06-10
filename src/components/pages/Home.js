import PageTitle from "../PageTitle.js";
import SliderMainPage from "../slider/SliderMainPage.js";
import Bestsellers from "../Bestsellers.js";
import LinkToAboutUs from "../LinkToAboutUs.js";
import KabinetProducts from "../KabinetProducts.js";
import KabinetLounge from "../KabinetLounge.js";
import LatestNews from "../LatestNews.js";

const Home = () => {
  return (
    <main>
      <PageTitle title="CRAFT BREWERY" />
      <SliderMainPage />
      <Bestsellers />
      <LinkToAboutUs />
      <KabinetProducts />
      <KabinetLounge />
      <LatestNews />
    </main>
  );
};

export default Home;
