import HeaderMenu from "./HeaderMenu";
import Logo from "../../pics/logo.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <section className="menu">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="menu-list">
          <HeaderMenu />
        </div>
        <div className="language">
          <ul>
            <li>
              <a href="">EN</a>
            </li>
            <li>
              <a href="">CZ</a>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
}

export default Header;
