import {createPortal} from "react-dom";
import React, {Fragment, useEffect, useRef, useState} from "react";
import {Container, DropDownContainer} from "./style";
import {v4 as uuid} from "uuid";
import ChevronSVG from "./chevron.svg";
import {IoMdCheckmark} from "react-icons/io";
import {Checkbox, TextField} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {inputsStyle} from "./uiStyles";

export const MultiSelect = ({
                                selected = [],
                                onChange = () => {
                                },
                                onSearchBarValueChange = () => {
                                },
                                searchBarValue,
                                options,
                                categoryItems,
                                categType,
                                proSelectAttrs = {},
                                searchBarAttrs = {},
                                fullWidth = false,
                            }) => {
    const searchInputId = uuid();
    const selectBoxRef = useRef();
    const dropdownRef = useRef();
    const searchInputRef = useRef();
    const [mounted, setMounted] = useState(false);
    const [dropdownOpen, setDropDownOpen] = useState(false);
    const classes = inputsStyle()

    const newList = options.filter(function (array_el) {
        return categoryItems.filter(function (anotherOne_el) {
            return anotherOne_el.item.id === array_el.value;
        }).length === 0
    });

    const filteredOptions = options.filter(
        (option) => option.label.indexOf(searchBarValue) !== -1
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

    const onSelect = (option) => {
        const isOptionSelected = !!selected.find(
            (sOpt) => sOpt.value === option.value
        );
        if (isOptionSelected) {
            onChange(
                selected.filter((sOpt) => sOpt.value !== option.value),
                null,
                option
            );
        } else {
            onChange([...selected, option], option, null);
        }
        onSearchBarValueChange("");
        // searchInputRef.current.blur();
    };

    if (!mounted) {
        return null;
    }
    const onSubmit = (e) => {
        e.preventDefault();
    }
    const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
    const checkedIcon = <CheckBoxIcon fontSize="small"/>;
    return (
        <Fragment>
            {/*<Container*/}
            {/*  htmlFor={searchInputId}*/}
            {/*  ref={selectBoxRef}*/}
            {/*  dropdownOpen={dropdownOpen}*/}
            {/*  fullWidth={fullWidth}*/}
            {/*  {...proSelectAttrs}*/}
            {/*  onClick={(e) => e.stopPropagation()}*/}
            {/*>*/}

            <div className="dropdown-actions">
                <form autoComplete="off">
                    <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={newList}
                        style={{height: '48px'}}
                        disableCloseOnSelect
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   onSelect(e);}}
                        // onClick={(e) => e.stopPropagation()}
                        onChange={(event, value) => onSelect(value)}
                        getOptionLabel={(option) => option.label}
                        renderOption={(option, {selected}) => (
                            <React.Fragment>
                                <Checkbox
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    style={{marginRight: 8}}
                                    checked={selected}
                                />
                                {option.label}
                            </React.Fragment>
                        )}
                        // style={{ width: 500 }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                // style={{background:'white',borderRadius:'8px',}}
                                // error={typeError}
                                // inputProps={{ style : {height:'68px'}}}
                                className={classes.inputTextFieldAutoHeight}

                                variant="outlined"
                                label={'Choose from the list'}
                                // placeholder={'Choose from the list'}
                            />
                        )}
                    />
                </form>

                {/*<form style={{width:'100%'}}*/}
                {/*      onSubmit={onSubmit}*/}
                {/*>*/}
                {/*  <input*/}
                {/*      autoComplete="new-password"*/}
                {/*  value={searchBarValue}*/}
                {/*  id={searchInputId}*/}
                {/*  ref={searchInputRef}*/}
                {/*  placeholder="Choose from the list"*/}
                {/*  onFocus={() => {*/}
                {/*    setDropdownPosition();*/}
                {/*    setDropDownOpen(true);*/}
                {/*  }}*/}
                {/*  onClick={(e) => e.stopPropagation()}*/}
                {/*  onChange={({ target: { value } }) => onSearchBarValueChange(value)}*/}
                {/*  {...searchBarAttrs}*/}
                {/*/>*/}
                {/*</form>*/}
                {/*<div*/}
                {/*  className="dropdown-toggle"*/}
                {/*  onClick={(e) => {*/}
                {/*    e.preventDefault();*/}
                {/*    setDropDownOpen(!dropdownOpen);*/}
                {/*  }}*/}
                {/*>*/}
                {/*  <ChevronSVG />*/}
                {/*</div>*/}
            </div>
            {/*</Container>*/}
            {/*{createPortal(*/}
            {/*  <DropDownContainer*/}
            {/*    ref={dropdownRef}*/}
            {/*    dropdownOpen={dropdownOpen}*/}
            {/*    onClick={(e) => e.stopPropagation()}*/}
            {/*    className="proSelet-dropdown"*/}
            {/*  >*/}
            {/*    <div className="wrapper">*/}
            {/*      {filteredOptions.length ? (*/}
            {/*        filteredOptions.map((option, index) => {*/}
            {/*          const areSelected = !!selected.find(*/}
            {/*            (sOpt) => sOpt.value === option.value*/}
            {/*          );*/}
            {/*          return (*/}
            {/*            <div*/}
            {/*              key={`${option.value}-${index}`}*/}
            {/*              onClick={(e) => {*/}
            {/*                e.preventDefault();*/}
            {/*                onSelect(option);*/}
            {/*              }}*/}
            {/*            >*/}
            {/*              <div*/}
            {/*                className={`checkmark ${areSelected ? "selected" : ""}`}*/}
            {/*              >*/}
            {/*                {areSelected ? <IoMdCheckmark /> : null}*/}
            {/*              </div>*/}
            {/*              <div className="label">{option.label}</div>*/}
            {/*            </div>*/}
            {/*          );*/}
            {/*        })*/}
            {/*      ) : (*/}
            {/*        <div>No Options Found</div>*/}
            {/*      )}*/}
            {/*    </div>*/}
            {/*  </DropDownContainer>,*/}
            {/*  document.querySelector("body")*/}
            {/*)}*/}
        </Fragment>
    );
};
