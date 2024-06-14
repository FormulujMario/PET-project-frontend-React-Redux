import { memo } from "react";
import { activeCategoryList } from "../../store/selectors.js";
import ShopSlider from "../slider/ShopSlider.js";
import { useSelector } from "react-redux";

const ShopCategories = () => {
  const productsOfActiveCategory = useSelector(activeCategoryList);
  return productsOfActiveCategory.products.map((list) => {
    return list.state.length === 0 ? (
      <p>No products</p>
    ) : (
      <ShopSlider key={`${list.categories} products in ${productsOfActiveCategory.active}`} list={list} />
    );
  });
};

export default memo(ShopCategories);
