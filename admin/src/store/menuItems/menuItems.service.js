import axios from "axios";

export const menuItemsService = {
  getItems: () => axios.get(`/`),
};
