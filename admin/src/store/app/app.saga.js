import { fork } from "redux-saga/effects";
import { watchProfile } from "../profile";
import { watchRestaurant } from "../restaurant";
import { watchRestaurants } from "../restaurants";
import { watchMenuItems } from "../menuItems";
import { watchCategories } from "../categories";
import { watchMenus } from "../menus";

export const appSaga = function* startForman() {
  yield fork(watchRestaurant);
  yield fork(watchProfile);
  yield fork(watchRestaurants);
  yield fork(watchMenuItems);
  yield fork(watchCategories);
  yield fork(watchCategories);
  yield fork(watchMenus);
};