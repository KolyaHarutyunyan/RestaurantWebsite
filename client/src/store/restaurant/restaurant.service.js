import axios from "axios";

export const restaurantService = {
  getRestaurantById: (id) => axios.get(`/restaurant/${id}`, { auth: true }),
  createRestaurant: (restaurantData) => axios.post('/api/restaurant', restaurantData, { auth: true }),
};
