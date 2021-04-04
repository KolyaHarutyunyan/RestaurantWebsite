import { call, put, takeLatest } from "redux-saga/effects"
import { authReducerTypes, authTypes } from "../auth"
import { authService } from "../auth"
import {profileTypes} from "../profile"


function* writeError(error){
  yield put({type: authReducerTypes.setError, payload: {error:error.response.data.message || "Check internet connection"}})
}
function* writeUser(data){
  console.log(data)
  localStorage.setItem('access-token', data.auth.token)
  localStorage.setItem('user', JSON.stringify(data.user))
}

function* signInSaga(payload) {
  try {

    const res = yield call(authService.signIn, payload.payload)
    yield writeUser(res.data)
    yield put({type: authReducerTypes.setIsAuthed})
    yield put({type: profileTypes.signIn, payload: res.data.user});
  } catch (err) {
    yield writeError(err)
  }
}


function* signUpSaga(payload) {
  try {
    // yield put({type: appTypes.REQUEST_PENDING});
    const res = yield call(authService.signUp, payload.payload)
    yield writeUser(res.data)
    yield put({type: authReducerTypes.setIsAuthed})
    yield put({type: profileTypes.signIn, payload: res.data});
  } catch (err) {
    yield writeError(err)
  }
}

function* signOutSaga() {
  localStorage.removeItem('access-token');
  yield put({type: authTypes.SIGN_OUT_SUCCESS});
}

function* cleanErrorSaga() {
  yield put({type: authReducerTypes.cleanError});
}

function* checkIsAuthedSaga() {
  console.log("usecdfgsdgsdfgsdfr")
  let user = localStorage.getItem("user")
  let token = localStorage.getItem("access-token")
  console.log(user , token )
  if ( !!user && !!token ) {

    user = JSON.parse(user)
    yield put({type: authReducerTypes.setIsAuthed})
    yield put({type: profileTypes.signIn, payload: {user}})
  }
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

function* resetPassSaga(payload) {
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
  yield takeLatest(authTypes.signIn, signInSaga)
  yield takeLatest(authTypes.signUp, signUpSaga)
  yield takeLatest(authTypes.signOut, signOutSaga)
  yield takeLatest(authTypes.checkEmail, checkEmailSaga)
  yield takeLatest(authTypes.checkVerifyKey, checkVerifyKeySaga)
  yield takeLatest(authTypes.checkIsAuthed, checkIsAuthedSaga)
  yield takeLatest(authTypes.resetPassword, resetPassSaga)
  yield takeLatest(authTypes.cleanError, cleanErrorSaga)

};
