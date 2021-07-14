import axios from "axios";

export const itemsService = {
  create: (data) => axios.post("/items", data, { auth: true }),
  edit: (data) => axios.patch(`/items/${data.id}`, data, { auth: true }),
  get: (businessId) =>
    axios.get(`/items/business/${businessId}`, { auth: true }),
  delete: (itemId) =>
    axios.delete(`/categories/items/${itemId}`, { auth: true }),
};
