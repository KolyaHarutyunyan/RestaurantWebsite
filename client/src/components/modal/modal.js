import { createPortal } from "react-dom";
import { ModalContainer } from "./style";
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";
import { ModalContext } from "./context";
import { useContext, useEffect, useState } from "react";

export const Modal = ({
  modalName,
  backButton,
  fixed = false,
  onBackButtonClick = () => {},
  children,
  mini = false,
}) => {
  const { activeModal, setActiveModal, setParams } = useContext(ModalContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return createPortal(
      <ModalContainer isOpen={activeModal === modalName} mini={mini}>
        <div className="container">
          {!fixed ? (
            <div className={`head ${backButton ? "back" : ""}`}>
              <button
                onClick={() => {
                  if (backButton) {
                    onBackButtonClick({
                      open: (modalName) => {
                        setActiveModal(modalName);
                      },
                      close: () => {
                        setActiveModal("");
                        setParams({});
                      },
                    });
                  } else {
                    setActiveModal("");
                    setParams({});
                  }
                }}
              >
                {backButton ? <AiOutlineArrowLeft /> : <AiOutlineClose />}
              </button>
            </div>
          ) : null}
          <div className="content">{children}</div>
        </div>
        <div
          className="fade"
          onClick={() => {
            if (!fixed) {
              if (window.confirm("Leave current window?")) {
                setActiveModal("");
                setParams({});
              }
            }
          }}
        />
      </ModalContainer>,
      document.getElementsByTagName("body")[0]
    );
  }
  return null;
};
