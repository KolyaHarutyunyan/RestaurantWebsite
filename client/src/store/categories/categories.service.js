import axios from "axios";

export const categoriesService = {
  get: (businessId) =>
    axios.get(`/categories/business/${businessId}`, { auth: true }),
  create: (data) => axios.post("/categories", data, { auth: true }),
  delete: (categoryId) =>
    axios.delete(`/menus/categories/${categoryId}`, {
      auth: true,
    }),
};
