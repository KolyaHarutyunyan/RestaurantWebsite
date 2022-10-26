import { call, put, takeLatest } from "redux-saga/effects";
import {
  ADD_CATEGORY_ITEM,
  DELETE_CATEGORY_ITEM,
  GET_CATEGORY_ITEMS,
  GET_CATEGORY_ITEMS_SUCCESS,
  REORDER_CATEGORY_ITEM,
} from "./items.types";
import { categoryItemsService } from "./items.service";
import { httpRequestsOnErrorsActions } from "../http_requests_on_errors";
import { httpRequestsOnLoadActions } from "../http_requests_on_load";
import { httpRequestsOnSuccessActions } from "../http_requests_on_success";
import { GET_BUSINESS_MENU } from "../menus/menus.types";

function* getItems({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    // const res = yield call(categoryItemsService.get, payload);
    // yield put({
    //   type: GET_CATEGORY_ITEMS_SUCCESS,
    //   payload: res.data.items,
    // });
    yield put({
      type: GET_BUSINESS_MENU,
      payload: { menuId: payload.menuId, load: "noLoad" },
    });
    yield put(httpRequestsOnLoadActions.removeLoading("REMOVE_IMAGE"));
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (e) {
    yield put(httpRequestsOnErrorsActions.appendError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* addItem({ payload, type }) {
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(categoryItemsService.add, payload);
    yield put({
      type: GET_BUSINESS_MENU,
      payload: { menuId: payload.menuId, load: "noLoad" },
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (e) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* deleteItem({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(categoryItemsService.remove, payload);
    yield put({
      type: GET_BUSINESS_MENU,
      payload: { menuId: payload.menuId, load: "noLoad" },
    });
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
  } catch (e) {
    yield put(httpRequestsOnSuccessActions.removeSuccess(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* reorderItems({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(categoryItemsService.reorder, payload);
    yield put({
      type: GET_BUSINESS_MENU,
      payload: { menuId: payload.menuId, load: "noLoad" },
    });
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
  } catch (e) {
    yield put(httpRequestsOnSuccessActions.removeSuccess(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

export function* watchCategoryItems() {
  yield takeLatest(GET_CATEGORY_ITEMS, getItems);
  yield takeLatest(ADD_CATEGORY_ITEM, addItem);
  yield takeLatest(DELETE_CATEGORY_ITEM, deleteItem);
  yield takeLatest(REORDER_CATEGORY_ITEM, reorderItems);
}
