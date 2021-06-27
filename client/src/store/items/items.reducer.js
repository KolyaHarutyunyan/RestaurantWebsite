import {
  CREATE_ITEM_SUCCESS,
  UPDATE_ITEM_SUCCESS,
  GET_ITEMS_SUCCESS,
  DELETE_ITEM_SUCCESS,
} from "./items.types";

const initialState = [];

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return action.payload;
    case CREATE_ITEM_SUCCESS:
      return [...state, action.payload];
    case UPDATE_ITEM_SUCCESS:
      return state.map((item) => (item.id === payload.id ? payload : item));
    case DELETE_ITEM_SUCCESS:
      return state.filter((item) => (item.id === payload.id ? payload : item));
    default:
      return state;
  }
};
