import CartItem from "./CartItem";
import { useCartContext } from "../../contexts/CartContext";
import "./Cart.css";

const Cart = () => {
  const showCart = useCartContext();
  return (
    <div>
      <div
        className="cart-modal-back"
        onClick={showCart.showCartContext.toggleShow}
      ></div>
      <div className="cart-modal">
        <div className="cart-title">
          <div>YOUR CART</div>
          <div onClick={showCart.showCartContext.toggleShow}>
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
        <CartItem />
      </div>
    </div>
  );
};

export default Cart;