import { call, put, takeLatest } from "redux-saga/effects";

import { httpErrorsActions } from "../http_errors";
import { httpRequestsOnLoad } from "../http_requests_on_load";

import {
  PROFILE_SIGN_IN,
  PROFILE_SIGN_IN_SUCCESS,
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
} from "./profile.types";
import { profileService } from "./profile.service";

function* signIn({ type, payload }) {
  yield put(httpRequestsOnLoad.appendLoading(type));
  yield put(httpErrorsActions.removeError(type));
  try {
    const { data } = yield call(profileService.signIn, payload);
    yield put({
      type: PROFILE_SIGN_IN_SUCCESS,
      payload: data.user,
    });
    yield put(httpRequestsOnLoad.removeLoading(type));
    localStorage.setItem("token", data.auth.token);
  } catch (err) {
    yield put(httpErrorsActions.appendError(type, err));
    yield put(httpRequestsOnLoad.removeLoading(type));
  }
}

function* getUserInfo({ type }) {
  yield put(httpRequestsOnLoad.appendLoading(type));
  yield put(httpErrorsActions.removeError(type));
  try {
    const { data } = yield call(profileService.userInfo);
    yield put({
      type: GET_USER_INFO_SUCCESS,
      payload: data,
    });
    yield put(httpRequestsOnLoad.removeLoading(type));
  } catch (err) {
    yield put(httpErrorsActions.appendError(type, err));
    yield put(httpRequestsOnLoad.removeLoading(type));
  }
}

export function* watchProfile() {
  yield takeLatest(PROFILE_SIGN_IN, signIn);
  yield takeLatest(GET_USER_INFO, getUserInfo);
}
