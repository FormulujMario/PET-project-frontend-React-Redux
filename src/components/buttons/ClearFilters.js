import { useDispatch, useSelector } from "react-redux";
import { listOfCategories } from "../CONSTANTS";
import { changeProducts } from "../../store/ActiveProductsSlice";

const ClearFilters = ({ setFilters, checkboxesRefs }) => {
  if (!listOfCategories) {
    throw new Error("Categories list in ClearFilters is missing");
  }
  const activeCategory = useSelector(
    (state) => state.activeCategoryReducer.activeCategory
  );
  let allProducts = [];
  if (listOfCategories) {
    listOfCategories.lists.map((list) => {
      if (list.categories === activeCategory) {
        allProducts = list.productsList;
      }
      return allProducts;
    });
  }
  const clearFiltersDispatch = useDispatch();
  const clearFiltersFn = () => {
    const emptyFilters = { style: [], alcohol: [], color: [], quantity: [] };
    const filtersList = ["style", "alcohol", "color", "quantity"];
    filtersList.forEach((el) => {
      checkboxesRefs.current[el].forEach((element) => {
        if (element !== null && element.input.checked === true) {
          element.input.click();
        }
      });
    });
    setFilters(emptyFilters);
    clearFiltersDispatch(changeProducts(allProducts));
  };
  return (
    <div className="clear-filters">
      <button onClick={clearFiltersFn}>CLEAR ALL FILTERS</button>
    </div>
  );
};
export default ClearFilters;
