import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  DELETE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_SUCCESS,
} from "./categories.types";
import { menuCategoriesActions } from "../menuCategories";
import { DELETE_MENU_CATEGORY_SUCCESS } from "../menuCategories";
import { categoriesService } from "./categories.service";
import { httpRequestsOnErrorsActions } from "../http_requests_on_errors";
import { httpRequestsOnLoadActions } from "../http_requests_on_load";
import { httpRequestsOnSuccessActions } from "../http_requests_on_success";
import {menusActions} from "../menus";
import {GET_CURRENT_MENU} from "../menus/menus.types";

function* createCategory({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const { data } = yield call(categoriesService.create, payload.data, payload.menuId);
    yield put({
      type: CREATE_CATEGORY_SUCCESS,
      payload: data,
    });

    yield put({
      type: GET_CURRENT_MENU,
      payload: payload.menuId,
    });


    // if (payload.menuId) {
    //   yield put(
    //     menuCategoriesActions.addCategory(
    //       payload.menuId,
    //       data.id,
    //       payload.categoryType
    //     )
    //   );
    // }
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
  } catch (e) {
    yield put(httpRequestsOnErrorsActions.appendError(type));
    yield put(httpRequestsOnSuccessActions.removeSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* getCategories({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const { data } = yield call(categoriesService.get, payload);
    yield put({
      type: GET_CATEGORIES_SUCCESS,
      payload: data,
    });
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (e) {
    yield put(httpRequestsOnErrorsActions.appendError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* deleteCategory({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(categoriesService.delete, payload.categoryId, payload.menuId, payload.categoryType);
    yield put({
      type: GET_CURRENT_MENU,
      payload: payload.menuId,
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
  yield takeLatest(CREATE_CATEGORY, createCategory);
  yield takeLatest(GET_CATEGORIES, getCategories);
  yield takeLatest(DELETE_CATEGORY, deleteCategory);
}
