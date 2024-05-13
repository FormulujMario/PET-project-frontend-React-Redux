import PageTitle from "../PageTitle.js";
import ShopTabs from "../shop-tabs/ShopTabs.js";
import NextCategory from "../next-shop-category/NextCategory.js";

const Shop = ({ activeKey, filterButton }) => {
  return (
    <main>
      <PageTitle title="KABINET SHOP" />
      <ShopTabs activeKey={activeKey} filterButton={filterButton} />
      <NextCategory />
    </main>
  );
};

export default Shop;
