import { NEWS_LIST } from "./CONSTANTS.js";
import NormalWhiteButton from "./buttons/NormalWhiteButton.js";
import { BsArrowUpRight } from "react-icons/bs";
import LatestNewsSlider from "./slider/LatestNewsSlider.js";

const LatestNews = () => {
  if (!NEWS_LIST) {
    throw new Error("News list in LatestNews is missing");
  }
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
      {news && <LatestNewsSlider list={news} />}
    </section>
  );
};

export default LatestNews;
