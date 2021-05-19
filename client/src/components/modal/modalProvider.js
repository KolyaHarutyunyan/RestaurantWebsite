import { useState } from "react";
import { ModalContext } from "./context";
export const ModalProvider = ({ children }) => {
  const [activeModal, setActiveModal] = useState("");

  console.log("activeModal: ", activeModal);
  return (
    <ModalContext.Provider
      value={{
        activeModal,
        setActiveModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
