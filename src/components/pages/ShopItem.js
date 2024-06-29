import SocNetIconsAside from "../SocNetIconsAside.js";
import ProductCard from "../product-card/ProductCard.js";
import KabinetProducts from "../KabinetProducts.js";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "../Fallback.js";

const ShopItem = () => {
  return (
    <main>
      <ErrorBoundary fallback={<div></div>}>
        <SocNetIconsAside />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={Fallback}>
        <ProductCard />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={Fallback}>
        <KabinetProducts />
      </ErrorBoundary>
    </main>
  );
};

export default ShopItem;
