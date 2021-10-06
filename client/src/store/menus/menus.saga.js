import { call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_MENU,
  CREATE_MENU_SUCCESS,
  EDIT_MENU,
  EDIT_MENU_SUCCESS,
  GET_MENUS,
  GET_MENUS_SUCCESS,
  SWITCH_MENU_STATUS,
  SWITCH_MENU_STATUS_SUCCESS,
  GET_CURRENT_MENU,
  GET_CURRENT_MENU_SUCCESS,
  DELETE_MENU,
  DELETE_MENU_SUCCESS, GET_ACTIVE_MENUS, GET_ACTIVE_MENUS_SUCCESS, GET_BUSINESS_MENU, GET_BUSINESS_MENU_SUCCESS,
} from "./menus.types";
import { menusService } from "./menus.service";
import { imageService } from "../imageService";
import { httpRequestsOnErrorsActions } from "../http_requests_on_errors";
import { httpRequestsOnLoadActions } from "../http_requests_on_load";
import { httpRequestsOnSuccessActions } from "../http_requests_on_success";

function* getMenus({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const res = yield call(menusService.getMenusByBusiness, payload);
    yield put({
      type: GET_MENUS_SUCCESS,
      payload: res.data,
    });
    yield put(httpRequestsOnLoadActions.removeLoading('REMOVE_IMAGE'));
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (e) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* getActiveMenus({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const res = yield call(menusService.getActiveMenus, payload);
    yield put({
      type: GET_ACTIVE_MENUS_SUCCESS,
      payload: res.data,
    });
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (e) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* getBusinessMenu({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const res = yield call(menusService.getBusinessMenu, payload);
    yield put({
      type: GET_BUSINESS_MENU_SUCCESS,
      payload: res.data,
    });
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (e) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* editMenu({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));

  if (payload.restaurantIcons.mainIconId) {
    let mainImageId = "";
    try {
      const {data} = yield call(imageService.uploadImage, payload.restaurantIcons.files.find((cFile) => cFile.id === payload.restaurantIcons.mainIconId));
      mainImageId = data;
    } catch (err) {
      return;
    }
    try {
      const {data} = yield call(menusService.editMenu, {...payload, mainImage: mainImageId,});
      yield put({
        type: EDIT_MENU_SUCCESS,
        payload: data,
      });
      yield put(httpRequestsOnLoadActions.removeLoading(type));
      yield put(httpRequestsOnErrorsActions.removeError(type));
      yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (e) {
      yield put(httpRequestsOnLoadActions.removeLoading(type));
      yield put(httpRequestsOnSuccessActions.removeSuccess(type));
      yield put(httpRequestsOnErrorsActions.appendError(type));
    }
  } else {
    try {
      const {data} = yield call(menusService.editMenu, payload);
      yield put({
        type: EDIT_MENU_SUCCESS,
        payload: data,
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

function* createMenu({ type, payload }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  if (payload.restaurantIcons.mainIconId) {
    let mainImageId = "";
    try {
      const { data } = yield call(imageService.uploadImage, payload.restaurantIcons.files.find((cFile) => cFile.id === payload.restaurantIcons.mainIconId));
      mainImageId = data;
    } catch (err) {
      return;
    }
    try {
      const { data } = yield call(menusService.createMenu, {...payload, mainImage: mainImageId,});
      yield put({
        type: CREATE_MENU_SUCCESS,
        payload: data,
      });
      yield put(httpRequestsOnSuccessActions.appendSuccess(type));
      yield put(httpRequestsOnErrorsActions.removeError(type));
      yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
      yield put(httpRequestsOnLoadActions.removeLoading(type));
      yield put(httpRequestsOnSuccessActions.removeSuccess(type));
      yield put(httpRequestsOnErrorsActions.appendError(type));
    }
  } else {
    try {
      const { data } = yield call(menusService.createMenu, payload);
      yield put({
        type: CREATE_MENU_SUCCESS,
        payload: data,
      });
      yield put(httpRequestsOnErrorsActions.removeError(type));
      yield put(httpRequestsOnLoadActions.removeLoading(type));
      yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (e) {
      yield put(httpRequestsOnLoadActions.removeLoading(type));
      yield put(httpRequestsOnSuccessActions.removeSuccess(type));
      yield put(httpRequestsOnErrorsActions.appendError(type));
    }
  }
}

function* switchMenuStatus({ type, payload }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(menusService.switchMenuStatus, payload);
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put({
      type: SWITCH_MENU_STATUS_SUCCESS,
      payload: payload.menuId,
    });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
  } catch (e) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.removeSuccess(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* getCurrentMenu({ payload }) {
  try {
    const { data } = yield call(menusService.getCurrentMenu, payload);
    yield put({
      type: GET_CURRENT_MENU_SUCCESS,
      payload: data,
    });
  } catch (e) {
    console.log("err: ", e);
  }
}

function* deleteMenu({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const { data } = yield call(menusService.deleteMenu, payload);
    yield put({
      type: DELETE_MENU_SUCCESS,
      payload: data,
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

export function* watchMenus() {
  yield takeLatest(GET_MENUS, getMenus);
  yield takeLatest(EDIT_MENU, editMenu);
  yield takeLatest(CREATE_MENU, createMenu);
  yield takeLatest(SWITCH_MENU_STATUS, switchMenuStatus);
  yield takeLatest(GET_CURRENT_MENU, getCurrentMenu);
  yield takeLatest(DELETE_MENU, deleteMenu);
  yield takeLatest(GET_ACTIVE_MENUS, getActiveMenus);
  yield takeLatest(GET_BUSINESS_MENU, getBusinessMenu);
}
