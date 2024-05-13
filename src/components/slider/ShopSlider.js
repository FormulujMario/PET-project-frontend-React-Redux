import { useRef } from "react";
import "./ShopSlider.css";

const ShopSlider = ({ list, sliderParams, title }) => {
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
          <div class="shop-category-with-title">
            <h2>{title}</h2>
            <div class="shop-category">
              {list.map((element) => {
                return (
                  <swiper-slide>
                    <div class="shop-item">
                      <div class="shop-item-img">
                        <img src={element.img} alt="" />
                      </div>
                      <div class="shop-item-title">
                        <h4>{element.name}</h4>
                        <h4>
                          {element.price} {element.currency}
                        </h4>
                      </div>
                      {element.style &&
                      element.alcohol &&
                      element.color &&
                      element.volume ? (
                        <p>{`${element.style} / abv ${element.alcohol}% / ibu ${element.color} / ${element.volume}l`}</p>
                      ) : (
                        <p>{element.description}</p>
                      )}
                    </div>
                  </swiper-slide>
                );
              })}
            </div>
          </div>
        </swiper-container>
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default ShopSlider;
