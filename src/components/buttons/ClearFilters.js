import "./ClearFilters.css";

const ClearFilters = ({ productsList, stateFn }) => {
  const clearFiltersFn = () => {
    Array(...document.querySelectorAll(".shop-section input:checked")).map(
      (input) => {
        return (input.checked = false);
      }
    );
    stateFn((currentValue) => {
      return (currentValue = productsList);
    });
  };

  return (
    <div className="clear-button">
      <button onClick={clearFiltersFn}>CLEAR ALL FILTERS</button>
    </div>
  );
};
export default ClearFilters;
