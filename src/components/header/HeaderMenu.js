import { MENU_LIST } from "../CONSTANTS.js";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <nav>
      <ul>
        {MENU_LIST.map((item) => {
          return (
            item.link !== "/" && (
              <li>
                <Link to={item.link}>{item.name}</Link>
              </li>
            )
          );
        })}
      </ul>
    </nav>
  );
};
export default HeaderMenu;
