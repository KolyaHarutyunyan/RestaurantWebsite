import axios from "axios";

export const categoriesService = {
  get: (businessId) => axios.get(`/categories/business/${businessId}`, { auth: true }),



  create: (data, menuId) => axios.post(`/menus/${menuId}/categories`, data, { auth: true }),



  delete: (categoryId, menuId, categoryType) => axios.delete(`/menus/${menuId}/categories/${categoryId}`, {auth: true, params:{ type: categoryType === 'food' ? 'FOOD' : 'DRINK'}}),
};
