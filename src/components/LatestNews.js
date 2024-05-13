import { NEWS_LIST } from "./constants.js";
import SliderLatestNews from "./slider/SliderLatestNews.js";
import NormalWhiteButton from "./buttons/NormalWhiteButton.js";
import { BsArrowUpRight } from "react-icons/bs";

const LatestNews = () => {
  const news = NEWS_LIST;
  return (
    <section class="latest-news">
      <div class="section-title">
        <h2>LATEST NEWS</h2>
        <NormalWhiteButton text="SEE ALL" icon={<BsArrowUpRight />} />
      </div>
      <SliderLatestNews list={news} />
    </section>
  );
};

export default LatestNews;
