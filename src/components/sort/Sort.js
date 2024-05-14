import "./Sort.css";
import { useDispatch} from "react-redux";

const Sort = ({ list, state, section }) => { 
  const sortDispatch = useDispatch()
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

    const sort = (() => {
     sortDispatch({type: "setSorted", payload: {section: section, sortedArr: sortedBeers}});
    });
    sort()
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
export default Sort;
