import { call, put, takeLatest } from "redux-saga/effects";
import { httpRequestsOnErrorsActions } from "../http_requests_on_errors";
import { httpRequestsOnLoadActions } from "../http_requests_on_load";
import { httpRequestsOnSuccessActions } from "../http_requests_on_success";

import { businessesService } from "./businesses.service";
import {
  DELETE_BUSINESS,
  DELETE_BUSINESS_SUCCESS,
  EDIT_BUSINESS,
  EDIT_BUSINESS_SUCCESS,
  GET_MY_BUSINESS,
  GET_MY_BUSINESS_SUCCESS,
  CREATE_BUSINESS,
  CREATE_BUSINESS_SUCCESS,
} from "./businesses.types";

function* getMyBusiness() {
  try {
    const { data } = yield call(businessesService.getMyBusiness);
    yield put({
      type: GET_MY_BUSINESS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    if (e.response.data.statusCode === 422) {
      /* [implement] */
      //   yield put(logOut());
    }
  }
}

function* editBusiness({ payload }) {
  try {
    yield call(() => businessesService.editBusiness(payload));
    yield put({
      type: EDIT_BUSINESS_SUCCESS,
      payload: payload,
    });
  } catch (e) {
    if (e.response.data.statusCode === 422) {
      //   yield put(logOut());
    }
  }
}

function* deleteBusiness({ payload }) {
  try {
    yield call(() => businessesService.deleteBusiness(payload));
    yield put({
      type: DELETE_BUSINESS_SUCCESS,
      payload: payload,
    });
  } catch (e) {
    if (e.response.data.statusCode === 422) {
      /* [implement] */
      //   yield put(logOut());
    }
  }
}

function* createBusiness({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    /* partial implementation  (should be implemented logo upload) */
    const { data } = yield call(() =>
      businessesService.createBusiness({
        ...payload,
        status: true,
        logoUrl:
          "https://preview.redd.it/w3kr4m2fi3111.png?auto=webp&s=b4fb4bdfd262de01e49b9f7463d784c6d9013a1b",
      })
    );
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put({
      type: CREATE_BUSINESS_SUCCESS,
      payload: data,
    });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
  } catch (e) {
    console.log("err: ", e);
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.removeSuccess(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

export const watchBusinesses = function* watchBusinesses() {
  yield takeLatest(GET_MY_BUSINESS, getMyBusiness);
  yield takeLatest(EDIT_BUSINESS, editBusiness);
  yield takeLatest(DELETE_BUSINESS, deleteBusiness);
  yield takeLatest(CREATE_BUSINESS, createBusiness);
};
