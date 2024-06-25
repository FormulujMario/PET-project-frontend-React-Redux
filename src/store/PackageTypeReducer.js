const packageType = {
  package: "BOTTLE",
  product: null,
  itemPrice: null,
  mainImage: null,
};

export const packageTypeReducer = (state = packageType, action) => {
  switch (action.type) {
    case "set price":
      return {
        ...state,
        product: action.product,
        itemPrice:
          state.package === "CAN"
            ? action.product.canPrice
            : action.product.price,
        mainImage:
          state.package === "CAN"
            ? action.product.canImg
              ? action.product.canImg
              : process.env.REACT_APP_IMAGES_PATH + "/CanBackground.png"
            : action.product.img,
      };
    case "change price":
      return {
        ...state,
        package: action.bottleOrCan,
        itemPrice:
          action.bottleOrCan === "CAN"
            ? state.product.canPrice
            : state.product.price,
        mainImage:
        action.bottleOrCan === "CAN"
            ? state.product.canImg
              ? state.product.canImg
              : process.env.REACT_APP_IMAGES_PATH + "/CanBackground.png"
            : state.product.img,
      };
    default:
      return state;
  }
};
