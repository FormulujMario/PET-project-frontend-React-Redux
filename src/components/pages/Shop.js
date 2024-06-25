import PageTitle from "../PageTitle.js";
import ShopTabs from "../shop-tabs/ShopTabs.js";
import NextCategory from "../NextCategory.js";

const Shop = () => {
  return (
    <main>
      <PageTitle title="KABINET SHOP" />
      <ShopTabs />
      <NextCategory />
    </main>
  );
};

export default Shop;
