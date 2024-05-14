import { createStore, combineReducers } from "redux";
import activeCategoryReducer from "./ActiveCategoryReducer";
import { cartReducer } from "./CartReducer";
import { productsReducer } from "./ProductsReducer";
import { filtersButtonReducer } from "./FiltersButtonReducer";

const rootReducer = combineReducers({
  activeCategoryReducer,
  cartReducer,
  filtersButtonReducer,
  productsReducer,
});
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
