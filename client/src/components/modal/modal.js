import { createPortal } from "react-dom";
import { ModalContainer } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { ModalContext } from "./context";
import { useContext } from "react";
export const Modal = ({ modalName, children }) => {
  const { activeModal, setActiveModal } = useContext(ModalContext);

  return createPortal(
    <ModalContainer isOpen={activeModal === modalName}>
      <div className="head">
        <button onClick={() => setActiveModal("")}>
          <AiOutlineClose />
        </button>
      </div>
      <div className="content">{children}</div>
    </ModalContainer>,
    document.getElementsByTagName("body")[0]
  );
};
