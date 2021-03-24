import { call, put, takeLatest } from 'redux-saga/effects';
import {  authService } from '.';
import * as appTypes from '../app';
import * as authTypes  from './auth.types'

//
// function* signUpSaga(payload) {
//     try {
//         yield put({ type: appTypes.REQUEST_PENDING });
//         const res = yield call(authService.signUp, payload);
//         // Check if remember is checked add the token in localStorage
//         localStorage.setItem('access-token', res.data.accessToken);
//         yield put({ type: authTypes.SIGNUP_SUCCESS, payload: res.data });
//     } catch (err) {
//         yield put({ type: authTypes.SIGNUP_ERROR, payload: err });
//     }
// }
//
// function* signInSaga(payload) {
//     console.log(payload)
//     try {
//         yield put({ type: appTypes.REQUEST_PENDING });
//         const res = yield call(authService.signIn, payload);
//         // Check if remember is checked add the token in localStorage
//         localStorage.setItem('access-token', res.data.accessToken);
//
//         /* if (payload.user.remember) {
//             localStorage.setItem('access-token', res.data.accessToken);
//         } */
//         yield put({ type: authTypes.SIGNIN_SUCCESS, payload: res.data });
//     } catch (err) {
//         yield put({ type: authTypes.SIGNIN_ERROR, payload: err });
//     }
// }
//
// function* signOutSaga() {
//     try {
//         localStorage.removeItem('access-token');
//         yield put({ type: authTypes.SIGNOUT_SUCCESS });
//     } catch (err) {
//         yield put({ type: authTypes.SIGNOUT_ERROR, payload: err });
//     }
// }
//
// function* checkAuthSaga(payload) {
//     try {
//         const res = yield call(authService.checkAuh, payload);
//         yield put({ type: authTypes.CHECK_AUTH_SUCCESS, payload: res.data });
//     } catch (err) {
//         yield put({ type: authTypes.CHECK_AUTH_ERROR, payload: err });
//     }
// }
//
// function* changePasswordSaga(payload) {
//     try {
//         const res = yield call(authService.changePassword, payload);
//         yield put({ type: authTypes.CHANGE_PASSWORD_SUCCESS, payload: res.data });
//     } catch (err) {
//         yield put({ type: authTypes.CHANGE_PASSWORD_ERROR, payload: err });
//     }
// }
function* changeAuthScreenSaga(payload) {

    try {
    console.log(payload)
        // yield put({type:authTypes.CHANGE_AUTH_TYPE,payload:payload.payload})

    //     yield put({ type: authTypes.CHANGE_PASSWORD_SUCCESS, payload: res.data });
    } catch (err) {
        // yield put({ type: authTypes.CHANGE_PASSWORD_ERROR, payload: err });
        console.log(err)
    }
}

export const watchAuth = function* watchUserAuth() {
    // yield takeLatest(authTypes.SIGNUP, signUpSaga);
    // yield takeLatest(authTypes.SIGNIN, signInSaga);
    // yield takeLatest(authTypes.SIGNOUT, signOutSaga);
    // yield takeLatest(authTypes.CHECK_AUTH, checkAuthSaga);
    // yield takeLatest(authTypes.CHANGE_PASSWORD, changePasswordSaga);
    // yield takeLatest(authTypes.CHANGE_AUTH_TYPE, changeAuthScreenSaga);
};
