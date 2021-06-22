import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  GET_CATEGORIES,
  ADD_CATEGORY_INTO_MENU,
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
  delete: (menuId, categoryId, categoryType) => ({
    type: DELETE_CATEGORY,
    payload: { menuId, categoryId, categoryType },
  }),
};
