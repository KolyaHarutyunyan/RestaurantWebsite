import { call, put, takeLatest } from "redux-saga/effects";
import { restaurantsService } from "./restaurants.service";
import {
  DELETE_RESTAURANT,
  DELETE_RESTAURANT_SUCCESS,
  EDIT_RESTAURANT,
  EDIT_RESTAURANT_SUCCESS,
  GET_RESTAURANTS,
  GET_RESTAURANTS_SUCCESS,
} from "./restaurants.types";

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

function* editRestaurant({ payload }) {
  try {
    yield call(() => restaurantsService.editRestaurant(payload));
    yield put({
      type: EDIT_RESTAURANT_SUCCESS,
      payload: payload,
    });
  } catch (e) {
    if (e.response.data.statusCode === 422) {
      /* [implement] */
      //   yield put(logOut());
    }
  }
}
function* deleteRestaurant({ payload }) {
  try {
    yield call(() => restaurantsService.deleteRestaurant(payload));
    yield put({
      type: DELETE_RESTAURANT_SUCCESS,
      payload: payload,
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
  yield takeLatest(EDIT_RESTAURANT, editRestaurant);
  yield takeLatest(DELETE_RESTAURANT, deleteRestaurant);
};
