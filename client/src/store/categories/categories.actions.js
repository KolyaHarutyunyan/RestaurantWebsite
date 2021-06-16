import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  GET_CATEGORIES,
} from "./categories.types";

export const categoriesActions = {
  getCategories: (menuId) => ({
    type: GET_CATEGORIES,
    payload: menuId,
  }),
  createCategory: (data) => ({
    type: CREATE_CATEGORY,
    payload: data,
  }),
  removeCategory: (menuId, categoryId) => ({
    type: DELETE_CATEGORY,
    payload: { menuId, categoryId },
  }),
};
