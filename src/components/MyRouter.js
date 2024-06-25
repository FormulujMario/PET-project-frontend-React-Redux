import "../scss/App.scss";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HeaderMenuMobile from "./header/HeaderMenuMobile.js";
import Cart from "./cart/Cart.js";
import Header from "./header/Header.js";
import { MENU_LIST, FOOTER_MENU_LIST, GALLERY } from "./CONSTANTS.js";
import NotFound from "./pages/NotFound.js";
import Footer from "./footer/Footer.js";

function MyRouter() {
  const showCart = useSelector((state) => state.cartReducer.showCart);
  const lists = useSelector((state) => state.productsReducer.lists);
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
  const pathsToProducts = (list, item) => {
    const fullPath = list.url + pathsTemplate(item.name);
    const element = item.element;
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
        {lists.map((list) => {
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
        {lists.map((list) => {
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
      <Footer />
    </BrowserRouter>
  );
}

export default MyRouter;
