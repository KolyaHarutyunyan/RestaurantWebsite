import { APPEND_ERROR, REMOVE_ERROR } from "./http_errors.types";

export const httpErrorsActions = {
  appendError: (type, error) => ({
    type: APPEND_ERROR,
    payload: {
      type,
      error,
    },
  }),
  removeError: (errorType) => ({
    type: REMOVE_ERROR,
    payload: errorType,
  }),
};
