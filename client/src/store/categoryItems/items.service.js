import axios from "axios";

export const categoryItemsService = {
  get: (categoryId) =>
    axios.get(`/categories/${categoryId}/items`, { auth: true }),
  add: ({ categoryId, itemId }) =>
    axios.patch(`/categories/${categoryId}/addItem/${itemId}`, null, {
      auth: true,
    }),
  reorder: (data) =>
    axios.patch(`/categories/${data.categoryId}/reorder`, data.move, { auth: true }),
  remove: ({ categoryId, itemId }) =>
    axios.patch(`/categories/${categoryId}/removeItem/${itemId}`, null, {
      auth: true,
    }),
};
