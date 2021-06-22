import {
  ADD_CATEGORY_ITEM_SUCCESS,
  DELETE_CATEGORY_ITEM_SUCCESS,
  GET_CATEGORY_ITEMS_SUCCESS,
} from "./Items.types";

const initialState = [];

export const categoryItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY_ITEM_SUCCESS:
      return action.payload.items;
    case DELETE_CATEGORY_ITEM_SUCCESS:
      return action.payload.items;
    case GET_CATEGORY_ITEMS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
