import { GET_CATEGORIES_SUCCESS } from "./categories.types";

const initialState = null;
export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
