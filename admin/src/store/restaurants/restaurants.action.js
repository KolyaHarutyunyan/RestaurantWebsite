import { GET_RESTAURANTS } from "./restaurants.types";

export const restaurantsActions = {
  getRestaurants: () => ({
    type: GET_RESTAURANTS,
  }),
};
