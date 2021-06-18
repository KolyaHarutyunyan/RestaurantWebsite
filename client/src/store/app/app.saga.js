import { fork } from "redux-saga/effects";
import { watchProfile } from "../profile";
import { watchBusinesses } from "../businesses";
import { watchItems } from "../items";
import { watchCategories } from "../categories";
import { watchMenuCategories } from "../menuCategories";
import { watchMenus } from "../menus";

export const appSaga = function* startForman() {
  yield fork(watchProfile);
  yield fork(watchBusinesses);
  yield fork(watchItems);
  yield fork(watchCategories);
  yield fork(watchMenuCategories);
  yield fork(watchMenus);
};
