const statesOfFiltersButton = {
  filtersButtonTitle: "SHOW FILTERS",
  filters: "none",
};

export const filtersButtonReducer = (state = statesOfFiltersButton, action) => {
  switch (action.type) {
    case "SHOW FILTERS":
      return {
        ...state,
        filtersButtonTitle: "HIDE FILTERS",
        filters: "block",
      };
    case "HIDE FILTERS":
      return {
        ...state,
        filtersButtonTitle: "SHOW FILTERS",
        filters: "none",
      };
    default:
      return state;
  }
};