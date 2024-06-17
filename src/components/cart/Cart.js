import { TfiClose } from "react-icons/tfi";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartDispatch = useDispatch();
  return (
    <section>
      <div
        className="cart-modal-back"
        onClick={() => {
          cartDispatch({ type: "toggle" });
        }}
      ></div>
      <div className="cart-modal">
        <div className="cart-title">
          <div>YOUR CART</div>
          <div className="x"
            onClick={() => {
              cartDispatch({ type: "toggle" });
            }}
          >
            <TfiClose size={20}/>
          </div>
        </div>
        <hr />
        <CartItem />
      </div>
    </section>
  );
};

export default Cart;
