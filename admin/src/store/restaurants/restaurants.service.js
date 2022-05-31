import axios from "axios";

export const restaurantsService = {
  getResturants: () => axios.get(`/owners`, { auth: true }),

  editRestaurant: (restaurant) =>
    axios.put(`/restaurant/${restaurant._id}`, { data: { ...restaurant } }),
  deleteRestaurant: (restaurantId) => axios.put(`/restaurant/${restaurantId}`),
};
