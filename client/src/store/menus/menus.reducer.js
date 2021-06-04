import {
  GET_MENUS_SUCCESS,
  EDIT_MENU_SUCCESS,
  CREATE_MENU_SUCCESS,
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
    default:
      return state;
  }
};
