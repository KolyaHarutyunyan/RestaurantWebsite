import { useState } from "react";
import { ModalContext } from "./context";
export const ModalProvider = ({ children }) => {
  const [activeModal, setActiveModal] = useState("");
  const [params, setParams] = useState({});
  return (
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
  );
};
