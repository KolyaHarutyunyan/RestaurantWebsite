import { getRestaurants } from "./restaurants.action";

export { restaurantsReducer } from "./restaurants.reducer";
export { watchRestaurants } from "./restaurants.saga";
export { GET_RESTAURANTS, GET_RESTAURANTS_SUCCESS } from "./restaurants.types";

export const restaurantsActions = {
  getRestaurants,
};
