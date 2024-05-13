import KabinetProducts from "../../kabinet-products/KabinetProducts.js";
import ProductCard from "../../product-card/ProductCard.js";
import { SOC_NET_ICONS } from "../../constants.js";
import "./ShopItem.css";

const ShopItem = () => {
  return (
    <main>
      <aside>
        <div className="soc-net-icons-aside">
          {SOC_NET_ICONS.map((icon) => {
            return icon.svg;
          })}
        </div>
      </aside>
      <ProductCard />
      <KabinetProducts />
    </main>
  );
};

export default ShopItem;
