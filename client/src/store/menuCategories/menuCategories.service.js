import axios from "axios";

export const menuCategoriesService = {
  get: (menuId) => axios.get(`/menus/${menuId}/categories`, { auth: true }),
  addCategoryIntoMenu: (menuId, categoryId, categoryType) =>
    axios.patch(
      `/menus/${menuId}/addCategory/${categoryId}?type=${categoryType.toUpperCase()}`,
      null,
      {
        auth: true,
      }
    ),
  reorder: (categoryId, move) =>
    axios.patch(`/categories/${categoryId}/reorder`, move, { auth: true }),
  delete: (menuId, categoryId, categoryType) =>
    axios.patch(
      `/menus/${menuId}/removeCategory/${categoryId}?type=${categoryType.toUpperCase()}`,
      null,
      {
        auth: true,
      }
    ),
};
