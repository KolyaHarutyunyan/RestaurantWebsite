import { LOG_IN, LOG_OUT, } from './auth.types';
import { CLEAR_ERROR } from "../app";

export const logIn = (user) => {
    return {
        type: LOG_IN,
        payload: user,
    };
};

export const logOut = () => {
    console.log('wwww')
    return {
        type: LOG_OUT,
    };
};

export const clearError = () => {
    return {
        type: CLEAR_ERROR,
    };
};





