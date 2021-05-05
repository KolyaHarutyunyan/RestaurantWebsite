import { PROFILE_SIGN_IN, PROFILE_SIGN_OUT } from "./profile.types";

export const profileActions = {
  signIn: (payload) => ({ type: PROFILE_SIGN_IN, payload }),
  signOut: () => ({ type: PROFILE_SIGN_OUT }),
};
