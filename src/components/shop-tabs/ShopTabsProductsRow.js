import { Row, Tab } from "react-bootstrap";
import ShopCategories from "./ShopCategories";
import { listOfCategories } from "../CONSTANTS";

const ShopTabsProductsRow = () => {
  return (
    <Row>
      <Tab.Content>
        <Tab.Pane key="ALL" eventKey="ALL">
          <ShopCategories />
        </Tab.Pane>
        {listOfCategories.lists.map((list) => {
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
