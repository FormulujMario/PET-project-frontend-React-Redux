import { TabContainer, Tab, Nav, Row } from "react-bootstrap";
import {
  NEWS,
  NEWS_NEWS,
  NEWS_PRESS,
  NEWS_VIRTUAL,
  NEWS_TRAVEL,
} from "../constants.js";
import "./NewsTabs.css";
import SliderNews from "../slider/SliderNews.js";

const NewsTabs = () => {
  return (
    <section className="shop-section">
      <TabContainer id="news-section" defaultActiveKey="ALL">
        <Row>
          <Nav className="section-title">
            <Nav.Item className="tab-buttons">
              <Nav.Link className="normal-button tab-button" eventKey="ALL">
                ALL
              </Nav.Link>
              <Nav.Link className="normal-button tab-button" eventKey="NEWS">
                NEWS
              </Nav.Link>
              <Nav.Link className="normal-button tab-button" eventKey="PRESS">
                PRESS
              </Nav.Link>
              <Nav.Link
                className="normal-button tab-button"
                eventKey="VIRTUAL EXHIBITION"
              >
                VIRTUAL EXHIBITION
              </Nav.Link>
              <Nav.Link
                className="normal-button tab-button"
                eventKey="WE TRAVEL WITH RECIPES"
              >
                WE TRAVEL WITH RECIPES
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          <Tab.Content>
            <Tab.Pane eventKey="ALL">
              <SliderNews list={NEWS} />
            </Tab.Pane>
            <Tab.Pane eventKey="NEWS">
              <SliderNews list={NEWS_NEWS} />
            </Tab.Pane>
            <Tab.Pane eventKey="PRESS">
              <SliderNews list={NEWS_PRESS} />
            </Tab.Pane>
            <Tab.Pane eventKey="VIRTUAL EXHIBITION">
              <SliderNews list={NEWS_VIRTUAL} />
            </Tab.Pane>
            <Tab.Pane eventKey="WE TRAVEL WITH RECIPES">
              <SliderNews list={NEWS_TRAVEL} />
            </Tab.Pane>
          </Tab.Content>
        </Row>
      </TabContainer>
    </section>
  );
};

export default NewsTabs;
