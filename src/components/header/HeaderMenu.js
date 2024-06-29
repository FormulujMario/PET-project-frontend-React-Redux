import { MENU_LIST } from "../CONSTANTS.js";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  if (!MENU_LIST) {
    throw new Error("Header menu list in HeaderMenu is missing");
  }
  return (
    <nav className="desktop-menu">
      <ul>
        {MENU_LIST &&
          MENU_LIST.map((item) => {
            return (
              item.link !== "/" && (
                <li key={item.name}>
                  <Link key={item.name} to={item.link}>
                    {item.name}
                  </Link>
                </li>
              )
            );
          })}
      </ul>
    </nav>
  );
};
export default HeaderMenu;
