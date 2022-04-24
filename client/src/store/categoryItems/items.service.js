import axios from "axios";

export const categoryItemsService = {
  get: (categoryId) =>
    axios.get(`/categories/${categoryId}/items`, { auth: true }),
  add: ({ menuId, categoryId, itemId, categoryType }) =>
    axios.post(`/menus/${menuId}/categories/${categoryId}/items`, {'itemId':itemId}, {
      auth: true, params:{ type: categoryType }
    }),
  reorder: (data) =>
    axios.patch(`/menus/${data.menuId}/categories/${data.categoryId}/items/reorder`, data.move, { auth: true, params:{ type: data.categType} }),


    remove: ({ menuId, categoryId, itemId, type}) =>
    axios.delete(`/menus/${menuId}/categories/${categoryId}/items/${itemId}`, {
      auth: true, params:{ type: type }
    }),
};
