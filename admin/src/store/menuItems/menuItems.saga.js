import { call, put, takeLatest } from "redux-saga/effects";
import { GET_MENU_ITEMS_SUCCESS, GET_MENU_ITEMS } from "./menuItems.types";
import { menuItemsService } from "./menuItems.service";

function* getMenuItems() {
  console.log(1111);
  try {
    const res = yield call(() => menuItemsService.getItems());
    yield put({
      type: GET_MENU_ITEMS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    if (e.response.data.statusCode === 422) {
      /* [implement] */
      //   yield put(logOut());
    }
  }
}

export function* watchMenuItems() {
  yield takeLatest(GET_MENU_ITEMS, getMenuItems);
}
