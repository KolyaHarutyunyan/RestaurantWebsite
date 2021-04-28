import { fork } from "redux-saga/effects";
import { watchAuth } from "../auth";
import { watchProfile } from "../profile";
import { watchRestaurant } from "../restaurant";
import { watchRestaurants } from "../restaurants";

export const appSaga = function* startForman() {
  yield fork(watchAuth);
  yield fork(watchProfile);
  yield fork(watchRestaurant);
  yield fork(watchRestaurants);
};
