import PageTitle from "../PageTitle.js";
import MainPageSlider from "../slider/MainPageSlider.js";
import Bestsellers from "../Bestsellers.js";
import LinkToAboutUs from "../LinkToAboutUs.js";
import KabinetProducts from "../KabinetProducts.js";
import KabinetLounge from "../KabinetLounge.js";
import LatestNews from "../LatestNews.js";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "../Fallback.js";

const Home = () => {
  return (
    <main>
      <PageTitle title="CRAFT BREWERY" />
      <MainPageSlider />
      <ErrorBoundary FallbackComponent={Fallback}>
        <Bestsellers />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={Fallback}>
        <LinkToAboutUs />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={Fallback}>
        <KabinetProducts />
      </ErrorBoundary>
      <KabinetLounge />
      <ErrorBoundary FallbackComponent={Fallback}>
        <LatestNews />
      </ErrorBoundary>
    </main>
  );
};

export default Home;
