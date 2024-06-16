import {
  SHOP_MAIN_BEERS_LIST,
  SHOP_MAIN_BEER_PACKS_LIST,
  SHOP_MAIN_MERCH_LIST,
  SHOP_MAIN_PIVOLADA_LIST,
} from "../components/CONSTANTS";

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
      state: { beers: SHOP_MAIN_BEERS_LIST },
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
      state: { beerPacks: SHOP_MAIN_BEER_PACKS_LIST },
      productsList: SHOP_MAIN_BEER_PACKS_LIST,
      sectionSort: "sort-beerpacks",
      sectionFilter: "beer-packs",
      quantity: true,
    },
    {
      categories: "PIVOLADA",
      sliderParams: sliderParams,
      state: { pivolada: SHOP_MAIN_PIVOLADA_LIST },
      productsList: SHOP_MAIN_PIVOLADA_LIST,
      sectionSort: "sort-pivolada",
    },
    {
      categories: "MERCH",
      sliderParams: sliderParams,
      state: { merch: SHOP_MAIN_MERCH_LIST },
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
          const listStateKey = Object.entries(list.state)[0][0];
          return list.sectionSort === action.payload.section
            ? { ...list, state: { [listStateKey]: action.payload.sortedArr } }
            : list;
        }),
      };
    case "setFiltered":
      return {
        ...state,
        lists: state.lists.map((list) => {
          const listStateKey = Object.entries(list.state)[0][0];
          return list.productsList === action.payload.productsList
            ? {
                ...list,
                state: { [listStateKey]: action.payload.filtereddArr },
              }
            : list;
        }),
      };
    case "setCleared":
      return {
        ...state,
        lists: state.lists.map((list) => {
          const listStateKey = Object.entries(list.state)[0][0];
          return { ...list, state: { [listStateKey]: list.productsList } };
        }),
      };
    default:
      return state;
  }
};
