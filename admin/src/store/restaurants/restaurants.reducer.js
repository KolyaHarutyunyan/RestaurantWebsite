import { GET_RESTAURANTS_SUCCESS } from "./restaurants.types";

const initialState = [];

export const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
