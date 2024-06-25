import { createSlice } from "@reduxjs/toolkit";
import {
  SHOP_MAIN_BEERS_LIST,
  SHOP_MAIN_BEER_PACKS_LIST,
  SHOP_MAIN_MERCH_LIST,
  SHOP_MAIN_PIVOLADA_LIST,
} from "../components/CONSTANTS";

export const sliderParams = {
  slidesPerView: "4",
  navigation: "false",
  pagination: "false",
  direction: "horizontal",
  loop: "false",
  spaceBetween: "30",
};

const initialState = {
  lists: [
    {
      categories: "BEERS",
      state: SHOP_MAIN_BEERS_LIST,
      productsList: SHOP_MAIN_BEERS_LIST,
      url: "/shop-beers/",
      sectionFilter: "beers",
      style: true,
      alcohol: true,
      color: true,
      quantity: false,
    },
    {
      categories: "BEER-PACKS",
      state: SHOP_MAIN_BEER_PACKS_LIST,
      productsList: SHOP_MAIN_BEER_PACKS_LIST,
      url: "/shop-beer-packs/",
      sectionFilter: "beer-packs",
      quantity: true,
    },
    {
      categories: "PIVOLADA",
      state: SHOP_MAIN_PIVOLADA_LIST,
      productsList: SHOP_MAIN_PIVOLADA_LIST,
      url: "/shop-pivolada/",
    },
    {
      categories: "MERCH",
      state: SHOP_MAIN_MERCH_LIST,
      productsList: SHOP_MAIN_MERCH_LIST,
      url: "/shop-merch/",
    },
  ],
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSorted(state, action) {
      const { category, sortedArr } = action.payload;
      state.lists.map((list) => {
        if (list.categories === category) {
          list.state = sortedArr;
        }
        return list;
      });
    },
    setFiltered(state, action) {
      const { category, filtereddArr } = action.payload;
      state.lists.map((list) => {
        if (list.categories === category) {
          list.state = filtereddArr;
        }
        return list;
      });
    },
    setCleared(state) {
      state.lists.map((list) => {
        return (list.state = list.productsList);
      });
    },
  },
});
export const { setSorted, setFiltered, setCleared } = ProductsSlice.actions;
export default ProductsSlice.reducer;
