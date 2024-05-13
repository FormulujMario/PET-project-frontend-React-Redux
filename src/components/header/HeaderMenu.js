import React from "react";
import { Anchor } from "react-bootstrap";
import { MENU_LIST } from "../constants.js";

class HeaderMenu extends React.Component {
  menu = MENU_LIST;
  render() {
    return (
      <nav>
        <ul>
          {this.menu.map((item) => {
            return (
              item.link !== "/" && (
                <li>
                  <Anchor href={item.link}>{item.name}</Anchor>
                </li>
              )
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default HeaderMenu;
