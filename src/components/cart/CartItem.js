import { useState } from "react";
import { Link } from "react-router-dom";
import NormalWhiteButton from "../buttons/NormalWhiteButton";
import { useDispatch } from "react-redux";
import { TfiClose } from "react-icons/tfi";

const CartItem = () => {
  const storageArr = JSON.parse(localStorage.cart);
  const [storageArrState, setStorageArrState] = useState(storageArr);
  const [orderComplitedText, setOrderComplitedText] = useState();
  const cartDispatch = useDispatch();
  let totalPrice = null;
  let foundItemIndex = null;
  const foundItem = (item, price) => {
    const foundItem = storageArr.find((product) => {
      return product.name === item && product.price === price;
    });
    foundItemIndex = storageArr.indexOf(foundItem);
    return foundItemIndex;
  };
  const cartUpdate = (storageArr) => {
    const storageArrToChange = [...storageArr];
    setStorageArrState(storageArrToChange);
    localStorage.setItem("cart", JSON.stringify(storageArr));
  };
  const changeCartQuantity = (item, price, event) => {
    foundItem(item, price);
    if (event.target.className === "minus") {
      if (storageArr[foundItemIndex].quantity !== 1) {
        storageArr[foundItemIndex].quantity -= 1;
        cartUpdate(storageArr);
      }
    } else {
      storageArr[foundItemIndex].quantity += 1;
      cartUpdate(storageArr);
    }
  };
  const deleteItem = (item, price) => {
    foundItem(item, price);
    storageArr.splice(foundItemIndex, 1);
    cartUpdate(storageArr);
  };
  const orderComplited = () => {
    cartUpdate([]);
    setOrderComplitedText("Thank you for your order");
  };
  storageArr.map((product) => {
    totalPrice += product.price * product.quantity;
    return totalPrice;
  });
  return (
    <div>
      {storageArrState.length !== 0 ? (
        storageArrState.map((item) => {
          return (
            <div key={`${item.name}-${item.price}`}>
              <div className="cart-item">
                <div className="image">
                  <Link
                    to={item.href}
                    onClick={() => {
                      cartDispatch({ type: "toggle" });
                    }}
                  >
                    <img src={item.img} alt={item.name} />
                  </Link>
                </div>
                <div className="name">
                  <Link
                    to={item.href}
                    onClick={() => {
                      cartDispatch({ type: "toggle" });
                    }}
                  >
                    {item.name}
                  </Link>
                </div>
                <div className="input-number">
                  <div
                    className="minus"
                    onClick={(event) => {
                      changeCartQuantity(item.name, item.price, event);
                    }}
                  >
                    -
                  </div>
                  <input
                    name="quantity in cart"
                    className="input"
                    type="text"
                    pattern="^[0-9]+$"
                    value={
                      storageArrState[storageArrState.indexOf(item)].quantity
                    }
                    readOnly
                  />
                  <div
                    className="plus"
                    onClick={(event) => {
                      changeCartQuantity(item.name, item.price, event);
                    }}
                  >
                    +
                  </div>
                </div>
                <div className="price">{`${
                  item.price * item.quantity
                } RSD`}</div>
                <div
                  className="x xItem"
                  onClick={() => {
                    deleteItem(item.name, item.price);
                  }}
                >
                  <TfiClose size={20} />
                </div>
              </div>
              <hr />
            </div>
          );
        })
      ) : (
        <div className="empty-cart">
          <div>Cart is empty</div>
          <img
            src={process.env.REACT_APP_IMAGES_PATH + "/empty-cart.png"}
            alt=""
          />
          <div>{orderComplitedText}</div>
        </div>
      )}
      {storageArrState.length !== 0 ? (
        <div>
          <div className="total">
            <div>Estimate total:</div>
            <div>{`${totalPrice} RSD`}</div>
          </div>
          <div className="checkout-button-container">
            <NormalWhiteButton
              click={orderComplited}
              text="CONTINUE TO CHECKOUT"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CartItem;
