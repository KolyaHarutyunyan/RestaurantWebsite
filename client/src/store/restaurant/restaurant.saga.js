import { call, put, takeLatest } from "redux-saga/effects";
import { restaurantService } from "./restaurant.service";
import { GET_RESTAURANT, GET_RESTAURANT_SUCCESS } from "./restaurant.types";

function* getRestaurant({ payload }) {
  try {
    const res = yield call(() => restaurantService.getRestaurantById(payload));
    yield put({
      type: GET_RESTAURANT_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    if (e.response.data.statusCode === 422) {
      /* [implement] */
      //   yield put(logOut());
    }
  }
}

export const watchRestaurant = function* watchRestaurant() {
  yield takeLatest(GET_RESTAURANT, getRestaurant);
};
