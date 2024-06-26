import { useRef } from "react";
import { CentralSlide, EmptySlide, SideSlide } from "./NewsSlides";

const NewsSlider = ({ arr }) => {
  const swiperElRef = useRef(null);
  return (
    arr && (
      <div className="swiper swiper-news">
        <swiper-container
          ref={swiperElRef}
          slides-per-view={arr.length}
          navigation="false"
          pagination="false"
          direction="horizontal"
          loop="false"
          space-between="2%"
        >
          {arr.map((element) => {
            if (element.title) {
              return element.bigImg ? (
                <CentralSlide key={`item-${element.key}`} element={element} />
              ) : (
                <SideSlide key={`item-${element.key}`} element={element} />
              );
            } else {
              return <EmptySlide key={`item-${element.key}`} />;
            }
          })}
        </swiper-container>
      </div>
    )
  );
};

export default NewsSlider;
