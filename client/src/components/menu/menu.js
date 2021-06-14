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
  const menuRef = useRef();
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });
  const [calculatedWidth, setCalculatedWidth] = useState(null);

  const getElementPosition = () =>
    new Promise((res) => {
      const interval = setInterval(() => {
        if (menuRef.current) {
          const menuPosInfo =
            menuRef.current.firstChild.getBoundingClientRect();
          const positionalPosInfo =
            positionalElementRef.current.getBoundingClientRect();
          clearInterval(interval);

          let generatedPosition = {
            top: 0,
            left: 0,
          };

          if (menuPosInfo.width + positionalPosInfo.left > window.innerWidth) {
            generatedPosition.left = window.innerWidth - menuPosInfo.width;
          } else {
            generatedPosition.left = positionalPosInfo.left;
          }

          if (
            menuPosInfo.height + positionalPosInfo.top + 25 >
            window.innerHeight
          ) {
            generatedPosition.top =
              window.innerHeight - menuPosInfo.height - 40;
          } else {
            generatedPosition.top = positionalPosInfo.top + 25;
          }

          res(generatedPosition);
        }
      }, 50);
    });

  useEffect(() => {
    setMounted(true);
    const resizeWindowObserver = () => {
      getElementPosition().then((pos) => setPosition(pos));
    };
    const windowClickObserver = ({ path }) => {
      let toggleMenu = true;
      for (const nodeElement of path) {
        if (nodeElement instanceof Node) {
          if (menuRef.current) {
            const isMenu = menuRef.current.isSameNode(nodeElement);
            const isPositionalElement =
              positionalElementRef.current.isSameNode(nodeElement);
            if (isMenu || isPositionalElement) {
              toggleMenu = false;
              break;
            }
          }
        }
      }
      if (toggleMenu) {
        onRequestToClose();
      }
    };
    window.addEventListener("resize", resizeWindowObserver);
    window.addEventListener("click", windowClickObserver);
    return () => {
      window.removeEventListener("resize", resizeWindowObserver);
      window.removeEventListener("click", windowClickObserver);
    };
  }, []);

  useEffect(() => {
    if (open) {
      getElementPosition().then((pos) => setPosition(pos));
    }
  }, [open]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <Container
      width={width || positionalElementRef.current.clientWidth}
      mounted={mounted}
      open={open}
      position={position}
      ref={menuRef}
    >
      <div className="wrapper">{children}</div>
      <div className="blur" onClick={() => onRequestToClose()} />
    </Container>,
    document.getElementsByTagName("body")[0]
  );
};
