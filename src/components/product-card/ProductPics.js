import scssVars from "./../../scss/App.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeWindowSize } from "../../store/WindowSizeSlice";
import { imgsPath } from "../CONSTANTS";
import { useLayoutEffect } from "react";

const ProductPics = () => {
  const currentProduct = useSelector(
    (state) => state.packageTypeReducer.product
  );
  const dispatch = useDispatch();
  const windowInnerWidth = useSelector(
    (state) => state.windowSizeReducer.window
  );
  const packageType = useSelector((state) => state.packageTypeReducer.package);
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
  useLayoutEffect(() => {
    window.onresize = () => {
      dispatch(changeWindowSize(window.innerWidth));
    };
    return () => {
      window.onresize = false;
    };
  }, [windowInnerWidth]);
  return (
    <div className="product-imgs">
      <img src={picFirst} alt={currentProduct.name} style={styleIfNone} />
      {windowInnerWidth > tablet && <img src={picSecond} alt="" />}
    </div>
  );
};
export default ProductPics;
