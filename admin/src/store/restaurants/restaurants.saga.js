import { call, put, takeLatest } from "redux-saga/effects";
import { restaurantsService } from "./restaurants.service";
import { GET_RESTAURANTS, GET_RESTAURANTS_SUCCESS } from "./restaurants.types";

function* getRestaurants() {
  try {
    const res = yield call(restaurantsService.getResturants);
    yield put({
      type: GET_RESTAURANTS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    if (e.response.data.statusCode === 422) {
      /* [implement] */
      //   yield put(logOut());
    }
  }
}

export const watchRestaurants = function* watchRestaurants() {
  yield takeLatest(GET_RESTAURANTS, getRestaurants);
};
