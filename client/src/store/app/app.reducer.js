import { combineReducers } from "redux";
import { profileReducer } from "../profile";
import { restaurantReducer } from "../restaurant";
import { restaurantsReducer } from "../restaurants";
import { menuItemsReducer } from "../menuItems";
import { categoriesReducer } from "../categories";
import { menusReducer } from "../menus";
import { httpErrorsReducer } from "../http_errors";
import { httpRequestsOnLoadReducer } from "../http_requests_on_load";
import { httpRequestsOnSuccessReducer } from "../http_requests_on_success";
export const appReducer = combineReducers({
  profile: profileReducer,
  restaurant: restaurantReducer,
  restaurants: restaurantsReducer,
  categories: categoriesReducer,
  menuItems: menuItemsReducer,
  menus: menusReducer,
  http_requests_on_load: httpRequestsOnLoadReducer,
  http_requests_on_success: httpRequestsOnSuccessReducer,
  http_errors: httpErrorsReducer,
});
