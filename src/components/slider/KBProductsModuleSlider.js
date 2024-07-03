import { useDispatch, useSelector } from "react-redux";
import { changeWindowSize } from "../../store/WindowSizeSlice";
import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";

const KBProductsModuleSlider = ({ list }) => {
  if (!list) {
    throw new Error("Products list in KBProductsModuleSlider is missing");
  }
  const dispatch = useDispatch();
  const windowInnerWidth = useSelector(
    (state) => state.windowSizeReducer.window
  );
  const slides = useSelector((state) => state.windowSizeReducer.slides);
  let sliderParams = {
    slidesPerView: slides,
    navigation: "true",
    pagination: "false",
    direction: "horizontal",
    loop: "false",
    spaceBetween: "30",
  };
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
  useLayoutEffect(() => {
    window.onresize = () => {
      dispatch(changeWindowSize(window.innerWidth));
    };
    return () => {
      window.onresize = false;
    };
  }, [windowInnerWidth]);
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
