import { call, put, takeLatest } from "redux-saga/effects";
import {
  EDIT_MENU,
  EDIT_MENU_SUCCESS,
  GET_MENUS,
  GET_MENUS_SUCCESS,
} from "./menus.types";
import { menusService } from "./menus.service";

function* getMenus() {
  try {
    const res = yield call(() => menusService.getItems());
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
function* editMenu({ payload }) {
  try {
    yield call(() => menusService.editMenu(payload));
    yield put({
      type: EDIT_MENU_SUCCESS,
      payload: payload,
    });
  } catch (e) {
    if (e.response.data.statusCode === 422) {
      /* [implement] */
    }
  }
}

export function* watchMenus() {
  yield takeLatest(GET_MENUS, getMenus);
  yield takeLatest(EDIT_MENU, editMenu);
}
