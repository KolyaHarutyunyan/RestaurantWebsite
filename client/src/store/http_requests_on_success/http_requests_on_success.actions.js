import {
  APPEND_SUCCESS,
  REMOVE_SUCCESS,
} from "./http_requests_on_success.types";

export const httpRequestsOnSuccessActions = {
  appendSuccess: (type, data) => ({
    type: APPEND_SUCCESS,
    payload: {
      type,
      data,
    },
  }),
  removeSuccess: (successType) => ({
    type: REMOVE_SUCCESS,
    payload: successType,
  }),
};
