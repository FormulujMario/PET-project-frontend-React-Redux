const toggleMenuShow = {
  showMenu: false,
};

export const MobileMenuReducer = (state = toggleMenuShow, action) => {
  switch (action.type) {
    case "menuToggle":
      return { ...state, showMenu: !state.showMenu };
    default:
      return state;
  }
};
