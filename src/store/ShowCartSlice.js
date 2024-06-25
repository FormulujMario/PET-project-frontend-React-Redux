import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: false };

const ShowCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleShow(state) {
      state.showCart = !state.showCart;
    },
  },
});
export const { toggleShow } = ShowCartSlice.actions;
export default ShowCartSlice.reducer;
