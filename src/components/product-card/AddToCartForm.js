import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { TabContainer, Nav, Row } from "react-bootstrap";
import InputProductsNumber from "../InputProductsNumber";
import NormalWhiteButton from "../buttons/NormalWhiteButton";

const AddToCartForm = () => {
  const cartDispatch = useDispatch();
  const mainImage = useSelector((state) => state.packageTypeReducer.mainImage);
  const itemPrice = useSelector((state) => state.packageTypeReducer.itemPrice);
  const packageType = useSelector((state) => state.packageTypeReducer.package);
  const currentProduct = useSelector(
    (state) => state.packageTypeReducer.product
  );
  const packageTypeDispatch = useDispatch();
  const [inputValue, setInputValue] = useState(1);
  const href = window.location.href;
  const addToCart = (img, item, price, href, quantity, event) => {
    cartDispatch({ type: "toggle" });
    let foundItem = null;
    if (localStorage.cart) {
      foundItem = JSON.parse(localStorage.cart).find((storageItem) => {
        return storageItem.name === item && storageItem.price === price;
      });
    }
    if (foundItem) {
      let storageToUpdateWithFoundItem = null;
      storageToUpdateWithFoundItem = JSON.parse(localStorage.cart).map(
        (item) => {
          if (item.name === foundItem.name && item.price === foundItem.price) {
            item.quantity = quantity + foundItem.quantity;
            return item;
          } else {
            return item;
          }
        }
      );
      localStorage.clear();
      localStorage.setItem(
        "cart",
        JSON.stringify(storageToUpdateWithFoundItem)
      );
    } else {
      let cartToStorage = [];
      if (localStorage.cart) {
        cartToStorage = JSON.parse(localStorage.cart);
      }
      cartToStorage.push({
        img: img,
        name: item,
        price: price,
        href: href,
        quantity: quantity,
      });
      localStorage.clear();
      localStorage.setItem("cart", JSON.stringify(cartToStorage));
    }
    event.preventDefault();
  };
  return (
    <form>
      <div className="type-of-product">
        {href.indexOf("beers") !== -1 && (
          <TabContainer id="type-of-product" defaultActiveKey={packageType}>
            <Row>
              <Nav className="section-title buttons-section">
                <Nav.Item
                  className="tab-buttons"
                  onClick={(event) =>
                    packageTypeDispatch({
                      type: "change price",
                      bottleOrCan: event.target.textContent,
                    })
                  }
                >
                  <Nav.Link eventKey="BOTTLE">BOTTLE</Nav.Link>
                  <Nav.Link eventKey="CAN">CAN</Nav.Link>
                </Nav.Item>
              </Nav>
            </Row>
          </TabContainer>
        )}
      </div>
      <div className="add-to-cart-input">
        <InputProductsNumber
          onClickMinus={() => {
            setInputValue((prev) => {
              if (prev === 1) {
                return 1;
              } else {
                return prev - 1;
              }
            });
          }}
          inputName="quantity in product card"
          value={inputValue}
          onClickPlus={() => {
            setInputValue((prev) => {
              return prev + 1;
            });
          }}
        />
        <div
          className="add-to-cart-button-container"
          onClick={(event) => {
            addToCart(
              mainImage,
              currentProduct.name,
              itemPrice,
              href,
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
