import { useRef } from "react";
import { BESTSELLERS_LIST } from "../constants.js";
import NormalWhiteButton from "../buttons/NormalWhiteButton.js";
import { BsArrowUpRight } from "react-icons/bs";
const Bestsellers = () => {
  const swiperElRef = useRef(null);
  const bestsellers = BESTSELLERS_LIST;

  return (
    <section className="bestsellers">
      <div className="section-title">
        <h2>BESTSELLERS</h2>
        {NormalWhiteButton("SEE ALL", <BsArrowUpRight />)}
      </div>
      <div className="bestsellers-products">
        <div className="swiper swiper-bestsellers">
          <div className="swiper-wrapper">
            <swiper-container
              ref={swiperElRef}
              slides-per-view="4"
              navigation="true"
              pagination="false"
              direction="horizontal"
              loop="false"
              space-between="30"
            >
              {bestsellers.map((element) => {
                return (
                  <swiper-slide>
                    <div className="swiper-slide-item">
                      <img src={element.img} alt="" />
                      <div className="swiper-slide-item-title">
                        <h4>{element.name}</h4>
                        <h4>{element.price}</h4>
                      </div>
                      <p>{element.description}</p>
                    </div>
                  </swiper-slide>
                );
              })}
            </swiper-container>
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
