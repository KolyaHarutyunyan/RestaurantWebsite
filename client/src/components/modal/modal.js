import { createPortal } from "react-dom";
import { ModalContainer } from "./style";
import { HiArrowLeft } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { ModalContext } from "./context";
import { useContext, useEffect, useState } from "react";
import { MODAL_NAMES } from "@eachbase/constants";

const modalNames = [
  MODAL_NAMES.CONFIRM_CATEGORY_DELETION,
  MODAL_NAMES.CONFIRM_ITEM_DELETION,
  MODAL_NAMES.MENU_FORM,
];

export const CustomModal = ({
  modalName,
  backButton,
  fixed = false,
  onBackButtonClick = () => {},
  children,
  mini = false,
  closeBorder,
  max,
  border,
  confirm,
  modal,
  close,
}) => {
  const { activeModal, setActiveModal, setParams } = useContext(ModalContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return createPortal(
      <ModalContainer
        isOpen={activeModal === modalName}
        mini={mini}
        border={border}
        modal={modal}
      >
        <div style={{ maxWidth: max, zIndex: 100000 }} className="container">
          {close !== "noButton" && (
            <div>
              {modalNames.includes(modalName) ? (
                <button
                  type="button"
                  className="close-modal-button"
                  onClick={() => setActiveModal("")}
                >
                  <MdClose style={{ fontSize: 24 }} />
                </button>
              ) : !fixed ? (
                <div className={`head ${backButton ? "back" : ""}`}>
                  <button
                    className={
                      closeBorder === "close"
                        ? "close-button-border"
                        : closeBorder === "back"
                        ? "back-button-border"
                        : "close-button"
                    }
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
                    {backButton ? (
                      <HiArrowLeft style={{ fontSize: 24 }} />
                    ) : (
                      <MdClose style={{ fontSize: 24 }} />
                    )}
                  </button>
                </div>
              ) : null}
            </div>
          )}
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
