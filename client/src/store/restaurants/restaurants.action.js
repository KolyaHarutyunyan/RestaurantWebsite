import {
  GET_RESTAURANTS,
  EDIT_RESTAURANT,
  DELETE_RESTAURANT,
  CREATE_RESTAURANT,
} from "./restaurants.types";

export const restaurantsActions = {
  getRestaurants: () => ({
    type: GET_RESTAURANTS,
  }),
  editRestaurant: (restaurant) => ({
    type: EDIT_RESTAURANT,
    payload: restaurant,
  }),
  createRestaurant: (restaurant) => ({
    type: CREATE_RESTAURANT,
    payload: restaurant,
  }),
  deleteRestaurant: (restaurantId) => ({
    type: DELETE_RESTAURANT,
    payload: restaurantId,
  }),
};
