import { TabContainer, Tab, Nav, Row } from "react-bootstrap";
import NewsContainer from "./NewsContainer.js";
import {
  NEWS,
  NEWS_NEWS,
  NEWS_PRESS,
  NEWS_VIRTUAL,
  NEWS_TRAVEL,
} from "./CONSTANTS.js";

const NewsTabs = () => {
  return (
    <section className="section-news">
      <TabContainer id="news-section" defaultActiveKey="ALL">
        <Row>
          <Nav className="section-title">
            <Nav.Item className="tab-buttons">
              <Nav.Link className="tab-button" eventKey="ALL">
                ALL
              </Nav.Link>
              <Nav.Link className="tab-button" eventKey="NEWS">
                NEWS
              </Nav.Link>
              <Nav.Link className="tab-button" eventKey="PRESS">
                PRESS
              </Nav.Link>
              <Nav.Link className="tab-button" eventKey="VIRTUAL EXHIBITION">
                VIRTUAL EXHIBITION
              </Nav.Link>
              <Nav.Link
                className="tab-button"
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
              <NewsContainer list={NEWS} />
            </Tab.Pane>
            <Tab.Pane eventKey="NEWS">
              <NewsContainer list={NEWS_NEWS} />
            </Tab.Pane>
            <Tab.Pane eventKey="PRESS">
              <NewsContainer list={NEWS_PRESS} />
            </Tab.Pane>
            <Tab.Pane eventKey="VIRTUAL EXHIBITION">
              <NewsContainer list={NEWS_VIRTUAL} />
            </Tab.Pane>
            <Tab.Pane eventKey="WE TRAVEL WITH RECIPES">
              <NewsContainer list={NEWS_TRAVEL} />
            </Tab.Pane>
          </Tab.Content>
        </Row>
      </TabContainer>
    </section>
  );
};

export default NewsTabs;
