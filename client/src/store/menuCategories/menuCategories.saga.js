import { call, put, takeLatest } from "redux-saga/effects";
import {
  DELETE_MENU_CATEGORY,
  DELETE_MENU_CATEGORY_SUCCESS,
  GET_MENU_CATEGORIES,
  GET_MENU_CATEGORIES_SUCCESS,
  ADD_MENU_CATEGORY,
  ADD_MENU_CATEGORY_SUCCESS,
  REORDER_MENU_CATEGORY,
  REORDER_MENU_CATEGORY_SUCCESS,
} from "./menuCategories.types";
import { httpRequestsOnErrorsActions } from "../http_requests_on_errors";
import { httpRequestsOnLoadActions } from "../http_requests_on_load";
import { httpRequestsOnSuccessActions } from "../http_requests_on_success";
import { menuCategoriesActions } from "./menuCategories.actions";
import { menuCategoriesService } from "./menuCategories.service";

function* getMenuCategories({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const { data } = yield call(menuCategoriesService.get, payload);
    yield put({
      type: GET_MENU_CATEGORIES_SUCCESS,
      payload: data,
    });
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (e) {
    yield put(httpRequestsOnErrorsActions.appendError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* deleteMenuCategory({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(
      menuCategoriesService.delete,
      payload.menuId,
      payload.categoryId,
      payload.categoryType
    );
    yield put({
      type: DELETE_MENU_CATEGORY_SUCCESS,
      payload: {
        categoryId: payload.categoryId,
        categoryType: payload.categoryType,
      },
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

function* addMenuCategory({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const { data } = yield call(
      menuCategoriesService.addCategoryIntoMenu,
      payload.menuId,
      payload.categoryId,
      payload.categoryType
    );
    yield put({
      type: ADD_MENU_CATEGORY_SUCCESS,
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

function* reorderCategory({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield put({
      type: REORDER_MENU_CATEGORY_SUCCESS,
      payload,
    });
    yield call(menuCategoriesService.reorder, payload.categoryId, payload.move);
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (e) {
    yield put(httpRequestsOnErrorsActions.appendError(type));
    yield put(httpRequestsOnSuccessActions.removeSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

export function* watchMenuCategories() {
  yield takeLatest(GET_MENU_CATEGORIES, getMenuCategories);
  yield takeLatest(DELETE_MENU_CATEGORY, deleteMenuCategory);
  yield takeLatest(ADD_MENU_CATEGORY, addMenuCategory);
  yield takeLatest(REORDER_MENU_CATEGORY, reorderCategory);
}
