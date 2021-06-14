import Axios from "axios";

export const categoriesService = {
  getItems: () => Axios.get("/category/getCategories", { auth: true }),
};
