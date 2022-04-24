import axios from "axios";

export const menuCategoriesService = {
  get: (menuId) => axios.get(`/menus/${menuId}`, { auth: true }),
  addCategoryIntoMenu: (menuId, categoryId, categoryType) =>
    axios.patch(
      `/menus/${menuId}/addCategory/${categoryId}?type=${categoryType.toUpperCase()}`,
      null,
      {
        auth: true,
      }
    ),
  reorder: (menuId, move, categoryType) =>
    axios.patch(`/menus/${menuId}/categories/reorder`, move, { auth: true, params:{type:categoryType === 'food' ? 'FOOD' : 'DRINK'} }),


  delete: (menuId, categoryId, categoryType) =>
    axios.patch(
      `/menus/${menuId}/removeCategory/${categoryId}?type=${categoryType.toUpperCase()}`,
      null,
      {
        auth: true,
      }
    ),
};
