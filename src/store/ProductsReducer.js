import {
  SHOP_MAIN_BEERS_LIST,
  SHOP_MAIN_BEER_PACKS_LIST,
  SHOP_MAIN_MERCH_LIST,
  SHOP_MAIN_PIVOLADA_LIST,
} from "../components/constants";

const sliderParams = {
  slidesPerView: "4",
  navigation: "false",
  pagination: "false",
  direction: "horizontal",
  loop: "false",
  spaceBetween: "30",
};

const lists = {
  lists: [
    {
      categories: "BEERS",
      sliderParams: sliderParams,
      state: SHOP_MAIN_BEERS_LIST,
      productsList: SHOP_MAIN_BEERS_LIST,
      sectionSort: "sort-beers",
      sectionFilter: "beers",
      style: true,
      alcohol: true,
      color: true,
      quantity: false,
    },
    {
      categories: "BEER-PACKS",
      sliderParams: sliderParams,
      state: SHOP_MAIN_BEER_PACKS_LIST,
      productsList: SHOP_MAIN_BEER_PACKS_LIST,
      sectionSort: "sort-beerpacks",
      sectionFilter: "beer-packs",
      quantity: true,
    },
    {
      categories: "PIVOLADA",
      sliderParams: sliderParams,
      state: SHOP_MAIN_PIVOLADA_LIST,
      productsList: SHOP_MAIN_PIVOLADA_LIST,
      sectionSort: "sort-pivolada",
    },
    {
      categories: "MERCH",
      sliderParams: sliderParams,
      state: SHOP_MAIN_MERCH_LIST,
      productsList: SHOP_MAIN_MERCH_LIST,
      sectionSort: "sort-merch",
    },
  ],
};

export const productsReducer = (state = lists, action) => {
  switch (action.type) {
    case "setSorted":
      return {
        ...state,
        lists: state.lists.map((list) => {
          return list.sectionSort === action.payload.section
            ? { ...list, state: action.payload.sortedArr }
            : list;
        }),
      };
    case "setFiltered":
      return {
        ...state,
        lists: state.lists.map((list) => {
          return list.productsList === action.payload.productsList
            ? { ...list, state: action.payload.filtereddArr }
            : list;
        }),
      };
    case "setCreared":
      return {
        ...state,
        lists: state.lists.map((list) => {
          return { ...list, state: list.productsList };
        }),
      };
    default:
      return state;
  }
};
