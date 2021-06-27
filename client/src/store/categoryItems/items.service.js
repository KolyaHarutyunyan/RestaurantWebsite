import axios from "axios";

export const categoryItemsService = {
  get: (categoryId) =>
    axios.get(`/categories/${categoryId}/items`, { auth: true }),
  add: ({ categoryId, itemId }) =>
    axios.patch(`/categories/${categoryId}/addItem/${itemId}`, null, {
      auth: true,
    }),
  reorder: (categoryId, move) =>
    axios.patch(`/categories/${categoryId}/reorder`, move, { auth: true }),
  remove: ({ categoryId, itemId }) =>
    axios.patch(`/categories/${categoryId}/removeItem/${itemId}`, null, {
      auth: true,
    }),
};
