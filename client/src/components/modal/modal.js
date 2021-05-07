import { createPortal } from "react-dom";
import { ModalContainer } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { ModalContext } from "./context";
import { useContext, useEffect, useState } from "react";
import { Fragment } from "react";
export const Modal = ({ modalName, children }) => {
  const { activeModal, setActiveModal } = useContext(ModalContext);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  });

  if (mounted) {
    return createPortal(
      <Fragment>
        <ModalContainer isOpen={activeModal === modalName}>
          <div className="container">
            <div className="head">
              <button onClick={() => setActiveModal("")}>
                <AiOutlineClose />
              </button>
            </div>
            <div className="content">{children}</div>
          </div>
          <div className="fade" />
        </ModalContainer>
      </Fragment>,
      document.getElementsByTagName("body")[0]
    );
  }
  return null;
};
