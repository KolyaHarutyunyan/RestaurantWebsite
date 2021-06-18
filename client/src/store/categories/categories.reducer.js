import {
  GET_CATEGORIES_SUCCESS,
  CREATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS,
} from "./categories.types";

const initialState = [];

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return action.payload;
    case CREATE_CATEGORY_SUCCESS:
      return [action.payload, ...state];
    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        [action.payload.categoryType.toLowerCase()]: state[
          action.payload.categoryType.toLowerCase()
        ].filter((category) => category.id !== action.payload.categoryId),
      };
    default:
      return state;
  }
};
