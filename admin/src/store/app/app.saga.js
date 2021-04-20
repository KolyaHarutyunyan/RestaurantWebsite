import { fork } from "redux-saga/effects";
import { watchAuth } from "../auth";
import { watchRestaurants } from "../restaurants/restaurants.saga";

/** Combined Sagas */
export const appSaga = function* startForman() {
  yield fork(watchAuth);
  yield fork(watchRestaurants);
};
