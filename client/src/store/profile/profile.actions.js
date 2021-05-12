import {
  PROFILE_SIGN_IN,
  PROFILE_SIGN_OUT,
  GET_USER_INFO,
} from "./profile.types";

export const profileActions = {
  signIn: (payload) => ({ type: PROFILE_SIGN_IN, payload }),
  signOut: () => ({ type: PROFILE_SIGN_OUT }),
  getUserInfo: () => ({ type: GET_USER_INFO }),
};
