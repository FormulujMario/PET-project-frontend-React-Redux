import { memo } from "react";
import "./Sort.css";

const Sort = ({ list, state, stateFn, section }) => { 
  const onclickSortBy = (event) => {
    const sortingNamesArr = [...document.querySelectorAll(`.${section} div`)];
    sortingNamesArr.map((sortingName) => {
      return sortingName.className === event.currentTarget.className
        ? (sortingName.style.color = "#000")
        : (sortingName.style.color = "#000000b2");
    });
    const classNameForSorting = (element) => {
      return element.className === event.currentTarget.className;
    };
    const propertyForSorting = list.find(classNameForSorting).connectedTo;
    const sortedBeers = state.slice().sort(function (a, b) {
      return event.currentTarget.className === "low-to-high-price"
        ? a.price - b.price
        : b[propertyForSorting] - a[propertyForSorting];
    });
    stateFn((currentValue) => {
      return (currentValue = sortedBeers);
    });
  };

  return (
    <div className={`sort ${section}`}>
      <p className="filter-title">Sort by</p>
      {list.map((element) => {
        return (
          <div className={element.className} onClick={onclickSortBy}>
            {element.property}
          </div>
        );
      })}
    </div>
  );
};
export default memo(Sort);
