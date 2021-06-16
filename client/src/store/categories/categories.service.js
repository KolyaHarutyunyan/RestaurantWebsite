import axios from "axios";

export const categoriesService = {
  get: () => axios.get("/categories", { auth: true }),
  create: () => axios.post("/categories", { auth: true }),
  delete: (menuId, categoryId) =>
    axios.patch(`/menus/${menuId}/removeCategory/${categoryId}`, {
      auth: true,
    }),
};
