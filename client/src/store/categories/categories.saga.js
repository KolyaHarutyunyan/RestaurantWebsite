import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  CREATE_CATEGORY,
  CREATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY,
  DELETE_CATEGORY_SUCCESS,
} from "./categories.types";
import { categoriesService } from "./categories.service";

function* getCategories({ payload }) {
  try {
    const { data } = yield call(categoriesService.get, payload);
    yield put({
      type: GET_CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (e) {
    console.log("getCategories error: ", e);
  }
}

function* createCategory({ payload }) {
  try {
    const { data } = yield call(categoriesService.create, payload);
    yield put({
      type: CREATE_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (e) {
    console.log("createCategory error: ", e);
  }
}

function* deleteCategory({ payload }) {
  try {
    yield call(categoriesService.delete, payload);
    yield put({
      type: DELETE_CATEGORY_SUCCESS,
      payload: payload.categoryId,
    });
  } catch (e) {
    console.log("deleteCategory error: ", e);
  }
}

export function* watchCategories() {
  yield takeLatest(GET_CATEGORIES, getCategories);
  yield takeLatest(CREATE_CATEGORY, createCategory);
  yield takeLatest(DELETE_CATEGORY, deleteCategory);
}
