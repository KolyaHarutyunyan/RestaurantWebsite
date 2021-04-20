import { call, put, takeLatest } from "redux-saga/effects";
import { authService } from "./auth.service";
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAIL, LOG_OUT } from "./auth.types";

function* logIn(payload) {
  try {
    const res = yield call(authService.signIn, payload.payload);

    localStorage.setItem("access-token", res.data.auth.token);
    localStorage.setItem("userInfo", JSON.stringify(res.data.user));

    window.location.replace("/");

    yield put({
      type: LOG_IN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAIL,
      payload: err.response.data.message,
    });
  }
}

function* logOut() {
  try {
    yield call(authService.logOut);
    localStorage.removeItem("access-token");
    localStorage.removeItem("userInfo");
    window.location.replace("/login");
  } catch (err) {
    if (err.response.data.statusCode === 401) {
      localStorage.removeItem("access-token");
      localStorage.removeItem("userInfo");
      window.location.replace("/login");
    }
  }
}

export const watchAuth = function* watchUserAuth() {
  yield takeLatest(LOG_IN, logIn);
  yield takeLatest(LOG_OUT, logOut);
};
