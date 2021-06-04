import { call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_MENU,
  CREATE_MENU_SUCCESS,
  DELETE_MENU,
  EDIT_MENU,
  EDIT_MENU_SUCCESS,
  GET_MENUS,
  GET_MENUS_SUCCESS,
} from "./menus.types";
import { menusService } from "./menus.service";
import { httpRequestsOnErrorsActions } from "../http_requests_on_errors";
import { httpRequestsOnLoadActions } from "../http_requests_on_load";
import { httpRequestsOnSuccessActions } from "../http_requests_on_success";

function* getMenus({ payload }) {
  try {
    const res = yield call(menusService.getMenusByBusiness, payload);
    yield put({
      type: GET_MENUS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    if (e.response.data.statusCode === 422) {
      /* [implement] */
    }
  }
}

function* editMenu({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const { data } = yield call(menusService.editMenu, payload);
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put({
      type: EDIT_MENU_SUCCESS,
      payload: data,
    });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
  } catch (e) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.removeSuccess(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* createMenu({ type, payload }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const { data } = yield call(menusService.createMenu, payload);
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put({
      type: CREATE_MENU_SUCCESS,
      payload: data,
    });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
  } catch (e) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.removeSuccess(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

export function* watchMenus() {
  yield takeLatest(GET_MENUS, getMenus);
  yield takeLatest(EDIT_MENU, editMenu);
  yield takeLatest(CREATE_MENU, createMenu);
}
