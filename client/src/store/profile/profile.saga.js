import { call, put, takeLatest } from 'redux-saga/effects';
import { profileService } from './profile.service';
import * as types from '../actions';

function* updateAvaterSaga(payload) {
    try {
        const res = yield call(profileService.updateAvatar, payload);
        yield put({ type: types.UPDATE_IMAGE_SUCCESS, payload: res.data });
    } catch (err) {
        yield put({ type: types.UPDATE_IMAGE_ERROR, payload: err });
    }
}

function* editProfileSaga(payload) {
    try {
        const res = yield call(profileService.updateAvatar, payload);
        yield put({ type: types.UPDATE_PERS_INFO_SUCCESS, payload: res.data });
    } catch (err) {
        yield put({ type: types.UPDATE_PERS_INFO_ERROR, payload: err });
    }
}

export function* watchProfile() {
    yield takeLatest(types.UPDATE_AVATAR, updateAvaterSaga);
    yield takeLatest(types.EDIT_PROFILE, editProfileSaga);
}
