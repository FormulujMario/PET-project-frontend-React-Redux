import { useRef } from "react";

const SliderLatestNews = ({ list }) => {
  const sideSlide = (element) => {
    return (
      <swiper-slide class="side-slide">
        <div className="swiper-slide-item">
          <div>
            <img src={element.imgSmall} alt="" />
          </div>
          <div className="title">
            <p>{element.date}</p>
          </div>
          <h4>{element.title}</h4>
        </div>
      </swiper-slide>
    );
  };

  const centralSlide = (element) => {
    return (
      <swiper-slide class="central-slide">
        <div className="swiper-slide-item">
          <div>
            <img src={element.imgBig} alt="" />
          </div>
          <div className="title">
            <p>{element.date}</p>
          </div>
          <h4>{element.title}</h4>
        </div>
      </swiper-slide>
    );
  };
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
            return i === 1 ? centralSlide(element) : sideSlide(element);
          })}
        </swiper-container>
      </div>
    </div>
  );
};

export default SliderLatestNews;
