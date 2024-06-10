import React from "react";
import { Row, Tab } from "react-bootstrap";
import ShopCategories from "./ShopCategories";

const ShopTabsProductsRow = () => {
  return (
    <Row>
      <Tab.Content>
        <Tab.Pane eventKey="ALL">
          <ShopCategories />
        </Tab.Pane>
        <Tab.Pane eventKey="BEER-PACKS">
          <ShopCategories />
        </Tab.Pane>
        <Tab.Pane eventKey="BEERS">
          <ShopCategories />
        </Tab.Pane>
        <Tab.Pane eventKey="PIVOLADA">
          <ShopCategories />
        </Tab.Pane>
        <Tab.Pane eventKey="MERCH">
          <ShopCategories />
        </Tab.Pane>
      </Tab.Content>
    </Row>
  );
};

export default ShopTabsProductsRow;
