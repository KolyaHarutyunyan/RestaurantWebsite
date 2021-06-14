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
  DELETE_PROFILE,
  UPDATE_PROFILE_INFO,
  UPDATE_PROFILE_INFO_SUCCESS,
  RESET_PASSWORD,
} from "./profile.types";
import { profileService } from "./profile.service";

function* signIn({ type, payload }) {
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  try {
    const { data } = yield call(profileService.signIn, payload);
    localStorage.setItem("token", data.accessToken);
    try {
      const { data } = yield call(profileService.userInfo, payload);
      yield put({
        type: PROFILE_SIGN_IN_SUCCESS,
        payload: data,
      });
      yield put(httpRequestsOnLoadActions.removeLoading(type));
      yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (err) {}
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
      payload: data || null,
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnErrorsActions.appendError(type, err));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* signUp({ type, payload }) {
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnErrorsActions.removeError(type));
  try {
    const { data } = yield call(profileService.signUp, payload);
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    localStorage.setItem("token", data.accessToken);
    try {
      const { data } = yield call(profileService.userInfo, payload);
      yield put({
        type: PROFILE_SIGN_IN_SUCCESS,
        payload: data.user,
      });
      yield put(httpRequestsOnLoadActions.removeLoading(type));
      yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (err) {}
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
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (err) {
    yield put(httpRequestsOnErrorsActions.appendError(type, err));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* deleteProfile({ type }) {
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(profileService.deleteProfile);
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put({
      type: GET_PROFILE_INFO,
      payload: null,
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (err) {
    yield put(httpRequestsOnErrorsActions.appendError(type, err));
    yield put(httpRequestsOnSuccessActions.removeSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* updateProfile({ type, payload }) {
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const { data } = yield call(profileService.updateProfileInfo, payload);
    yield put({
      type: UPDATE_PROFILE_INFO_SUCCESS,
      payload: data,
    });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (err) {
    yield put(httpRequestsOnErrorsActions.appendError(type, err));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* resetPassword({ type, payload }) {
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const { data } = yield call(
      profileService.resetPassword,
      payload.data,
      payload.token
    );
    localStorage.setItem("token", data.accessToken);
    try {
      const { data } = yield call(profileService.userInfo, payload);
      yield put({
        type: PROFILE_SIGN_IN_SUCCESS,
        payload: data,
      });
      yield put(httpRequestsOnSuccessActions.appendSuccess(type));
      yield put(httpRequestsOnLoadActions.removeLoading(type));
      yield put(httpRequestsOnErrorsActions.removeError(type));
    } catch (err) {}
  } catch (err) {
    yield put(httpRequestsOnErrorsActions.appendError(type, err));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  }
}

export function* watchProfile() {
  yield takeLatest(PROFILE_SIGN_IN, signIn);
  yield takeLatest(GET_PROFILE_INFO, getProfileInfo);
  yield takeLatest(PROFILE_SIGN_UP, signUp);
  yield takeLatest(UPDATE_PROFILE_PASSWORD, updateProfilePassword);
  yield takeLatest(DELETE_PROFILE, deleteProfile);
  yield takeLatest(UPDATE_PROFILE_INFO, updateProfile);
  yield takeLatest(RESET_PASSWORD, resetPassword);
}
