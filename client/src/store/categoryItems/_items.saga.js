import { call, put, takeLatest } from "redux-saga/effects";
import {
  ADD_CATEGORY_ITEM,
  DELETE_CATEGORY_ITEM,
  GET_CATEGORY_ITEMS,
  ADD_CATEGORY_ITEM_SUCCESS,
  DELETE_CATEGORY_ITEM_SUCCESS,
  GET_CATEGORY_ITEMS_SUCCESS,
} from "./Items.types";
import { categoryItemsService } from "./Items.service";

function* getItems({ payload }) {
  try {
    const res = yield call(categoryItemsService.get, payload);
    yield put({
      type: GET_CATEGORY_ITEMS_SUCCESS,
      payload: res.data.items,
    });
  } catch (e) {}
}
function* addItem({ payload }) {
  try {
    const { data } = yield call(categoryItemsService.add, payload);
    yield put({
      type: ADD_CATEGORY_ITEM_SUCCESS,
      payload: data,
    });
  } catch (e) {}
}
function* deleteItem({ payload }) {
  try {
    const { data } = yield call(categoryItemsService.remove, payload);
    yield put({
      type: DELETE_CATEGORY_ITEM_SUCCESS,
      payload: data,
    });
  } catch (e) {}
}

export function* watchCategoryItems() {
  yield takeLatest(GET_CATEGORY_ITEMS, getItems);
  yield takeLatest(ADD_CATEGORY_ITEM, addItem);
  yield takeLatest(DELETE_CATEGORY_ITEM, deleteItem);
}
