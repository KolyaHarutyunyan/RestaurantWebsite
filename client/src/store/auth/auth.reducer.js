import * as authTypes  from './auth.types'

import { AuthScreenTypes } from "@eachbase/constants";

const initialState = {
  isLoading: false,
  error: false,
  isAuthenticated: false,
  accessToken: '',
  activeScreen: {
    type: AuthScreenTypes.signIn,
    props: {type:"restaurant"}
  }
};

console.log(authTypes)

export const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case authTypes.CHANGE_AUTH_TYPE:
      console.log("auth reducer", action)
      return {
        ...state,
        activeScreen: {
          type:action.payload.type,
          props: action.payload.props || {}
        }
      };
    // case types.SIGNUP_ERROR:
    //   return {...state, error: action.payload.message};
    // case types.SIGNIN_SUCCESS:
    //   return {
    //     ...state,
    //     accessToken: action.payload.accessToken,
    //     error: false,
    //     isAuthenticated: true,
    //   };
    // case types.SIGNIN_ERROR:
    //   return {...state, error: action.payload.message};
    // case types.SIGNOUT_SUCCESS:
    //   return {...state, user: {}, accessToken: '', isAuthenticated: false, error: false};
    // case types.SIGNOUT_ERROR:
    //   return {...state, error: action.payload.message};
    // case types.CHECK_AUTH_SUCCESS:
    //   return {
    //     ...state,
    //     user: action.payload.user,
    //     accessToken: action.payload.accessToken,
    //     error: false,
    //     isAuthenticated: true,
    //   };
    // case types.CHECK_AUTH_ERROR:
    //   return {...state, error: action.payload.message};
    default:
      return state;
  }
};
