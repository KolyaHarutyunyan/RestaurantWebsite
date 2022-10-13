import {
  GET_MENUS_SUCCESS,
  EDIT_MENU_SUCCESS,
  GET_CURRENT_MENU_SUCCESS,
  GET_ACTIVE_MENUS_SUCCESS,
  GET_BUSINESS_MENU_SUCCESS,
} from "./menus.types";

const initialState = {
  menus: [],
  activeMenus: [],
  menuById: {},
};

export const menusReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENUS_SUCCESS:
      return {
        ...state,
        menus: action.payload,
      };
    case GET_ACTIVE_MENUS_SUCCESS:
      return {
        ...state,
        activeMenus: action.payload,
      };
    case GET_BUSINESS_MENU_SUCCESS:
      return {
        ...state,
        menuById: action.payload,
      };
    case EDIT_MENU_SUCCESS:
      return {
        ...state,
        menuById: action.payload,
      };
    case GET_CURRENT_MENU_SUCCESS:
      return {
        ...state,
        menuById: menus.find((menu) => menu.id === action.payload),
      };
    default:
      return state;
  }
};
