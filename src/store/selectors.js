import { createSelector } from "reselect";
import { listOfCategories } from "../components/CONSTANTS";

export const activeCategoryList = createSelector(
  [
    (state) => state.activeCategoryReducer.activeCategory,
    (state) => state.activeProductsReducer.productsList,
  ],
  (activeCategory, productsList) => {
    if (!listOfCategories) {
      throw new Error("Categories list in activeCategoryList is missing");
    }
    let allProducts = [];
    if (!productsList && listOfCategories) {
      listOfCategories.lists.forEach((list) => {
        if (list.categories === activeCategory) {
          allProducts = list.productsList;
        } else if (activeCategory === "ALL") {
          allProducts.push({
            categories: list.categories,
            products: list.productsList,
          });
        }
      });
      return allProducts;
    } else {
      allProducts = productsList;
      return allProducts;
    }
  }
);
