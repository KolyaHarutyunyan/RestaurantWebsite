import { createPortal } from "react-dom";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Container, DropDownContainer } from "./style";
import { v4 as uuid } from "uuid";
import ChevronSVG from "./chevron.svg";

export const ProSelect = ({
  value = null,
  onChange = () => {},
  onSearchBarValueChange = () => {},
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

  const currentOption = options.find((cOption) => cOption.value === value);
  const filteredOptions = options.filter(
    (option) => option.label.indexOf(searchBar) !== -1
  );

  const setDropdownPosition = () => {
    if (dropdownRef.current && selectBoxRef.current) {
      const dropDownRect = dropdownRef.current.getBoundingClientRect();
      const selectRect = selectBoxRef.current.getBoundingClientRect();
      let dropDownVerticalPosition = selectRect.top + 50;

      if (selectRect.top + (dropDownRect.height + 40) > window.innerHeight) {
        dropDownVerticalPosition = selectRect.top - dropDownRect.heigth - 50;
      }

      dropdownRef.current.style.width = `${
        selectBoxRef.current.clientWidth - 50
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
        onClick={(e) => e.stopPropagation()}
      >
        <div className="dropdown-actions">
          <input
            value={searchBar}
            id={searchInputId}
            ref={searchInputRef}
            onFocus={() => {
              setDropdownPosition();
              setDropDownOpen(true);
            }}
            onClick={(e) => e.stopPropagation()}
            placeholder={currentOption ? currentOption.label : ""}
            onChange={({ target: { value } }) => {
              setSearchBar(value);
              onSearchBarValueChange(value);
            }}
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
          onClick={(e) => e.stopPropagation()}
          className="proSelet-dropdown"
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
            ) : (
              <div>No Options Found</div>
            )}
          </div>
        </DropDownContainer>,
        document.querySelector("body")
      )}
    </Fragment>
  );
};
