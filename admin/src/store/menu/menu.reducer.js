import { GET_MENUS_SUCCESS } from "./menu.types";

const initialState = null;

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENUS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
