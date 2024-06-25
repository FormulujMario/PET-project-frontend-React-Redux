import scssVars from "./../scss/App.scss";
import NewsSlider from "./slider/NewsSlider";

const NewsContainer = ({ list }) => {
  const windowInnerWidth = document.documentElement.clientWidth;
  let i = 3;
  if (windowInnerWidth < scssVars.breakpoint_sm) {
    i = 2;
  }
  const toggleQ = (ind) => {
    return ind === 3 ? (i = 4) : (i = 3);
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
      if (windowInnerWidth >= scssVars.breakpoint_sm) {
        toggleQ(i);
      }
      newsRender(restOfNews);
    }
    return arrToRender;
  };
  newsRender(list);
  let indexOfRenderingArr = -1;
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
