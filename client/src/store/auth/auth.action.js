import * as authTypes from './auth.types'

export const signUp = (user) => {
    return {
        type: authTypes.SIGNUP,
        user,
    };
};

export const signIn = (user) => {
    return {
        type: authTypes.SIGNIN,
        user,
    };
};

export const signOut = () => {
    return {
        type: authTypes.SIGNOUT,
        user: {},
    };
};

export const checkAuth = (accessToken) => {
    return {
        type: authTypes.CHECK_AUTH,
        accessToken,
    };
};
