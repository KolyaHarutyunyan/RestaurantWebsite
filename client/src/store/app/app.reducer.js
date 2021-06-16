import { combineReducers } from "redux";
import { profileReducer } from "../profile";
import { businessesReducer } from "../businesses";
import { itemsReducer } from "../items";
import { categoriesReducer } from "../categories";
import { menusReducer } from "../menus";
import { httpRequestsOnErrorsReducer } from "../http_requests_on_errors";
import { httpRequestsOnLoadReducer } from "../http_requests_on_load";
import { httpRequestsOnSuccessReducer } from "../http_requests_on_success";

export const appReducer = combineReducers({
  profile: profileReducer,
  businesses: businessesReducer,
  categories: categoriesReducer,
  items: itemsReducer,
  menus: menusReducer,
  httpOnLoad: httpRequestsOnLoadReducer,
  httpOnSuccess: httpRequestsOnSuccessReducer,
  httpOnError: httpRequestsOnErrorsReducer,
});
