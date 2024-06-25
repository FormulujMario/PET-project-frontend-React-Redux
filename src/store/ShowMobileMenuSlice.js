import { createSlice } from "@reduxjs/toolkit";

const initialState = { showMenu: false };

const ShowMobileMenuSlice = createSlice({
  name: "mobile menu",
  initialState,
  reducers: {
    menuToggle(state) {
      state.showMenu = !state.showMenu;
    },
  },
});
export const { menuToggle } = ShowMobileMenuSlice.actions;
export default ShowMobileMenuSlice.reducer;
