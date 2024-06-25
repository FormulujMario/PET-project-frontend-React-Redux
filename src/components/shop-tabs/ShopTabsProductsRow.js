import { useSelector } from "react-redux";
import { Row, Tab } from "react-bootstrap";
import ShopCategories from "./ShopCategories";

const ShopTabsProductsRow = () => {
  const lists = useSelector((state) => state.productsReducer.lists);
  return (
    <Row>
      <Tab.Content>
        <Tab.Pane key="ALL" eventKey="ALL">
          <ShopCategories />
        </Tab.Pane>
        {lists.map((list) => {
          return (
            <Tab.Pane key={list.categories} eventKey={list.categories}>
              <ShopCategories />
            </Tab.Pane>
          );
        })}
      </Tab.Content>
    </Row>
  );
};

export default ShopTabsProductsRow;
