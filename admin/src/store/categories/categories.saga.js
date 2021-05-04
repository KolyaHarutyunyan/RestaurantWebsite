import { call, put, takeLatest } from "redux-saga/effects";
import { GET_CATEGORIES, GET_CATEGORIES_SUCCESS } from "./categories.types";
import { categoriesService } from "./categories.service";

function* getCategories() {
  try {
    const res = yield call(() => categoriesService.getItems());
    yield put({
      type: GET_CATEGORIES_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    if (e.response.data.statusCode === 422) {
      /* [implement] */
      //   yield put(logOut());
    }
  }
}

export function* watchCategories() {
  yield takeLatest(GET_CATEGORIES, getCategories);
}
