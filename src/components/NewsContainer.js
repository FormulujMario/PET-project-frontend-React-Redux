import scssVars from "./../scss/App.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeWindowSize } from "../store/WindowSizeSlice";
import NewsSlider from "./slider/NewsSlider";
import { useLayoutEffect } from "react";

const NewsContainer = ({ list }) => {
  if (!list) {
    throw new Error("News list in NewsContainer is missing");
  }
  const dispatch = useDispatch();
  const windowInnerWidth = useSelector(
    (state) => state.windowSizeReducer.window
  );
  const mobile = scssVars.breakpoint_sm;
  const tablet = scssVars.breakpoint_md;
  let i = 3;
  if (windowInnerWidth <= tablet) {
    i = 2;
  }
  const toggleQ = (ind) => {
    if (windowInnerWidth > tablet) {
      return ind === 3 ? (i = 4) : (i = 3);
    } else {
      return ind === 2 ? (i = 3) : (i = 2);
    }
  };
  let arrToRender = [];
  let restOfNews = null;
  let copyOfNewsArr = null;
  const newsRender = (list) => {
    copyOfNewsArr = JSON.parse(JSON.stringify(list));
    if (copyOfNewsArr.length !== 0) {
      if (copyOfNewsArr.length <= i) {
        restOfNews = [];
        arrToRender.push(copyOfNewsArr);
      } else {
        restOfNews = JSON.parse(JSON.stringify(copyOfNewsArr));
        copyOfNewsArr.splice(i);
        arrToRender.push(copyOfNewsArr);
        restOfNews.splice(0, i);
      }
      if (windowInnerWidth > mobile) {
        toggleQ(i);
      }
      newsRender(restOfNews);
    }
    return arrToRender;
  };
  list && newsRender(list);
  let indexOfRenderingArr = -1;
  useLayoutEffect(() => {
    window.onresize = () => {
      dispatch(changeWindowSize(window.innerWidth));
    };
    return () => {
      window.onresize = false;
    };
  }, [windowInnerWidth]);
  return (
    <div>
      {arrToRender.map((arr) => {
        indexOfRenderingArr++;
        return <NewsSlider key={`news-${indexOfRenderingArr}`} arr={arr} />;
      })}
    </div>
  );
};

export default NewsContainer;
