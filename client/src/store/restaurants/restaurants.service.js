import axios from "axios";

export const restaurantsService = {
  getResturants: () => axios.get(`/restaurant/byToken`, { auth: true }),
  editRestaurant: (restaurant) =>
    axios.put(`/restaurant/${restaurant._id}`, { data: { ...restaurant } }),
  deleteRestaurant: (restaurantId) => axios.put(`/restaurant/${restaurantId}`),
  createRestaurant: (restaurantData) =>
    axios.post(`/restaurant`, restaurantData, { auth: true }),
  addRestaurantImage: (file) =>
    axios.post(`/restaurant/image`, file, { auth: true, headers: {} }),
};
