import {
  GET_MENU_CATEGORIES_SUCCESS,
  DELETE_MENU_CATEGORY_SUCCESS,
  ADD_MENU_CATEGORY_SUCCESS,
  REORDER_MENU_CATEGORY_SUCCESS,
} from "./menuCategories.types";

const initialState = {
  food: [],
  drink: [],

};

export const menuCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MENU_CATEGORY_SUCCESS:
      return action.payload;
    case GET_MENU_CATEGORIES_SUCCESS:
      return {
        ...state,
        food: action.payload.food,
        drink: action.payload.drinks,
      };
    case REORDER_MENU_CATEGORY_SUCCESS:
      return {
        ...state,
        [action.payload.categoryType]: state[action.payload.categoryType].map(
          (item) => {
            if (item.rank === action.payload.move.from) {
              return { ...item, rank: action.payload.move.to };
            } else if (item.rank === action.payload.move.to) {
              return { ...item, rank: action.payload.move.from };
            }
            return item;
          }
        ),
      };
    case DELETE_MENU_CATEGORY_SUCCESS:
      return {
        ...state,
        [action.payload.categoryType]: state[
          action.payload.categoryType
        ].filter(
          (category) => category.category.id !== action.payload.categoryId
        ),
      };
    default:
      return state;
  }
};
