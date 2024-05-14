import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  MENU_LIST,
  FOOTER_MENU_LIST,
  SHOP_MAIN_BEERS_LIST,
  SHOP_MAIN_BEER_PACKS_LIST,
  SHOP_MAIN_MERCH_LIST,
  SHOP_MAIN_PIVOLADA_LIST,
  GALLERY,
} from "./constants.js";
import NotFound from "./pages/NotFound.js";
import React from "react";
import Footer from "./footer/Footer.js";
import Header from "./header/Header.js";
import Cart from "./cart/Cart.js";
import Mobile from "./mobile/Mobile.js";
import "../App.css";
import { useSelector } from "react-redux";

function MyRouter() {
  const showCart = useSelector((state) => state.cartReducer.showCart);
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
      {window.innerWidth <= 850 ? <Mobile /> : null}
      {showCart ? <Cart /> : null}
      <Header />
      <Routes>
        {MENU_LIST.map((item) => {
          return <Route path={item.link} element={item.element} />;
        })}
        {FOOTER_MENU_LIST.map((item) => {
          return item.list.map((subelement) => {
            return (
              <Route path={subelement.link} element={subelement.element} />
            );
          });
        })}
        {allProducts.map((list) => {
          let productProperties = null;
          return list.map((item) => {
            productProperties = pathsToProducts(list, item);
            return (
              <Route
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
              path={artItemProperties.fullPathArt}
              element={item.element}
            />
          );
        })}
        <Route
          exact
          path="/shop-beer-packs/"
          element={<Navigate to="/shop" replace />}
        />
        <Route
          exact
          path="/shop-beers/"
          element={<Navigate to="/shop" replace />}
        />
        <Route
          exact
          path="/shop-merch/"
          element={<Navigate to="/shop" replace />}
        />
        <Route
          exact
          path="/shop-pivolada/"
          element={<Navigate to="/shop" replace />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default MyRouter;
