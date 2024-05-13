import React, { createContext, useReducer } from "react";

const ActiveCategoryContext = createContext();

function useActiveCategoryContext() {
  const context = React.useContext(ActiveCategoryContext);
  if (!context) {
    throw new Error(
      `useActiveCategoryContext must be used within a ActiveCategoryContextProvider`
    );
  }
  return context;
}

function ActiveCategoryContextProvider(props) {
  const activeCategoryAndFiltersButton = {
    activeCategory: "ALL",
    visible: "none",
  };
  const activeCategoryReducer = (state, action) => {
    switch (action.type) {
      case "ALL":
        return { ...state, activeCategory: action.payload, visible: "none" };
      case "NOTALL":
        return { ...state, activeCategory: action.payload, visible: "block" };
      default:
    }
  };
  const [activeState, dispatch] = useReducer(
    activeCategoryReducer,
    activeCategoryAndFiltersButton
  );
  const value = React.useMemo(() => ({ activeState, dispatch }), [activeState]);
  return <ActiveCategoryContext.Provider value={value} {...props} />;
}

export { ActiveCategoryContextProvider, useActiveCategoryContext };
