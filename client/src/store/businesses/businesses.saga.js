import { call, put, takeLatest } from "redux-saga/effects";
import { httpRequestsOnErrorsActions } from "../http_requests_on_errors";
import { httpRequestsOnLoadActions } from "../http_requests_on_load";
import { httpRequestsOnSuccessActions } from "../http_requests_on_success";

import { businessesService } from "./businesses.service";
import { imageService } from "../imageService";
import {
  DELETE_BUSINESS,
  DELETE_BUSINESS_SUCCESS,
  EDIT_BUSINESS,
  EDIT_BUSINESS_SUCCESS,
  GET_MY_BUSINESS,
  GET_MY_BUSINESS_SUCCESS,
  CREATE_BUSINESS,
  CREATE_BUSINESS_SUCCESS,
  GET_CURRENT_BUSINESS,
  GET_CURRENT_BUSINESS_SUCCESS,
} from "./businesses.types";

function* getMyBusiness({ type }) {
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  yield put(httpRequestsOnErrorsActions.removeError(type));
  try {
    const { data } = yield call(businessesService.getMyBusiness);
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put({
      type: GET_MY_BUSINESS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* editBusiness({ type, payload }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  if (payload.logo) {
    try {
      let mainImageId = "";
      try {
        const { data } = yield call(imageService.uploadImage, payload.logo.files.find((cFile) => cFile.id === payload.logo.mainImageId));
        mainImageId = data;
      } catch (err) {
        return;
      }
      // const { data: iconId } = yield call(
      //     imageService.uploadImage,
      //     payload.logo
      // );
      const { data } = yield call(() =>  businessesService.editBusiness({...payload,  logo: mainImageId,})
      );
      yield put(httpRequestsOnLoadActions.removeLoading(type));
      yield put(httpRequestsOnErrorsActions.removeError(type));
      yield put({
        type: EDIT_BUSINESS_SUCCESS,
        payload: data,
      });
      yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (e) {
      yield put(httpRequestsOnLoadActions.removeLoading(type));
      yield put(httpRequestsOnSuccessActions.removeSuccess(type));
      yield put(httpRequestsOnErrorsActions.appendError(type));
    }
  } else {
    try {
      const res = yield call(() => businessesService.editBusiness(payload));
      yield put({
        type: EDIT_BUSINESS_SUCCESS,
        payload: res.data,
      });
      yield put(httpRequestsOnLoadActions.removeLoading(type));
      yield put(httpRequestsOnErrorsActions.removeError(type));
      yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (e) {
      yield put(httpRequestsOnLoadActions.removeLoading(type));
      yield put(httpRequestsOnSuccessActions.removeSuccess(type));
      yield put(httpRequestsOnErrorsActions.appendError(type));
    }
  }
}

function* deleteBusiness({ payload }) {
  try {
    yield call(() => businessesService.deleteBusiness(payload));

    yield put({
      type: DELETE_BUSINESS_SUCCESS,
      payload: payload,
    });
  } catch (e) {
    if (e.response.data.statusCode === 422) {
      /* [implement] */
      //   yield put(logOut());
    }
  }
}

function* createBusiness({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  if (payload.icon) {
    try {
      const { data: iconId } = yield call(
        imageService.uploadImage,
        payload.icon
      );
      const { data } = yield call(() => businessesService.createBusiness({...payload.business, status: true, logo: iconId,})
      );
      yield put(httpRequestsOnLoadActions.removeLoading(type));
      yield put(httpRequestsOnErrorsActions.removeError(type));
      yield put({
        type: CREATE_BUSINESS_SUCCESS,
        payload: data,
      });
      yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (e) {
      yield put(httpRequestsOnLoadActions.removeLoading(type));
      yield put(httpRequestsOnSuccessActions.removeSuccess(type));
      yield put(httpRequestsOnErrorsActions.appendError(type));
    }
  } else {
    try {
      const { data } = yield call(() => businessesService.createBusiness({...payload.business, status: true,}));
      yield put(httpRequestsOnLoadActions.removeLoading(type));
      yield put(httpRequestsOnErrorsActions.removeError(type));
      yield put({
        type: CREATE_BUSINESS_SUCCESS,
        payload: data,
      });
      yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (e) {
      yield put(httpRequestsOnLoadActions.removeLoading(type));
      yield put(httpRequestsOnSuccessActions.removeSuccess(type));
      yield put(httpRequestsOnErrorsActions.appendError(type));
    }
  }
}

function* getCurrentBusiness({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const { data } = yield call(businessesService.getMyBusiness, payload);
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put({
      type: GET_CURRENT_BUSINESS_SUCCESS,
      payload: data || {},
    });
  } catch (e) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.removeSuccess(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

export const watchBusinesses = function* watchBusinesses() {
  yield takeLatest(CREATE_BUSINESS, createBusiness);
  yield takeLatest(GET_MY_BUSINESS, getMyBusiness);
  yield takeLatest(EDIT_BUSINESS, editBusiness);
  yield takeLatest(DELETE_BUSINESS, deleteBusiness);
  yield takeLatest(GET_CURRENT_BUSINESS, getCurrentBusiness);
};
