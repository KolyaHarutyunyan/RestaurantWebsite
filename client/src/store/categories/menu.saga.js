import { call, put, takeLatest } from 'redux-saga/effects';


// function* updateAvatarSaga(payload) {
//     try {
//         const res = yield call(restaurantService.updateAvatar, payload);
//         yield put({ type: types.UPDATE_AVATAR_SUCCESS, payload: res.data });
//     } catch (err) {
//         yield put({ type: types.UPDATE_AVATAR_ERROR, payload: err });
//     }
// }
//
// function* editProfileSaga(payload) {
//     try {
//         const res = yield call(restaurantService.updateAvatar, payload);
//         yield put({ type: types.EDIT_PROFILE_SUCCESS, payload: res.data });
//     } catch (err) {
//         yield put({ type: types.EDIT_PROFILE_ERROR, payload: err });
//     }
// }

export function* watchRestaurant() {
  // yield takeLatest(types.UPDATE_AVATAR, updateAvatarSaga);
  // yield takeLatest(types.EDIT_PROFILE, editProfileSaga);
}
