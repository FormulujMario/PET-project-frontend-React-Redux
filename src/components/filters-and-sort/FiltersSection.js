import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Sort from "./Sort.js";
import Filters from "./Filters.js";
import { listOfCategories } from "../CONSTANTS.js";
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
  const activeCategory = useSelector(
    (state) => state.activeCategoryReducer.activeCategory
  );
  const filtersButtonVisible = useSelector(
    (state) => state.filtersReducer.filters
  );
  if (activeCategory !== "ALL") {
    return (
      <div
        className="filters-section"
        style={{ display: filtersButtonVisible }}
      >
        <div className="sort-filters">
          <Sort />
          <Filters filters={filters} checkboxesRefs={checkboxesRefs} />
        </div>
        {listOfCategories.lists.map((list) => {
          if (list.categories === activeCategory) {
            if (list.quantity || list.style || list.color || list.alcohol) {
              return (
                <ClearFilters
                  key={activeCategory}
                  checkboxesRefs={checkboxesRefs}
                  setFilters={setFilters}
                />
              );
            } else return null;
          } else return null;
        })}
      </div>
    );
  }
};
export default FiltersSection;
