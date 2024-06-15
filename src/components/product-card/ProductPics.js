import scssVars from "./../../scss/App.scss";

const ProductPics = ({ current, type, mainImage }) => {
  const windowInnerWidth = document.documentElement.clientWidth;
  const mobile = scssVars.breakpoint_sm;
  let picFirst = null;
  let picSecond = null;
  let styleIfNone = null;
  if (type === "BOTTLE") {
    picFirst = current.img;
    picSecond = current.canImg;
  } else {
    if (current.canImg !== "") {
      picFirst = current.canImg;
      picSecond = current.img;
    } else {
      picFirst = process.env.REACT_APP_IMAGES_PATH + "/CanBackground.png";
      picSecond = current.img;
      styleIfNone = { display: "none" };
    }
  }
  return (
    <div className="product-imgs">
      <img
        ref={mainImage}
        src={picFirst}
        alt={current.name}
        style={styleIfNone}
      />
      {windowInnerWidth >=  mobile && <img src={picSecond} alt="" />}
    </div>
     
        
  );
};
export default ProductPics;
