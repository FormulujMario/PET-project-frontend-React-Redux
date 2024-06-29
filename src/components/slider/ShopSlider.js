import { useRef } from "react";
import { listOfCategories, shopSliderParams } from "../CONSTANTS";
import rewrite from "../rewrite";
import { Link } from "react-router-dom";

const ShopSlider = ({ list, category }) => {
  if (!list || !category || !listOfCategories || !shopSliderParams) {
    throw new Error("Something in ShopSlider is missing");
  }
  const swiperElRef = useRef(null);
  let productLink = null;
  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        {shopSliderParams && (
          <swiper-container
            ref={swiperElRef}
            slides-per-view={shopSliderParams.slidesPerView}
            navigation={shopSliderParams.navigation}
            pagination={shopSliderParams.pagination}
            direction={shopSliderParams.direction}
            loop={shopSliderParams.loop}
            space-between={shopSliderParams.spaceBetween}
          >
            <div key={category} className="shop-category">
              {category && <h2>{category}</h2>}
              <div className="products">
                {list &&
                  list.map((element) => {
                    if (listOfCategories) {
                      listOfCategories.lists.map((categoryList) => {
                        if (categoryList.categories === category) {
                          productLink =
                            categoryList.url + rewrite(element.name);
                        }
                        return productLink;
                      });
                    }

                    return (
                      <swiper-slide key={productLink}>
                        <Link key={productLink} to={productLink}>
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
                  })}
              </div>
            </div>
          </swiper-container>
        )}
      </div>
    </div>
  );
};

export default ShopSlider;
