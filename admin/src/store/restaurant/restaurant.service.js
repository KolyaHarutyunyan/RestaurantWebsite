import axios from "axios";

export const restaurantService = {
  getRestaurantById: (id) => axios.get(`/restaurant/${id}`, { auth: true }),
};
