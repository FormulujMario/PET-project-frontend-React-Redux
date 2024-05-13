import { useRef } from "react";
import "./ProductsSlider.css";

const product = (element) => {
  return (
    <swiper-slide>
      <div className="swiper-slide-item">
        <img src={element.img} alt="" />
        <div className="swiper-slide-item-title">
          <h4>{element.name}</h4>
          <h4>{element.price}</h4>
        </div>
        <p>{element.description}</p>
      </div>
    </swiper-slide>
  );
};

const shopNow = (element) => {
  return (
    <swiper-slide>
      <div className="swiper-slide-item-shop-now">
        <div className="swiper-slide-item-shop-now-img">
          <img src={element.img} alt=""></img>
        </div>
        <span className="shop-now">{element.name}</span>
      </div>
    </swiper-slide>
  );
};

const ProductsSlider = (list, sliderParams) => {
  const swiperElRef = useRef(null);
  return (
    <div className="swiper">
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
          {list.map((element) => {
            return element.price ? product(element) : shopNow(element);
          })}
        </swiper-container>
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default ProductsSlider;
