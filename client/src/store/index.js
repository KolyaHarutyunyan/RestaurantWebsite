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

export const useSagaHTTPState = (actionType) =>
  useSelector(({ httpOnLoad, httpOnSuccess, httpOnError }) => ({
    onLoad: !!httpOnLoad.find((type) => type === actionType),
    onError: httpOnError.find((err) => err.type === actionType) || null,
    onSuccess: httpOnSuccess.find((err) => err.type === actionType) || null,
  }));

export const useSagaHTTPStateActions = (actionType) => {
  const dispatch = useDispatch();

  const removeSuccess = () => {
    dispatch(httpRequestsOnSuccessActions.removeSuccess(actionType));
  };

  const removeError = () => {
    dispatch(httpRequestsOnErrorsActions.removeError(actionType));
  };

  const removeAll = () => {
    removeSuccess();
    removeError();
  };

  return {
    removeSuccess,
    removeError,
    removeAll,
  };
};
