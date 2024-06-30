import { useSelector } from "react-redux";
import scssVars from "./../../scss/App.scss";
import { imgsPath } from "../CONSTANTS";

const ProductPics = () => {
  const currentProduct = useSelector(
    (state) => state.packageTypeReducer.product
  );
  const packageType = useSelector((state) => state.packageTypeReducer.package);
  const windowInnerWidth = document.documentElement.clientWidth;
  const tablet = scssVars.breakpoint_md;
  let picFirst = null;
  let picSecond = null;
  let styleIfNone = null;
  if (packageType === "BOTTLE") {
    picFirst = currentProduct.img;
    picSecond = currentProduct.canImg;
  } else {
    if (currentProduct.canImg !== "") {
      picFirst = currentProduct.canImg;
      picSecond = currentProduct.img;
    } else {
      picFirst = imgsPath + "/CanBackground.png";
      picSecond = currentProduct.img;
      styleIfNone = { display: "none" };
    }
  }
  return (
    <div className="product-imgs">
      <img src={picFirst} alt={currentProduct.name} style={styleIfNone} />
      {windowInnerWidth > tablet && <img src={picSecond} alt="" />}
    </div>
  );
};
export default ProductPics;
