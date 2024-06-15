import scssVars from "./../../scss/App.scss";
import {
  SHOP_MAIN_BEERS_LIST,
  SHOP_MAIN_BEER_PACKS_LIST,
  SHOP_MAIN_MERCH_LIST,
  SHOP_MAIN_PIVOLADA_LIST,
  ghPagesPath,
} from "../CONSTANTS";
import { useRef, useState } from "react";
import ProductPics from "./ProductPics";
import ProductDescription from "./ProductDescripion";
import ProductTitle from "./ProductTitle";
import AddToCartForm from "./AddToCartForm";
import { useDispatch } from "react-redux";


const ProductCard = () => {
  const windowInnerWidth = document.documentElement.clientWidth;
  const cartToStorage = [];
  if (localStorage.cart) {
    cartToStorage.push(JSON.parse(localStorage.cart));
  }
  const cartDispatch = useDispatch();
  let currentProduct = {};
  const pathsToProducts = (arr, path) => {
    arr.map((item) => {
      const itemUrl =
        path +
        item.name
          .toLowerCase()
          .replace(/[^\w ]/g, "")
          .replace(/\s+/g, " ")
          .replace(/\s/g, "-");
      if (itemUrl === window.location.pathname) {
        if (path === `${ghPagesPath}shop-beers/`) {
          currentProduct = {
            name: item.name,
            price: item.price,
            canPrice: item.canPrice,
            currency: item.currency,
            style: item.style,
            alcohol: item.alcohol,
            color: item.color,
            volume: item.volume,
            img: item.img,
            canImg: item.canImg,
            description: item.description,
            ingredients: item.ingredients,
            nutrition: item.nutrition,
          };
        } else {
          currentProduct = {
            name: item.name,
            price: item.price,
            currency: item.currency,
            img: item.img,
            description: item.description,
          };
        }
      }
      return currentProduct;
    });
  };
  pathsToProducts(SHOP_MAIN_BEERS_LIST, `${ghPagesPath}shop-beers/`);
  pathsToProducts(SHOP_MAIN_BEER_PACKS_LIST, `${ghPagesPath}shop-beer-packs/`);
  pathsToProducts(SHOP_MAIN_MERCH_LIST, `${ghPagesPath}shop-merch/`);
  pathsToProducts(SHOP_MAIN_PIVOLADA_LIST, `${ghPagesPath}shop-pivolada/`);
  const [packageType, setPackageType] = useState("BOTTLE");
  const [itemPrice, setItemPrice] = useState(currentProduct.price);
  const mainImage = useRef();
  const changePrice = (event) => {
    setPackageType((currentValue) => {
      return (currentValue = event.target.textContent);
    });
    setItemPrice((currentValue) => {
      if (packageType === "CAN") {
        return (currentValue = currentProduct.price);
      } else {
        return (currentValue = currentProduct.canPrice);
      }
    });
  };
  const addToCart = (img, item, price, quantity, event) => {
    cartDispatch({ type: "toggle" });
    let foundItem = null;
    if (cartToStorage.length === 0) {
      cartToStorage.push({
        img: img,
        name: item,
        price: price,
        quantity: quantity,
      });
      localStorage.setItem("cart", JSON.stringify(cartToStorage));
    } else {
      foundItem = JSON.parse(localStorage.cart).find((storageItem) => {
        return storageItem.name === item && storageItem.price === price;
      });
      if (foundItem) {
        let storageToUpdateWithFoundItem = null;
        storageToUpdateWithFoundItem = JSON.parse(localStorage.cart).filter(
          (item) => {
            return (
              item.name !== foundItem.name || item.price !== foundItem.price
            );
          }
        );
        storageToUpdateWithFoundItem.push({
          img: img,
          name: item,
          price: price,
          quantity: quantity + foundItem.quantity,
        });
        localStorage.clear();
        localStorage.setItem(
          "cart",
          JSON.stringify(storageToUpdateWithFoundItem)
        );
      } else {
        let actualCart = JSON.parse(localStorage.cart);
        actualCart.push({
          img: img,
          name: item,
          price: price,
          quantity: quantity,
        });
        localStorage.clear();
        localStorage.setItem("cart", JSON.stringify(actualCart));
      }
    }
    event.preventDefault();
  };
  return (
    <section className="product-card">
      {windowInnerWidth >= scssVars.breakpoint_sm && <ProductPics
        current={currentProduct}
        type={packageType}
        mainImage={mainImage}
      />}
      
      <div className="product-info">
        <ProductTitle product={currentProduct} price={itemPrice} />
        {currentProduct.style && currentProduct.alcohol ? (
          <p className="beers-main-properties">{`${currentProduct.style} / abv ${currentProduct.alcohol}% / ibu ${currentProduct.color} / ${currentProduct.volume}l`}</p>
        ) : null}
        <p className="product-top-description">{currentProduct.description}</p>
        {windowInnerWidth < scssVars.breakpoint_sm && <ProductPics
        current={currentProduct}
        type={packageType}
        mainImage={mainImage}
      />}
        <AddToCartForm
          type={packageType}
          changePriceFn={changePrice}
          mainImage={mainImage}
          product={currentProduct}
          price={itemPrice}
          addToCartFn={addToCart}
        />
        <hr />
        {document.location.href.indexOf("beers") === -1 ? null : (
          <>
            <ProductDescription
              name="PRODUCT DESCRIPTION"
              product={currentProduct}
            />
            <hr />
          </>
        )}

        {currentProduct.ingredients ? (
          <>
            <ProductDescription name="INGREDIENTS" product={currentProduct} />
            <hr />
          </>
        ) : null}
        {currentProduct.nutrition ? (
          <>
            <ProductDescription name="NUTRITION" product={currentProduct} />
            <hr />
          </>
        ) : null}
      </div>
    </section>
  );
};

export default ProductCard;
