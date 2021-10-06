import { createPortal } from "react-dom";
import { ModalContainer } from "./style";
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";
import { HiArrowLeft } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { ModalContext } from "./context";
import { useContext, useEffect, useState } from "react";

export const Modal = ({
  modalName,
  backButton,
  fixed = false,
  onBackButtonClick = () => {},
  children,
  mini = false,
    closeBorder,
                          max,
    border,confirm,
}) => {
  const { activeModal, setActiveModal, setParams } = useContext(ModalContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return createPortal(
      <ModalContainer isOpen={activeModal === modalName} mini={mini} border={border}>
        <div style={{maxWidth:max, }} className="container">
          {!fixed ? (
            <div className={`head ${backButton ? "back" : ""}`}>
              <button
                  className={
                      closeBorder === 'close' ? 'close-button-border' :
                        closeBorder === 'back' ? 'back-button-border'

                      : 'close-button' }
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
                {backButton ? <HiArrowLeft style={{fontSize:24}}/> : <MdClose style={{fontSize:24}} />}
              </button>
            </div>
          ) : null}
          <div className="content">{children}</div>
        </div>
        <div
          className="fade"
          onClick={() => {
            if (!fixed) {
              // if (window.confirm("Leave current window?")) {
                setActiveModal("");
                setParams({});
              // }
            }
          }}
        />
      </ModalContainer>,
      document.getElementsByTagName("body")[0]
    );
  }
  return null;
};
