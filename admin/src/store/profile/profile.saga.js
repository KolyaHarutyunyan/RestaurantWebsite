import { call, put, takeLatest } from "redux-saga/effects";

import { profileTypes, profileReducerTypes, profileService } from ".";

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
    yield put({ type: profileReducerTypes.signOut });
  } catch (err) {
    console.log(err.message);
  }
}

export function* watchProfile() {
  yield takeLatest(profileTypes.signIn, profileSignInSaga);
  yield takeLatest(profileTypes.signOut, profileSignOutSaga);
  yield takeLatest(profileTypes.remove, profileRemoveSaga);
}
