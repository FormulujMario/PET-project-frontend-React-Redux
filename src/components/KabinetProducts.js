import {
  KABINET_PRODUCTS_BEERS_LIST,
  KABINET_PRODUCTS_MERCH_LIST,
  KABINET_PRODUCTS_PIVOLADA_LIST,
} from "./CONSTANTS.js";
import { TabContainer, Tab, Nav, Row } from "react-bootstrap";
import KBProductsModuleSlider from "./slider/KBProductsModuleSlider.js";

const KabinetProducts = () => {
  if (
    !KABINET_PRODUCTS_BEERS_LIST ||
    !KABINET_PRODUCTS_MERCH_LIST ||
    !KABINET_PRODUCTS_PIVOLADA_LIST
  ) {
    throw new Error("Products list in KabinetProducts is missing");
  }
  const beersList = KABINET_PRODUCTS_BEERS_LIST;
  const merchList = KABINET_PRODUCTS_MERCH_LIST;
  const pivoladaList = KABINET_PRODUCTS_PIVOLADA_LIST;
  return (
    <section className="kabinet-products">
      <TabContainer id="kabinet-products" defaultActiveKey="BEERS">
        <Row>
          <Nav className="section-title">
            <h2>KABINET PRODUCTS</h2>
            <Nav.Item className="tab-buttons">
              <Nav.Link eventKey="BEERS">BEERS</Nav.Link>
              <Nav.Link eventKey="MERCH">MERCH</Nav.Link>
              <Nav.Link eventKey="PIVOLADA">PIVOLADA</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          <Tab.Content>
            <Tab.Pane eventKey="BEERS">
              {beersList && <KBProductsModuleSlider list={beersList} />}
            </Tab.Pane>
            <Tab.Pane eventKey="MERCH">
              {merchList && <KBProductsModuleSlider list={merchList} />}
            </Tab.Pane>
            <Tab.Pane eventKey="PIVOLADA">
              {pivoladaList && <KBProductsModuleSlider list={pivoladaList} />}
            </Tab.Pane>
          </Tab.Content>
        </Row>
      </TabContainer>
    </section>
  );
};

export default KabinetProducts;
