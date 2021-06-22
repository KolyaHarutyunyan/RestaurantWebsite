import { call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_ITEM,
  UPDATE_ITEM,
  CREATE_ITEM_SUCCESS,
  UPDATE_ITEM_SUCCESS,
  GET_ITEMS_SUCCESS,
  GET_ITEMS,
  DELETE_ITEM,
  DELETE_ITEM_SUCCESS,
} from "./Items.types";
import { itemsService } from "./Items.service";
import { httpRequestsOnErrorsActions } from "../http_requests_on_errors";
import { httpRequestsOnLoadActions } from "../http_requests_on_load";
import { httpRequestsOnSuccessActions } from "../http_requests_on_success";

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

function* createItem({ payload }) {
  let createdItemData = null;
  try {
    const { data } = yield call(
      itemsService.create,
      payload.data,
      payload.categoryId
    );
    createdItemData = data;
    yield put({
      type: CREATE_ITEM_SUCCESS,
      payload: data,
    });
  } catch (e) {
    return;
  }

  try {
    const { data } = yield call(
      itemsService.addToCategory,
      payload.categoryId,
      createdItemData.id
    );

    yield put({
      type: CREATE_ITEM_SUCCESS,
      payload: createdItemData,
    });
  } catch (e) {}
}

function* updateItem({ payload }) {
  try {
    const res = yield call(itemsService.edit, payload);
    yield put({
      type: UPDATE_ITEM_SUCCESS,
      payload: res.data,
    });
  } catch (e) {}
}

function* deleteItem({ payload }) {
  try {
    yield call(itemsService.delete, payload.itemId);
  } catch (e) {}
  try {
    yield call(itemsService.removeFromCategory, payload.categoryId);
    yield put({
      type: DELETE_ITEM_SUCCESS,
      payload: payload.itemId,
    });
  } catch (e) {}
}

export function* watchItems() {
  yield takeLatest(GET_ITEMS, getItems);
  yield takeLatest(CREATE_ITEM, createItem);
  yield takeLatest(UPDATE_ITEM, updateItem);
  yield takeLatest(DELETE_ITEM, deleteItem);
}
