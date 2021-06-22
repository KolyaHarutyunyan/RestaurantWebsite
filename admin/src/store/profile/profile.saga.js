import { call, put, takeLatest } from "redux-saga/effects";

import { PROFILE_SIGN_IN, PROFILE_SIGN_IN_SUCCESS } from "./profile.types";
import { profileService } from "./profile.service";
import { history } from "@eachbase/utils";
function* signIn({ payload }) {
  try {
    const { data } = yield call(() => profileService.signIn(payload));
    yield put({
      type: PROFILE_SIGN_IN_SUCCESS,
      payload: data.user,
    });
    localStorage.setItem("token", data.auth.token);
    history.push("/");
  } catch (err) {}
}

export function* watchProfile() {
  yield takeLatest(PROFILE_SIGN_IN, signIn);
}
