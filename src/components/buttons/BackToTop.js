import { BsArrowUp } from "react-icons/bs";

const BackToTop = () => {
  const backToTopFn = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <section class="back-to-top">
      <button onClick={backToTopFn}>
        BACK TO TOP
        <BsArrowUp />
      </button>
    </section>
  );
};

export default BackToTop;
