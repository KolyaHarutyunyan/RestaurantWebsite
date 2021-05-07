import { useContext } from "react";
import { ModalContext } from "./context";
export const useModal = () => {
  const { setActiveModal } = useContext(ModalContext);

  return {
    open: (modalName) => setActiveModal((_snapshot) => modalName),
    close: () => setActiveModal(""),
  };
};
