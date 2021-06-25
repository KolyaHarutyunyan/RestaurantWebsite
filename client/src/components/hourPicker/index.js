import { createPortal } from "react-dom";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Container, DropDownContainer } from "./style";
import ChevronSVG from "./chevron.svg";

export const HourPicker = ({
  value,
  onChange = () => {},
  hourPickerAttrs = {},
  fullWidth = false,
}) => {
  const selectBoxRef = useRef();
  const dropdownRef = useRef();
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropDownOpen] = useState(false);

  const setDropdownPosition = () => {
    if (dropdownRef.current && selectBoxRef.current) {
      const dropDownRect = dropdownRef.current.getBoundingClientRect();
      const selectRect = selectBoxRef.current.getBoundingClientRect();
      let dropDownVerticalPosition = selectRect.top + 50;

      if (selectRect.top + (dropDownRect.height + 40) > window.innerHeight) {
        dropDownVerticalPosition = selectRect.top - dropDownRect.heigth - 50;
      }

      dropdownRef.current.style.width = `${
        selectBoxRef.current.clientWidth - 5
      }px`;
      dropdownRef.current.style.top = `${dropDownVerticalPosition}px`;
      dropdownRef.current.style.left = `${selectRect.left}px`;
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (dropdownOpen) {
      setDropdownPosition();
    }
  }, [dropdownOpen]);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const setPositionObserver = () => setDropdownPosition();
    const onDocumentClickObserver = () => setDropDownOpen(false);

    window.addEventListener("resize", setPositionObserver);
    window.addEventListener("scroll", setPositionObserver, true);
    document.addEventListener("click", onDocumentClickObserver);
    return () => {
      window.removeEventListener("resize", setPositionObserver);
      window.addEventListener("scroll", setPositionObserver, true);
      document.addEventListener("click", onDocumentClickObserver);
    };
  }, [mounted]);

  if (!mounted) {
    return null;
  }
  return (
    <Fragment>
      <Container
        ref={selectBoxRef}
        dropdownOpen={dropdownOpen}
        fullWidth={fullWidth}
        {...hourPickerAttrs}
        onClick={(e) => {
          e.stopPropagation();
          setDropDownOpen(!dropdownOpen);
        }}
      >
        <div className="value">
          {value.hour}:{value.min} {value.mode}
        </div>
        <div className="dropdown-actions">
          <div
            className="dropdown-toggle"
            onClick={(e) => {
              e.stopPropagation();
              setDropDownOpen(!dropdownOpen);
            }}
          >
            <ChevronSVG />
          </div>
        </div>
      </Container>
      {createPortal(
        <DropDownContainer
          ref={dropdownRef}
          dropdownOpen={dropdownOpen}
          onClick={(e) => e.stopPropagation()}
          className="proSelet-dropdown"
        >
          <div className="wrapper">
            <div className="hour">
              <div>08</div>
              <div>09</div>
              <div>10</div>
              <div>11</div>
              <div>12</div>
              <div>01</div>
              <div>02</div>
            </div>
            <div className="min">
              <div>08</div>
              <div>09</div>
              <div>10</div>
              <div>11</div>
              <div>12</div>
              <div>01</div>
              <div>02</div>
            </div>
            <div className="mode">
              <div>AM</div>
              <div>PM</div>
            </div>
          </div>
        </DropDownContainer>,
        document.querySelector("body")
      )}
    </Fragment>
  );
};
