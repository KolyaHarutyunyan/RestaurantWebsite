import axios from "axios";

export const categoriesService = {
  get: (businessId) =>
    axios.get(`/categories/business/${businessId}`, { auth: true }),

  create: (data, menuId) =>
    axios.post(`/menus/${menuId}/categories`, data, { auth: true }),

  edit: ({ data, menuId, categoryId }) =>
    axios.patch(`/menus/${menuId}/categories/${categoryId}`, data, {
      auth: true,
    }),

  delete: ({ menuId, categoryId, categoryType }) =>
    axios.delete(`/menus/${menuId}/categories/${categoryId}`, {
      auth: true,
      params: { type: categoryType },
    }),

  reorder: ({ menuId, categType, move }) =>
    axios.patch(`/menus/${menuId}/categories/reorder`, move, {
      auth: true,
      params: { type: categType },
    }),
};
