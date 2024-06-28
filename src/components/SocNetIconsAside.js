import { SOC_NET_ICONS } from "./CONSTANTS.js";

const SocNetIconsAside = () => {
  return (
    <aside>
      <div className="soc-net-icons-aside">
        {SOC_NET_ICONS.map((icon) => {
          return <div key={icon.key}>{icon.svg}</div>;
        })}
      </div>
    </aside>
  );
};

export default SocNetIconsAside;