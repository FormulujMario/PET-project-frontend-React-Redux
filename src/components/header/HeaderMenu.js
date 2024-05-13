import React from "react";
import { MENU_LIST } from "../constants.js";

class HeaderMenu extends React.Component {
  menu = MENU_LIST;
  render() {
    return (
      <ul>
        {this.menu.map((item) => {
          return (
            <li>
              <a href={item.link}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default HeaderMenu;
