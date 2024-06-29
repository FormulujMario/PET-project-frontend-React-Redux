import PageTitle from "../PageTitle.js";
import ShopTabs from "../shop-tabs/ShopTabs.js";
import NextCategory from "../NextCategory.js";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "../Fallback.js";

const Shop = () => {
  return (
    <main>
      <PageTitle title="KABINET SHOP" />
      <ErrorBoundary FallbackComponent={Fallback}>
        <ShopTabs />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={Fallback}>
        <NextCategory />
      </ErrorBoundary>
    </main>
  );
};

export default Shop;
