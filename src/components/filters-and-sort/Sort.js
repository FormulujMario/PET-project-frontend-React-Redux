import { useDispatch } from "react-redux";
import scssVars from "./../../scss/App.scss";

const Sort = ({ list, state, section, sortRef }) => {
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
    const sortedBeers = Object.entries(state)[0][1]
      .slice()
      .sort(function (a, b) {
        return event.currentTarget.className === "low-to-high-price"
          ? a.price - b.price
          : b[propertyForSorting] - a[propertyForSorting];
      });
    const sort = () => {
      sortDispatch({
        type: "setSorted",
        payload: { section: section, sortedArr: sortedBeers },
      });
    };
    sort();
  };

  return (
    <div className={`sort-wrapper ${section}`}>
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
