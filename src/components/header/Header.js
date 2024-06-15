import { useDispatch } from "react-redux";
import HeaderLogo from "./HeaderLogo.js";
import HeaderMenu from "./HeaderMenu.js";
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
  const dispatch = useDispatch();

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
        <MdOutlineMenu
        className="mobile-menu-logo"
          size={40}
          onClick={() => {
            dispatch({ type: "menuToggle" });
          }}
        />
        <HeaderMenu />
        <div className="lg-cart">
          <ul>
            <li>EN</li>
            <li>
              <div
                className="cart-icon"
                onClick={() => {
                  dispatch({ type: "toggle" });
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
