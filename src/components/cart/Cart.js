import { useDispatch } from "react-redux";
import { toggleShow } from "../../store/ShowCartSlice";
import { TfiClose } from "react-icons/tfi";
import CartItem from "./CartItem";

const Cart = () => {
  const cartDispatch = useDispatch();
  return (
    <section className="cart">
      <div
        className="modal-back"
        onClick={() => {
          cartDispatch(toggleShow());
        }}
      ></div>
      <div className="modal">
        <div className="title">
          <div>YOUR CART</div>
          <div
            className="x"
            onClick={() => {
              cartDispatch(toggleShow());
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
