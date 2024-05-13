import { BsArrowRight } from "react-icons/bs";
import { FOOTER_MENU_LIST } from "../constants";
import { useActiveCategoryContext } from "../../contexts/ActiveCategoryContext";
import "./NextCategory.css";

const NextCategory = () => {
  const activeCategoryContext = useActiveCategoryContext();
  const currentUrl = activeCategoryContext.activeState.activeCategory.replace(
    "-",
    " "
  );
  const shopArr = FOOTER_MENU_LIST[0].list
    .map((element) => {
      return element.name;
    })
    .filter((element) => {
      return (
        element !== "ALL" &&
        element !== currentUrl &&
        element !== "TERMS OF SERVICE" &&
        element !== "REFUND POLICY"
      );
    });
  const randomIndex = Math.floor(Math.random() * shopArr.length);
  const firstButtonTitle = shopArr[randomIndex];
  const changeCategory = () => {
    activeCategoryContext.dispatch({
      type: "NOTALL",
      payload: firstButtonTitle.replace(" ", "-"),
      visible: firstButtonTitle.filterButton,
    });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="next-shop-category" onClick={changeCategory}>
      <img
        src={process.env.REACT_APP_IMAGES_PATH + "/Beers.png"}
        alt=""
        loading="lazy"
      />
      <div className="next-shop-category-title">
        <button className="next-shop-category-button">
          {firstButtonTitle}
          <BsArrowRight />
        </button>
      </div>
    </section>
  );
};

export default NextCategory;
