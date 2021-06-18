import {
  GET_MENU_CATEGORIES,
  DELETE_MENU_CATEGORY,
} from "./menuCategories.types";

export const menuCategoriesActions = {
  get: (menuId) => ({
    type: GET_MENU_CATEGORIES,
    payload: menuId,
  }),
  delete: (menuId, categoryId, categoryType) => ({
    type: DELETE_MENU_CATEGORY,
    payload: { menuId, categoryId, categoryType },
  }),
};
