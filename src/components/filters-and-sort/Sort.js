import { useDispatch } from "react-redux";
import { setSorted } from "../../store/ProductsSlice";
import scssVars from "./../../scss/App.scss";

const Sort = ({ list, state, category, sortRef }) => {
  const sortDispatch = useDispatch();
  const onclickSortBy = (event) => {
    sortRef.current.map((el) => {
      return el.className === event.currentTarget.className
        ? (el.style.opacity = "100%")
        : (el.style.opacity = scssVars.opacityMax);
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
    const sort = () => {
      sortDispatch(setSorted({ category: category, sortedArr: sortedBeers }));
    };
    sort();
  };

  return (
    <div className={`sort-wrapper ${category}`}>
      <p className="title">Sort by</p>
      {list.map((element) => {
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
