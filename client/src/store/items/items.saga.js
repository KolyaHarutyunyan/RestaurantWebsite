import { call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_ITEM,
  UPDATE_ITEM,
  GET_ITEMS_SUCCESS,
  GET_ITEMS,
  DELETE_ITEM,
} from "./items.types";
import { itemsService } from "./items.service";
import { categoryItemActions } from "../categoryItems";

import { httpRequestsOnErrorsActions } from "../http_requests_on_errors";
import { httpRequestsOnLoadActions } from "../http_requests_on_load";
import { httpRequestsOnSuccessActions } from "../http_requests_on_success";
import { GET_BUSINESS_MENU } from "../menus/menus.types";

function* getItems({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const { data } = yield call(itemsService.get, payload);
    yield put({
      type: GET_ITEMS_SUCCESS,
      payload: data,
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (e) {
    yield put(httpRequestsOnErrorsActions.appendError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* createItem({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const { data } = yield call(
      itemsService.create,
      { ...payload.data },
      payload.categoryId
    );
    yield put({
      type: GET_ITEMS,
      payload: payload.data?.businessId,
    });
    yield put(
      categoryItemActions.add(
        payload.menuId,
        payload.categoryId,
        data.id,
        payload.categoryType
      )
    );
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
  } catch (e) {
    yield put(httpRequestsOnErrorsActions.appendError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  }
}

function* updateItem({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(itemsService.edit, payload.info, payload.id);
    yield put({
      type: GET_BUSINESS_MENU,
      payload: { menuId: payload.menuId, load: "noLoad" },
    });
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
  } catch (e) {
    yield put(httpRequestsOnSuccessActions.removeSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
  }
  // }
}

function* deleteItem({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(itemsService.delete, payload.itemId);
    yield put({
      type: GET_BUSINESS_MENU,
      payload: { menuId: payload.menuId, load: "noLoad" },
    });
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
  } catch (e) {
    yield put(httpRequestsOnErrorsActions.appendError(type));
    yield put(httpRequestsOnSuccessActions.removeSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

export function* watchItems() {
  yield takeLatest(GET_ITEMS, getItems);
  yield takeLatest(CREATE_ITEM, createItem);
  yield takeLatest(UPDATE_ITEM, updateItem);
  yield takeLatest(DELETE_ITEM, deleteItem);
}
