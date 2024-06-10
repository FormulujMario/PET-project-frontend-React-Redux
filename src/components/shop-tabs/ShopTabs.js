import { TabContainer, Nav, Row } from "react-bootstrap";
import ShowFilters from "../buttons/ShowFilters.js";
import FiltersSection from "../filters-and-sort/FiltersSection.js";
import ShopTabsProductsRow from "./ShopTabsProductsRow.js";
import { useDispatch, useSelector } from "react-redux";

const ShopTabs = () => {
  const activeCategoryDispatch = useDispatch();
  const activeCategoryContext = useSelector(
    (state) => state.activeCategoryReducer.activeCategory
  );
  const hideFiltersButton = (selectedKey) => {
    selectedKey !== "ALL"
      ? activeCategoryDispatch({ type: "NOTALL", payload: selectedKey })
      : activeCategoryDispatch({ type: "ALL", payload: selectedKey });
  };
  return (
    <section className="shop-section">
      <TabContainer
        id="shop-section"
        activeKey={activeCategoryContext}
        onSelect={hideFiltersButton}
      >
        <Row>
          <Nav className="section-title">
            <Nav.Item className="tab-buttons">
              <Nav.Link eventKey="ALL">
                ALL
              </Nav.Link>
              <Nav.Link
                eventKey="BEER-PACKS"
              >
                BEER PACKS
              </Nav.Link>
              <Nav.Link eventKey="BEERS">
                BEERS
              </Nav.Link>
              <Nav.Link
                eventKey="PIVOLADA"
              >
                PIVOLADA
              </Nav.Link>
              <Nav.Link eventKey="MERCH">
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
    </section>
  );
};

export default ShopTabs;
