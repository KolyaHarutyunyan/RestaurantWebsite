import { GET_RESTAURANT_SUCCESS } from "./restaurant.types";

const initialState = null;

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
