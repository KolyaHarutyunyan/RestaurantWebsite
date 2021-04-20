import { GET_RESTAURANTS } from "./restaurants.types";

export const getRestaurants = () => {
  return {
    type: GET_RESTAURANTS,
  };
};
