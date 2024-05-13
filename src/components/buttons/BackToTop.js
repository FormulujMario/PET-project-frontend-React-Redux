import { BsArrowUp } from "react-icons/bs";
import "./BackToTop.css";

const backToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const BackToTop = () => {
  return (
    <section class="back-to-top">
      <button onClick={backToTop}>
        BACK TO TOP
        <BsArrowUp />
      </button>
    </section>
  );
};

export default BackToTop;
