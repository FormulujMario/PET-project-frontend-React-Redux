import { BsArrowRight } from "react-icons/bs";
import { FOOTER_MENU_LIST } from "./CONSTANTS";
import { useDispatch, useSelector } from "react-redux";

const NextCategory = () => {
  const activeCategoryDispatch = useDispatch();
  const activeCategoryContext = useSelector(
    (state) => state.activeCategoryReducer.activeCategory
  );
  const currentUrl = activeCategoryContext.replace("-", " ");
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
    activeCategoryDispatch({
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
    <section className="next-category" onClick={changeCategory}>
      <img
        src={process.env.REACT_APP_IMAGES_PATH + "/Beers.png"}
        alt=""
        loading="lazy"
      />
      <div className="title">
        <button>
          <h2>{firstButtonTitle}
          <BsArrowRight /></h2>
        </button>
      </div>
    </section>
  );
};

export default NextCategory;
