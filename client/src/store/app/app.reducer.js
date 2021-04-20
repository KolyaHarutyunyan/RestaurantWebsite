import { combineReducers } from 'redux'
import { appTypes } from './app.types'
import { authReducer } from "../auth"
import { profileReducer } from "../profile"
import { restaurantReducer } from "../restaurant"
import { menuReducer } from "../menu";
import { menuItemsReducer } from "../menuItems";
import { categoriesReducer } from "../categories";

const initialState = {
    isLoading: false,
};


const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case appTypes.REQUEST_PENDING:
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
    restaurant: restaurantReducer,
    menu:menuReducer,
    categories:categoriesReducer,
    menuItems:menuItemsReducer,
    
});
