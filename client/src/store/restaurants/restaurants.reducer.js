import {
  GET_RESTAURANTS_SUCCESS,
  EDIT_RESTAURANT_SUCCESS,
  DELETE_RESTAURANT_SUCCESS,
  CREATE_RESTAURANT_SUCCESS,
} from "./restaurants.types";

const initialState = null;

export const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANTS_SUCCESS:
      return action.payload;
    case CREATE_RESTAURANT_SUCCESS:
      return [action.payload];
    case EDIT_RESTAURANT_SUCCESS:
      return state.map((restaurant) =>
        restaurant._id === action.payload._id ? action.payload : restaurant
      );
    case DELETE_RESTAURANT_SUCCESS:
      return state.filter((restaurant) => restaurant._id !== action.payload);
    default:
      return state;
  }
};
