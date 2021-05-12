import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Container } from "./style";

export const Menu = ({
  positionalElementRef,
  width = null,
  open = false,
  onRequestToClose = () => {},
  children,
}) => {
  const [mounted, setMounted] = useState(false);
  const [calculatedWidth, setCalculatedWidth] = useState(null);
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });
  const menuRef = useRef();

  const getElementPosition = () => {
    let generatedPosition = {
      top:
        positionalElementRef.current.offsetTop +
        positionalElementRef.current.scrollHeight +
        10,
    };

    if (!width) {
      generatedPosition.left = positionalElementRef.current.offsetLeft;
    } else {
      if (width + positionalElementRef.current.offsetLeft > window.innerWidth) {
        generatedPosition.left = window.innerWidth - width;
      } else {
        generatedPosition.left = positionalElementRef.current.offsetLeft;
      }
    }

    return generatedPosition;
  };

  useEffect(() => {
    setMounted(true);
    setPosition(getElementPosition());

    const resizeObserver = () => setPosition(getElementPosition());
    const windowClickObserver = ({ path }) => {
      let toggleMenu = true;
      for (const nodeElement of path) {
        if (nodeElement instanceof Node) {
          const isMenu = menuRef.current.isSameNode(nodeElement);
          const isPositionalElement =
            positionalElementRef.current.isSameNode(nodeElement);
          if (isMenu || isPositionalElement) {
            toggleMenu = false;
            break;
          }
        }
      }
      if (toggleMenu) {
        onRequestToClose();
      }
    };
    window.addEventListener("resize", resizeObserver);
    window.addEventListener("click", windowClickObserver);
    return () => {
      window.removeEventListener("resize", resizeObserver);
      window.removeEventListener("click", windowClickObserver);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <Container
      width={
        calculatedWidth || width || positionalElementRef.current.clientWidth
      }
      open={open}
      position={position}
      ref={menuRef}
    >
      {children}
    </Container>,
    document.getElementsByTagName("body")[0]
  );
};
