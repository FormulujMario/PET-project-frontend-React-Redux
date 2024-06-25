import { useDispatch } from "react-redux";
import { TfiClose } from "react-icons/tfi";
import CartItem from "./CartItem";

const Cart = () => {
  const cartDispatch = useDispatch();
  return (
    <section className="cart">
      <div
        className="modal-back"
        onClick={() => {
          cartDispatch({ type: "toggle" });
        }}
      ></div>
      <div className="modal">
        <div className="title">
          <div>YOUR CART</div>
          <div
            className="x"
            onClick={() => {
              cartDispatch({ type: "toggle" });
            }}
          >
            <TfiClose size={20} />
          </div>
        </div>
        <hr />
        <CartItem />
      </div>
    </section>
  );
};

export default Cart;
