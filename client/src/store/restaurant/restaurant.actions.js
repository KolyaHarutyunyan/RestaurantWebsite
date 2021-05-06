import { GET_RESTAURANT } from "./restaurant.types";
export const restaurantActions = {
  getRestaurantById: (id) => ({
    type: GET_RESTAURANT,
    payload: id,
  }),
};
