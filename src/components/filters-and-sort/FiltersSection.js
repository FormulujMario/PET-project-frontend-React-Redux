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
  const sortRef = useRef([])
  const activeCategoryContext = useSelector(
    (state) => state.activeCategoryReducer.activeCategory
  );
  const products = useSelector((state) => state.productsReducer.lists);
  const filtersButtonTitleContext = useSelector(
    (state) => state.filtersButtonReducer.filters
  );
  if (activeCategoryContext !== "ALL") {
    return products.map((list) => {
      const filtersTypes = [{style:list.style}, {alcohol:list.alcohol}, {color:list.color}, {quantity:list.quantity}]

      if (list.categories === activeCategoryContext) {
        return (
          <div
            key={activeCategoryContext}
            className="filters-section"
            style={{ display: filtersButtonTitleContext }}
          >
            <div className="sort-filters">
              <Sort
                list={SORT_BY}
                state={list.state}
                section={list.sectionSort}
                sortRef={sortRef}
              />
              <Filters
                filters={filters}
                productsList={list.productsList}
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
      }
    });
  }
};
export default FiltersSection;
