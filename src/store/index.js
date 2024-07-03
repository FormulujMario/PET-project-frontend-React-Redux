import { configureStore } from "@reduxjs/toolkit";
import activeCategoryReducer from "./ActiveCategorySlice";
import cartReducer from "./ShowCartSlice";
import filtersReducer from "./FiltersSlice";
import mobileMenuReducer from "./ShowMobileMenuSlice";
import packageTypeReducer from "./PackageTypeSlice";
import activeProductsReducer from "./ActiveProductsSlice";
import windowSizeReducer from "./WindowSizeSlice";

export const store = configureStore({
  reducer: {
    activeCategoryReducer,
    cartReducer,
    filtersReducer,
    mobileMenuReducer,
    packageTypeReducer,
    activeProductsReducer,
    windowSizeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // I have "Math.random" for several values in products objects, so it's just the way to avoid errors in console
        ignoredPaths: ["packageTypeReducer", "activeProductsReducer"],
        ignoredActions: [
          "active products/changeProducts",
          "package type/setPrice",
        ],
      },
    }),
});
