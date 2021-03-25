import { call, put, takeLatest } from 'redux-saga/effects';
import {  authService } from '.';
import * as appTypes from '../app/app.types';
import * as authTypes  from './auth.types'


function* signUpSaga(payload) {
    try {
        yield put({ type: appTypes.REQUEST_PENDING });
        const res = yield call(authService.signUp, payload);
        // Check if remember is checked add the token in localStorage
        localStorage.setItem('access-token', res.data.accessToken);
        yield put({ type: authTypes.SIGN_UP, payload: res.data });
    } catch (err) {
        yield put({ type: authTypes.SIGN_ERROR, payload: err });
    }
}

function* signInSaga(payload) {
    console.log(payload)
    try {
        yield put({ type: appTypes.REQUEST_PENDING });
        const res = yield call(authService.signIn, payload);
        // Check if remember is checked add the token in localStorage
        localStorage.setItem('access-token', res.data.accessToken);

        /* if (payload.user.remember) {
            localStorage.setItem('access-token', res.data.accessToken);
        } */
        yield put({ type: authTypes.SIGN_IN, payload: res.data });
    } catch (err) {
        yield put({ type: authTypes.SIGN_ERROR, payload: err });
    }
}

function* signOutSaga() {
    try {
        localStorage.removeItem('access-token');
        yield put({ type: authTypes.SIGN_OUT });
    } catch (err) {
        yield put({ type: authTypes.SIGN_OUT, payload: err });
    }
}

// function* checkAuthSaga(payload) {
//     try {
//         const res = yield call(authService.checkAuh, payload);
//         yield put({ type: authTypes.CHECK_AUTH_SUCCESS, payload: res.data });
//     } catch (err) {
//         yield put({ type: authTypes.CHECK_AUTH_ERROR, payload: err });
//     }
// }
//
function* signCleanErrorSaga() {
    // try {
        // const res = yield call(authService.changePassword, payload);
        yield put({ type: authTypes.SIGN_ERROR_CLEAN });
    // } catch (err) {
    //     yield put({ type: authTypes.CHANGE_PASSWORD_ERROR, payload: err });
    // }
}


export const watchAuth = function* watchUserAuth() {
    yield takeLatest(authTypes.SIGN_UP, signUpSaga);
    yield takeLatest(authTypes.SIGN_IN, signInSaga);
    yield takeLatest(authTypes.SIGN_OUT, signOutSaga);
    yield takeLatest(authTypes.SIGN_ERROR_CLEAN, signCleanErrorSaga);
    // yield takeLatest(authTypes.CHECK_AUTH, checkAuthSaga);
    // yield takeLatest(authTypes.CHANGE_PASSWORD, changePasswordSaga);
    // yield takeLatest(authTypes.CHANGE_AUTH_TYPE, changeAuthScreenSaga);
};
