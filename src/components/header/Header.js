import { memo } from "react";
import HeaderMenu from "./HeaderMenu";
import { ghPagesPath } from "../constants.js";
import { useCartContext } from "../../contexts/CartContext";
import "./Header.css";

function Header() {
  const showCart = useCartContext();
  let quantityOfProducts = 0;
  if (localStorage.cart) {
    quantityOfProducts = JSON.parse(localStorage.cart).length;
  } else {
    localStorage.setItem("cart", JSON.stringify([]));
  }
  return (
    <header>
      <section className="menu">
        <div className="logo">
          <a href={ghPagesPath}>
            <img src={process.env.REACT_APP_IMAGES_PATH + "/logo.png"} alt="" />
          </a>
        </div>
        <div className="menu-list">
          <HeaderMenu />
        </div>
        <div className="language">
          <ul>
            <li>EN</li>
            <li>
              <div
                className="cart-icon"
                onClick={showCart.showCartContext.toggleShow}
              >
                <div>CART {quantityOfProducts}</div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
}

export default memo(Header);
