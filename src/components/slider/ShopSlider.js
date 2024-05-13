import { memo, useRef } from "react";
import {
  SHOP_MAIN_BEERS_LIST,
  SHOP_MAIN_BEER_PACKS_LIST,
  SHOP_MAIN_MERCH_LIST,
} from "../constants";
import { Link } from "react-router-dom";
import { useActiveCategoryContext } from "../../contexts/ActiveCategoryContext";
import "./ShopSlider.css";

const ShopSlider = ({ list }) => {
  const activeCategoryContext = useActiveCategoryContext();
  let shopPath = null;
  const swiperElRef = useRef(null);
  const id = activeCategoryContext.activeState.activeCategory
    .toLowerCase()
    .replace(/ /g, "-");
  return (
    <div className="swiper" id={id}>
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
          <div class="shop-category-with-title">
            <h2>{list.categories}</h2>
            <div class="shop-category">
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
                  <Link to={myLink}>
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
                  </Link>
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

export default memo(ShopSlider);
