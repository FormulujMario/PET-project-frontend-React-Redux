import { useSelector } from "react-redux";
import { activeCategoryList } from "../../store/selectors.js";
import ShopSlider from "../slider/ShopSlider.js";

const ShopCategories = () => {
  const activeCategory = useSelector(
    (state) => state.activeCategoryReducer.activeCategory
  );
  const activeProducts = useSelector(activeCategoryList);
  if (activeProducts) {
    if (activeProducts.length === 0) {
      return <p>No products</p>;
    } else {
      if (activeProducts[0]["products"]) {
        return activeProducts.map((list, i) => {
          return (
            <ShopSlider
              key={`${activeCategory} products - ${i}`}
              list={list.products}
              category={list.categories}
            />
          );
        });
      } else {
        return (
          <ShopSlider
            key={`${activeCategory} products`}
            list={activeProducts}
            category={activeCategory}
          />
        );
      }
    }
  }
};

export default ShopCategories;
