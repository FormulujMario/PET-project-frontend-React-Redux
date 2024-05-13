import "./ProductTitle.css";

const ProductTitle = ({ product, price }) => {
  return (
    <div className="product-title">
      <h2>{product.name}</h2>
      <div>
        <span>{price}</span>
        {product.currency}
      </div>
    </div>
  );
};
export default ProductTitle;
