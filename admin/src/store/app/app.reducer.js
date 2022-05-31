import { combineReducers } from "redux";
import { appTypes } from "./app.types";
import { profileReducer } from "../profile";
import { restaurantReducer } from "../restaurant";
import { restaurantsReducer } from "../restaurants";
import { menuItemsReducer } from "../menuItems";
import { categoriesReducer } from "../categories";
import { menusReducer } from "../menus";
import { ownersReducer } from "../owners";
import { httpRequestsOnLoadReducer } from "../http_requests_on_load";
import { httpRequestsOnSuccessReducer } from "../http_requests_on_success";
import { httpRequestsOnErrorsReducer } from "../http_requests_on_errors";


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
        fetching: state.fetching.filter((i) => i !== action.payload),
      };
    case appTypes.APPEND_FETCHING:
      return {
        ...state,
        fetching: [...state.fetching, action.payload],
      };
    default:
      return state;
  }
};

export const appReducer = combineReducers({
  global: globalReducer,
  profile: profileReducer,
  restaurant: restaurantReducer,
  restaurants: restaurantsReducer,
  categories: categoriesReducer,
  menuItems: menuItemsReducer,
  menus: menusReducer,
  owners: ownersReducer,

  httpOnLoad: httpRequestsOnLoadReducer,
  httpOnSuccess: httpRequestsOnSuccessReducer,
  httpOnError: httpRequestsOnErrorsReducer,
});
