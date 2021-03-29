import { call, put, takeLatest } from 'redux-saga/effects'
import { authService } from '.'
import { appTypes } from '../app/app.types'
import { authTypes } from './auth.types'


function* signInSaga(payload) {
  console.log(payload)
  try {
    yield put({type: appTypes.REQUEST_PENDING});
    const res = yield call(authService.signIn, payload);
    localStorage.setItem('access-token', res.data.accessToken);
    yield put({type: authTypes.SIGN_IN_SUCCESS, payload: res.data});
  } catch (err) {
    yield put({type: authTypes.ERROR, payload: err});
  }
}

function* signUpSaga(payload) {
  try {
    yield put({type: appTypes.REQUEST_PENDING});
    const res = yield call(authService.signUp, payload);
    localStorage.setItem('access-token', res.data.accessToken);
    yield put({type: authTypes.SIGN_UP_SUCCESS, payload: res.data});
  } catch (err) {
    yield put({type: authTypes.ERROR, payload: err});
  }
}

function* signOutSaga() {
  localStorage.removeItem('access-token');
  yield put({type: authTypes.SIGN_OUT_SUCCESS});
}

function* cleanErrorSaga() {
  yield put({type: authTypes.CLEAN_ERROR_SUCCESS, payload: {}});
}

function* checkEmailSaga(payload) {
  try {
    yield put({type: appTypes.REQUEST_PENDING});
    const res = yield call(authService.checkEmail, payload);
    yield put({type: authTypes.CHECK_EMAIL_SUCCESS, payload: {key: "sanded"}})
  } catch (err) {
    yield put({type: authTypes.ERROR, payload: err})
  }
}

function* checkVerifyKeySaga(payload) {
  try {
    yield put({type: appTypes.REQUEST_PENDING});
    const res = yield call(authService.checkVerifyKey, payload);
    localStorage.setItem('auth-token', res.data.authToken);
    yield put({type: authTypes.CHECK_VERIFY_KEY_SUCCESS, payload: {key: "checked"}})
  } catch (err) {
    yield  put({type: authTypes.ERROR, payload: err})
  }
}

function* checkResetPassSaga(payload) {
  try {
    yield put({type: appTypes.REQUEST_PENDING});
    let authToken = localStorage.getItem('auth-token');
    const res = yield call(authService.resetPassword, {...payload, authToken});
    yield put({type: authTypes.RESET_PASS_SUCCESS, payload: {}})
  } catch (err) {
    yield put({type: authTypes.ERROR, payload: err})
  }
}

export const watchAuth = function* watchUserAuth() {
  yield takeLatest(authTypes.SIGN_IN , signInSaga);
  yield takeLatest(authTypes.SIGN_UP , signUpSaga);
  yield takeLatest(authTypes.SIGN_OUT , signOutSaga);
  yield takeLatest(authTypes.CLEAN_ERROR , cleanErrorSaga);
  yield takeLatest(authTypes.CHECK_EMAIL , checkEmailSaga);
  yield takeLatest(authTypes.CHECK_VERIFY_KEY , checkVerifyKeySaga);
  yield takeLatest(authTypes.RESET_PASS , checkResetPassSaga);



};
