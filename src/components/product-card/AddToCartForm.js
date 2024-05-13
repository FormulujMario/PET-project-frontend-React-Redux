import { TabContainer, Nav, Row } from "react-bootstrap";
import NormalWhiteButton from "../buttons/NormalWhiteButton";
import { useState } from "react";
import "./AddToCartForm.css";

const AddToCartForm = ({
  type,
  changePriceFn,
  mainImage,
  product,
  price,
  addToCartFn,
}) => {
  const [inputValue, setInputValue] = useState(1);
  return (
    <form>
      <div className="type-of-product">
        {document.location.href.indexOf("beers") == -1 ? null : (
          <TabContainer id="type-of-product" defaultActiveKey={type}>
            <Row>
              <Nav className="buttons-section">
                <Nav.Item className="tab-buttons" onClick={changePriceFn}>
                  <Nav.Link
                    className="normal-button tab-button"
                    eventKey="BOTTLE"
                  >
                    BOTTLE
                  </Nav.Link>
                  <Nav.Link className="normal-button tab-button" eventKey="CAN">
                    CAN
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Row>
          </TabContainer>
        )}
      </div>
      <div className="add-to-cart-input">
        <div class="input-number">
          <div
            class="input-number__minus"
            onClick={() => {
              setInputValue((prev) => {
                if (prev === 1) {
                  return 1;
                } else {
                  return prev - 1;
                }
              });
            }}
          >
            -
          </div>
          <input
            class="input-number__input"
            type="text"
            pattern="^[0-9]+$"
            value={inputValue}
          />
          <div
            class="input-number__plus"
            onClick={() => {
              setInputValue((prev) => {
                return prev + 1;
              });
            }}
          >
            +
          </div>
        </div>
        <div
          className="add-to-cart-button-container"
          onClick={(event) => {
            addToCartFn(
              mainImage.current.src,
              product.name,
              price,
              inputValue,
              event
            );
          }}
        >
          <NormalWhiteButton text="ADD TO CART" />
        </div>
      </div>
    </form>
  );
};
export default AddToCartForm;
