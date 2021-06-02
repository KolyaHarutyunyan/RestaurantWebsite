import { fork } from "redux-saga/effects";
import { watchProfile } from "../profile";
import { watchBusinesses } from "../businesses";
import { watchMenuItems } from "../menuItems";
import { watchCategories } from "../categories";
import { watchMenus } from "../menus";

export const appSaga = function* startForman() {
  yield fork(watchProfile);
  yield fork(watchBusinesses);
  yield fork(watchMenuItems);
  yield fork(watchCategories);
  yield fork(watchCategories);
  yield fork(watchMenus);
};
