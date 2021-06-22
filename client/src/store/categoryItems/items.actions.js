import {
  ADD_CATEGORY_ITEM,
  DELETE_CATEGORY_ITEM,
  GET_CATEGORY_ITEMS,
} from "./Items.types";

export const categoryItemActions = {
  get: (categoryId) => ({
    type: GET_CATEGORY_ITEMS,
    payload: categoryId,
  }),
  add: (categoryId, itemId) => ({
    type: ADD_CATEGORY_ITEM,
    payload: {
      itemId,
      categoryId,
    },
  }),
  delete: (categoryId, itemId) => ({
    type: DELETE_CATEGORY_ITEM,
    payload: { categoryId, itemId },
  }),
};