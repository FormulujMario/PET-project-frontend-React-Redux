import HeaderMenu from "./HeaderMenu";
import { ghPagesPath } from "../constants.js";
import { useDispatch } from "react-redux";
import "./Header.css";
import { HeaderLogo } from "../header-logo/HeaderLogo.js";

function Header() {
  const cartDispatch = useDispatch();
  let quantityOfProducts = 0;
  if (localStorage.cart) {
    quantityOfProducts = JSON.parse(localStorage.cart).length;
  } else {
    localStorage.setItem("cart", JSON.stringify([]));
  }
  return (
    <header>
      <section className="menu">
        <HeaderLogo />
        <div className="menu-list">
          <HeaderMenu />
        </div>
        <div className="language">
          <ul>
            <li>EN</li>
            <li>
              <div
                className="cart-icon"
                onClick={() => {
                  cartDispatch({ type: "toggle" });
                }}
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

export default Header;
