import { useRef } from "react";
import { Link } from "react-router-dom";

const ProductsSlider = ({ list, sliderParams }) => {
  const product = (element) => {
    let myLink = element.path;
    return (
      <swiper-slide>
        <Link to={myLink}>
          <div className="swiper-slide-item">
            <img src={element.img} alt="" />
            <div className="title">
              <h4>{element.name}</h4>
              <h4>{element.price}</h4>
            </div>
            <p>{element.description}</p>
          </div>
        </Link>
      </swiper-slide>
    );
  };

  const shopNow = (element) => {
    return (
      <swiper-slide>
        <Link to="/shop">
          <div className="shop-now">
            <img src={element.img} alt=""></img>
            <span>{element.name}</span>
          </div>
        </Link>
      </swiper-slide>
    );
  };
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
