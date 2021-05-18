import { useSelector, useDispatch } from "react-redux";
export { reduxWrapper } from "./store";

export { restaurantActions } from "./restaurant";
export { categoriesActions } from "./categories";
export { menusActions } from "./menus";
export {
  profileActions,
  profileService,
  PROFILE_SIGN_IN,
  PROFILE_SIGN_OUT,
  PROFILE_SIGN_IN_SUCCESS,
  UPDATE_PROFILE_PASSWORD,
} from "./profile";
export { restaurantsActions } from "./restaurants";
export { menuItemsActions } from "./menuItems";

import { httpRequestsOnErrorsActions } from "./http_requests_on_errors";
import { httpRequestsOnSuccessActions } from "./http_requests_on_success";

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
    all() {
      this.success();
      this.error();
    },
  };

  return {
    dispatch: invokeActionCreator,
    status,
    destroy: destroyHTTPState,
  };
};
