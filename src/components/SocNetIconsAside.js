import { SOC_NET_ICONS } from "./CONSTANTS.js";

const SocNetIconsAside = () => {
  if (!SOC_NET_ICONS) {
    throw new Error("Soc net icons in SocNetIconsAside are missing");
  }
  return (
    <aside>
      <div className="soc-net-icons-aside">
        {SOC_NET_ICONS &&
          SOC_NET_ICONS.map((icon) => {
            return <div key={icon.key}>{icon.svg}</div>;
          })}
      </div>
    </aside>
  );
};

export default SocNetIconsAside;
