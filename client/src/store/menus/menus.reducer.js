import {
  GET_MENUS_SUCCESS,
  EDIT_MENU_SUCCESS,
  CREATE_MENU_SUCCESS,
  TOGGLE_MENU_ACTIVITY_SUCCESS,
} from "./menus.types";
const initialState = [];

export const menusReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENUS_SUCCESS:
      return action.payload;
    case EDIT_MENU_SUCCESS:
      return state.map((menu) =>
        menu._id === action.payload._id ? action.payload : menu
      );
    case CREATE_MENU_SUCCESS:
      return [action.payload, ...state];
    case TOGGLE_MENU_ACTIVITY_SUCCESS:
      return state.map((menu) => {
        if (menu.id === payload) {
          return !menu.isActive;
        }
        return menu;
      });
    default:
      return state;
  }
};
