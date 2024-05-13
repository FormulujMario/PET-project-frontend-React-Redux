import ShopSlider from "./slider/ShopSlider.js";
import { useProductsContext } from "../contexts/ProductsContext.js";
import { memo } from "react";
import { useActiveCategoryContext } from "../contexts/ActiveCategoryContext.js";

const ShopCategories = () => {
  const activeCategoryContext = useActiveCategoryContext();
  const products = useProductsContext();

  if (activeCategoryContext.activeState.activeCategory === "ALL") {
    return products[0].lists.map((list) => {
      return list.state.length === 0 ? (
        <p>No such products</p>
      ) : (
        <ShopSlider
          list={list}
          title={list.categories}
          sliderParams={list.sliderParams}
        />
      );
    });
  } else {
    return products[0].lists.map((list) => {
      if (
        list.categories === activeCategoryContext.activeState.activeCategory
      ) {
        return list.state.length === 0 ? (
          <p>No such products</p>
        ) : (
          <ShopSlider
            list={list}
            sliderParams={list.sliderParams}
            title={list.categories}
          />
        );
      }
    });
  }
};

export default ShopCategories;
