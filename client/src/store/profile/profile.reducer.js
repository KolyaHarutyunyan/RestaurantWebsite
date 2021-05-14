import {
  PROFILE_SIGN_IN_SUCCESS,
  PROFILE_SIGN_OUT,
  GET_USER_INFO_SUCCESS,
  PROFILE_SIGN_UP
} from "./profile.types";

const initialState = null;

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_SIGN_IN_SUCCESS:
    case GET_USER_INFO_SUCCESS:
      return action.payload;
    case PROFILE_SIGN_OUT:
      return null;
    case PROFILE_SIGN_UP:
      return action.payload;
    default:
      return state;
  }
};
