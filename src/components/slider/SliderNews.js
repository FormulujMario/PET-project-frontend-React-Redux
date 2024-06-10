import { useRef } from "react";

const SliderNews = ({ list }) => {
  const sideSlide = (element) => {
    return (
      <swiper-slide class="side-slide">
        <div className="swiper-slide-item">
          <div className="news-swiper-slide-item-img">
            <img src={element.img} alt="" />
          </div>
          <div className="title">
            <p>{element.date}</p>
          </div>
          <h4>{element.title}</h4>
        </div>
      </swiper-slide>
    );
  };

  const centralSlide = (element) => {
    return (
      <swiper-slide class="central-slide">
        <div className="swiper-slide-item">
          <div className="news-swiper-slide-item-img">
            <img src={element.bigImg} alt="" />
          </div>
          <div className="title">
            <p>{element.date}</p>
          </div>
          <h4>{element.title}</h4>
        </div>
      </swiper-slide>
    );
  };
  let i = 3;
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
      toggleQ(i);
      newsRender(restOfNews);
    }

    return arrToRender;
  };
  newsRender(list);
  const swiperElRef = useRef(null);
  return (
    <div>
      {arrToRender.map((arr) => {
        return (
          <div className="swiper swiper-news">
            <div>
              <swiper-container
                ref={swiperElRef}
                slides-per-view={arr.length}
                navigation="false"
                pagination="false"
                direction="horizontal"
                loop="false"
                space-between="2%"
              >
                {arr.map((element) => {
                  return element.bigImg
                    ? centralSlide(element)
                    : sideSlide(element);
                })}
              </swiper-container>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SliderNews;
