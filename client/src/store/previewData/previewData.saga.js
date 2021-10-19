import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  GET_PREVIEW_MENU_DATA,
  GET_PREVIEW_MENU_DATA_SUCCESS,
} from "./previewData.types";

import { menuCategoriesService } from "../menuCategories";
import { categoryItemsService } from "../categoryItems";

import { httpRequestsOnErrorsActions } from "../http_requests_on_errors";
import { httpRequestsOnLoadActions } from "../http_requests_on_load";

function* getPreviewMenuData({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    let { data: categories } = yield call(menuCategoriesService.get, payload);

    const items = yield all(
      [...categories.food, ...categories.drink].map((i) =>
        call(categoryItemsService.get, i.category.id)
      )
    );

    categories.food = categories.food.map((currentCategory, index) => {
      return {
        ...currentCategory,
        category: {
          ...currentCategory.category,
          items: items[index].data.items,
        },
      };
    });
    categories.drink = categories.drink.map((currentCategory, index) => {
      return {
        ...currentCategory,
        category: {
          ...currentCategory.category,
          items: items[categories.food.length - 1 + index].data.items,
        },
      };
    });

    yield put({
      type: GET_PREVIEW_MENU_DATA_SUCCESS,
      payload: categories,
    });

    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (e) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

export function* watchPreviewData() {
  yield takeLatest(GET_PREVIEW_MENU_DATA, getPreviewMenuData);
}
