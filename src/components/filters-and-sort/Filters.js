import { useDispatch } from "react-redux";
import { setFiltered } from "../../store/ProductsSlice.js";
import { STYLE, ALCOHOL, COLOR, QUANTITY } from "../CONSTANTS.js";
import FilterItem from "./FilterItem.js";

const Filters = ({
  filters,
  productsList,
  category,
  filtersTypes,
  checkboxesRefs,
}) => {
  const filterDispatch = useDispatch();
  const filtersProductsArr = [
    { style: STYLE },
    { alcohol: ALCOHOL },
    { color: COLOR },
    { quantity: QUANTITY },
  ];
  const ifZeroFn = (arr) => {
    arr.forEach((obj) => {
      for (const [key, value] of Object.entries(obj)) {
        if (filters[key].length === 0) {
          filters[key] = value.map((element) => element.id);
        }
      }
    });
  };
  const filterFunction = () => {
    const filtered = productsList.filter((element) => {
      ifZeroFn(filtersProductsArr);
      return (
        (filters.style.includes(element.style) &&
          filters.alcohol.includes(element.alcoholFilter) &&
          filters.color.includes(element.colorFilter)) ||
        filters.quantity.includes(element.quantityFilter)
      );
    });
    filterDispatch(setFiltered({ category: category, filtereddArr: filtered }));
  };

  return (
    <div className="filters-wrapper">
      {filtersTypes.map((type) => {
        const filterTypeProps = { filtersList: [], filterKey: "", title: "" };
        filtersProductsArr.map((obj) => {
          for (const [key, value] of Object.entries(obj)) {
            if (type[key]) {
              filterTypeProps.filtersList = value;
              filterTypeProps.filterKey = key;
              filterTypeProps.title = key;
            }
          }
          return filterTypeProps;
        });
        if (filterTypeProps.filterKey) {
          return (
            <FilterItem
              key={filterTypeProps.title}
              filtersArr={filters}
              filterFunction={filterFunction}
              checkboxesRefs={checkboxesRefs}
              filtersList={filterTypeProps.filtersList}
              filterKey={filterTypeProps.filterKey}
              title={filterTypeProps.title}
            />
          );
        } else return null;
      })}
    </div>
  );
};
export default Filters;
