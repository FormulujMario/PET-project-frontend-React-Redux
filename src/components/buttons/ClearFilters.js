import { useDispatch } from "react-redux";

const ClearFilters = () => {
  const clearFiltersDispatch = useDispatch();
  const clearFiltersFn = () => {
    Array(...document.querySelectorAll(".shop-section input:checked")).map(
      (input) => {
        return (input.checked = false);
      }
    );
    const clear = () => {
      clearFiltersDispatch({ type: "setCreared" });
    };
    clear();
  };

  return (
    <div className="clear-filters">
      <button onClick={clearFiltersFn}>CLEAR ALL FILTERS</button>
    </div>
  );
};
export default ClearFilters;
