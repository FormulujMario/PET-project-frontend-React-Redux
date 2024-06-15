import { MENU_LIST } from "../CONSTANTS.js";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <nav className="desktop-menu">
      <ul>
        {MENU_LIST.map((item) => {
          return (
            item.link !== "/" && (
              <li key={item.name}>
                <Link key={item.name} to={item.link}>{item.name}</Link>
              </li>
            )
          );
        })}
      </ul>
    </nav>
  );
};
export default HeaderMenu;
