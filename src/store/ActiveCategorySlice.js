import { createSlice } from "@reduxjs/toolkit";

const initialState = { activeCategory: "ALL", visible: "none" };

const ActiveCategorySlice = createSlice({
  name: "active category",
  initialState,
  reducers: {
    activeCategoryToggle(state, action) {
      const category = action.payload;
      state.activeCategory = category;
      category === "ALL" ? (state.visible = "none") : (state.visible = "flex");
    },
  },
});
export const { activeCategoryToggle } = ActiveCategorySlice.actions;
export default ActiveCategorySlice.reducer;
