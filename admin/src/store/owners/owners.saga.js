import { call, put, takeLatest } from "redux-saga/effects";
import { ownersService } from "./owners.service";
import { DELETE_OWNER, GET_OWNERS, GET_OWNERS_SUCCESS } from "./owners.types";
import { httpRequestsOnLoadActions } from "@eachbase/store";

function* getRestaurant({ payload, type }) {
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const res = yield call(ownersService.getOwnersService );
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put({
      type: GET_OWNERS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* deleteOwner({ payload }) {
  try {
    const res = yield call(() => ownersService.deleteOwner(payload));
    yield put({
      type: GET_OWNERS,
      payload: res.data,
    });
  } catch (e) {

  }
}

export const watchOwners = function* watchOwners() {
  yield takeLatest(GET_OWNERS, getRestaurant);
  yield takeLatest(DELETE_OWNER, deleteOwner);
};
