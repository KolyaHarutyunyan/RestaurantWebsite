import { call, put, takeLatest } from "redux-saga/effects";

import { PROFILE_REMOVE_USER, PROFILE_SIGN_IN } from "./profile.types";

function* profileSignInSaga(payload) {
  yield put({
    type: profileReducerTypes.signIn,
    payload: payload.payload.user,
  });
}

function* profileSignOutSaga() {
  yield put({ type: profileReducerTypes.signOut });
}

function* profileRemoveSaga(payload) {
  try {
    yield call(profileService.remove, payload.payload);
  } catch (err) {
    console.log(err.message);
  }
}

export function* watchProfile() {
  yield takeLatest(PROFILE_SIGN_IN, profileSignInSaga);
  yield takeLatest(PROFILE_REMOVE_USER, profileRemoveSaga);
}
