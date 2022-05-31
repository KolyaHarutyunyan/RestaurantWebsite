import { call, put, takeLatest } from "redux-saga/effects";
import { PROFILE_SIGN_IN } from "./profile.types";
import { profileService } from "./profile.service";
import { httpRequestsOnLoadActions } from "../http_requests_on_load";

function* signIn({ payload, type }) {
  yield put(httpRequestsOnLoadActions.appendLoading(type));

  try {
    const res = yield call( profileService.signIn, payload );
    yield put(httpRequestsOnLoadActions.removeLoading(type));

    // yield put({
    //   type: PROFILE_SIGN_IN_SUCCESS,
    //   payload: data.user,
    // });

    localStorage.setItem("token", res.data.token);
    window.location.replace("/restaurants");
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

export function* watchProfile() {
  yield takeLatest(PROFILE_SIGN_IN, signIn);
}
