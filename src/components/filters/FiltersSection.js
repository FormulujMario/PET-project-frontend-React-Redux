import { SORT_BY } from "../constants.js";
import Sort from "../sort/Sort.js";
import Filters from "./Filters.js";
import ClearFilters from "../buttons/ClearFilters.js";
import "./FiltersSection.css";

const FiltersSection = ({
  filters,
  productsList,
  state,
  stateFn,
  sectionSort,
  sectionFilter,
  quantity,
  style,
  color,
  alcohol,
}) => {
  return (
    <div className="filters-section" style={{ display: filters }}>
      <div className="sort-filters">
        <Sort
          list={SORT_BY}
          state={state}
          stateFn={stateFn}
          section={sectionSort}
        />
        <Filters
          productsList={productsList}
          stateFn={stateFn}
          section={sectionFilter}
          quantity={quantity}
          style={style}
          color={color}
          alcohol={alcohol}
        />
      </div>
      {(quantity || style || color || alcohol) && (
        <ClearFilters productsList={productsList} stateFn={stateFn} />
      )}
    </div>
  );
};
export default FiltersSection;
