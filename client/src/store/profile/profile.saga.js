import { call, put, takeLatest } from 'redux-saga/effects';
import { profileService } from './profile.service';
import * as types from '../profile/profile.types';

function* updateAvatarSaga(payload) {
    try {
        const res = yield call(profileService.updateAvatar, payload);
        yield put({ type: types.UPDATE_AVATAR_SUCCESS, payload: res.data });
    } catch (err) {
        yield put({ type: types.UPDATE_AVATAR_ERROR, payload: err });
    }
}

function* editProfileSaga(payload) {
    try {
        const res = yield call(profileService.updateAvatar, payload);
        yield put({ type: types.EDIT_PROFILE_SUCCESS, payload: res.data });
    } catch (err) {
        yield put({ type: types.EDIT_PROFILE_ERROR, payload: err });
    }
}

export function* watchProfile() {
    yield takeLatest(types.UPDATE_AVATAR, updateAvatarSaga);
    yield takeLatest(types.EDIT_PROFILE, editProfileSaga);
}
