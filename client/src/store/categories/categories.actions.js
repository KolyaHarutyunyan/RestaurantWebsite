import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  GET_CATEGORIES,
} from "./categories.types";

export const categoriesActions = {
  get: (businessId) => ({
    type: GET_CATEGORIES,
    payload: businessId,
  }),
  createCategory: (data, menuId = false, categoryType) => ({
    type: CREATE_CATEGORY,
    payload: { data, menuId, categoryType },
  }),
  editCategory: (data, menuId, categoryId) => ({
    type: EDIT_CATEGORY,
    payload: { data, menuId, categoryId },
  }),
  deleteCategory: (menuId, categoryId, categoryType) => ({
    type: DELETE_CATEGORY,
    payload: { menuId, categoryId, categoryType },
  }),
};
