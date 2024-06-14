import { BESTSELLERS_LIST } from "./CONSTANTS.js";
import NormalWhiteButton from "./buttons/NormalWhiteButton.js";
import { BsArrowUpRight } from "react-icons/bs";
import KBProductsModuleSlider from "./slider/KBProductsModuleSlider.js";


const Bestsellers = () => {
  const bestsellers = BESTSELLERS_LIST;
  const sliderParams = {
    slidesPerView: "4",
    navigation: "true",
    pagination: "false",
    direction: "horizontal",
    loop: "false",
    spaceBetween: "30",
  };
  return (
    <section className="bestsellers">
      <div className="section-title">
        <h2>BESTSELLERS</h2>
        <NormalWhiteButton
          text="SEE ALL"
          icon={<BsArrowUpRight />}
          href="/shop"
        />
      </div>
      <KBProductsModuleSlider list={bestsellers} sliderParams={sliderParams} />
    </section>
  );
};

export default Bestsellers;
