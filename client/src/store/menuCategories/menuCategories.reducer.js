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
      return {
        ...state,
        [action.payload.categoryType]: state[
          action.payload.categoryType
        ].filter((category) => category.id !== action.payload.categoryId),
      };
    default:
      return state;
  }
};
