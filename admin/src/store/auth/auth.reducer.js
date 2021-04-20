import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAIL, CLEAR_ERROR } from './auth.types';

const initialState = {
    isAuthenticated: false,
    loginErr:null,
    loader:null,
    admin:null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case  LOG_IN:
            return {...state, loader:true}

        case LOG_IN_SUCCESS:
            return {...state,
                accessToken:  localStorage.getItem('access-token'),
                admin: JSON.parse(localStorage.getItem('userInfo'))
            };

        case LOG_IN_FAIL:
            return {...state, loginErr: action.payload, loader:false};

        case CLEAR_ERROR:
            return {...state, loginErr:[ ] };

        default:
            return state;
    }
};
