const activeCategoryAndFiltersButton = {
  activeCategory: "ALL",
  visible: "none",
};

const activeCategoryReducer = (
  state = activeCategoryAndFiltersButton,
  action
) => {
  switch (action.type) {
    case "ALL":
      return { ...state, activeCategory: action.payload, visible: "none" };
    case "NOTALL":
      return { ...state, activeCategory: action.payload, visible: "flex" };
    default:
      return state;
  }
};
export default activeCategoryReducer;
