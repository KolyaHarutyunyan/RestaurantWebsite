import { useDispatch, useSelector } from "react-redux";
import { httpRequestsOnErrorsActions } from "./http_requests_on_errors";
import { httpRequestsOnSuccessActions } from "./http_requests_on_success";
import { httpRequestsOnLoadActions } from "./http_requests_on_load";

export const useSagaStore = (actionCreator) => {
  const dispatch = useDispatch();

  const mockArgs = [];

  for (let i = 0; i < actionCreator.length; i++) {
    mockArgs.push(null);
  }

  const { type: cActionCreatorType } = actionCreator(...mockArgs);

  const invokeActionCreator = (...args) => {
    dispatch(actionCreator(...args));
    return true;
  };

  const status = useSelector(({ httpOnLoad, httpOnSuccess, httpOnError }) => {
    const onLoad = !!httpOnLoad.find((type) => type === cActionCreatorType);
    const errorIsIn = httpOnError.find(
      (err) => err.type === cActionCreatorType
    );
    const successIsIn = httpOnSuccess.find(
      (err) => err.type === cActionCreatorType
    );
    return {
      onLoad,
      onError: errorIsIn ? errorIsIn.error : null,
      onSuccess: successIsIn ? successIsIn.data : null,
    };
  });

  const destroyHTTPState = {
    success() {
      dispatch(httpRequestsOnSuccessActions.removeSuccess(cActionCreatorType));
    },
    error() {
      dispatch(httpRequestsOnErrorsActions.removeError(cActionCreatorType));
    },
    loading() {
      dispatch(httpRequestsOnLoadActions.removeLoading(cActionCreatorType));
    },
    all() {
      this.success();
      this.error();
      this.loading();
    },
  };

  return {
    dispatch: invokeActionCreator,
    status,
    destroy: destroyHTTPState,
  };
};
