import { call, put, all, takeLatest } from "redux-saga/effects";
import {
  CREATE_ITEM,
  UPDATE_ITEM,
  CREATE_ITEM_SUCCESS,
  UPDATE_ITEM_SUCCESS,
  GET_ITEMS_SUCCESS,
  GET_ITEMS,
  DELETE_ITEM,
} from "./items.types";
import { itemsService } from "./items.service";
import { imageService } from "../imageService";
import { categoryItemActions } from "../categoryItems";

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

function* createItem({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));

  let mainImageId = null;
  let imageIds = [];

  if (payload.images.mainImageId) {
    const mainImage = payload.images.files.filter(
      (file) => file.id === payload.images.mainImageId
    );
    const images = payload.images.files.filter(
      (file) => file.id !== payload.images.mainImageId
    );

    const callStack = [call(imageService.uploadImage, mainImage[0])];
    if (images.length) {
      callStack.push(call(imageService.uploadImages, images));
    }
    const [mainId, imgIds = []] = yield all(callStack);
    mainImageId = mainId.data;
    imageIds = imgIds.data;
  }

  try {
    const { data } = yield call(
      itemsService.create,
      {
        ...payload.data,
        mainImage: mainImageId,
        images: imageIds,
      },
      payload.categoryId
    );
    ``;
    yield put({
      type: CREATE_ITEM_SUCCESS,
      payload: data,
    });
    yield put(categoryItemActions.add(payload.categoryId, data.id));
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
  } catch (e) {
    yield put(httpRequestsOnErrorsActions.appendError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.removeSuccess(type));
    return;
  }
}

function* updateItem({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const { data } = yield call(itemsService.edit, payload);
    yield put({
      type: UPDATE_ITEM_SUCCESS,
      payload: data,
    });
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
  } catch (e) {
    yield put(httpRequestsOnSuccessActions.removeSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* deleteItem({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(itemsService.delete, payload.itemId);
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(categoryItemActions.get(payload.categoryId));
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
