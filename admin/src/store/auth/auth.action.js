import { authTypes } from "./auth.types";

export const authActions = {
  signIn: (payload) => ({ type: authTypes.signIn, payload }),
  signUp: (payload) => ({ type: authTypes.signUp, payload }),
  signOut: (payload) => ({ type: authTypes.signOut, payload: {} }),

  checkEmail: (payload) => ({ type: authTypes.checkEmail, payload }),
  checkVerifyKey: (payload) => ({ type: authTypes.checkVerifyKey, payload }),
  checkIsAuth: () => ({ type: authTypes.checkIsAuthed }),

  resetPassword: (payload) => ({ type: authTypes.resetPassword, payload }),
  cleanError: () => ({ type: authTypes.cleanError }),
};
