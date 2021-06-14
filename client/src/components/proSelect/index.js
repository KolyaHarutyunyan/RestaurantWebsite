import { createPortal } from "react-dom";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Container, DropDownContainer } from "./style";
import { v4 as uuid } from "uuid";
import ChevronSVG from "./chevron.svg";

export const ProSelect = ({
  value = null,
  onChange = () => {},
  options,
  proSelectAttrs = {},
  searchBarAttrs = {},
  fullWidth = false,
  ...rest
}) => {
  const searchInputId = uuid();
  const selectBoxRef = useRef();
  const dropdownRef = useRef();
  const searchInputRef = useRef();
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropDownOpen] = useState(false);
  const [searchBar, setSearchBar] = useState("");
  const [dropdownWidth, setDropdownWidth] = useState(0);
  const [dropdownPosition, setDropDownPosition] = useState({
    top: 0,
    left: 0,
  });

  const currentOption = options.find((cOption) => cOption.value === value);
  const filteredOptions = options.filter(
    (option) => option.label.indexOf(searchBar) !== -1
  );

  const getElementPosition = () =>
    new Promise((res) => {
      const interval = setInterval(() => {
        if (dropdownRef.current) {
          const menuPosInfo =
            dropdownRef.current.firstChild.getBoundingClientRect();
          const positionalPosInfo =
            selectBoxRef.current.getBoundingClientRect();
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
    const outsideClickObserver = () => setDropDownOpen(false);
    const onWindowResizeObserver = () =>
      getElementPosition().then((pos) => setDropDownPosition(pos));

    document.addEventListener("click", outsideClickObserver);
    window.addEventListener("resize", onWindowResizeObserver);
    return () => {
      document.removeEventListener("click", outsideClickObserver);
      window.removeEventListener("resize", onWindowResizeObserver);
    };
  }, []);

  useEffect(() => {
    if (mounted) {
      getElementPosition().then((pos) => setDropDownPosition(pos));
      setDropdownWidth(selectBoxRef.current.clientWidth);
    }
  }, [mounted]);

  const onNewItemCreate = () => {
    const optionId = uuid();
    onChange(optionId, [...options, { label: searchBar, value: optionId }]);
    setDropDownOpen(false);
    searchInputRef.current.blur();
  };
  const onSelect = (option) => {
    onChange(option.value, options);
    setDropDownOpen(false);
    searchInputRef.current.blur();
  };

  if (!mounted) {
    return null;
  }

  return (
    <Fragment>
      <Container
        htmlFor={searchInputId}
        ref={selectBoxRef}
        dropdownOpen={dropdownOpen}
        fullWidth={fullWidth}
        {...proSelectAttrs}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="dropdown-actions">
          <input
            value={searchBar}
            id={searchInputId}
            ref={searchInputRef}
            onFocus={(e) => {
              setDropDownOpen(true);
            }}
            onClick={(e) => e.stopPropagation()}
            placeholder={currentOption ? currentOption.label : "..."}
            onChange={({ target: { value } }) => setSearchBar(value)}
            {...searchBarAttrs}
          />
          <div
            className="dropdown-toggle"
            onClick={(e) => {
              e.preventDefault();
              setDropDownOpen(!dropdownOpen);
            }}
          >
            <ChevronSVG />
          </div>
        </div>
        <select
          value={value ? value : undefined}
          onChange={({ target: { value } }) => onChange(value, options)}
          {...rest}
        >
          {options.map((option, index) => (
            <option key={`${option.value}-${index}`} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Container>
      {createPortal(
        <DropDownContainer
          ref={dropdownRef}
          dropdownOpen={dropdownOpen}
          width={dropdownWidth}
          onClick={(e) => e.stopPropagation()}
          position={dropdownPosition}
        >
          <div className="wrapper">
            {filteredOptions.length ? (
              filteredOptions.map((option) => (
                <div
                  key={option.value}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelect(option);
                  }}
                >
                  {option.label}
                </div>
              ))
            ) : searchBar ? (
              <div onClick={() => onNewItemCreate()}>
                Create new option as "{searchBar}" +
              </div>
            ) : null}
          </div>
        </DropDownContainer>,
        document.querySelector("body")
      )}
    </Fragment>
  );
};
