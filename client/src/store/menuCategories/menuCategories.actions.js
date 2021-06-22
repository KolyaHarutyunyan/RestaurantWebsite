import {
  GET_MENU_CATEGORIES,
  ADD_MENU_CATEGORY,
  DELETE_MENU_CATEGORY,
} from "./menuCategories.types";

export const menuCategoriesActions = {
  get: (menuId) => ({
    type: GET_MENU_CATEGORIES,
    payload: menuId,
  }),
  addCategory: (menuId, categoryId, categoryType) => ({
    type: ADD_MENU_CATEGORY,
    payload: { menuId, categoryId, categoryType },
  }),
  delete: (menuId, categoryId, categoryType) => ({
    type: DELETE_MENU_CATEGORY,
    payload: { menuId, categoryId, categoryType },
  }),
};
