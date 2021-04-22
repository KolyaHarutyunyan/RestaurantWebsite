import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { Container } from "./style";
import { IoArrowBack, IoClose } from "react-icons/io5";

export const SideStaticMenu = ({
  children,
  onRequestToClose = () => {},
  onRequesToGoBack = () => {},
  isOpen = true,
}) => {
  const [isOpenControl, setIsOpen] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setTimeout(() => {
        setIsOpen(isOpen);
      }, 300);
    }

    return () => {
      mounted = false;
    };
  }, [isOpen]);

  const onClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onRequestToClose();
    }, 300);
  };

  return createPortal(
    <Container isOpen={isOpenControl}>
      <div className="header">
        <button onClick={() => onRequesToGoBack()}>
          <IoArrowBack />
        </button>
        <button onClick={() => onClose()}>
          <IoClose />
        </button>
      </div>
      <div className="content">{children}</div>
    </Container>,
    document.querySelector("body")
  );
};
