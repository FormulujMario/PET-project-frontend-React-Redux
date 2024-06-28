import { BsArrowUp } from "react-icons/bs";
import scrollUp from "../scrollUp";

const BackToTop = () => {
  return (
    <section className="back-to-top">
      <button onClick={scrollUp}>
        BACK TO TOP
        <BsArrowUp />
      </button>
    </section>
  );
};

export default BackToTop;
