import { call, put, takeLatest } from 'redux-saga/effects';

import { profileTypes, profileReducerTypes, profileService } from "."


function* profileSignInSaga(payload) {

  yield put({type: profileReducerTypes.sign.in, payload:payload.payload.user})
}

function* profileSignOutSaga() {
  yield put({type: profileReducerTypes.sign.out})
}

function* profileRemoveSaga(payload) {
  try {
    let res = yield call(profileService.remove, payload.payload)
    yield put({type: profileReducerTypes.sign.out})
  } catch (err) {
    console.log(err.message)
  }

}

export function* watchProfile() {
  yield takeLatest(profileTypes.sign.in, profileSignInSaga);
  yield takeLatest(profileTypes.sign.out, profileSignOutSaga);
  yield takeLatest(profileTypes.remove, profileRemoveSaga);
}
