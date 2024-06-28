import { useDispatch, useSelector } from "react-redux";
import { activeCategoryToggle } from "../../store/ActiveCategorySlice.js";
import { changeProducts } from "../../store/ActiveProductsSlice.js";
import { TabContainer, Nav, Row } from "react-bootstrap";
import ShowFilters from "../buttons/ShowFilters.js";
import FiltersSection from "../filters-and-sort/FiltersSection.js";
import ShopTabsProductsRow from "./ShopTabsProductsRow.js";

const ShopTabs = () => {
  const dispatch = useDispatch();
  const activeCategoryContext = useSelector(
    (state) => state.activeCategoryReducer.activeCategory
  );
  const changeCategory = (selectedKey) => {
    dispatch(activeCategoryToggle(selectedKey));
    dispatch(changeProducts(null));
  };
  return (
    <section className="shop-section">
      <TabContainer
        id="shop-section"
        activeKey={activeCategoryContext}
        onSelect={changeCategory}
      >
        <Row>
          <Nav className="section-title">
            <Nav.Item className="tab-buttons">
              <Nav.Link eventKey="ALL">ALL</Nav.Link>
              <Nav.Link eventKey="BEER-PACKS">BEER PACKS</Nav.Link>
              <Nav.Link eventKey="BEERS">BEERS</Nav.Link>
              <Nav.Link eventKey="PIVOLADA">PIVOLADA</Nav.Link>
              <Nav.Link eventKey="MERCH">MERCH</Nav.Link>
            </Nav.Item>
            <ShowFilters />
          </Nav>
        </Row>
        <Row>
          <FiltersSection key={activeCategoryContext}/>
        </Row>
        <ShopTabsProductsRow />
      </TabContainer>
    </section>
  );
};

export default ShopTabs;
