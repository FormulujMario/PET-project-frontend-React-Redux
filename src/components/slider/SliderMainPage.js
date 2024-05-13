import { useRef } from "react";
import { register } from "swiper/element/bundle";
import { ghPagesPath } from "../constants.js";
import "./SliderMainPage.css";

register();

const SliderMainPage = () => {
  const swiperElRef = useRef(null);
  return (
    <section className="slider">
      <div className="swiper swiper-main-page">
        <div className="swiper-wrapper">
          <swiper-container
            ref={swiperElRef}
            slides-per-view="1"
            navigation="true"
            pagination="true"
            direction="horizontal"
            loop="true"
          >
            <swiper-slide>
              <a href={ghPagesPath + "/shop-beers/plavo"}>
                <img
                  src={process.env.REACT_APP_IMAGES_PATH + "/slider.png"}
                  alt=""
                />
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href={ghPagesPath + "/shop-beers/plavo"}>
                <img
                  src={process.env.REACT_APP_IMAGES_PATH + "/slider.png"}
                  alt=""
                />
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href={ghPagesPath + "/shop-beers/plavo"}>
                <img
                  src={process.env.REACT_APP_IMAGES_PATH + "/slider.png"}
                  alt=""
                />
              </a>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </section>
  );
};

export default SliderMainPage;
