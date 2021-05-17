import { call, put, takeLatest } from "redux-saga/effects";

import { httpRequestsOnErrorsActions } from "../http_requests_on_errors";
import { httpRequestsOnLoadActions } from "../http_requests_on_load";
import { httpRequestsOnSuccessActions } from "../http_requests_on_success";

import {
  PROFILE_SIGN_IN,
  PROFILE_SIGN_IN_SUCCESS,
  GET_PROFILE_INFO,
  PROFILE_SIGN_UP,
  GET_PROFILE_INFO_SUCCESS,
  UPDATE_PROFILE_PASSWORD,
} from "./profile.types";
import { profileService } from "./profile.service";

function* signIn({ type, payload }) {
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  yield put(httpRequestsOnErrorsActions.removeError(type));
  try {
    const { data } = yield call(profileService.signIn, payload);
    yield put({
      type: PROFILE_SIGN_IN_SUCCESS,
      payload: data.user,
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    localStorage.setItem("token", data.auth.token);
  } catch (err) {
    yield put(httpRequestsOnErrorsActions.appendError(type, err));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* getProfileInfo({ type }) {
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  yield put(httpRequestsOnErrorsActions.removeError(type));
  try {
    const { data } = yield call(profileService.userInfo);
    yield put({
      type: GET_PROFILE_INFO_SUCCESS,
      payload: data,
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (err) {
    yield put(httpRequestsOnErrorsActions.appendError(type, err));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* signUp({ type, payload }) {
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  yield put(httpRequestsOnErrorsActions.removeError(type));
  try {
    const { data } = yield call(profileService.signUp, payload);
    localStorage.setItem("token", data.auth.token);
    yield put({
      type: PROFILE_SIGN_UP_SUCCESS,
      payload: data,
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (err) {
    yield put(httpRequestsOnErrorsActions.appendError(type, err));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* updateProfilePassword({ type, payload }) {
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(profileService.changePassword, payload);
    yield put(
      httpRequestsOnSuccessActions.appendSuccess(
        type,
        "Password successfuly changed"
      )
    );
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (err) {
    yield put(httpRequestsOnErrorsActions.appendError(type, err));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

export function* watchProfile() {
  yield takeLatest(PROFILE_SIGN_IN, signIn);
  yield takeLatest(GET_PROFILE_INFO, getProfileInfo);
  yield takeLatest(PROFILE_SIGN_UP, signUp);
  yield takeLatest(UPDATE_PROFILE_PASSWORD, updateProfilePassword);
}
