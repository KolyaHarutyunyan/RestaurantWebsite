import {
  CREATE_ITEM,
  UPDATE_ITEM,
  GET_ITEMS,
  DELETE_ITEM,
} from "./items.types";

export const itemActions = {
  get: (businessId) => ({
    type: GET_ITEMS,
    payload: businessId,
  }),
  createProduct: (data, menuId, categoryId, categoryType) => ({
    type: CREATE_ITEM,
    payload: { data, menuId, categoryId, categoryType },
  }),
  editProduct: (info, id, menuId) => ({
    type: UPDATE_ITEM,
    payload: { info, id, menuId },
  }),
  deleteProduct: (itemId, menuId) => ({
    type: DELETE_ITEM,
    payload: { itemId, menuId },
  }),
};
