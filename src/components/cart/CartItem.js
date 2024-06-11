import { useState } from "react";
import NormalWhiteButton from "../buttons/NormalWhiteButton";

const CartItem = () => {
  const storageArr = JSON.parse(localStorage.cart);
  const [storageArrState, setStorageArrState] = useState(storageArr);
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

  storageArr.map((product) => {
    totalPrice += product.price * product.quantity;
    return totalPrice;
  });
  const [orderComplitedText, setOrderComplitedText] = useState();
  const orderComplited = () => {
    cartUpdate([]);
    setOrderComplitedText("Thank you for your order");
  };

  return (
    <div>
      {storageArrState.length !== 0 ? (
        storageArrState.map((item) => {
          return (
            <div>
              <div className="cart-item">
                <div>
                  <img src={item.img} alt={item.name}/>
                </div>
                <div>{item.name}</div>
                <div class="input-number">
                  <div
                    className="minus"
                    onClick={(event) => {
                      changeCartQuantity(item.name, item.price, event);
                    }}
                  >
                    -
                  </div>
                  <input
                    class="input"
                    type="text"
                    pattern="^[0-9]+$"
                    value={
                      storageArrState[storageArrState.indexOf(item)].quantity
                    }
                  />
                  <div
                    class="plus"
                    onClick={(event) => {
                      changeCartQuantity(item.name, item.price, event);
                    }}
                  >
                    +
                  </div>
                </div>
                <div>{`${item.price * item.quantity} RSD`}</div>
                <div className="x"
                  onClick={() => {
                    deleteItem(item.name, item.price);
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.9204 1.9034L19.3331 1.49119L18.5077 0.666748L18.0949 1.07897L9.98802 9.17564L1.90522 1.10304L1.49248 0.690822L0.667001 1.51526L1.07974 1.92748L9.16254 10.0001L1.07973 18.0727L0.666992 18.4849L1.49247 19.3094L1.90521 18.8971L9.98802 10.8245L18.0949 18.9212L18.5077 19.3334L19.3331 18.509L18.9204 18.0968L10.8135 10.0001L18.9204 1.9034Z"
                      fill="black"
                    />
                  </svg>
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
