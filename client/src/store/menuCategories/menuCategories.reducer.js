import {
  GET_MENU_CATEGORIES_SUCCESS,
  DELETE_MENU_CATEGORY_SUCCESS,
} from "./menuCategories.types";

const initialState = {
  food: [],
  drink: [],
};
export const menuCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU_CATEGORIES_SUCCESS:
      return action.payload;
    case DELETE_MENU_CATEGORY_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
