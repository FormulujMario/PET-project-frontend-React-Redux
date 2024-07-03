import scssVars from "./../../scss/App.scss";
import { useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeWindowSize } from "../../store/WindowSizeSlice";
import { CentralSlide, SideSlide } from "./NewsSlides";

const LatestNewsSlider = ({ list }) => {
  if (!list) {
    throw new Error("News list in LatestNewsSlider is missing");
  }
  const dispatch = useDispatch();
  const windowInnerWidth = useSelector(
    (state) => state.windowSizeReducer.window
  );
  const mobile = scssVars.breakpoint_sm;
  let sliderParams = {
    slidesPerView: "3",
    navigation: "false",
    pagination: "false",
    direction: "horizontal",
    loop: "false",
    spaceBetween: "2%",
  };
  if (windowInnerWidth < mobile) {
    sliderParams.slidesPerView = "2";
  }
  const swiperElRef = useRef(null);
  useLayoutEffect(() => {
    window.onresize = () => {
      dispatch(changeWindowSize(window.innerWidth));
    };
    return () => {
      window.onresize = false;
    };
  }, [windowInnerWidth]);
  return (
    <div className="swiper-news">
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
          {list &&
            list.map((element, i) => {
              return i === 1 ? (
                <CentralSlide key={`item-${element.title}`} element={element} />
              ) : (
                <SideSlide key={`item-${element.title}`} element={element} />
              );
            })}
        </swiper-container>
      </div>
    </div>
  );
};

export default LatestNewsSlider;
