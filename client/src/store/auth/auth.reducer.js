import { authTypes } from '.'


const initialState = {
  error: false,
  isAuthenticated: false,
  key: false
};




export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case [authTypes.SIGN_IN_SUCCESS]:
      return ({...state, isAuthenticated: true})
    case [authTypes.SIGN_UP_SUCCESS]:
      return ({...state, isAuthenticated: true})
    case [authTypes.SIGN_OUT_SUCCESS]:
      return ({...state, isAuthenticated: false})
    case [authTypes.CHECK_EMAIL_SUCCESS]:
      return ({...state, key: action.payload.key})
    case [authTypes.CHECK_VERIFY_KEY_SUCCESS]:
      return ({...state, key: action.payload.key})
    case [authTypes.RESET_PASS_SUCCESS]:
      return ({...state, isAuthenticated: true})
    case [authTypes.SIGN_ERROR]:
      return ({...state, isAuthenticated: true})
    case [authTypes.CLEAN_ERROR_SUCCESS]:
      return ({...state, error: false})
    default:
      return state
  }

}
