import "../scss/App.scss";
import { useSelector } from "react-redux";
import rewrite from "./rewrite.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HeaderMenuMobile from "./header/HeaderMenuMobile.js";
import Cart from "./cart/Cart.js";
import Header from "./header/Header.js";
import {
  MENU_LIST,
  FOOTER_MENU_LIST,
  GALLERY,
  listOfCategories,
} from "./CONSTANTS.js";
import NotFound from "./pages/NotFound.js";
import Footer from "./footer/Footer.js";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "./Fallback.js";

function MyRouter() {
  if (!MENU_LIST || !FOOTER_MENU_LIST || !GALLERY || !listOfCategories) {
    throw new Error("Some list in MyRouter is missing");
  }
  const showCart = useSelector((state) => state.cartReducer.showCart);
  const showMobileMenu = useSelector(
    (state) => state.mobileMenuReducer.showMenu
  );
  const pathsToProducts = (list, item) => {
    const fullPath = list.url + rewrite(item.name);
    const element = item.element;
    return { fullPath, element };
  };
  const pathsToArtItem = (item) => {
    let fullPathArt = null;
    if (item.artist) {
      fullPathArt = "/art/" + rewrite(item.artist) + "-" + rewrite(item.name);
    }
    return { fullPathArt };
  };
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {showMobileMenu && (
        <ErrorBoundary FallbackComponent={Fallback}>
          <HeaderMenuMobile />
        </ErrorBoundary>
      )}
      {showCart && (
        <ErrorBoundary FallbackComponent={Fallback}>
          <Cart />
        </ErrorBoundary>
      )}
      <ErrorBoundary FallbackComponent={Fallback}>
        <Header />
      </ErrorBoundary>
      <Routes>
        {MENU_LIST &&
          MENU_LIST.map((item) => {
            return (
              <Route key={item.name} path={item.link} element={item.element} />
            );
          })}
        {FOOTER_MENU_LIST &&
          FOOTER_MENU_LIST.map((item) => {
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
        {listOfCategories.lists.map((list) => {
          let productProperties = null;
          return list.productsList.map((item) => {
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
        {GALLERY &&
          GALLERY.map((item) => {
            let artItemProperties = pathsToArtItem(item);
            return (
              <Route
                key={`${item.artist}-${item.name}`}
                path={artItemProperties.fullPathArt}
                element={item.element}
              />
            );
          })}
        {listOfCategories &&
          listOfCategories.lists.map((list) => {
            return (
              <Route
                key={list.categories}
                exact
                path={list.url}
                element={<Navigate to="/shop" replace />}
              />
            );
          })}
        <Route key="not-found" path="*" element={<NotFound />} />
      </Routes>
      <ErrorBoundary FallbackComponent={Fallback}>
        <Footer />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default MyRouter;
