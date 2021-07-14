import { GET_PREVIEW_MENU_DATA_SUCCESS } from "./previewData.types";
const initialState = {};

export const previewDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PREVIEW_MENU_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
