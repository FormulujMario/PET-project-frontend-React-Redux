import { useDispatch, useSelector } from "react-redux";
import {
  STYLE,
  ALCOHOL,
  COLOR,
  QUANTITY,
  listOfCategories,
} from "../CONSTANTS.js";
import { changeProducts } from "../../store/ActiveProductsSlice.js";
import FilterItem from "./FilterItem.js";

const Filters = ({ filters, checkboxesRefs }) => {
  const activeCategory = useSelector(
    (state) => state.activeCategoryReducer.activeCategory
  );
  let filtersTypes = [];
  let allProducts = [];
  const filterDispatch = useDispatch();
  listOfCategories.lists.map((list) => {
    if (list.categories === activeCategory) {
      filtersTypes = [
        { style: list.style },
        { alcohol: list.alcohol },
        { color: list.color },
        { quantity: list.quantity },
      ];
      allProducts = list.productsList;
    }
    return allProducts;
  });
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
    const filtered = allProducts.filter((element) => {
      ifZeroFn(filtersProductsArr);
      return (
        (filters.style.includes(element.style) &&
          filters.alcohol.includes(element.alcoholFilter) &&
          filters.color.includes(element.colorFilter)) ||
        filters.quantity.includes(element.quantityFilter)
      );
    });
    filterDispatch(changeProducts(filtered));
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
