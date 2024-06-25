import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import { SORT_BY } from "../CONSTANTS.js";
import Sort from "./Sort.js";
import Filters from "./Filters.js";
import ClearFilters from "../buttons/ClearFilters.js";

const FiltersSection = () => {
  const [filters, setFilters] = useState({
    style: [],
    alcohol: [],
    color: [],
    quantity: [],
  });
  const checkboxesRefs = useRef({
    style: [],
    alcohol: [],
    color: [],
    quantity: [],
  });
  const sortRef = useRef([]);
  const activeCategoryContext = useSelector(
    (state) => state.activeCategoryReducer.activeCategory
  );
  const products = useSelector((state) => state.productsReducer.lists);
  const filtersButtonTitle = useSelector(
    (state) => state.filtersReducer.filters
  );
  if (activeCategoryContext !== "ALL") {
    return products.map((list) => {
      const filtersTypes = [
        { style: list.style },
        { alcohol: list.alcohol },
        { color: list.color },
        { quantity: list.quantity },
      ];
      if (list.categories === activeCategoryContext) {
        return (
          <div
            key={activeCategoryContext}
            className="filters-section"
            style={{ display: filtersButtonTitle }}
          >
            <div className="sort-filters">
              <Sort
                list={SORT_BY}
                state={list.state}
                category={list.categories}
                sortRef={sortRef}
              />
              <Filters
                filters={filters}
                productsList={list.productsList}
                category={list.categories}
                filtersTypes={filtersTypes}
                checkboxesRefs={checkboxesRefs}
              />
            </div>
            {(list.quantity || list.style || list.color || list.alcohol) && (
              <ClearFilters
                checkboxesRefs={checkboxesRefs}
                setFilters={setFilters}
              />
            )}
          </div>
        );
      } else {
        return null;
      }
    });
  }
};
export default FiltersSection;
