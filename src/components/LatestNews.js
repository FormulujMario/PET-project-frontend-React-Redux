import { NEWS_LIST } from "./CONSTANTS.js";
import LatestNewsSlider from "./slider/LatestNewsSlider.js";
import NormalWhiteButton from "./buttons/NormalWhiteButton.js";
import { BsArrowUpRight } from "react-icons/bs";

const LatestNews = () => {
  const news = NEWS_LIST;
  return (
    <section className="latest-news">
      <div className="section-title">
        <h2>LATEST NEWS</h2>
        <NormalWhiteButton
          text="SEE ALL"
          icon={<BsArrowUpRight />}
          href="/news"
        />
      </div>
      <LatestNewsSlider list={news} />
    </section>
  );
};

export default LatestNews;
