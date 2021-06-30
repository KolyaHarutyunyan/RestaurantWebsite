import {
  ADD_CATEGORY_ITEM,
  DELETE_CATEGORY_ITEM,
  GET_CATEGORY_ITEMS,
  REORDER_CATEGORY_ITEM,
} from "./Items.types";

export const categoryItemActions = {
  get: (categoryId) => ({
    type: GET_CATEGORY_ITEMS,
    payload: categoryId,
  }),
  reorder: (categoryId, itemId, move) => ({
    type: REORDER_CATEGORY_ITEM,
    payload: { categoryId, itemId, move },
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
