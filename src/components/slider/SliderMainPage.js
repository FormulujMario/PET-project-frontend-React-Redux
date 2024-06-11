import { register } from "swiper/element/bundle";
import { ghPagesPath } from "../CONSTANTS.js";

register();

const SliderMainPage = () => {
  return (
    <section className="swiper-main-page">
      <div className="swiper-wrapper">
        <swiper-container
          slides-per-view="1"
          navigation="true"
          pagination="false"
          direction="horizontal"
          loop="true"
        >
          <swiper-slide>
          <div className="swiper-slide-item">
            <a href={ghPagesPath + "/shop-beers/plavo"}>
              <img
                src={process.env.REACT_APP_IMAGES_PATH + "/slider.png"}
                alt="plavo beer"
              />
            </a>
            </div>
          </swiper-slide>
          <swiper-slide>
          <div className="swiper-slide-item">
            <a href={ghPagesPath + "/shop-beers/plavo"}>
              <img
                src={process.env.REACT_APP_IMAGES_PATH + "/slider.png"}
                alt="plavo beer"
              />
            </a>
            </div>
          </swiper-slide>
          <swiper-slide>
          <div className="swiper-slide-item">
            <a href={ghPagesPath + "/shop-beers/plavo"}>
              <img
                src={process.env.REACT_APP_IMAGES_PATH + "/slider.png"}
                alt="plavo beer"
              />
            </a>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </section>
  );
};

export default SliderMainPage;
