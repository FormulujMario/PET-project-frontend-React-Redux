import { configureStore } from "@reduxjs/toolkit";
import activeCategoryReducer from "./ActiveCategorySlice";
import cartReducer from "./ShowCartSlice";
import filtersReducer from "./FiltersSlice";
import productsReducer from "./ProductsSlice";
import mobileMenuReducer from "./ShowMobileMenuSlice";
import packageTypeReducer from "./PackageTypeSlice";

export const store = configureStore({
  reducer: {
    activeCategoryReducer,
    cartReducer,
    filtersReducer,
    productsReducer,
    mobileMenuReducer,
    packageTypeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ["productsReducer.lists", "packageTypeReducer.product"],
      },
    }),
});
