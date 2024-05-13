import React, { createContext, useReducer, useState } from "react";
import {
  SHOP_MAIN_BEERS_LIST,
  SHOP_MAIN_BEER_PACKS_LIST,
  SHOP_MAIN_MERCH_LIST,
  SHOP_MAIN_PIVOLADA_LIST,
} from "../components/constants";

const ProductsContext = createContext();

function useProductsContext() {
  const context = React.useContext(ProductsContext);
  if (!context) {
    throw new Error(
      `useProductsContext must be used within a ProductsContextProvider`
    );
  }
  return context;
}
function ProductsContextProvider(props) {
  const sliderParams = {
    slidesPerView: "4",
    navigation: "false",
    pagination: "false",
    direction: "horizontal",
    loop: "false",
    spaceBetween: "30",
  };
  const [beers, setBeers] = useState(SHOP_MAIN_BEERS_LIST);
  const [beerPacks, setBeerPacks] = useState(SHOP_MAIN_BEER_PACKS_LIST);
  const [pivolada, setPivolada] = useState(SHOP_MAIN_PIVOLADA_LIST);
  const [merch, setMerch] = useState(SHOP_MAIN_MERCH_LIST);

  const statesOfFiltersButton = {
    filtersButtonTitle: "SHOW FILTERS",
    filters: "none",
  };
  const filtersReducer = (state, action) => {
    switch (action.type) {
      case "SHOW":
        return {
          ...state,
          filtersButtonTitle: action.payload,
          filters: "block",
        };
      case "HIDE":
        return {
          ...state,
          filtersButtonTitle: action.payload,
          filters: "none",
        };
      default:
        return {
          ...state,
          filtersButtonTitle: action.payload,
          visible: action.visible,
        };
    }
  };
  const [filtersState, filtersDispatch] = useReducer(
    filtersReducer,
    statesOfFiltersButton
  );
  const openFilters = () => {
    filtersState.filtersButtonTitle !== "SHOW FILTERS"
      ? filtersDispatch({ type: "HIDE", payload: "SHOW FILTERS" })
      : filtersDispatch({ type: "SHOW", payload: "HIDE FILTERS" });
  };

  const showFiltersSectionContext = React.useMemo(
    () => ({ filtersState, filtersDispatch, openFilters }),
    [filtersState]
  );

  const beersList = {
    categories: "BEERS",
    sliderParams: sliderParams,
    state: beers,
    stateFn: setBeers,
    productsList: SHOP_MAIN_BEERS_LIST,
    sectionSort: "sort-beers",
    sectionFilter: "beers",
    style: true,
    alcohol: true,
    color: true,
    quantity: false,
  };
  const beerPacksList = {
    categories: "BEER-PACKS",
    sliderParams: sliderParams,
    state: beerPacks,
    stateFn: setBeerPacks,
    productsList: SHOP_MAIN_BEER_PACKS_LIST,
    sectionSort: "sort-beerpacks",
    sectionFilter: "beer-packs",
    quantity: true,
  };
  const pivoladaList = {
    categories: "PIVOLADA",
    sliderParams: sliderParams,
    state: pivolada,
    stateFn: setPivolada,
    productsList: SHOP_MAIN_PIVOLADA_LIST,
    sectionSort: "sort-pivolada",
  };
  const merchList = {
    categories: "MERCH",
    sliderParams: sliderParams,
    state: merch,
    stateFn: setMerch,
    productsList: SHOP_MAIN_MERCH_LIST,
    sectionSort: "sort-merch",
  };
  const lists = [beerPacksList, beersList, pivoladaList, merchList];
  const products = React.useMemo(
    () => ({ lists }),
    [beers, merch, pivolada, beerPacks]
  );

  return (
    <ProductsContext.Provider
      value={[products, showFiltersSectionContext]}
      {...props}
    />
  );
}

export { ProductsContextProvider, useProductsContext };
