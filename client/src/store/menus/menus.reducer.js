import {
  GET_MENUS_SUCCESS,
  EDIT_MENU_SUCCESS,
  CREATE_MENU_SUCCESS,
  SWITCH_MENU_STATUS_SUCCESS,
  GET_CURRENT_MENU_SUCCESS,
  DELETE_MENU_SUCCESS, GET_ACTIVE_MENUS, GET_ACTIVE_MENUS_SUCCESS, GET_BUSINESS_MENU_SUCCESS,
} from "./menus.types";
const initialState = [];

export const menusReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MENU_SUCCESS:
      return state.filter((menu) => menu.id !== action.payload);
    case GET_MENUS_SUCCESS:
      return action.payload;
    case GET_ACTIVE_MENUS_SUCCESS:
      return action.payload
    case GET_BUSINESS_MENU_SUCCESS:
      return action.payload
    case EDIT_MENU_SUCCESS:
      return state.map((menu) =>
        menu.id === action.payload.id ? action.payload : menu
      );
    case CREATE_MENU_SUCCESS:
      return [action.payload, ...state];
    case GET_CURRENT_MENU_SUCCESS:
      const allreadyIn = initialState.find(
        (cMenu) => cMenu.id === action.payload.id
      );
      if (allreadyIn) {
        return state.map((cMenu) =>
          cMenu.id === action.payload.id ? action.payload : cMenu
        );
      }
      return [...state, action.payload];
    case SWITCH_MENU_STATUS_SUCCESS:
      return state.map((menu) => {
        if (menu.id === action.payload) {
          return {
            ...menu,
            isActive: !menu.isActive,
          };
        }
        return {
          ...menu,
          isActive: false,
        };
      });

    default:
      return state;
  }
};
