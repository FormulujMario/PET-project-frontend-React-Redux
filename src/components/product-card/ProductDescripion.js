import { useSelector } from "react-redux";
import { useState } from "react";

const ProductDescription = ({ name }) => {
  const currentProduct = useSelector(
    (state) => state.packageTypeReducer.product
  );
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
    <section className="product-description">
      <div className="title">
        <div>{name}</div>
        <div className="drop-down-icon" onClick={toggleShowDesc}>
          {icon}
        </div>
      </div>

      {name === "PRODUCT DESCRIPTION" ? (
        <div className={showInfo}>
          <p className="main-properties">{`${currentProduct.style} / abv ${currentProduct.alcohol}% / ibu ${currentProduct.color} / ${currentProduct.volume}l`}</p>
          <p className="main-description">{currentProduct.description}</p>
        </div>
      ) : name === "INGREDIENTS" ? (
        <div className={showInfo}>
          <p className="main-description">{currentProduct.ingredients}</p>
        </div>
      ) : (
        <div className={`grid-container ${showInfo}`}>
          <div className="main-description">
            Typical Values (as prepared energy)
          </div>
          <div className="main-description">Per 100mls</div>
          <div className="main-description">Per 330mls</div>
          {nutritionRecurseFn(currentProduct.nutrition)}
          {nutritionArr.map((item) => {
            return (
              <div key={item} className="main-description">
                {item}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
export default ProductDescription;
