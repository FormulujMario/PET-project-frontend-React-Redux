import React, { createContext, useReducer } from "react";

const CartContext = createContext();

function useCartContext() {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error(`useCartContext must be used within a CartContextProvider`);
  }
  return context;
}

function CartContextProvider(props) {
  const [showCart, toggleShow] = useReducer((visible) => !visible, false);
  const showCartContext = { showCart, toggleShow };
  const value = React.useMemo(() => ({ showCartContext }), [showCart]);
  return <CartContext.Provider value={value} {...props} />;
}

export { useCartContext, CartContextProvider };
