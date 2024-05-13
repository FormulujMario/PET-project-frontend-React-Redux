import { SORT_BY } from "../constants.js";
import Sort from "../sort/Sort.js";
import Filters from "./Filters.js";
import ClearFilters from "../buttons/ClearFilters.js";
import { useActiveCategoryContext } from "../../contexts/ActiveCategoryContext.js";
import { useProductsContext } from "../../contexts/ProductsContext.js";
import "./FiltersSection.css";

const FiltersSection = () => {
  const activeCategoryContext = useActiveCategoryContext();
  const products = useProductsContext();
  if (activeCategoryContext.activeState.activeCategory !== "ALL") {
    return products[0].lists.map((list) => {
      if (
        list.categories === activeCategoryContext.activeState.activeCategory
      ) {
        return (
          <div
            className="filters-section"
            style={{ display: products[1].filtersState.filters }}
          >
            <div className="sort-filters">
              <Sort
                list={SORT_BY}
                state={list.state}
                stateFn={list.stateFn}
                section={list.sectionSort}
              />
              <Filters
                productsList={list.productsList}
                stateFn={list.stateFn}
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
                stateFn={list.stateFn}
              />
            )}
          </div>
        );
      }
    });
  }
};
export default FiltersSection;
