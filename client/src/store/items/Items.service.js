import axios from "axios";

export const itemsService = {
  create: (data) => axios.post("/items", data, { auth: true }),
  edit: (data) => axios.patch(`/items/${data.id}`),
  get: (businessId) => axios.get(`/items/business/${businessId}`),
  delete: (itemId) => axios.delete(`/categories/items/${itemId}`),
};
