import { fork } from "redux-saga/effects";
import { watchProfile } from "../profile";
import { watchRestaurant } from "../restaurant";

export const appSaga = function* startForman() {
  yield fork(watchProfile);
  yield fork(watchRestaurant);
};
