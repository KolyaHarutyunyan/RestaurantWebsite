import { createPortal } from "react-dom";
import { ModalContainer } from "./style";
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";
import { ModalContext } from "./context";
import { useContext, useEffect, useState } from "react";

export const Modal = ({
  modalName,
  backButton,
  onBackButtonClick = () => {},
  children,
}) => {
  const { activeModal, setActiveModal } = useContext(ModalContext);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return createPortal(
      <ModalContainer isOpen={activeModal === modalName}>
        <div className="container">
          <div className={`head ${backButton ? "back" : ""}`}>
            <button
              onClick={() => {
                if (backButton) {
                  onBackButtonClick({
                    open: (modalName) => setActiveModal(modalName),
                    close: () => setActiveModal(""),
                  });
                } else {
                  setActiveModal("");
                }
              }}
            >
              {backButton ? <AiOutlineArrowLeft /> : <AiOutlineClose />}
            </button>
          </div>
          <div className="content">{children}</div>
        </div>
        <div
          className="fade"
          onClick={() => {
            if (window.confirm("Leave current window?")) {
              setActiveModal("");
            }
          }}
        />
      </ModalContainer>,
      document.getElementsByTagName("body")[0]
    );
  }
  return null;
};
