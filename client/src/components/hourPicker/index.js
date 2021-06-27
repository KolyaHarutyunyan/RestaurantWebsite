import { createPortal } from "react-dom";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Container, DropDownContainer } from "./style";
import ChevronSVG from "./chevron.svg";

const mins = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
];

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
        onClick={(e) => {
          e.stopPropagation();
          setDropDownOpen(!dropdownOpen);
        }}
        {...hourPickerAttrs}
      >
        <div className="value">
          {value.hour}:{value.min} {value.part}
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
        <Fragment>
          {dropdownOpen ? (
            <DropDownContainer
              ref={dropdownRef}
              dropdownOpen={dropdownOpen}
              onClick={(e) => e.stopPropagation()}
              className="proSelet-dropdown"
            >
              <div className="wrapper">
                <div className="hour">
                  <div
                    className="square"
                    onClick={() => onChange({ ...value, hour: "08" })}
                  >
                    08
                  </div>
                  <div
                    className="square"
                    onClick={() => onChange({ ...value, hour: "09" })}
                  >
                    09
                  </div>
                  <div
                    className="square"
                    onClick={() => onChange({ ...value, hour: "10" })}
                  >
                    10
                  </div>
                  <div
                    className="square"
                    onClick={() => onChange({ ...value, hour: "11" })}
                  >
                    11
                  </div>
                  <div
                    className="square"
                    onClick={() => onChange({ ...value, hour: "12" })}
                  >
                    12
                  </div>
                  <div
                    className="square"
                    onClick={() => onChange({ ...value, hour: "01" })}
                  >
                    01
                  </div>
                  <div
                    className="square"
                    onClick={() => onChange({ ...value, hour: "02" })}
                  >
                    02
                  </div>
                </div>
                <div className="min">
                  {mins.map((min, index) => (
                    <div
                      key={index}
                      className="square"
                      onClick={() => onChange({ ...value, min })}
                    >
                      {min}
                    </div>
                  ))}
                </div>
                <div className="mode">
                  <div
                    className="square"
                    onClick={() => onChange({ ...value, part: "AM" })}
                  >
                    AM
                  </div>
                  <div
                    className="square"
                    onClick={() => onChange({ ...value, part: "PM" })}
                  >
                    PM
                  </div>
                </div>
              </div>
            </DropDownContainer>
          ) : null}
        </Fragment>,
        document.querySelector("body")
      )}
    </Fragment>
  );
};
