import { combineReducers } from 'redux'

import { REQUEST_PENDING } from './app.types'
import { authReducer } from "../auth";
import { profileReducer } from "../profile";

const initialState = {
    isLoading: false,
};


const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_PENDING:
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
};

export const appReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    global: globalReducer,
});
