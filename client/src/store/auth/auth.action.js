import { authTypes } from '.'

export const authActions = {
  signUp: payload => ({type: authTypes.SIGN_UP , payload}),
  signIn: payload => ({type: authTypes.SIGN_IN , payload}),
  signOut: () => ({type: authTypes.SIGN_OUT }),
  cleanError: () => ({type: authTypes.CLEAN_ERROR }),
  checkEmail: payload => ({type: authTypes.CHECK_EMAIL , payload}),
  checkVerifyKey: payload => ({type: authTypes.CHECK_VERIFY_KEY , payload}),
  checkResetPass: payload => ({type: authTypes.RESET_PASS , payload}),
  createRestaurant: payload => ({type: authTypes.CREATE_RESTAURANT , payload}),
}