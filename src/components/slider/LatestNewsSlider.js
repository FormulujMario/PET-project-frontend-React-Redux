import { useRef } from "react";
import { CentralSlide, SideSlide } from "./NewsSlides";

const LatestNewsSlider = ({ list }) => {
  const swiperElRef = useRef(null);
  return (
    <div className="swiper-news">
      <div className="swiper-wrapper">
        <swiper-container
          ref={swiperElRef}
          slides-per-view="3"
          navigation="false"
          pagination="false"
          direction="horizontal"
          loop="false"
          space-between="2%"
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
