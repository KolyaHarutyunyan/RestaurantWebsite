import {
  GET_MY_BUSINESS_SUCCESS,
  CREATE_BUSINESS_SUCCESS,
  EDIT_BUSINESS_SUCCESS,
  DELETE_BUSINESS_SUCCESS,
} from "./businesses.types";

const initialState = null;

export const businessesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_BUSINESS_SUCCESS:
      return action.payload;
    case CREATE_BUSINESS_SUCCESS:
      return action.payload;
    case EDIT_BUSINESS_SUCCESS:
      return action.payload;
    case DELETE_BUSINESS_SUCCESS:
      return state.filter((business) => business._id !== action.payload);
    default:
      return state;
  }
};
