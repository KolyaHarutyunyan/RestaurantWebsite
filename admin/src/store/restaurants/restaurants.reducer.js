import { GET_RESTAURANTS } from "./restaurants.types";

const initialState = [];

export const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANTS:
      return action.payload;
    default:
      return state;
  }
};
