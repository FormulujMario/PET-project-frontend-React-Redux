import { SORT_BY } from "../constants.js";
import Sort from "../sort/Sort.js";
import Filters from "./Filters.js";
import ClearFilters from "../buttons/ClearFilters.js";
import "./FiltersSection.css";
import { useSelector } from "react-redux";

const FiltersSection = () => {
  console.log("filters section renders")
const activeCategoryContext = useSelector((state) => state.activeCategoryReducer.activeCategory);
const products = useSelector((state) => state.productsReducer.lists);
  const filtersButtonTitleContext = useSelector(
    (state) => state.filtersButtonReducer.filters
  );
  if (activeCategoryContext !== "ALL") {
    return products.map((list) => {
      if (
        list.categories === activeCategoryContext
      ) {
        return (
          <div
            className="filters-section"
            style={{ display: filtersButtonTitleContext }}
          >
            <div className="sort-filters">
              <Sort
                list={SORT_BY}
                state={list.state}
                section={list.sectionSort}
              />
              <Filters
                productsList={list.productsList}
                // stateFn={list.stateFn}
                section={list.sectionFilter}
                quantity={list.quantity}
                style={list.style}
                color={list.color}
                alcohol={list.alcohol}
              />
            </div>
            {(list.quantity || list.style || list.color || list.alcohol) && (
              <ClearFilters
                productsList={list.productsList}
                // stateFn={list.stateFn}
              />
            )}
          </div>
        );
      }
    });
  }
};
export default FiltersSection;
