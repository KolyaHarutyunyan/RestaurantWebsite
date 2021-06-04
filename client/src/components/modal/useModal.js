import { useContext } from "react";
import { ModalContext } from "./context";
export const useModal = () => {
  const { activeModal, setActiveModal, params, setParams } =
    useContext(ModalContext);

  return {
    open: (modalName, params = {}) => {
      setActiveModal((_snapshot) => modalName);
      setParams(params);
    },
    params,
    activeModal: activeModal || null,
    close: () => setActiveModal(""),
  };
};
