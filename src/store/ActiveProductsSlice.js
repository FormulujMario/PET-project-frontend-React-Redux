import { createSlice } from "@reduxjs/toolkit";

const initialState = { productsList: null };
const ActiveProductsSlice = createSlice({
  name: "active products",
  initialState,
  reducers: {
    changeProducts(state, action) {
      const arr = action.payload;
      state.productsList = arr;
    },
  },
});
export const { changeProducts } = ActiveProductsSlice.actions;
export default ActiveProductsSlice.reducer;
