import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  GET_CATEGORIES,
  SWITCH_CATEGORY_STATUS,
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
  editCategory: () => ({
    type: "",
    payload: "",
  }),
  deleteCategory: (menuId, categoryId, categoryType) => ({
    type: DELETE_CATEGORY,
    payload: { menuId, categoryId, categoryType },
  }),
  switchCategory: (menuId, categoryId) => ({
    type: SWITCH_CATEGORY_STATUS,
    payload: { menuId, categoryId },
  }),
};
