import {useEffect, useState} from "react";
import { ModalContext } from "./context";
import {Toast} from "../screens";
import {useDispatch, useSelector} from "react-redux";
import {httpRequestsOnSuccessActions} from "../../store/http_requests_on_success";
import {ToastSuccess} from "./toastSuccess";
import {ToastFail} from "./toastFail";
export const ModalProvider = ({ children }) => {
  const [activeModal, setActiveModal] = useState("");
  const [params, setParams] = useState({});
    const {httpOnError, httpOnSuccess, httpOnLoad} = useSelector((state) => ({
        httpOnLoad: state.httpOnLoad,
        httpOnError: state.httpOnError,
        httpOnSuccess: state.httpOnSuccess,
    }));

    const dispatch =useDispatch()
    const success = httpOnSuccess.length && httpOnSuccess[0].type
    const error = httpOnError.length && httpOnError[0].type
    const toastSuccess = ToastSuccess(success)
    const toastFail = ToastFail(error)

    console.log(httpOnLoad,'httpOnLoadhttpOnLoadhttpOnLoad')
    useEffect(() => {
        if (toastSuccess) {
            dispatch(httpRequestsOnSuccessActions.removeSuccess( success ))
        }
    }, [toastSuccess]);

    useEffect(() => {
        if (toastFail) {
            // dispatch(httpRequestsOnErrorsActions.removeError( error ))
        }
    }, [toastFail]);
  return (
      <>
    <ModalContext.Provider
      value={{
        activeModal,
        setActiveModal,
        params,
        setParams,
      }}
    >
      {children}
    </ModalContext.Provider>
          <Toast
              type={toastSuccess ? 'success' :toastFail ?  'error'  : ''}
              text={toastSuccess ? toastSuccess : toastFail ? toastFail : ''}
              info={toastSuccess ? !!toastSuccess : toastFail ? !! toastFail : ''}
          />
          </>
  );
};
