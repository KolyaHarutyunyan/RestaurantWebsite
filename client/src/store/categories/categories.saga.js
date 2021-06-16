import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  DELETE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_SUCCESS,
} from "./categories.types";
import { categoriesService } from "./categories.service";
import { httpRequestsOnErrorsActions } from "../http_requests_on_errors";
import { httpRequestsOnLoadActions } from "../http_requests_on_load";
import { httpRequestsOnSuccessActions } from "../http_requests_on_success";
function* getCategories({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const { data } = yield call(categoriesService.get, payload);
    yield put({
      type: GET_CATEGORIES_SUCCESS,
      payload: data,
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

function* createCategory({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const { data } = yield call(categoriesService.create, payload.data);
    const { data: categories } = yield call(
      categoriesService.addCategoryIntoMenu,
      payload.menuId,
      data.id,
      payload.categoryType
    );
    yield put({
      type: CREATE_CATEGORY_SUCCESS,
      payload: categories,
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

function* deleteCategory({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(categoriesService.delete, payload.categoryId);
    yield put({
      type: DELETE_CATEGORY_SUCCESS,
      payload: payload,
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

export function* watchCategories() {
  yield takeLatest(GET_CATEGORIES, getCategories);
  yield takeLatest(CREATE_CATEGORY, createCategory);
  yield takeLatest(DELETE_CATEGORY, deleteCategory);
}
