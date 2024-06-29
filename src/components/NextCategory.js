import { useDispatch, useSelector } from "react-redux";
import { activeCategoryToggle } from "../store/ActiveCategorySlice";
import { FOOTER_MENU_LIST, imgsPath } from "./CONSTANTS";
import { BsArrowRight } from "react-icons/bs";

const NextCategory = () => {
  if (!FOOTER_MENU_LIST) {
    throw new Error("Footer menu list in NextCategory is missing");
  }
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
  const firstButtonTitle = shopArr[randomIndex].replace(" ", "-");
  const changeCategory = () => {
    activeCategoryDispatch(activeCategoryToggle(firstButtonTitle));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    firstButtonTitle && (
      <section className="next-category" onClick={changeCategory}>
        <img src={imgsPath + "/Beers.png"} alt="" loading="lazy" />
        <div className="title">
          <button>
            <h2>
              {firstButtonTitle}
              <BsArrowRight />
            </h2>
          </button>
        </div>
      </section>
    )
  );
};

export default NextCategory;
