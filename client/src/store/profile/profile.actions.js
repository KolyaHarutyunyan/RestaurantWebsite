import {
  PROFILE_SIGN_IN,
  PROFILE_SIGN_OUT,
  GET_PROFILE_INFO,
  UPDATE_PROFILE_PASSWORD,
} from "./profile.types";

export const profileActions = {
  signIn: (payload) => ({ type: PROFILE_SIGN_IN, payload }),
  signUp: (payload) => ({ type: PROFILE_SIGN_UP, payload }),
  signOut: () => ({ type: PROFILE_SIGN_OUT }),
  getUserInfo: () => ({ type: GET_PROFILE_INFO }),
  updatePassword: (payload) => ({ type: UPDATE_PROFILE_PASSWORD, payload }),
};
