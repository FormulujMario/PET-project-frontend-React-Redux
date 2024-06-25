import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../../store/PackageTypeSlice";
import scssVars from "./../../scss/App.scss";
import ProductPics from "./ProductPics";
import ProductTitle from "./ProductTitle";
import ProductDescription from "./ProductDescripion";
import AddToCartForm from "./AddToCartForm";

const ProductCard = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  const windowInnerWidth = document.documentElement.clientWidth;
  const lists = useSelector((state) => state.productsReducer.lists);
  const dispatch = useDispatch();
  let currentProduct = {};
  lists.forEach((list) => {
    window.location.pathname.includes(list.url) &&
      list.productsList.map((item) => {
        const itemUrl =
          list.url +
          item.name
            .toLowerCase()
            .replace(/[^\w ]/g, "")
            .replace(/\s+/g, " ")
            .replace(/\s/g, "-");
        if (itemUrl === window.location.pathname) {
          currentProduct = item;
          dispatch(setPrice(currentProduct));
        }
        return currentProduct;
      });
  });
  return (
    <section className="product-card">
      {windowInnerWidth >= scssVars.breakpoint_sm && <ProductPics />}
      <div className="product-info">
        <ProductTitle />
        {currentProduct.style && currentProduct.alcohol ? (
          <p className="beers-main-properties">{`${currentProduct.style} / abv ${currentProduct.alcohol}% / ibu ${currentProduct.color} / ${currentProduct.volume}l`}</p>
        ) : null}
        <p className="product-top-description">{currentProduct.description}</p>
        {windowInnerWidth < scssVars.breakpoint_sm && <ProductPics />}
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
};

export default ProductCard;
