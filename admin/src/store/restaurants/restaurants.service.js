import axios from "axios";

export const restaurantsService = {
  /* [implement] */
  getResturants: () => axios.get(`/restaurant`, { auth: true }),
};
