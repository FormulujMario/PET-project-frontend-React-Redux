import "./App.css";
import React from "react";
import { CartContextProvider } from "./contexts/CartContext.js";
import MyRouter from "./components/MyRouter.js";
import { ActiveCategoryContextProvider } from "./contexts/ActiveCategoryContext.js";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <ActiveCategoryContextProvider>
          <MyRouter />
        </ActiveCategoryContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
