import { combineReducers } from "redux";
import { profileReducer } from "../profile";
import { businessesReducer } from "../businesses";
import { itemsReducer } from "../items";
import { categoriesReducer } from "../categories";
import { menuCategoriesReducer } from "../menuCategories";
import { menusReducer } from "../menus";
import { categoryItemsReducer } from "../categoryItems";
import { previewDataReducer } from "../previewData";
import { httpRequestsOnErrorsReducer } from "../http_requests_on_errors";
import { httpRequestsOnLoadReducer } from "../http_requests_on_load";
import { httpRequestsOnSuccessReducer } from "../http_requests_on_success";

export const appReducer = combineReducers({
  profile: profileReducer,
  businesses: businessesReducer,
  categories: categoriesReducer,
  menuCategories: menuCategoriesReducer,
  items: itemsReducer,
  categoryItems: categoryItemsReducer,
  previewData: previewDataReducer,
  menus: menusReducer,
  httpOnLoad: httpRequestsOnLoadReducer,
  httpOnSuccess: httpRequestsOnSuccessReducer,
  httpOnError: httpRequestsOnErrorsReducer,
});
