import { call, put, takeLatest } from "redux-saga/effects";
import { GET_MENUS_SUCCESS, GET_MENUS } from "./menu.types";

function* getMenusByRestaurantId({ payload }) {}

export function* watchMenus() {
  yield takeLatest(GET_MENUS, getMenusByRestaurantId);
}
