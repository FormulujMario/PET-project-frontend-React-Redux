import { useState } from "react";
import "./ProductDescription.css";

const ProductDescription = ({ name, product }) => {
  const [icon, setIcon] = useState("+");
  const [showInfo, setShowInfo] = useState("additional-info hidden");
  const toggleShowDesc = () => {
    showInfo === "additional-info hidden"
      ? setShowInfo("additional-info")
      : setShowInfo("additional-info hidden");
    icon === "+" ? setIcon("–") : setIcon("+");
  };
  const nutritionArr = [];
  const nutritionRecurseFn = (obj) => {
    for (let key in obj) {
      if (typeof obj[key] !== "object") {
        nutritionArr.push(obj[key]);
      } else {
        if (obj[key]) {
          nutritionArr.push(key);
        }
        nutritionRecurseFn(obj[key]);
      }
    }
  };
  return (
    <div className="product-description">
      <div className="product-description-title">
        <div>{name}</div>
        <div className="drop-down-icon" onClick={toggleShowDesc}>
          {icon}
        </div>
      </div>

      {name === "PRODUCT DESCRIPTION" ? (
        <div className={showInfo}>
          <p className="main-properties">{`${product.style} / abv ${product.alcohol}% / ibu ${product.color} / ${product.volume}l`}</p>
          <p className="main-description">{product.description}</p>
        </div>
      ) : name === "INGREDIENTS" ? (
        <div className={showInfo}>
          <p className="main-description">{product.ingredients}</p>
        </div>
      ) : (
        <div className={`grid-container ${showInfo}`}>
          <div className="main-description">
            Typical Values (as prepared energy)
          </div>
          <div className="main-description">Per 100mls</div>
          <div className="main-description">Per 330mls</div>

          {nutritionRecurseFn(product.nutrition)}
          {nutritionArr.map((item) => {
            return <div className="main-description">{item}</div>;
          })}
        </div>
      )}
    </div>
  );
};
export default ProductDescription;
