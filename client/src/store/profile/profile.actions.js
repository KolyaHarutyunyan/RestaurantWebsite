import {
  PROFILE_SIGN_IN,
  PROFILE_SIGN_OUT,
  PROFILE_SIGN_UP,
  GET_PROFILE_INFO,
  UPDATE_PROFILE_PASSWORD,
  DELETE_PROFILE,
  UPDATE_PROFILE_INFO,
  RESET_PASSWORD,
} from "./profile.types";

export const profileActions = {
  signIn: (payload) => ({ type: PROFILE_SIGN_IN, payload }),
  signUp: (payload) => ({ type: PROFILE_SIGN_UP, payload }),
  signOut: () => ({ type: PROFILE_SIGN_OUT }),
  getUserInfo: () => ({ type: GET_PROFILE_INFO }),
  updatePassword: (payload) => ({ type: UPDATE_PROFILE_PASSWORD, payload }),
  deleteProfile: () => ({ type: DELETE_PROFILE }),
  updateUserInfo: (payload) => ({ type: UPDATE_PROFILE_INFO, payload }),
  resetPassword: (data, token) => ({
    type: RESET_PASSWORD,
    payload: { data, token },
  }),
};
