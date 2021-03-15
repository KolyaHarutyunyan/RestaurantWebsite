import * as types from './auth.types';

const initialState = {
  user: {},
  isLoading: false,
  error: false,
  isAuthenticated: false,
  accessToken: '',
};

let Actions = {
  [ types.SIGNUP_SUCCESS ]: ( state, action ) => ( {
    ...state,
    accessToken: action.payload.accessToken,
    error: false,
    isAuthenticated: true,
  } )

}

export const authReducer = ( state = initialState, action ) => {
  return Actions[ action.type ](state, action) || state
  // switch (action.type) {
  //     case types.SIGNUP_SUCCESS:
  //         return {
  //             ...state,
  //             accessToken: action.payload.accessToken,
  //             error: false,
  //             isAuthenticated: true,
  //         };
  //     case types.SIGNUP_ERROR:
  //         return { ...state, error: action.payload.message };
  //     case types.SIGNIN_SUCCESS:
  //         return {
  //             ...state,
  //             accessToken: action.payload.accessToken,
  //             error: false,
  //             isAuthenticated: true,
  //         };
  //     case types.SIGNIN_ERROR:
  //         return { ...state, error: action.payload.message };
  //     case types.SIGNOUT_SUCCESS:
  //         return { ...state, user: {}, accessToken: '', isAuthenticated: false, error: false };
  //     case types.SIGNOUT_ERROR:
  //         return { ...state, error: action.payload.message };
  //     case types.CHECK_AUTH_SUCCESS:
  //         return {
  //             ...state,
  //             user: action.payload.user,
  //             accessToken: action.payload.accessToken,
  //             error: false,
  //             isAuthenticated: true,
  //         };
  //     case types.CHECK_AUTH_ERROR:
  //         return { ...state, error: action.payload.message };
  //     default:
  //         return state;
  // }
};
