import {
  CREATE_ITEM,
  UPDATE_ITEM,
  GET_ITEMS,
  DELETE_ITEM,
} from "./items.types";

export const itemActions = {
  get: (categoryId) => ({
    type: GET_ITEMS,
    payload: categoryId,
  }),
  create: (data, categoryId, images) => ({
    type: CREATE_ITEM,
    payload: {
      data,
      categoryId,
      images,
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
