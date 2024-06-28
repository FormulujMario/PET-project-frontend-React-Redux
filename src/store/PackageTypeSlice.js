import { createSlice } from "@reduxjs/toolkit";
import { imgsPath } from "../components/CONSTANTS";

const initialState = {
  package: "BOTTLE",
  product: null,
  itemPrice: null,
  mainImage: null,
};

const PackageTypeSlice = createSlice({
  name: "package type",
  initialState,
  reducers: {
    setPrice(state, action) {
      const product = action.payload;
      state.product = product;
      if (state.package === "CAN") {
        state.itemPrice = product.canPrice;
        product.canImg
          ? (state.mainImage = product.canImg)
          : (state.mainImage = imgsPath + "/CanBackground.png");
      } else {
        state.itemPrice = product.price;
        state.mainImage = product.img;
      }
    },
    changePrice(state, action) {
      const bottleOrCan = action.payload;
      state.package = bottleOrCan;
      if (bottleOrCan === "CAN") {
        state.itemPrice = state.product.canPrice;
        state.product.canImg
          ? (state.mainImage = state.product.canImg)
          : (state.mainImage = imgsPath + "/CanBackground.png");
      } else {
        state.itemPrice = state.product.price;
        state.mainImage = state.product.img;
      }
    },
  },
});
export const { setPrice, changePrice } = PackageTypeSlice.actions;
export default PackageTypeSlice.reducer;
