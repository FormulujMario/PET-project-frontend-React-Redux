import { useDispatch } from "react-redux";
import { setCleared } from "../../store/ProductsSlice";

const ClearFilters = ({ setFilters, checkboxesRefs }) => {
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
    clearFiltersDispatch(setCleared());
  };
  return (
    <div className="clear-filters">
      <button onClick={clearFiltersFn}>CLEAR ALL FILTERS</button>
    </div>
  );
};
export default ClearFilters;
