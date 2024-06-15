import "../scss/App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  MENU_LIST,
  FOOTER_MENU_LIST,
  SHOP_MAIN_BEERS_LIST,
  SHOP_MAIN_BEER_PACKS_LIST,
  SHOP_MAIN_MERCH_LIST,
  SHOP_MAIN_PIVOLADA_LIST,
  GALLERY,
} from "./CONSTANTS.js";
import NotFound from "./pages/NotFound.js";
import React from "react";
import Footer from "./footer/Footer.js";
import Header from "./header/Header.js";
import Cart from "./cart/Cart.js";
import { useSelector } from "react-redux";
import HeaderMenuMobile from "./header/HeaderMenuMobile.js";

function MyRouter() {
  const showCart = useSelector((state) => state.cartReducer.showCart);
  const showMobileMenu = useSelector(
    (state) => state.MobileMenuReducer.showMenu
  );
  const pathsTemplate = (item) => {
    return item
      .toLowerCase()
      .replace(/[^\w ]/g, "")
      .replace(/\s+/g, " ")
      .replace(/\s/g, "-");
  };
  const allProducts = [
    SHOP_MAIN_BEERS_LIST,
    SHOP_MAIN_BEER_PACKS_LIST,
    SHOP_MAIN_MERCH_LIST,
    SHOP_MAIN_PIVOLADA_LIST,
  ];

  const pathsToProducts = (list, item) => {
    let fullPath = null;
    let element = null;
    let categoryPath = null;
    if (list === SHOP_MAIN_BEER_PACKS_LIST) {
      categoryPath = "/shop-beer-packs/";
    } else if (list === SHOP_MAIN_BEERS_LIST) {
      categoryPath = "/shop-beers/";
    } else if (list === SHOP_MAIN_MERCH_LIST) {
      categoryPath = "/shop-merch/";
    } else {
      categoryPath = "/shop-pivolada/";
    }
    fullPath = categoryPath + pathsTemplate(item.name);
    element = item.element;
    return { fullPath, element };
  };
  const pathsToArtItem = (item) => {
    let fullPathArt = null;
    if (item.artist) {
      fullPathArt =
        "/art/" + pathsTemplate(item.artist) + "-" + pathsTemplate(item.name);
    }
    return { fullPathArt };
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {showMobileMenu && <HeaderMenuMobile />}
      {showCart && <Cart />}
      <Header />
      <Routes>
        {MENU_LIST.map((item) => {
          return (
            <Route key={item.name} path={item.link} element={item.element} />
          );
        })}
        {FOOTER_MENU_LIST.map((item) => {
          return item.list.map((subelement) => {
            return (
              <Route
                key={subelement.name}
                path={subelement.link}
                element={subelement.element}
              />
            );
          });
        })}
        {allProducts.map((list) => {
          let productProperties = null;
          return list.map((item) => {
            productProperties = pathsToProducts(list, item);
            return (
              <Route
                key={`${item.name}-${item.price}`}
                path={productProperties.fullPath}
                element={productProperties.element}
              />
            );
          });
        })}
        {GALLERY.map((item) => {
          let artItemProperties = pathsToArtItem(item);
          return (
            <Route
              key={`${item.artist}-${item.name}`}
              path={artItemProperties.fullPathArt}
              element={item.element}
            />
          );
        })}
        <Route
          key="shop-beer-packs"
          exact
          path="/shop-beer-packs/"
          element={<Navigate to="/shop" replace />}
        />
        <Route
          key="shop-beers"
          exact
          path="/shop-beers/"
          element={<Navigate to="/shop" replace />}
        />
        <Route
          key="shop-merch"
          exact
          path="/shop-merch/"
          element={<Navigate to="/shop" replace />}
        />
        <Route
          key="shop-pivolada"
          exact
          path="/shop-pivolada/"
          element={<Navigate to="/shop" replace />}
        />
        <Route key="not-found" path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default MyRouter;
