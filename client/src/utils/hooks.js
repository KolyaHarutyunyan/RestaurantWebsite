import { useEffect } from "react";

export const useOutsideAlerter = (refs, onOutsideClick) => {
  useEffect(() => {
    function handleClickOutside(event) {
      let containsOnOfElements = false;
      for (let ref of refs) {
        if (ref.current && ref.current.contains(event.target)) {
          containsOnOfElements = true;
          break;
        }
      }
      if (!containsOnOfElements) {
        onOutsideClick();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs]);
};
