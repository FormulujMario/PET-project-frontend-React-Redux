import { useDispatch } from "react-redux";
import { MENU_LIST } from "../CONSTANTS.js";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { PiBeerBottle } from "react-icons/pi";

const HeaderMenuMobile = () => {
  const dispatch = useDispatch();
  return (
    <div className="mobile-menu">
      <div
        className="menu-modal-back"
        onClick={() => {
          dispatch({ type: "menuToggle" });
        }}
      ></div>
      <div className="menu-modal">
        <div className="title">
          <div>MENU</div>
          <div
            className="x"
            onClick={() => {
              dispatch({ type: "menuToggle" });
            }}
          >
            <AiOutlineClose size={30} />
          </div>
        </div>
        <nav>
          <ul>
            {MENU_LIST.map((item) => {
              return (
                item.link !== "/" && (
                  <li
                    key={item.name}
                    onClick={() => {
                      dispatch({ type: "menuToggle" });
                    }}
                  >
                    <PiBeerBottle />
                    <Link key={item.name} to={item.link}>
                      {item.name}
                    </Link>
                  </li>
                )
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default HeaderMenuMobile;
