import { useDispatch, useSelector } from "react-redux";
import { activeCategoryList } from "../../store/selectors";
import { useRef } from "react";
import scssVars from "./../../scss/App.scss";
import { SORT_BY } from "../CONSTANTS";
import { changeProducts } from "../../store/ActiveProductsSlice";

const Sort = () => {
  if (!SORT_BY) {
    throw new Error("Sort list in Sort is missing");
  }
  const activeCategory = useSelector(
    (state) => state.activeCategoryReducer.activeCategory
  );
  const activeProducts = useSelector(activeCategoryList);
  const sortDispatch = useDispatch();
  const sortRef = useRef([]);
  const onclickSortBy = (event) => {
    sortRef.current.map((el) => {
      return el.className === event.currentTarget.className
        ? (el.style.opacity = "100%")
        : (el.style.opacity = scssVars.opacityMax);
    });
    const classNameForSorting = (element) => {
      return element.className === event.currentTarget.className;
    };
    let propertyForSorting = null;
    if (SORT_BY) {
      propertyForSorting = SORT_BY.find(classNameForSorting).connectedTo;
    }
    const sortedBeers = activeProducts.slice().sort(function (a, b) {
      return event.currentTarget.className === "low-to-high-price"
        ? a.price - b.price
        : b[propertyForSorting] - a[propertyForSorting];
    });
    sortDispatch(changeProducts(sortedBeers));
  };
  return (
    <div className={`sort-wrapper ${activeCategory}`}>
      <p className="title">Sort by</p>
      {SORT_BY &&
        SORT_BY.map((element) => {
          let index = element.key;
          return (
            <div
              key={element.property}
              ref={(element) => (sortRef.current[index] = element)}
              className={element.className}
              onClick={onclickSortBy}
            >
              {element.property}
            </div>
          );
        })}
    </div>
  );
};
export default Sort;
