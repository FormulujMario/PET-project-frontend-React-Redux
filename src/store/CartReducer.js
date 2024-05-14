const toggleShow = {
  showCart: false,
};

export const cartReducer = (state = toggleShow, action) => {
  switch (action.type) {
    case "toggle":
      return { ...state, showCart: !state.showCart };
    default:
      return state;
  }
};
