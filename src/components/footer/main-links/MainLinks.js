import { FOOTER_MENU_LIST, SOC_NET_ICONS } from "../../constants";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./MainLinks.css";

const MainLinks = () => {
  const activeCategoryDispatch = useDispatch();
  const changeCategory = (subelement) => {
    if (subelement.activeKey) {
      subelement.activeKey !== "ALL"
        ? activeCategoryDispatch({
            type: "NOTALL",
            payload: subelement.activeKey,
          })
        : activeCategoryDispatch({
            type: "ALL",
            payload: subelement.activeKey,
          });
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="main-links-footer">
      <div className="list-menu-footer">
        {FOOTER_MENU_LIST.map((element) => {
          return (
            <div>
              <span>{element.name}</span>
              <ul>
                {element.list.map((subelement) => {
                  return (
                    <li
                      onClick={() => {
                        changeCategory(subelement);
                      }}
                    >
                      <Link to={subelement.link}>{subelement.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="soc-net-icons">
        {SOC_NET_ICONS.map((icon) => {
          return icon.svg;
        })}
      </div>
    </section>
  );
};

export default MainLinks;
