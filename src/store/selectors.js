import { createSelector } from "reselect";

export const activeCategoryList = createSelector(
  [
    (state) => state.activeCategoryReducer.activeCategory,
    (state) => state.productsReducer.lists,
  ],
  (activeCategory, products) => {
    const allProducts = [];
    let productsOfActiveCategory = null;
    products.map((list) => {
      if (list.categories === activeCategory) {
        allProducts.push(list);
        productsOfActiveCategory = {
          active: activeCategory,
          products: allProducts,
        };
      }
      if (activeCategory === "ALL") {
        allProducts.push(list);
        productsOfActiveCategory = { active: "ALL", products: allProducts };
      }
    });
    return productsOfActiveCategory;
  }
);
