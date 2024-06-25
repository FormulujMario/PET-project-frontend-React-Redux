import { createSlice } from "@reduxjs/toolkit";

const initialState = { filtersButtonTitle: "SHOW FILTERS", filters: "none" };

const FiltersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filtersToggle(state) {
      if (state.filtersButtonTitle === "SHOW FILTERS") {
        state.filtersButtonTitle = "HIDE FILTERS";
        state.filters = "block";
      } else {
        state.filtersButtonTitle = "SHOW FILTERS";
        state.filters = "none";
      }
    },
  },
});
export const { filtersToggle } = FiltersSlice.actions;
export default FiltersSlice.reducer;
