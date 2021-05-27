import { call, put, takeLatest } from "redux-saga/effects";
import { httpRequestsOnErrorsActions } from "../http_requests_on_errors";
import { httpRequestsOnLoadActions } from "../http_requests_on_load";
import { httpRequestsOnSuccessActions } from "../http_requests_on_success";

import { restaurantsService } from "./restaurants.service";
import {
  DELETE_RESTAURANT,
  DELETE_RESTAURANT_SUCCESS,
  EDIT_RESTAURANT,
  EDIT_RESTAURANT_SUCCESS,
  GET_RESTAURANTS,
  GET_RESTAURANTS_SUCCESS,
  CREATE_RESTAURANT,
  CREATE_RESTAURANT_SUCCESS,
} from "./restaurants.types";

function* getRestaurants() {
  try {
    const { data } = yield call(restaurantsService.getResturants);
    yield put({
      type: GET_RESTAURANTS_SUCCESS,
      payload: data ? [data] : [],
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

function* createRestaurant({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    /* partial implementation  (should be implemented logo upload) */

    const { data } = yield call(() =>
      restaurantsService.createRestaurant({
        ...payload,
        status: true,
        logoUrl:
          "https://preview.redd.it/w3kr4m2fi3111.png?auto=webp&s=b4fb4bdfd262de01e49b9f7463d784c6d9013a1b",
      })
    );
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put({
      type: CREATE_RESTAURANT_SUCCESS,
      payload: data.restaurant,
    });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
  } catch (e) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.removeSuccess(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

export const watchRestaurants = function* watchRestaurants() {
  yield takeLatest(GET_RESTAURANTS, getRestaurants);
  yield takeLatest(EDIT_RESTAURANT, editRestaurant);
  yield takeLatest(DELETE_RESTAURANT, deleteRestaurant);
  yield takeLatest(CREATE_RESTAURANT, createRestaurant);
};
