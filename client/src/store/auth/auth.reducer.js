import * as authTypes from './auth.types'

import { AuthScreenTypes } from "@eachbase/constants";
import { getLocalFileName } from "next/dist/build/webpack/plugins/webpack-conformance-plugin/utils/file-utils";

const initialState = {

  error: false,
  isAuthenticated: false,


};

console.log(authTypes)

export const authReducer = (state = initialState, action) => {

  switch (action.type) {

    case authTypes.SIGN_ERROR:
      return {isAuthenticated: false, error: action.payload.message};
    case authTypes.SIGN_ERROR_CLEAN:
      console.log(action)

      return {isAuthenticated: false, error: false};
    case authTypes.SIGN_IN  : {
      console.log(action)

      return {
        error: false,
        isAuthenticated: true,
      };
    }
    case authTypes.SIGN_UP: {
      console.log(action)

      return {
        error: false,
        isAuthenticated: true,
      };
    }
    case authTypes.SIGN_OUT:
      return {
        error: false,
        isAuthenticated: false,
      };
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
