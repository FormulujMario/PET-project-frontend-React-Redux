import { useSelector } from "react-redux";

const ProductTitle = () => {
  const currentProduct = useSelector(
    (state) => state.packageTypeReducer.product
  );
  const itemPrice = useSelector((state) => state.packageTypeReducer.itemPrice);
  return (
    <div className="product-title">
      <h2>{currentProduct.name}</h2>
      <div>
        <span>{itemPrice}</span>
        {currentProduct.currency}
      </div>
    </div>
  );
};
export default ProductTitle;
