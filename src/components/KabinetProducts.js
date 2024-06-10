import { TabContainer, Tab, Nav, Row } from "react-bootstrap";
import {
  KABINET_PRODUCTS_BEERS_LIST,
  KABINET_PRODUCTS_MERCH_LIST,
  KABINET_PRODUCTS_PIVOLADA_LIST,
} from "./CONSTANTS.js";
import ProductsSlider from "./slider/ProductsSlider.js";

const KabinetProducts = () => {
  const sliderParams = {
    slidesPerView: "4",
    navigation: "true",
    pagination: "false",
    direction: "horizontal",
    loop: "false",
    spaceBetween: "30",
  };
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
              <Nav.Link eventKey="BEERS">
                BEERS
              </Nav.Link>
              <Nav.Link eventKey="MERCH">
                MERCH
              </Nav.Link>
              <Nav.Link
                eventKey="PIVOLADA"
              >
                PIVOLADA
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          <Tab.Content>
            <Tab.Pane eventKey="BEERS">
              <ProductsSlider list={beersList} sliderParams={sliderParams} />
            </Tab.Pane>
            <Tab.Pane eventKey="MERCH">
              <ProductsSlider list={merchList} sliderParams={sliderParams} />
            </Tab.Pane>
            <Tab.Pane eventKey="PIVOLADA">
              <ProductsSlider list={pivoladaList} sliderParams={sliderParams} />
            </Tab.Pane>
          </Tab.Content>
        </Row>
      </TabContainer>
    </section>
  );
};

export default KabinetProducts;
