import {
  CREATE_ITEM,
  UPDATE_ITEM,
  GET_ITEMS,
  DELETE_ITEM,
} from "./_items.types";

export const itemActions = {
  get: (categoryId) => ({
    type: GET_ITEMS,
    payload: categoryId,
  }),
  create: (categoryId, data) => ({
    type: CREATE_ITEM,
    payload: {
      categoryId,
      data,
    },
  }),
  update: (data) => ({
    type: UPDATE_ITEM,
    payload: data,
  }),
  delete: (categoryId, itemId) => ({
    type: DELETE_ITEM,
    payload: { categoryId, itemId },
  }),
};
