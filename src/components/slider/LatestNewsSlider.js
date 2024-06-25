import scssVars from "./../../scss/App.scss";
import { useRef } from "react";
import { CentralSlide, SideSlide } from "./NewsSlides";

const LatestNewsSlider = ({ list }) => {
  const windowInnerWidth = document.documentElement.clientWidth;
  let sliderParams = {
    slidesPerView: "3",
    navigation: "false",
    pagination: "false",
    direction: "horizontal",
    loop: "false",
    spaceBetween: "2%",
  };
  if (windowInnerWidth < scssVars.breakpoint_sm) {
    sliderParams.slidesPerView = "2";
  }
  const swiperElRef = useRef(null);
  return (
    <div className="swiper-news">
      <div className="swiper-wrapper">
        <swiper-container
          ref={swiperElRef}
          slides-per-view={sliderParams.slidesPerView}
          navigation={sliderParams.navigation}
          pagination={sliderParams.pagination}
          direction={sliderParams.direction}
          loop={sliderParams.loop}
          space-between={sliderParams.spaceBetween}
        >
          {list.map((element, i) => {
            return i === 1 ? (
              <CentralSlide key={`item-${element.title}`} element={element} />
            ) : (
              <SideSlide key={`item-${element.title}`} element={element} />
            );
          })}
        </swiper-container>
      </div>
    </div>
  );
};

export default LatestNewsSlider;
