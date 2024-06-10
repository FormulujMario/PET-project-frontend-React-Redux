import React, { useRef } from "react";
import {
  SHOP_MAIN_BEERS_LIST,
  SHOP_MAIN_BEER_PACKS_LIST,
  SHOP_MAIN_MERCH_LIST,
} from "../CONSTANTS";
import { Link } from "react-router-dom";

const ShopSlider = ({ list }) => {
  let shopPath = null;
  const swiperElRef = useRef(null);
  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        <swiper-container
          ref={swiperElRef}
          slides-per-view={list.sliderParams.slidesPerView}
          navigation={list.sliderParams.navigation}
          pagination={list.sliderParams.pagination}
          direction={list.sliderParams.direction}
          loop={list.sliderParams.loop}
          space-between={list.sliderParams.spaceBetween}
        >
          <div class="shop-category">
            <h2>{list.categories}</h2>
            <div class="products">
              {list.state.map((element) => {
                if (list.state === SHOP_MAIN_BEERS_LIST) {
                  shopPath = "/shop-beers/";
                } else if (list.state === SHOP_MAIN_BEER_PACKS_LIST) {
                  shopPath = "/shop-beer-packs/";
                } else if (list.state === SHOP_MAIN_MERCH_LIST) {
                  shopPath = "/shop-merch/";
                } else {
                  shopPath = "/shop-pivolada/";
                }
                let myLink =
                  shopPath +
                  element.name
                    .toLowerCase()
                    .replace(/[^\w ]/g, "")
                    .replace(/\s+/g, " ")
                    .replace(/\s/g, "-");
                return (
                  <swiper-slide>
                    <Link to={myLink}>
                      <div class="swiper-slide-item">
                        <img src={element.img} alt="" />
                        <div class="title">
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
                      </div>{" "}
                    </Link>
                  </swiper-slide>
                );
              })}
            </div>
          </div>
        </swiper-container>
      </div>
    </div>
  );
};

export default React.memo(ShopSlider);
