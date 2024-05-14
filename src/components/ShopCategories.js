import { memo } from "react";
import { activeCategoryList } from "../store/selectors.js";
import ShopSlider from "./slider/ShopSlider.js";
import { useSelector } from "react-redux";

const ShopCategories = () => {
  console.log("shop categories renders");
  const productsOfActiveCategory = useSelector(activeCategoryList);
  let isEmpty=null
  return productsOfActiveCategory.products.map((list) => {

    return list.state.length === 0 ? <p>No such products</p> : <ShopSlider list={list}/>

  })
};

export default memo(ShopCategories);
