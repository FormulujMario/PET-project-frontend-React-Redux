import { TabContainer, Nav, Row } from "react-bootstrap";
import ShowFilters from "../buttons/ShowFilters.js";
import FiltersSection from "../filters/FiltersSection.js";
import { useActiveCategoryContext } from "../../contexts/ActiveCategoryContext.js";
import { ProductsContextProvider } from "../../contexts/ProductsContext.js";
import ShopTabsProductsRow from "./ShopTabsProductsRow.js";
import "./ShopTabs.css";

const ShopTabs = () => {
  const activeCategoryContext = useActiveCategoryContext();
  const hideFiltersButton = (selectedKey) => {
    selectedKey !== "ALL"
      ? activeCategoryContext.dispatch({ type: "NOTALL", payload: selectedKey })
      : activeCategoryContext.dispatch({ type: "ALL", payload: selectedKey });
  };
  return (
    <section className="shop-section">
      <ProductsContextProvider>
        <TabContainer
          id="shop-section"
          activeKey={activeCategoryContext.activeState.activeCategory}
          onSelect={hideFiltersButton}
        >
          <Row>
            <Nav className="section-title">
              <Nav.Item className="tab-buttons">
                <Nav.Link className="normal-button tab-button" eventKey="ALL">
                  ALL
                </Nav.Link>
                <Nav.Link
                  className="normal-button tab-button"
                  eventKey="BEER-PACKS"
                >
                  BEER PACKS
                </Nav.Link>
                <Nav.Link className="normal-button tab-button" eventKey="BEERS">
                  BEERS
                </Nav.Link>
                <Nav.Link
                  className="normal-button tab-button"
                  eventKey="PIVOLADA"
                >
                  PIVOLADA
                </Nav.Link>
                <Nav.Link className="normal-button tab-button" eventKey="MERCH">
                  MERCH
                </Nav.Link>
              </Nav.Item>

              <ShowFilters />
            </Nav>
          </Row>
          <Row>
            <FiltersSection />
          </Row>
          <ShopTabsProductsRow />
        </TabContainer>
      </ProductsContextProvider>
    </section>
  );
};

export default ShopTabs;
