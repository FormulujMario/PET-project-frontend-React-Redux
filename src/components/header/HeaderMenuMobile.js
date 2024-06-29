import { useDispatch } from "react-redux";
import { menuToggle } from "../../store/ShowMobileMenuSlice.js";
import { TfiClose } from "react-icons/tfi";
import { MENU_LIST } from "../CONSTANTS.js";
import { PiBeerBottle } from "react-icons/pi";
import { Link } from "react-router-dom";

const HeaderMenuMobile = () => {
  if (!MENU_LIST) {
    throw new Error("Menu list in HeaderMenuMobile is missing");
  }
  const dispatch = useDispatch();
  return (
    <div className="mobile-menu">
      <div
        className="menu-modal-back"
        onClick={() => {
          dispatch(menuToggle());
        }}
      ></div>
      <div className="menu-modal">
        <div className="title">
          <div>MENU</div>
          <div
            className="x"
            onClick={() => {
              dispatch(menuToggle());
            }}
          >
            <TfiClose size={20} />
          </div>
        </div>
        <nav>
          <ul>
            {MENU_LIST &&
              MENU_LIST.map((item) => {
                return (
                  item.link !== "/" && (
                    <li
                      key={item.name}
                      onClick={() => {
                        dispatch(menuToggle());
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
