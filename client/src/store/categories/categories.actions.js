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
  createCategory: (data, menuId, categoryType) => ({
    type: CREATE_CATEGORY,
    payload: { data, menuId, categoryType },
  }),
  removeCategory: (menuId, categoryId, categoryType) => ({
    type: DELETE_CATEGORY,
    payload: { menuId, categoryId, categoryType },
  }),
};
