import { TabContainer, Tab, Nav, Row } from "react-bootstrap";
import {
  SHOP_MAIN_BEERS_LIST,
  SHOP_MAIN_BEER_PACKS_LIST,
  SHOP_MAIN_PIVOLADA_LIST,
  SHOP_MAIN_MERCH_LIST,
} from "../constants.js";
import ShopCategories from "../ShopCategories.js";
import { useState } from "react";
import ShowFilters from "../buttons/ShowFilters.js";
import FiltersSection from "../filters/FiltersSection.js";
import "./ShopTabs.css";

const sliderParams = {
  slidesPerView: "4",
  navigation: "false",
  pagination: "false",
  direction: "horizontal",
  loop: "false",
  spaceBetween: "30",
};

const ShopTabs = ({ activeKey, filterButton }) => {
  const [filtersButtonTitle, setfiltersButtonTitle] = useState("SHOW FILTERS");
  const [filters, setFilters] = useState("none");
  const [beers, setBeers] = useState(SHOP_MAIN_BEERS_LIST);
  const [beerPacks, setBeerPacks] = useState(SHOP_MAIN_BEER_PACKS_LIST);
  const [pivolada, setPivolada] = useState(SHOP_MAIN_PIVOLADA_LIST);
  const [merch, setMerch] = useState(SHOP_MAIN_MERCH_LIST);
  const [hidden, setHidden] = useState(filterButton);
  const [activeCategory, setActiveCategory] = useState(activeKey);

  const hideFilters = (selectedKey) => {
    setActiveCategory((currentValue) => {
      return (currentValue = selectedKey);
    });
    return selectedKey !== "ALL"
      ? setHidden((currentValue) => {
          return (currentValue = "flex");
        })
      : setHidden((currentValue) => {
          return (currentValue = "none");
        });
  };

  return (
    <section className="shop-section">
      <TabContainer
        id="shop-section"
        activeKey={activeCategory}
        onSelect={hideFilters}
      >
        <Row>
          <Nav className="section-title">
            <Nav.Item className="tab-buttons">
              <Nav.Link
                className="normal-button tab-button"
                eventKey="ALL"
                href="/shop"
              >
                ALL
              </Nav.Link>
              <Nav.Link
                className="normal-button tab-button"
                eventKey="BEER-PACKS"
                href="/shop-beer-packs"
              >
                BEER PACKS
              </Nav.Link>
              <Nav.Link
                className="normal-button tab-button"
                eventKey="BEERS"
                href="/shop-beers"
              >
                BEERS
              </Nav.Link>
              <Nav.Link
                className="normal-button tab-button"
                eventKey="PIVOLADA"
                href="/shop-pivolada"
              >
                PIVOLADA
              </Nav.Link>
              <Nav.Link
                className="normal-button tab-button"
                eventKey="MERCH"
                href="/shop-merch"
              >
                MERCH
              </Nav.Link>
            </Nav.Item>
            <ShowFilters
              isHidden={hidden}
              filtersButtonTitle={filtersButtonTitle}
              setfiltersButtonTitle={setfiltersButtonTitle}
              setFilters={setFilters}
            />
          </Nav>
        </Row>
        <Row>
          <Tab.Content>
            <Tab.Pane eventKey="ALL">
              <ShopCategories
                categories={[
                  {
                    category: "BEER PACKS",
                    show: SHOP_MAIN_BEER_PACKS_LIST,
                    sliderParams: sliderParams,
                  },
                  {
                    category: "BEERS",
                    show: SHOP_MAIN_BEERS_LIST,
                    sliderParams: sliderParams,
                  },
                  {
                    category: "PIVOLADA",
                    show: SHOP_MAIN_PIVOLADA_LIST,
                    sliderParams: sliderParams,
                  },
                  {
                    category: "MERCH",
                    show: SHOP_MAIN_MERCH_LIST,
                    sliderParams: sliderParams,
                  },
                ]}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="BEER-PACKS">
              <FiltersSection
                filters={filters}
                state={beerPacks}
                stateFn={setBeerPacks}
                productsList={SHOP_MAIN_BEER_PACKS_LIST}
                sectionSort={"sort-beerpacks"}
                sectionFilter={"beer-packs"}
                quantity={true}
              />
              <ShopCategories
                categories={"BEER PACKS"}
                show={beerPacks}
                sliderParams={sliderParams}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="BEERS">
              <FiltersSection
                filters={filters}
                state={beers}
                stateFn={setBeers}
                productsList={SHOP_MAIN_BEERS_LIST}
                sectionSort={"sort-beers"}
                sectionFilter={"beers"}
                style={true}
                alcohol={true}
                color={true}
                quantity={false}
              />
              <ShopCategories
                categories={"BEERS"}
                show={beers}
                sliderParams={sliderParams}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="PIVOLADA">
              <FiltersSection
                filters={filters}
                state={pivolada}
                stateFn={setPivolada}
                productsList={SHOP_MAIN_PIVOLADA_LIST}
                sectionSort={"sort-pivolada"}
              />

              <ShopCategories
                categories={"PIVOLADA"}
                show={pivolada}
                sliderParams={sliderParams}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="MERCH">
              <FiltersSection
                filters={filters}
                state={merch}
                stateFn={setMerch}
                productsList={SHOP_MAIN_MERCH_LIST}
                sectionSort={"sort-merch"}
              />
              <ShopCategories
                categories={"MERCH"}
                show={merch}
                sliderParams={sliderParams}
              />
            </Tab.Pane>
          </Tab.Content>
        </Row>
      </TabContainer>
    </section>
  );
};

export default ShopTabs;
