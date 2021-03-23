import * as authTypes from './auth.types'

export const signUp = (user) => {
    return {
        type: authTypes.SIGNUP,
        payload: user,
    };
};

export const signIn = (user) => {
    return {
        type: authTypes.SIGNIN,
        payload: user,
    };
};

export const signOut = () => {
    return {
        type: authTypes.SIGNOUT,
    };
};

export const checkAuth = (accessToken, username) => {
    return {
        type: authTypes.CHECK_AUTH,
        payload: {
            username, accessToken
        },
    };
};


