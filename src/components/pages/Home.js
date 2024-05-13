import PageTitle from "../PageTitle.js";
import SliderMainPage from "../slider/SliderMainPage.js";
import Bestsellers from "../bestsellers/Bestsellers.js";
import LinkToAboutUs from "../link-to-about-us/LinkToAboutUs.js";
import KabinetProducts from "../kabinet-products/KabinetProducts.js";
import KabinetLounge from "../kabinet-lounge/KabinetLounge.js";
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
