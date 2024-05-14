import HeaderMenu from "./HeaderMenu";
import { ghPagesPath } from "../constants.js";
import "./Header.css";
import { useDispatch } from "react-redux";

function Header() {
  console.log("header render")
  const cartDispatch = useDispatch()
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
                onClick={()=>{cartDispatch({type:"toggle"})}}
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
