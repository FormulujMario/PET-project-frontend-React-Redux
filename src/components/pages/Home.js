import PageTitle from "../PageTitle.js";
import MainPageSlider from "../slider/MainPageSlider.js";
import Bestsellers from "../Bestsellers.js";
import LinkToAboutUs from "../LinkToAboutUs.js";
import KabinetProducts from "../KabinetProducts.js";
import KabinetLounge from "../KabinetLounge.js";
import LatestNews from "../LatestNews.js";

const Home = () => {
  return (
    <main>
      <PageTitle title="CRAFT BREWERY" />
      <MainPageSlider />
      <Bestsellers />
      <LinkToAboutUs />
      <KabinetProducts />
      <KabinetLounge />
      <LatestNews />
    </main>
  );
};

export default Home;
