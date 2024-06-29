import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleShow } from "../../store/ShowCartSlice";
import { Link } from "react-router-dom";
import InputProductsNumber from "../InputProductsNumber";
import { TfiClose } from "react-icons/tfi";
import { imgsPath } from "../CONSTANTS";
import NormalWhiteButton from "../buttons/NormalWhiteButton";

const CartItem = () => {
  let storageArr = [];
  if (localStorage.cart) {
    storageArr = JSON.parse(localStorage.cart);
  }
  const [storageArrState, setStorageArrState] = useState(storageArr);
  const [orderCompletedText, setOrderCompletedText] = useState();
  const cartDispatch = useDispatch();
  let totalPrice = null;
  let foundItemIndex = null;
  const cartUpdate = (storageArr) => {
    const storageArrToChange = [...storageArr];
    setStorageArrState(storageArrToChange);
    localStorage.setItem("cart", JSON.stringify(storageArr));
  };
  const foundItem = (item, price) => {
    const foundItem = storageArr.find((product) => {
      return product.name === item && product.price === price;
    });
    foundItemIndex = storageArr.indexOf(foundItem);
    return foundItemIndex;
  };
  const changeCartQuantity = (item, price, event) => {
    foundItem(item, price);
    if (
      event.target.className === "minus" &&
      storageArr[foundItemIndex].quantity !== 1
    ) {
      storageArr[foundItemIndex].quantity -= 1;
    }
    if (
      event.target.className === "plus" &&
      storageArr[foundItemIndex].quantity !== 150
    ) {
      storageArr[foundItemIndex].quantity += 1;
    }
    cartUpdate(storageArr);
  };
  const deleteItem = (item, price) => {
    foundItem(item, price);
    storageArr.splice(foundItemIndex, 1);
    cartUpdate(storageArr);
  };
  const orderCompleted = () => {
    cartUpdate([]);
    setOrderCompletedText("Thank you for your order");
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
                      cartDispatch(toggleShow());
                    }}
                  >
                    <img src={item.img} alt={item.name} />
                  </Link>
                </div>
                <div className="name">
                  <Link
                    to={item.href}
                    onClick={() => {
                      cartDispatch(toggleShow());
                    }}
                  >
                    {item.name}
                  </Link>
                </div>
                <InputProductsNumber
                  onClickMinus={(event) => {
                    changeCartQuantity(item.name, item.price, event);
                  }}
                  inputName="quantity in cart"
                  value={
                    storageArrState[storageArrState.indexOf(item)].quantity
                  }
                  onClickPlus={(event) => {
                    changeCartQuantity(item.name, item.price, event);
                  }}
                />
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
          <img src={imgsPath + "/empty-cart.png"} alt="" />
          <div>{orderCompletedText}</div>
        </div>
      )}
      {storageArrState.length !== 0 && (
        <div>
          <div className="total">
            <div>Estimate total:</div>
            <div>{`${totalPrice} RSD`}</div>
          </div>
          <div className="checkout-button-container">
            <NormalWhiteButton
              click={orderCompleted}
              text="CONTINUE TO CHECKOUT"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
