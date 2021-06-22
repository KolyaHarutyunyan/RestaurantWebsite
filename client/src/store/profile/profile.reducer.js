import {
  PROFILE_SIGN_IN_SUCCESS,
  PROFILE_SIGN_OUT,
  GET_PROFILE_INFO_SUCCESS,
  PROFILE_SIGN_UP_SUCCESS,
} from "./profile.types";

const initialState = null;

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_SIGN_IN_SUCCESS:
    case GET_PROFILE_INFO_SUCCESS:
      return action.payload;
    case PROFILE_SIGN_OUT:
      return null;
    case PROFILE_SIGN_UP_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
