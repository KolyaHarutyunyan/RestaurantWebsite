import { useContext } from "react";
import { ModalContext } from "./context";
export const useModal = () => {
  const { activeModal, setActiveModal } = useContext(ModalContext);

  return {
    open: (modalName) => setActiveModal((_snapshot) => modalName),
    activeModal: activeModal || null,
    close: () => setActiveModal(""),
  };
};
