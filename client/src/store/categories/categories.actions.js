import { GET_CATEGORIES } from "./categories.types";

export const categoriesActions = {
  getCategories: () => ({
    type: GET_CATEGORIES,
  }),
};
