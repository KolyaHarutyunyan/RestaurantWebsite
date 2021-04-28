import { combineReducers } from "redux";
import { appTypes } from "./app.types";
import { authReducer } from "../auth";
import { profileReducer } from "../profile";
import { restaurantReducer } from "../restaurant";
import { restaurantsReducer } from "../restaurants";
import { menuReducer } from "../menu";
import { menuItemsReducer } from "../menuItems";
import { categoriesReducer } from "../categories";

const initialState = {
  isLoading: false,
  fetching: [],
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case appTypes.REQUEST_PENDING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case appTypes.REMOVE_FETCHING:
      return {
        ...state,
        fetching: [...state.fetching, action.payload],
      };
    case appTypes.APPEND_FETCHING:
      return {
        ...state,
        fetching: state.fetching.filter((i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export const appReducer = combineReducers({
  global: globalReducer,
  auth: authReducer,
  profile: profileReducer,
  restaurant: restaurantReducer,
  restaurants: restaurantsReducer,
  menu: menuReducer,
  categories: categoriesReducer,
  menuItems: menuItemsReducer,
});
