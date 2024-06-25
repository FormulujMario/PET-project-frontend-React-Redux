import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { sliderParams } from "../../store/ProductsSlice";

const ShopSlider = ({ list }) => {
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
          <div key={list.categories} className="shop-category">
            <h2>{list.categories}</h2>
            <div className="products">
                 {list.state.length !== 0 ? (
                list.state.map((element) => {
                  let myLink =
                    list.url +
                    element.name
                      .toLowerCase()
                      .replace(/[^\w ]/g, "")
                      .replace(/\s+/g, " ")
                      .replace(/\s/g, "-");
                  return (
                    <swiper-slide key={myLink}>
                      <Link key={myLink} to={myLink}>
                        <div className="swiper-slide-item">
                          <img src={element.img} alt={element.name} />
                          <div className="title">
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
                })
              ) : (
                <div>No products</div>
              )}
            </div>
          </div>
        </swiper-container>
      </div>
    </div>
  );
};

export default React.memo(ShopSlider);
