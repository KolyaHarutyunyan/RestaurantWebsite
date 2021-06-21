import axios from "axios";

export const itemsService = {
  create: (data) => axios.post("/items", data, { auth: true }),
  edit: (data) => axios.patch(`/items/${data.id}`),
  get: (categoryId) => axios.get(`/categories/${categoryId}/items`),
  delete: (itemId) => axios.delete(`/categories/items/${itemId}`),
  addToCategory: (categoryId, itemId) =>
    axios.patch(`/categories/${categoryId}/addItem/${itemId}`, null, {
      auth: true,
    }),
  removeFromCategory: (categoryId, itemId) =>
    axios.patch(`/categories/${categoryId}/addItem/${itemId}`, null, {
      auth: true,
    }),
};
