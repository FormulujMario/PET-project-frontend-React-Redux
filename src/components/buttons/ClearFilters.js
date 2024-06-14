import { useDispatch } from "react-redux";

const ClearFilters = ({ setFilters, checkboxesRefs }) => {
  const clearFiltersDispatch = useDispatch();
  const clearFiltersFn = () => {
    const emptyFilters = { style: [], alcohol: [], color: [], quantity: [] };
    const filtersList = ["style", "alcohol", "color", "quantity"];
    filtersList.map((el) => {
      checkboxesRefs.current[el].map((elem) => {
        if (elem !== null && elem.input.checked === true) {
          elem.input.click();
        }
      });
    });
    setFilters(emptyFilters);
    const clear = () => {
      clearFiltersDispatch({ type: "setCleared" });
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
