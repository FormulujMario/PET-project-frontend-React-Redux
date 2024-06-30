import scssVars from "./../../scss/App.scss";
import { Link } from "react-router-dom";

const KBProductsModuleSlider = ({ list }) => {
  if (!list) {
    throw new Error("Products list in KBProductsModuleSlider is missing");
  }
  const windowInnerWidth = document.documentElement.clientWidth;
  let sliderParams = {
    slidesPerView: "4",
    navigation: "true",
    pagination: "false",
    direction: "horizontal",
    loop: "false",
    spaceBetween: "30",
  };
  if (windowInnerWidth <= scssVars.breakpoint_md) {
    sliderParams.slidesPerView = "2";
  }
  const product = (element) => {
    let myLink = element.path;
    return (
      <swiper-slide key={myLink}>
        <Link key={myLink} to={myLink}>
          <div className="swiper-slide-item">
            <img src={element.img} alt={element.name} />
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
      <swiper-slide key={element.name}>
        <Link key={element.name} to="/shop">
          <div className="shop-now">
            <img src={element.img} alt=""></img>
            <span>{element.name}</span>
          </div>
        </Link>
      </swiper-slide>
    );
  };
  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        <swiper-container
          slides-per-view={sliderParams.slidesPerView}
          navigation={sliderParams.navigation}
          pagination={sliderParams.pagination}
          direction={sliderParams.direction}
          loop={sliderParams.loop}
          space-between={sliderParams.spaceBetween}
        >
          {list &&
            list.map((element) => {
              return element.price ? product(element) : shopNow(element);
            })}
        </swiper-container>
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default KBProductsModuleSlider;
