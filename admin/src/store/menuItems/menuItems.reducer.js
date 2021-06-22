import { GET_MENU_ITEMS_SUCCESS } from "./menuItems.types";
const initialState = [];

export const menuItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU_ITEMS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
