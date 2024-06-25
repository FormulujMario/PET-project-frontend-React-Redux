import { useDispatch } from "react-redux";
import { menuToggle } from "../../store/ShowMobileMenuSlice.js";
import { toggleShow } from "../../store/ShowCartSlice";
import HeaderLogo from "./HeaderLogo.js";
import { MdOutlineMenu } from "react-icons/md";
import HeaderMenu from "./HeaderMenu.js";

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
            dispatch(menuToggle());
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
                  dispatch(toggleShow());
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
