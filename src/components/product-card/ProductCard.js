import scrollUp from "../scrollUp";
import { useDispatch, useSelector } from "react-redux";
import { changeWindowSize } from "../../store/WindowSizeSlice";
import { ghPagesPath, listOfCategories } from "../CONSTANTS";
import rewrite from "../rewrite";
import { setPrice } from "../../store/PackageTypeSlice";
import scssVars from "./../../scss/App.scss";
import ProductPics from "./ProductPics";
import ProductTitle from "./ProductTitle";
import ProductDescription from "./ProductDescripion";
import AddToCartForm from "./AddToCartForm";
import { useLayoutEffect } from "react";

const ProductCard = () => {
  if (!listOfCategories) {
    throw new Error("Categories list in ProductCard is missing");
  }
  scrollUp();
  const dispatch = useDispatch();
  const windowInnerWidth = useSelector(
    (state) => state.windowSizeReducer.window
  );
  const tablet = scssVars.breakpoint_md;
  let currentProduct = null;
  if (listOfCategories) {
    listOfCategories.lists.forEach((list) => {
      window.location.pathname.includes(list.url) &&
        list.productsList.map((item) => {
          const itemUrl =
            ghPagesPath.slice(0, -1) + list.url + rewrite(item.name);
          if (itemUrl === window.location.pathname) {
            currentProduct = item;
            dispatch(setPrice(currentProduct));
          }
          return currentProduct;
        });
    });
  }
  useLayoutEffect(() => {
    window.onresize = () => {
      dispatch(changeWindowSize(window.innerWidth));
    };
    return () => {
      window.onresize = false;
    };
  }, [windowInnerWidth]);
  if (currentProduct) {
    return (
      <section className="product-card">
        {windowInnerWidth > tablet && <ProductPics />}
        <div className="product-info">
          <ProductTitle />
          {currentProduct.style && currentProduct.alcohol ? (
            <p className="beers-main-properties">{`${currentProduct.style} / abv ${currentProduct.alcohol}% / ibu ${currentProduct.color} / ${currentProduct.volume}l`}</p>
          ) : null}
          <p className="product-top-description">
            {currentProduct.description}
          </p>
          {windowInnerWidth <= tablet && <ProductPics />}
          <AddToCartForm />
          <hr />
          {window.location.pathname.indexOf("beers") !== -1 && (
            <>
              <ProductDescription name="PRODUCT DESCRIPTION" />
              <hr />
            </>
          )}
          {currentProduct.ingredients && (
            <>
              <ProductDescription name="INGREDIENTS" />
              <hr />
            </>
          )}
          {currentProduct.nutrition && (
            <>
              <ProductDescription name="NUTRITION" />
              <hr />
            </>
          )}
        </div>
      </section>
    );
  } else {
    return <h2>No such product</h2>;
  }
};

export default ProductCard;
