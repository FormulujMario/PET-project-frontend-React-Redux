import { Link } from "react-router-dom";
import { MENU_LIST } from "../constants.js";

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
