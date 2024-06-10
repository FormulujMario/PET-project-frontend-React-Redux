import { useDispatch } from "react-redux";
import HeaderLogo from "./HeaderLogo.js";
import HeaderMenu from "./HeaderMenu.js";

const Header = () => {
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
        <HeaderMenu />
        <div className="lg-cart">
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
};

export default Header;
