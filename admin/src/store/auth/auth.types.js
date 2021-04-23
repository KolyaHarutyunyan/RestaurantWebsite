export const authTypes = {
  signIn: "AUTH_TYPE_SIGN_IN",
  signUp: "AUTH_TYPE_SIGN_UP",
  signOut: "AUTH_TYPE_SIGN_OUT",

  checkEmail: "AUTH_TYPE_CHECK_EMAIL",
  checkVerifyKey: "AUTH_TYPE_CHECK_VERIFY_KEY",
  checkIsAuthed: "AUTH_TYPE_IS_AUTHED",

  resetPassword: "AUTH_TYPE_RESET_PASSWORD",
  cleanError: "AUTH_TYPE_CLEAN_ERROR",
};
export const authReducerTypes = {
  setError: "AUTH_REDUCER_TYPE_SET_ERROR",
  cleanError: "AUTH_REDUCER_TYPE_CLEAN_ERROR",
  setIsAuthed: "AUTH_REDUCER_TYPE_SET_IS_AUTHED",
  cleanIsAuthed: "AUTH_REDUCER_TYPE_CLEAN_IS_AUTHED",
  changeKeyType: "AUTH_REDUCER_TYPE_CHANGE_KEY_TYPE",
};
