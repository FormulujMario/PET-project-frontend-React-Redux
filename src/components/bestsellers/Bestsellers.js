import { BESTSELLERS_LIST } from "../constants.js";
import NormalWhiteButton from "../buttons/NormalWhiteButton.js";
import { BsArrowUpRight } from "react-icons/bs";
import ProductsSlider from "../slider/ProductsSlider.js";
import "./Bestsellers.css";

const sliderParams = {
  slidesPerView: "4",
  navigation: "true",
  pagination: "false",
  direction: "horizontal",
  loop: "false",
  spaceBetween: "30",
};

const Bestsellers = () => {
  const bestsellers = BESTSELLERS_LIST;

  return (
    <section className="bestsellers">
      <div className="section-title">
        <h2>BESTSELLERS</h2>
        <NormalWhiteButton text="SEE ALL" icon={<BsArrowUpRight />} />
      </div>
      {ProductsSlider(bestsellers, sliderParams)}
    </section>
  );
};

export default Bestsellers;
