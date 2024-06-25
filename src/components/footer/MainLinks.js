import { useDispatch } from "react-redux";
import { FOOTER_MENU_LIST, SOC_NET_ICONS } from "../CONSTANTS";
import { Link } from "react-router-dom";

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
            <div key={element.name}>
              <span>{element.name}</span>
              <ul>
                {element.list.map((subelement) => {
                  return (
                    <li
                      key={subelement.name}
                      onClick={() => {
                        changeCategory(subelement);
                      }}
                    >
                      <Link key={subelement.name} to={subelement.link}>
                        {subelement.name}
                      </Link>
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
          return <div key={icon.key}>{icon.svg}</div>;
        })}
      </div>
    </section>
  );
};

export default MainLinks;
