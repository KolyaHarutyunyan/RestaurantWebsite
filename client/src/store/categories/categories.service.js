import axios from "axios";

export const categoriesService = {
  get: (menuId) => axios.get(`/menus/${menuId}/categories`, { auth: true }),
  create: (data) => axios.post("/categories", data, { auth: true }),
  addCategoryIntoMenu: (menuId, categoryId, categoryType) =>
    axios.patch(
      `/menus/${menuId}/addCategory/${categoryId}?type=${categoryType.toUpperCase()}`,
      null,
      {
        auth: true,
      }
    ),
  delete: (categoryId) =>
    axios.delete(`/menus/categories/${categoryId}`, {
      auth: true,
    }),
};
