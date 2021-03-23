import * as authTypes from './auth.types'

export const signUp = ( user ) => ( {
  type: authTypes.SIGNUP,
  payload: user,
} )

export const signIn = ( user ) => ( {
  type: authTypes.SIGNIN,
  payload: user,
} )

export const signOut = () => ( {
  type: authTypes.SIGNOUT,
} )

export const checkAuths = accessToken => ( {
  type: authTypes.CHECK_AUTH,
  payload: accessToken,
} )
