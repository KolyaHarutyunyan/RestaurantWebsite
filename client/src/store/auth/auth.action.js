import * as authTypes  from './auth.types'

export const signUp = ( user ) => ( {
  type: authTypes.SIGN_UP,
  payload: user,
} )

export const signIn = ( user ) => ( {
  type: authTypes.SIGN_IN,
  payload: user,
} )

export const signOut = () => ( {
  type: authTypes.SIGN_OUT,
} )

export const cleanError = () => ( {
  type: authTypes.SIGN_ERROR_CLEAN,
} )

