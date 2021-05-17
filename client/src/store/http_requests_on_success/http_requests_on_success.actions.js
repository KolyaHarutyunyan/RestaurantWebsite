import {
  APPEND_SUCCESS,
  REMOVE_SUCCESS,
} from "./http_requests_on_success.types";

export const httpRequestsOnSuccess = {
  appendLoading: (loadingType) => ({
    type: APPEND_SUCCESS,
    payload: loadingType,
  }),
  removeLoading: (loadingType) => ({
    type: REMOVE_SUCCESS,
    payload: loadingType,
  }),
};
