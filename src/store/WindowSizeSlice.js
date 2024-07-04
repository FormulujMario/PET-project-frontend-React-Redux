import { createSlice } from "@reduxjs/toolkit";
import scssVars from "./../scss/App.scss";

const initialState = { window: 1500, slides: "4" };
const WindowSizeSlice = createSlice({
  name: "window",
  initialState,
  reducers: {
    changeWindowSize(state, action) {
      const tablet = scssVars.breakpoint_md;
      const windowInnerWidth = action.payload;
      state.window = windowInnerWidth;
      if (windowInnerWidth < tablet) {
        state.slides = "2";
      } else {
        state.slides = "4";
      }
    },
  },
});
export const { changeWindowSize } = WindowSizeSlice.actions;
export default WindowSizeSlice.reducer;
